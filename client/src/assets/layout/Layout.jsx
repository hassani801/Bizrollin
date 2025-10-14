import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageLoader } from "../layout/PageLoader";

export function Layout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading"; 
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Loader Overlay */}
      <PageLoader loading={loading} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
