import directus from "../../../lib/directus";

const getRecentArticles = async () => {
  const { data } = await directus.items("articles").readByQuery({ sort: ["-created_at"], limit: 4 });
  return data;
};

export default getRecentArticles;
