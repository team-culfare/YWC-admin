import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { FileType } from "../types/file";
import upload from "../api/upload";

const UploadForm = () => {
  const [data, setData] = useState<FileType>({
    fileName: "",
    file: undefined,
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      if (e.target.files.length === 0) {
        return;
      } else {
        setData({
          fileName: e.target.files[0].name,
          file: e.target.files[0],
        });
      }
    }
  };
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    upload(data)
      .then((e) => console.log(e))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <UploadContainer>
        <FileInput htmlFor="data">
          <AttatchButton>🔗UPLOAD</AttatchButton>
          <AttachedFile>{data.fileName}</AttachedFile>
        </FileInput>
        <Input
          id="data"
          type="file"
          accept=".xlsx, csv"
          onChange={inputChangeHandler}
        />
        <AttatchButton
          style={{ width: "70px" }}
          as="button"
          onClick={submitHandler}
        >
          전송
        </AttatchButton>
      </UploadContainer>
    </Container>
  );
};

export default UploadForm;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const FileInput = styled.label`
  display: flex;
  gap: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 350px;
`;

const AttatchButton = styled.div`
  text-align: center;
  font-size: small;
  width: fit-content;
  padding: 10px;
  margin: 10px;
  background-color: #6babe7;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  border: none;
`;
const Input = styled.input`
  display: none;
`;
const AttachedFile = styled.p`
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;
