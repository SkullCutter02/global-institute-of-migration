import directus from "../../../lib/directus";

const getWriters = async () => {
  const { data } = await directus.items("partners").readByQuery({ sort: ["name"] });
  return data;
};

export default getWriters;
