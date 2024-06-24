import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Banner from "./pages/contents/Banner";
import BannerDetail from "./pages/contents/BannerDetail";
import Transactions from "./pages/transaction/Transactions";
import TransactionsDetail from "./pages/transaction/TransactionsDetail";

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
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<TransactionsDetail />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
