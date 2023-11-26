import { useCookies } from "react-cookie";
import signout from "../api/auth/signout";
import styled from "styled-components";

const SignoutButton = () => {
  const [cookie] = useCookies([`role`]);
  const signOutHandler = () => {
    if (cookie.role === "admin") {
      signout()
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
    }
  };
  return (
    <Container>
      <Logout onClick={signOutHandler}>로그아웃</Logout>
    </Container>
  );
};

export default SignoutButton;
const Container = styled.div`
  width: auto;
`;
const Logout = styled.button`
  font-size: 12px;
  white-space: nowrap;
  margin: 0px 5px;
  border: none;
  &:hover {
    border-bottom: solid thin;
  }
`;
