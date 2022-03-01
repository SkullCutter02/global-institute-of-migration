import directus from "../../../lib/directus";

const getRecentVideos = async () => {
  const { data } = await directus.items("videos").readByQuery({ sort: ["-created_at"], limit: 3 });
  return data;
};

export default getRecentVideos;
