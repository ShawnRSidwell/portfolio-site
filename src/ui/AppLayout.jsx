import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="mx-auto max-w-3xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
