import { styled } from "styled-components";
import signin from "../api/auth/signin";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState<string>("");
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signin(password)
      .then((e) => console.log(e))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <form>
        <input type="password" onChange={inputChangeHandler} />
        <button onClick={loginHandler}>로그인</button>
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
