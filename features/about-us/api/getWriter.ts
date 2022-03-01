import directus from "../../../lib/directus";

const getWriter = async (writerId: string) => {
  return await directus.items("writers").readOne(writerId);
};

export default getWriter;
