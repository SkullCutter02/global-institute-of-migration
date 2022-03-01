import directus from "../../../lib/directus";

const getVideosPaginated = async (page: number) => {
  const LIMIT = 30;

  const { data, meta } = await directus
    .items("videos")
    .readByQuery({ sort: ["-created_at"], limit: LIMIT, page, meta: "total_count" });
  return { data, hasMore: LIMIT * page < meta.total_count };
};

export default getVideosPaginated;
