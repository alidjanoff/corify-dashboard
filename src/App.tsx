import { Routes, Route } from "react-router-dom";
import Home from "./Modules/Home/View/Home.tsx";
import Login from "./Modules/Auth/View/Login.tsx";
import NotFound from "./Modules/Additionals/View/NotFound.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCars from "./Modules/Dashboard/View/AllCars.tsx";
import CreateCar from "./Modules/Dashboard/View/CreateCar.tsx";
import ProtectedRouter from "./router/ProtectedRouter.tsx";
import { ToastContainer } from "react-toastify";
import Profile from "./Modules/Profile/View/Profile.tsx";
import ProfileSettings from "./Modules/Profile/View/ProfileSettings.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/create-car" element={<CreateCar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
