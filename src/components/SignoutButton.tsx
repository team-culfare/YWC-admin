import { useCookies } from "react-cookie";
import signout from "../api/auth/signout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignoutButton = () => {
  const [cookie, removeCookie] = useCookies([`role`]);
  const nav = useNavigate();

  const signOutHandler = () => {
    if (cookie.role === "admin") {
      signout()
        .then((respnose) => {
          if (respnose.data.code !== 2000) {
            alert("로그아웃 실패");
          } else {
            removeCookie("role", { pathe: "/" });
            nav("/");
          }
        })
        .catch((err) => console.log(err));
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
