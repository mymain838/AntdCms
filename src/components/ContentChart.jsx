import { Switch } from "antd";
import { useState } from "react";
import { Table } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ContentChart = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  return (
    <>
      <div className="flex justify-between ">
        <h2 className="m-0 mb-3">콘텐츠 성과 지표</h2>
        <Switch value={isOpen} onChange={(value) => setIsOpen(value)} />
      </div>

      {!isOpen ? (
        <>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey={"name"} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="공유 횟수"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="조회수"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>순위</th>
              <th>제품</th>
              <th>공유 횟수</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item["공유 횟수"]}</td>
                <td>{item["조회수"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ContentChart;
