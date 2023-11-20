import axios from "axios";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const App = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File>();
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e);
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };
  const submitHandler = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("name", fileName);
      formData.append("file", file);

      await axios
        .post(import.meta.env.VITE_PUBLIC_API_ENDPOINT, formData)
        .then((res) => {
          console.log(res);
          if (res.data.statusCode !== 201) {
            alert("유효하지 않은 Request가 존재합니다.");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container>
      <UploadContainer>
        <FileInput htmlFor="file">
          <AttatchButton>🔗UPLOAD</AttatchButton>
          <AttachedFile>{fileName}</AttachedFile>
        </FileInput>
        <Input type="file" id="file" onChange={inputChangeHandler} />
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
