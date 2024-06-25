import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Banner from "./pages/contents/Banner";
import BannerDetail from "./pages/contents/BannerDetail";
import Transactions from "./pages/transaction/Transactions";
import TransactionsDetail from "./pages/transaction/TransactionsDetail";
import Statistics from "./pages/Statistics";
import Media from "./pages/contents/Media";
import Recent from "./pages/user/Recent";
import Notice from "./pages/Notice/Notice";
import NoticeDetail from "./pages/Notice/NoticeDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "blue" },
        components: {
          Carousel: {
            arrowSize: 30,
            arrowOffset: 20,
          },
        },
      }}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content/banner" element={<Banner />} />
          <Route path="/content/banner/:id" element={<BannerDetail />} />
          <Route path="/content/media" element={<Media />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<TransactionsDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          {/* <Route path="/users/recent" element={<Recent />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
