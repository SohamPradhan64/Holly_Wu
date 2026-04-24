import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./components/TransitionContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Curtains from "./components/Curtains.jsx";
import PageContent from "./components/PageContent.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import Menu from "./pages/Menu.jsx";
import ReservationsPage from "./pages/ReservationsPage.jsx";
import Events from "./pages/Events.jsx";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Curtains />
      <PageContent>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/tea-bar" element={<div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center',color:'#d8b47f',fontSize:24,paddingTop:80}}>Tea Bar — Coming Soon</div>} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </PageContent>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <div className="app">
          <AppRoutes />
        </div>
      </TransitionProvider>
    </BrowserRouter>
  );
}
