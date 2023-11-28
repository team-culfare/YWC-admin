import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import flexBox from "../styles/utils/flexBox";
import { FileType } from "../types/file";
import upload from "../api/upload";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const blankData = {
    fileName: "",
    file: undefined,
  };
  const [data, setData] = useState<FileType>(blankData);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cookies] = useCookies([`role`]);
  const nav = useNavigate();

  useEffect(() => {
    if (!cookies.role || cookies.role != "admin") {
      nav("/");
    }
  }, [cookies]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ref = e.target.files ? e.target.files[0] : null;
    console.log(ref);
    if (ref) {
      setData({
        fileName: ref.name,
        file: ref,
      });
    } else {
      setData(blankData);
    }
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await upload(data)
      .then((response) => {
        if (response.data.code != 2000) {
          alert("code 2000 out");
          console.log(response);
        } else {
          alert("전송되었습니다 !");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setData(blankData);
  };
  return (
    <Container>
      <FileInput htmlFor="data">
        <AttatchButton>🔗UPLOAD</AttatchButton>
        <AttachedFile>{data.fileName}</AttachedFile>
      </FileInput>
      <Input
        id="data"
        type="file"
        accept=".xlsx, csv"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler(event)
        }
        ref={fileInputRef}
      />
      <AttatchButton
        style={{ width: "70px" }}
        as="button"
        onClick={submitHandler}
      >
        전송
      </AttatchButton>
    </Container>
  );
};

export default UploadPage;
const Container = styled.div`
  ${flexBox("column", "center", "center")}
  width: 100%;
`;

const FileInput = styled.label`
  display: flex;
  gap: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 300px;
`;

const AttatchButton = styled.div`
  text-align: center;
  font-size: small;
  width: fit-content;
  padding: 10px;
  margin: 10px;
  background-color: #d4d4d4;
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
