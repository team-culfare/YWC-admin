import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { FileType } from "./types/file";

const App = () => {
  const [data, setData] = useState<FileType>({
    fileName: "",
    file: undefined,
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setData({
        fileName: e.target.files[0].name,
        file: e.target.files[0],
      });
    }
  };

  const submitHandler = async () => {
    if (data && data.file) {
      const formData = new FormData();
      formData.append("name", data.fileName);
      formData.append("data", data.file);
      console.log(formData);

      //postFile(formData);
    } else return;
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
          type="data"
          accept=".xlsx"
          onChange={inputChangeHandler}
        />
        <AttatchButton style={{ width: "70px" }} onClick={submitHandler}>
          전송
        </AttatchButton>
      </UploadContainer>
    </Container>
  );
};

export default App;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const UploadContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  height: 70vh;
`;

const FileInput = styled.label`
  display: flex;
  gap: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 350px;
`;

const AttatchButton = styled.button`
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
