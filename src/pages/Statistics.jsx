import { Flex } from "antd";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommitCard from "../components/CommitCard";
import ContentChart from "../components/ContentChart";

const dummyCommit = [
  {
    platform: "youtube",
    data: [
      { id: 1, name: 2020, commit: 200 },
      { id: 2, name: 2021, commit: 0 },
      { id: 3, name: 2022, commit: 700 },
    ],
  },
  {
    platform: "netflex",
    data: [
      { id: 4, name: 2020, commit: 400 },
      { id: 5, name: 2021, commit: 200 },
      { id: 6, name: 2022, commit: 700 },
    ],
  },
  {
    platform: "wave",
    data: [
      { id: 7, name: 2020, commit: 700 },
      { id: 8, name: 2021, commit: 500 },
      { id: 9, name: 2022, commit: 600 },
    ],
  },
];

const dummyContent = [
  {
    id: 1,
    rank: 1,
    name: "제품 1",
    "공유 횟수": 2000,
    조회수: 9800,
  },
  {
    id: 2,
    rank: 2,
    name: "제품 2",
    "공유 횟수": 1890,
    조회수: 4800,
  },
  {
    id: 3,
    rank: 3,
    name: "제품 3",
    "공유 횟수": 3490,
    조회수: 4300,
  },
  {
    id: 4,
    rank: 4,
    name: "제품 4",
    "공유 횟수": 2780,
    조회수: 3908,
  },
  {
    id: 5,
    rank: 5,
    name: "제품 5",
    "공유 횟수": 2390,
    조회수: 3800,
  },
  {
    id: 6,
    rank: 6,
    name: "제품 6",
    "공유 횟수": 4000,
    조회수: 2400,
  },
  {
    id: 7,
    rank: 7,
    name: "제품 7",
    "공유 횟수": 3000,
    조회수: 1398,
  },
];

const Statistics = () => {
  return (
    <article className="flex flex-col gap-3">
      <h3 className="m-0 mb-2">사용자 유입 경로</h3>
      <div className="grid grid-cols-auto-fit-300 gap-4">
        <CommitCard data={dummyCommit} />
      </div>

      <div className="h-[420px] overflow-auto bg-white rounded-lg p-6 scrollbar-hide">
        <ContentChart data={dummyContent} />
      </div>
    </article>
  );
};

export default Statistics;
