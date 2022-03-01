import { MutableRefObject, useEffect, useState } from "react";

let listenerCallbacks = new WeakMap();

let observer: IntersectionObserver;

function handleIntersections(entries) {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: "100px",
      threshold: 0.15,
    });
  }
  return observer;
}

export default function useIntersection(elem: MutableRefObject<any>) {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, () => setIsInView(true));
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);

  return { isInView };
}
