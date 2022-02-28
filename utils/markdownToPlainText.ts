import { Renderer, marked } from "marked";

const htmlEscapeToText = (text: string) => {
  return text.replace(/&#[0-9]*;|&amp;/g, (escapeCode) => {
    if (escapeCode.match(/amp/)) {
      return "&";
    }

    return String.fromCharCode(parseInt(escapeCode.match(/[0-9]+/).toString()));
  });
};

const renderPlain = () => {
  const render = new Renderer();

  // render just the text of a link
  render.link = (href, title, text) => {
    return text;
  };

  // render just the text of a paragraph
  render.paragraph = (text) => {
    return htmlEscapeToText(text) + "\r\n";
  };

  // render just the text of a heading element, but indecate level
  render.heading = (text, level) => {
    return level + " ) " + text;
  };

  // render nothing for images
  render.image = () => {
    return "";
  };

  render.table = () => {
    return "";
  };

  render.strong = (text) => {
    return text;
  };

  render.em = (text) => {
    return text;
  };

  render.code = () => {
    return "";
  };

  render.list = () => {
    return "";
  };

  render.blockquote = (text) => {
    return text;
  };

  render.del = (text) => {
    return text;
  };

  return render;
};

const markdownToPlainText = (str: string) => {
  return marked(str, { renderer: renderPlain() });
};

export default markdownToPlainText;
