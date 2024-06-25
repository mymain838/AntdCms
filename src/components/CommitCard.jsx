import { Card, Flex } from "antd";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CommitCard = ({ data }) => {
  return data.map((contents, index) => (
    <Card key={contents.platform} title={contents.platform}>
      <ResponsiveContainer width="100%" minHeight={300}>
        <LineChart data={contents.data}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <Line
            type={"monotone"}
            dataKey={"commit"}
            stroke={
              contents.platform === "netflex"
                ? "red"
                : contents.platform === "wave"
                ? "blue"
                : "green"
            }
            activeDot={{ r: 6 }}
          />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  ));
};

export default CommitCard;
