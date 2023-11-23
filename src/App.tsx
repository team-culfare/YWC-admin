import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import UploadForm from "./pages/UploadForm";
import GlobalStyle from "./styles/GlobalStyles";
import { CookiesProvider } from "react-cookie";
const App = () => {
  const pathList = [
    { path: "/", element: <LoginForm /> },
    { path: "/Upload", element: <UploadForm /> },
  ];
  return (
    <BrowserRouter>
      <CookiesProvider>
        <GlobalStyle />
        <Routes>
          {pathList.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default App;
