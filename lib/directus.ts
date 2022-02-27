import { Directus } from "@directus/sdk";

import HOST from "../constants/host";
import { DirectusCollections } from "../generated/directus";

const directus = new Directus<DirectusCollections>(HOST);

export default directus;
