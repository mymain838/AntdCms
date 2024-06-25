import { Divider, Flex } from "antd";

const PageTitle = ({ title, desc, addBtn }) => {
  return (
    <div>
      <Flex justify="space-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-[22px] leading-6 m-0 mb-2 text-gray-600">
            {title}
          </h3>
          <h2 className="font-medium text-[16px] leading-[16px] m-0 text-gray-400 ">
            {desc}
          </h2>
        </div>
        {addBtn}
      </Flex>
      <Divider />
    </div>
  );
};

export default PageTitle;
