import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Tickets from "../pages/Tickets";
import TicketView from "../pages/TicketView";
import TicketEdit from "../pages/TicketEdit";
import TicketCreate from "../pages/TicketCreate";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/create"
        element={
          <PrivateRoute>
            <TicketCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoute>
            <TicketView />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoute>
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
