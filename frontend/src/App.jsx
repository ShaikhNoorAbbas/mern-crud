import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
export default function App() {
  const columns = [
    {
      title: "Profile",
      key: "profile",
      dataIndex: "profile",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      key: "mobile",
      dataIndex: "mobile",
    },
    {
      title: "DOB",
      key: "dob",
      dataIndex: "dob",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
  ];
  return (
    <>
      <section className="min-h-screen  bg-rose-100 flex flex-col items-center md:p-4">
        {/* Intro Section */}
        <div className="flex justify-between items-center bg-blue-600 w-10/12 my-5 p-5">
          <h1 className="capitalize text-center text-white text-2xl md:text-5xl font-bold">
            CRUD Operation
          </h1>
          <Button
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            type="text"
            className="!text-black !bg-green-300 hover:!bg-white hover:!scale-112"
          />
        </div>
        {/* Adding Table */}
        <Table className="w-10/12" columns={columns} dataSource={[]} />
      </section>
    </>
  );
}
