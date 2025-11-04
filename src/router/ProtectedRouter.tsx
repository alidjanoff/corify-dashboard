import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouter = () => {
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
