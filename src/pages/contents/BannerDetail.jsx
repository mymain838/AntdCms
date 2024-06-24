import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { Button, DatePicker, Flex, Input, Switch, message } from "antd";
import ImageUpload from "../../components/ImageUpload";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const BannerDetail = () => {
  const { id } = useParams();
  const isCreate = id === "create";
  const [formData, setFormData] = useState({
    bannerImg: "",
    mobileBannerImg: "",
    visible: false,
    startDate: undefined,
    endDate: undefined,
    title: "",
    content: "",
  });

  const onChangeForm = (name, value) =>
    setFormData({ ...formData, [name]: value });

  const onSubmit = (e) => {
    const { bannerImg, mobileBannerImg, startDate, endDate, title, content } =
      formData;
    if (!bannerImg) return message.error("배너 이미지를 등록해주세요");
    if (!mobileBannerImg)
      return message.error("모바일 배너 이미지를 등록해주세요");
    if (!startDate) return message.error("배너 시작일자를 선택해주세요");
    if (!endDate) return message.error("배너 종료일자를 선택해주세");
    if (!title) return message.error("배너 제목을 입력해주세요");
    if (!content) return message.error("배너 내용을 입력해주세요");
  };
  return (
    <article>
      <PageTitle title={isCreate ? "배너 등록하기" : "배너 수정하기"} />
      <div>
        <Flex vertical align="start" gap={30}>
          <Flex className="w-full justify-between">
            <section className="pc-banner">
              <label>배너 이미지</label>
              <ImageUpload
                image={formData.bannerImg}
                handleImage={(value) => onChangeForm("bannerImg", value)}
                width={342}
                height={200}
              />
            </section>
            <section className="mobile-banner">
              <label>배너 이미지</label>
              <ImageUpload
                image={formData.mobileBannerImg}
                handleImage={(value) => onChangeForm("mobileBannerImg", value)}
                width={342}
                height={200}
              />
            </section>
          </Flex>
          <section>
            <label>배너 노출여부</label>
            <Switch
              onChange={(value) => onChangeForm("visible", value)}
              checked={formData.visible}
            />
          </section>
          <Flex gap={10} align="center">
            <section>
              <label>배너 시작날짜</label>
              <DatePicker
                format={"YYYY.MM.DD HH:mm"}
                value={formData.startDate}
                onOk={(value) => onChangeForm("startDate", value)}
                onChange={(value) => onChangeForm("startDate", value)}
                showTime={{ minuteStep: 5 }}
              />
            </section>
            <section>
              <label className="opacity-0">~</label>
              <p className="m-0">~</p>
            </section>
            <section>
              <label>배너 종료날짜</label>
              <DatePicker
                format={"YYYY.MM.DD HH:mm"}
                value={formData.startDate}
                onOk={(value) => onChangeForm("endDate", value)}
                onChange={(value) => onChangeForm("endDate", value)}
                showTime={{ minuteStep: 5 }}
              />
            </section>
          </Flex>
          <section className="w-full">
            <label>배너 제목</label>
            <Input
              value={formData.title}
              name="title"
              onChange={(e) => onChangeForm("title", e.target.value)}
              placeholder="배너 제목을 입력해주세요"
            />
          </section>
          <section className="w-full">
            <label>배너 내용</label>
            <TextArea
              value={formData.content}
              name="content"
              onChange={(e) => onChangeForm("content", e.target.value)}
              placeholder="배너 내용을 입력해주세요"
            />
          </section>
          <Button
            className="w-full"
            htmlType="submit"
            size="large"
            type="primary"
            onClick={onSubmit}
          >
            {isCreate ? "배너 등록하기" : "배너 수정하기"}
          </Button>
        </Flex>
      </div>
    </article>
  );
};

export default BannerDetail;
