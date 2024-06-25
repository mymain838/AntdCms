import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import {
  Alert,
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Space,
  Upload,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transfer, setTransfer] = useState("none");
  const [isAlert, setIsAlert] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const isCreated = id === "create";

  const showModal = () => {
    setIsModal(true);
  };
  const handleOk = () => {
    setIsModal(false);
    setIsAlert(true);
  };
  const handleCancel = () => {
    setIsModal(false);
  };
  return (
    <article>
      {contextHolder}
      <Modal
        title="사용자에게 알림"
        open={isModal}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Radio.Group
          onChange={(e) => {
            setTransfer(e.target.value);
          }}
          value={transfer}
        >
          <Space direction="vertical">
            <Radio value={"email"}>이메일로 수신</Radio>
            <Radio value={"kakao"}>카톡으로 수신</Radio>
            <Radio value={"phone"}>전화번호로 수신</Radio>
            <Radio value={"none"}>사용자에게 알리지 않기</Radio>
          </Space>
        </Radio.Group>
      </Modal>
      <PageTitle title={isCreated ? "공지 생성하기" : "공지 수정하기"} />
      <Form
        initialValues={{ content: "dasd" }}
        onFinish={() => {
          showModal();
          //   navigate("/notice");
        }}
        onFinishFailed={() => {
          messageApi.open({
            type: "error",
            content: "공지 생성에 실패하였습니다. ErrCode #13923",
            duration: 2,
          });
        }}
      >
        {isAlert && (
          <Alert
            type="success"
            message="등록완료"
            showIcon
            description="공지사항에 글이 등록되었습니다."
            closable
            onClose={() => {
              setIsAlert(!isAlert);
            }}
          />
        )}
        <br />
        <Form.Item
          label="제목"
          name="title"
          rules={[{ required: true, message: "제목을 입력해주세요!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="내용"
          name="content"
          rules={[
            {
              required: true,
              min: 5,
              message: "내용을 5글자 이상 입력해주세요.",
            },
          ]}
        >
          <TextArea rows={10} />
        </Form.Item>
        <Form.Item>
          <Upload>
            <Button icon={<UploadOutlined />}>첨부파일</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            생성하기
          </Button>
        </Form.Item>
      </Form>
    </article>
  );
};

export default NoticeDetail;
