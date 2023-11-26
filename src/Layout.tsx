import { styled } from "styled-components";
import flexBox from "./styles/utils/flexBox";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  ${flexBox("column", "center", "center")}
  width: 100%;
  height: 100vh;
  z-index: 100;
`;
const Body = styled.div`
  ${flexBox("column", "center", "center")}
  width: 80%;
  height: 80%;
  background: #fff;
  box-shadow: 6px 10px 7px 0px rgba(0, 0, 0, 0.25);
  margin: auto;
`;
