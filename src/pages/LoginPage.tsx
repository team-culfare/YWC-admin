import { styled } from "styled-components";
import flexBox from "../styles/utils/flexBox";
import signin from "../api/auth/signin";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../assets/User.svg?react";
const LoginPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();
  const loginHandler = () => {
    if (inputRef.current) {
      const passwd = inputRef.current.value;
      signin(passwd)
        .then((response) => {
          if (response.data.code != 2000) {
            alert("code 2000 out");
            console.log(response);
          } else {
            nav("/Upload");
          }
        })
        .catch((err) => {
          console.log(err, "catch 에러");
        });
    }
  };
  const keyPressLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      loginHandler();
    }
  };
  return (
    <Container>
      <UserIcon width="50px" height="50px" />
      <PassWdInput
        type="password"
        placeholder="PASSWORD"
        onKeyDown={keyPressLogin}
        ref={inputRef}
      />
      <LoginBtn onClick={loginHandler}>Login</LoginBtn>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  ${flexBox("column", "center", "center")}
  width: 100%;
`;
const PassWdInput = styled.input`
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #d4d4d4;
  color: #8e8e8e;
  margin: 30px 0px;
`;
const LoginBtn = styled.button`
  border-radius: 15px;
  color: #8e8e8e;
  border: 1px solid #d4d4d4;
  background: var(--Button, #e5e5e5);
  padding: 5px 10px;
`;
