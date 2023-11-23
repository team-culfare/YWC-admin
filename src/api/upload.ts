import { FileType } from "@/types/file";
import instance from "./base";

const upload = async (data: FileType) => {
  return await instance().put(`/v1/stores`, data.file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default upload;
