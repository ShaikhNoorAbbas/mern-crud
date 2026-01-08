import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function App() {
  return (
    <>
      <section className="min-h-screen bg-rose-100 flex flex-col items-center md:p-4">
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
      </section>
    </>
  );
}
