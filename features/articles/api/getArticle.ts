import directus from "../../../lib/directus";

const getArticle = async (articleId: string) => {
  return await directus.items("articles").readOne(articleId);
};

export default getArticle;
