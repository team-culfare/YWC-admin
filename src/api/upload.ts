import { FileType } from "@/types/file";
import instance from "./base";

const upload = async (data: FileType) => {
  if (data.file) {
    const formData = new FormData();
    formData.append("data", data.file);
    // XMLHttpRequest 전송을 위한 formdata를 확인하려면 이러한 방식을 써야함.
    for (const value of formData.values()) {
      console.log(value);
    }
  }

  return await instance().put(`/v1/stores`, FormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default upload;
