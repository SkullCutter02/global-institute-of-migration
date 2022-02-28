import directus from "../../../lib/directus";

const getArticle = async (articleId: string) => {
  return await directus.items("articles").readOne(articleId, {
    fields: "*,author.*",
  });
};

export default getArticle;
