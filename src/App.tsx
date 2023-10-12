import "./App.css";
import Tables from "./Components/Tables";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import SignPage from "./Pages/SignPage";
import LandingPage from "./Pages/LandingPage";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<SignPage />} />

      <Route path="dashboard" element={<LandingPage />} />
    </Route>
  )
);
interface UserContextType {
  user: object | undefined;
  setUser: Dispatch<SetStateAction<object | undefined>>;
}

const defaultContext = {
  user: undefined,
  setUser: (user: object | undefined) => {},
} as UserContextType;
export const UserContext = createContext(defaultContext);

const clientId = import.meta.env.VITE_CLIENTID;
console.log(clientId);

function App() {
  const [user, setUser] = useState<object | undefined>(undefined);

  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
