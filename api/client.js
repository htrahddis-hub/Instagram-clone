import sanityClient from "@sanity/client";
import dotenv from 'dotenv';

dotenv.config();

export default sanityClient({
  projectId: "ms6mg5rg",
  dataset: "production",
  apiVersion: new Date(),
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});
