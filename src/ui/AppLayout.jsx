import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-slate-100">
      <Header />
      <div className="mx-auto max-w-4xl mt-9">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
