import directus from "../../../lib/directus";

const getWriters = async () => {
  const { data } = await directus.items("writers").readByQuery({ sort: ["importance"] });
  return data;
};

export default getWriters;
