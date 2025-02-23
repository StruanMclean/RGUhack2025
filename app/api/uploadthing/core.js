import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1, 
    },
  })
    .onUploadComplete(async ({ metadata, file }) => {
      
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url); 

      return { uploadedBy: metadata.userId };
    }),
};

export default ourFileRouter;
