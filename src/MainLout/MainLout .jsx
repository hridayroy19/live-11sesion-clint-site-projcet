import { Outlet } from "react-router-dom";
import Navbar from "../Seard/Navbar";

const MainLout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default MainLout;
