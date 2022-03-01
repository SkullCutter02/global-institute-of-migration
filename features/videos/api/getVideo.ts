import directus from "../../../lib/directus";

const getVideo = async (videoId: string) => {
  return await directus.items("videos").readOne(videoId);
};

export default getVideo;
