import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
