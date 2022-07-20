import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserAccount from "./components/shared/UserAccount";
import FetchUser from "./components/auth/FetchUser";
import Hooks from "./demos/Hooks";
import reset from "styled-reset";

import { createGlobalStyle } from "styled-components";
import ImageUpload from "./demos/ImageUpload";
import Braintree from "./demos/braintree/Braintree";

const GlobalStyle = createGlobalStyle`
   ${reset}
   a{
     margin-right:10px;
   }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <div style={{margin:'10px'}}>
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/braintree" element={<Braintree />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<UserAccount />} />
            <Route path="/image_upload" element={<ImageUpload />} />
          </Route>
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </FetchUser>
    </div>
  </>
);

export default App;
