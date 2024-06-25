import {
  BarChartOutlined,
  BookOutlined,
  CreditCardOutlined,
  HomeFilled,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  SettingOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  TransactionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  ConfigProvider,
  Dropdown,
  Flex,
  Layout,
  Menu,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const dropdownItems = [
  {
    key: "setting",
    label: <Link>설정</Link>,
    icon: <SettingOutlined />,
  },
  {
    key: "logout",
    label: <Link to="/login">로그아웃</Link>,
    icon: <LoginOutlined />,
  },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "dashboard", <HomeFilled />),
  getItem("컨텐츠 관리", "content", <NotificationOutlined />, [
    getItem("배너", "banner"),
    getItem("미디어", "media"),
  ]),
  getItem("통계 자료", "statistics", <BarChartOutlined />),
  getItem("결제 관리", "transactions", <TransactionOutlined />),
  getItem(
    <div className="text-red-500">카드 관리</div>,
    "creditcards",
    <CreditCardOutlined />
  ),
  getItem("공지사항 관리", "notice", <SnippetsOutlined />),
  getItem(
    <div className="text-red-500">사용자관리</div>,
    "users",
    <UserOutlined />,
    [getItem(<div className="text-red-500">최근활동 내역</div>, "recent")]
  ),
  getItem(
    <div className="text-red-500">CMS 계정 관리</div>,
    "accounts",
    <SolutionOutlined />,
    [
      getItem(<div className="text-red-500">권한</div>, "myprivileges"),
      getItem(<div className="text-red-500">설정</div>, "settings"),
    ]
  ),
];

const PrivateRoute = () => {
  const { pathname } = useLocation();
  console.log(pathname.split("/"));
  const [, main, sub] = pathname.split("/");
  console.log(main);
  console.log(sub);

  const selected = sub ? [sub, main] : [main];
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    !selected[0] && navigate("/dashboard");
  }, [navigate, selected]);

  const getCurrentTitle = () => items.find((item) => item.key === main);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "white",
            bodyBg: "rgba(247,245,249)",
            headerHeight: 100,
          },
        },
      }}
    >
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          {!collapsed && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "30px 38px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              <BookOutlined
                style={{ fontWeight: "bold", fontSize: 30, color: "#0575E6" }}
              />
              <h1
                style={{ fontWeight: "bold", fontSize: 25, color: "#0575E6" }}
              >
                ANTD CMS
              </h1>
            </div>
          )}

          <Menu
            items={items}
            selectedKeys={selected}
            mode="inline"
            onClick={({ item, key, keyPath, domEvent }) => {
              const [page, parents] = keyPath;
              console.log(`page = ${page} , parents = ${parents}`);
              const moveTo = parents ? `${parents}/${page}` : `${page}`;
              navigate(moveTo);
            }}
          ></Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: "20px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="flex gap-3 h-[100%] items-center justify-center">
              {collapsed ? (
                <MenuUnfoldOutlined
                  className="text-3xl"
                  onClick={() => {
                    setCollapsed(!collapsed);
                  }}
                />
              ) : (
                <MenuFoldOutlined
                  className="text-3xl"
                  onClick={() => {
                    setCollapsed(!collapsed);
                  }}
                />
              )}
              <h2>{getCurrentTitle()?.label}</h2>
            </div>
            <Dropdown menu={{ items: dropdownItems }} placement="bottom">
              <Badge count={5}>
                <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=Callie"></Avatar>
              </Badge>
            </Dropdown>
          </Header>
          <Content style={{ padding: "24px 40px" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design@{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default PrivateRoute;
