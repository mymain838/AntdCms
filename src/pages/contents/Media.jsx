import { Button, Flex, Progress, message } from "antd";
import PageTitle from "../../components/PageTitle";
import { useEffect, useRef, useState } from "react";

const Media = () => {
  let timer = useRef(null);
  const [per, setPer] = useState(0);
  const [url, setUrl] = useState("https://via.placeholder.com/1700x500");
  console.log(per);
  useEffect(() => {
    if (per >= 100) {
      clearInterval(timer.current);
      setPer(0);
      timer.current = null;
      message.success("테스트 성공");
      setUrl("https://via.placeholder.com/1700x500/008000");
    }
  }, [per]);

  return (
    <article className="h-[500px]">
      <PageTitle
        title={"미디어 관리"}
        desc={"미디어를 관리할 수 있는 페이지입니다."}
        addBtn={
          <Button
            onClick={() => {
              if (timer.current) {
                message.error("이미 실행되고있습니다.");
                return;
              }
              setPer(0);
              setUrl("https://via.placeholder.com/1700x500");
              timer.current = setInterval(() => {
                setPer((state) => state + 1);
              }, 100);
            }}
            type="primary"
            size="large"
          >
            업로드 테스트
          </Button>
        }
      />
      <div className="flex flex-col  w-full h-full bg-white rounded-xl p-3">
        <img src={url} />
        <br />
        <Progress
          type="line"
          percent={per}
          strokeColor={{ from: "red", to: "blue" }}
        />
      </div>
    </article>
  );
};

export default Media;
