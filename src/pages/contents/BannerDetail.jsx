import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { Flex } from "antd";

const BannerDetail = () => {
  const { id } = useParams();
  const isCreate = id === "create";
  return (
    <article>
      <PageTitle title={isCreate ? "배너 등록하기" : "배너 수정하기"} />
      <div>
        <Flex vertical align="start" gap={30}>
          <Flex className="w-full justify-between">
            <section className="h-[200px]">
              <label>배너 이미지</label>
            </section>
          </Flex>
        </Flex>
      </div>
    </article>
  );
};

export default BannerDetail;
