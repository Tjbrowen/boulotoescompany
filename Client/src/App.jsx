import { Suspense, useState } from "react";
import "./App.css";
import { Website } from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Services from "./pages/Services/Services";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./pages/Service/Service";
import UserDetailContext from "./context/UserDetailContext";

import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Quotes from "./pages/Bookings/Bookings";

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/services">
                  <Route index element={<Services />} />
                  <Route path=":serviceId" element={<Service />} />
                </Route>
              </Route>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/projects">
                  <Route index element={<Projects />} />
                  <Route path=":projectId" element={<Project />} />
                </Route>
                <Route path="/quotes" element={<Quotes/>} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;

