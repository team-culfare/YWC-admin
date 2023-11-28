import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import GlobalStyle from "./styles/GlobalStyles";
import { CookiesProvider } from "react-cookie";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

const Router = () => {
  const pathList = [
    { path: "/", element: <LoginPage /> },
    { path: "/upload", element: <UploadPage /> },
    { path: "*", element: <NotFound /> },
  ];
  return (
    <BrowserRouter>
      <CookiesProvider>
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            {pathList.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Route>
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default Router;
