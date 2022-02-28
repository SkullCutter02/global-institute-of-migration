import directus from "../../../lib/directus";

const getArticlesPaginated = async (page: number) => {
  const LIMIT = 20;

  // meta includes information about the pagination, like the total count
  const { data, meta } = await directus
    .items("articles")
    .readByQuery({ sort: ["-created_at"], limit: LIMIT, fields: "*,author.*", page, meta: "total_count" });
  return { data, hasMore: LIMIT * page < meta.total_count };
};

export default getArticlesPaginated;
