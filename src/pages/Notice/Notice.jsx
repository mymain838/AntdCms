import { Button, Table } from "antd";
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
const data = [
  {
    key: 1,
    title: "06-26 공지",
    content: "06-26 공지 사항입니다.",
    createdDate: "2024-06-26",
    views: 200,
  },
  {
    key: 2,
    title: "06-28 공지",
    content: "06-28 공지 사항입니다.",
    createdDate: "2024-06-27",
    views: 100,
  },
  {
    key: 3,
    title: "06-29 공지",
    content: "06-29 공지 사항입니다.",
    createdDate: "2024-06-28",
    views: 150,
  },
];
const Notice = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "내용",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "생성일",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "조회수",
      dataIndex: "views",
      key: "views",
    },
  ];
  return (
    <article>
      <PageTitle
        title="공지사항"
        desc="공지사항을 관리할 수 있습니다."
        addBtn={
          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate("create");
            }}
          >
            생성하기
          </Button>
        }
      />
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        onRow={(record, row) => ({
          onClick: () => navigate(`${record.key}`),
        })}
      />
    </article>
  );
};

export default Notice;
