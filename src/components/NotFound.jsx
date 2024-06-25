import { WarningOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <article className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center text-center">
        <WarningOutlined className="text-[120px]" />
        <h3>현재 페이지를 찾을 수 없습니다.</h3>
      </div>
    </article>
  );
};

export default NotFound;
