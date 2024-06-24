import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CiCircleOutlined,
  HeartOutlined,
  HeartTwoTone,
  InfoCircleTwoTone,
  LikeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Carousel,
  Flex,
  List,
  Progress,
  Statistic,
  Timeline,
} from "antd";
import Meta from "antd/es/card/Meta";
import { Outlet } from "react-router-dom";

const { Countdown } = Statistic;
const activeValue = 8.423;
const idleValue = -2.3192;
const data = [
  {
    title: "첫번째 결제 내역입니다.",
  },
  {
    title: "두번째 결제 내역입니다.",
  },
  {
    title: "세번쨰 결제 내역입니다.",
  },
  {
    title: "결제에 실패하였습니다..",
  },
];

const deadLine = Date.now() + 1000 * 60 * 60 * 24 * 2;

const Dashboard = () => {
  return (
    <article className="flex flex-col gap-[30px] max-w-[1920px]">
      <section className="grid grid-cols-auto-fit-300 gap-[30px]">
        <div>
          <h1 className="mb-2"> My cards</h1>
          <Card
            cover={
              <img
                alt="example"
                src="https://item.kakaocdn.net/do/9c5d673c91e8f1080c2602931c81f178f43ad912ad8dd55b04db6a64cddaf76d"
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  src={
                    "https://api.dicebear.com/9.x/adventurer/svg?seed=Callie"
                  }
                />
              }
              title="sdad"
              description="sdad"
            />
            <div className="absolute bottom-5 right-6 text-[30px]">
              <HeartOutlined />
            </div>
          </Card>
        </div>
        <div>
          <h1 className="mb-2"> My cards</h1>
          <Card
            cover={
              <img
                alt="example"
                src="https://item.kakaocdn.net/do/9c5d673c91e8f1080c2602931c81f178f43ad912ad8dd55b04db6a64cddaf76d"
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  src={
                    "https://api.dicebear.com/9.x/adventurer/svg?seed=Callie"
                  }
                />
              }
              title="dsadad"
              description="sdad"
            />
            <div className="absolute bottom-5 right-6 text-[30px]">
              <HeartTwoTone />
            </div>
          </Card>
        </div>
        <div>
          <h1 className="mb-2"> My cards</h1>
          <Card
            cover={
              <img
                alt="example"
                src="https://item.kakaocdn.net/do/9c5d673c91e8f1080c2602931c81f178f43ad912ad8dd55b04db6a64cddaf76d"
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  src={
                    "https://api.dicebear.com/9.x/adventurer/svg?seed=Callie"
                  }
                />
              }
              title="dsadad"
              description="sdad"
            />
            <div className="absolute bottom-5 right-6 text-[30px]">
              <HeartOutlined />
            </div>
          </Card>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-[100%] gap-2">
            <h3>Recent Transaction</h3>
            <div className="h-[420px]  overflow-auto  bg-white rounded-lg p-6 ">
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={
                            "https://api.dicebear.com/9.x/adventurer/svg?seed=Callie"
                          }
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design... "
                    />
                  </List.Item>
                )}
              ></List>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-auto-fit-300 gap-[24px]">
        <div className="flex flex-col gap-10 bg-white p-6 w-4/5 rounded-lg">
          <h3 className="m-0">Weekly Activity</h3>
          <Flex gap={30} wrap>
            <Countdown title="오픈일" value={deadLine} />
            <Statistic
              title="Feedback"
              value={1130}
              prefix={<LikeOutlined />}
            />
            <Statistic title="Merged" value={93} suffix={"/ 100"} />
            <Flex gap={30}>
              <Statistic
                title="Active"
                value={Math.abs(activeValue)}
                precision={2}
                valueStyle={
                  activeValue > 0 ? { color: "#3f8600" } : { color: "#bd200b" }
                }
                prefix={
                  activeValue > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                }
                suffix={"%"}
              />
              <Statistic
                title="idle"
                value={Math.abs(idleValue)}
                precision={1}
                valueStyle={
                  idleValue > 0 ? { color: "#3f8600" } : { color: "#bd200b" }
                }
                prefix={
                  idleValue > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                }
                suffix={"%"}
              />
            </Flex>
          </Flex>
        </div>
        <div className="flex flex-col gap-4 bg-white p-6 w-4/5 rounded-lg">
          <h3 className="m-0">Expense Statistics</h3>
          <div>
            <Flex gap={30} wrap>
              <Progress
                type="circle"
                percent={80}
                strokeColor={{ 0: "blue", 70: "pink" }}
              />
              <Progress
                type="circle"
                percent={100}
                strokeColor={{ 0: "blue", 70: "pink" }}
              />
              <Progress
                type="circle"
                percent={100}
                strokeColor={{ 0: "blue", 25: "pink", 75: "orange" }}
              />
            </Flex>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-auto-fit-300 gap-[24px]">
        <div>
          <h2>Quick Transfer</h2>
          <div className="h-[300px] overflow-auto bg-white rounded-xl ">
            <Carousel arrows infinite={true} autoplay>
              <div className="m-0 h-[260px] text-white leading-[160px] text-center bg-slate-600">
                <img className="w-full h-full" src="/banner1.png" />
              </div>
              <div className="m-0 h-[260px] text-white leading-[160px] text-center bg-slate-600">
                <img className="w-full h-full" src="/banner2.png" />
              </div>
              <div className="m-0 h-[260px] text-white leading-[160px] text-center bg-slate-600">
                <img className="w-full h-full" src="/banner3.png" />
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <h3>History</h3>
          <div className="h-[300px] overflow-auto bg-white rounded-xl p-10">
            <Timeline
              className="mt-6"
              mode="alternate"
              items={[
                { children: "첫 공부 2015-08-20", color: "green" },
                { children: "웹 구현 2015-08-20" },
                {
                  children: "첫 리액트 2015-08-20",
                  dot: <InfoCircleTwoTone className="text-xl" />,
                },
                { children: "퇴사 2015-09-20" },
              ]}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
