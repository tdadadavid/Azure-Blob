import { BlobServiceClient } from "@azure/storage-blob";
import dotenv from "dotenv";

dotenv.config();

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.CONNECTION_STRING);
export const containerClient = blobServiceClient.getContainerClient(process.env.CONTAINER_NAME);

