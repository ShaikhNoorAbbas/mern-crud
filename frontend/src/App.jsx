import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Modal, Table } from "antd";
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
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: () => (
        <div>
          <Button
            className="!text-green-500"
            icon={<EditFilled />}
            shape="circle"
            type="text"
          />
          <Button
            className="!text-rose-500"
            icon={<DeleteFilled />}
            shape="circle"
            type="text"
          />
        </div>
      ),
    },
  ];
  const data = [
    {
      profile: (
        <Image
          src={
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="rounded-full"
          width={40}
        />
      ),
      name: "John",
      email: "john@gmail.com",
      gender: "male",
      dob: "4/12/2026",
      mobile: "89756786",
      address: "mumbai",
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
        <Table
          className="w-10/12 text-center"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5, position: ["bottomCenter"] }}
          scroll={{ x: "max-content" }}
        />
        {/* Modal */}
        <Modal
          open={true}
          footer={null}
          title={<h1 className="text-xl font-semibold">Registration Form</h1>}
          width={720}
        >
          <Form layout="vertical" className="font-semibold">
            <div className="mt-5 grid md:grid-cols-2 gap-x-2.5">
              <Form.Item label="Profile" name="profile">
                <Input type="file" size="large" style={{ borderRadius: 0 }} />
              </Form.Item>
              <Form.Item
                label="FullName"
                name="fullname"
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Enter FullName" size="large" style={{ borderRadius: 0 }} />
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </section>
    </>
  );
}
