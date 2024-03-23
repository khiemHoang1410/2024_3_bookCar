import { Footer, NavBar } from "./components";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { About, BookCar, Home, Login } from "./pages";
import "./tailwind.css";

const Layout = () => {
  const user = true; // Đổi giá trị này để phản ánh trạng thái đăng nhập của người dùng
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
};

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}/>
          {/* <Route
          path="/"
          element={
            <Navigate
              to="/book-car"
              state={{ from: location }}
              replace={true}
            />
          }
        /> */}
          {/* <Route path="about" element={<About />} />
          <Route path="book-car" element={<BookCar />} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "user-profile"
                : "user-profile/:id"
            }
            element={<UserProfile />}
          /> */}
          {/* </Route> */}
          <Route path="user-auth" element={<Login />} />
          <Route path="book-car" element={<BookCar />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
