import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import Image from "./Components/Image/Image";
import User from "./Components/User/User";
import UserProfile from "./Components/User/UserProfile";
import { UserStorage } from "./UserContext";
import { API_LOCALHOST } from "./api";

function App() {
  return (
    <div className="App">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <UserStorage>
          <Header />
          <main
            className={API_LOCALHOST ? "AppBodyApiLocalhost" : "AppBody"}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="/image/:id" element={<Image />} />
              <Route path="/profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
