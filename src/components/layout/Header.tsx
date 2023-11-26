import flexBox from "../../styles/utils/flexBox";
import { styled } from "styled-components";
import UserIcon from "../../assets/User.svg?react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import SignoutButton from "../SignoutButton";

const Header = () => {
  const [cookies] = useCookies([`role`]);
  const [isSign, setIsSign] = useState<boolean>(false);

  useEffect(() => {
    if (cookies.role === "admin") {
      setIsSign(true);
    } else {
      setIsSign(false);
    }
  }, [isSign, cookies.role]);

  return (
    <Container>
      <Title>Admin Page</Title>
      {isSign ? <SignoutButton /> : null}
      <Icon>
        <UserIcon width="30px" height="30px" />
      </Icon>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  ${flexBox("row", "center", "center")}
  width: 100%;
  height: 50px;
  padding: 0px 66px;
  font-size: 12px;
  background: #f0f0f0;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  z-index: 99;
`;
const Title = styled.h1`
  margin: auto;
  font-size: 15px;
  width: 80%;
`;
const Icon = styled.div`
  ${flexBox("column", "left", "center")}
  margin: auto;
  z-index: 1000;
`;
