import { Button, Form, Input } from "antd";
import lockSvg from "../assets/icons/lock.svg";
import userSvg from "../assets/icons/loginUser.svg";
import topSvg from "../assets/icons/loginTopLeft.svg";
import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../store/hooks";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute w-[864px] h-[721.5px] top-[-15px] right-[-45px]"
        src={topSvg}
        alt={topSvg}
      />
      <div className="bg-[#264ECA] w-[724px] h-[724px] absolute top-[344px] left-[-46px] rounded-full flex items-center justify-center z-10">
        <div className="bg-[#244BC5] w-[572px] h-[572px] rounded-full flex items-center justify-center z-20">
          <div className="bg-[#274FC7] w-[438px] h-[438px] rounded-full z-30"></div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-tudorsBlue w-screen h-screen">
        <div className="flex z-50">
          <div className="flex flex-col items-end justify-start font-inter relative right-20">
            <h1 className="text-[32px]/[38.73px] text-right text-white">
              tudors.com
            </h1>
            <h2 className="text-[64px]/[77.45px] text-right text-white font-bold">
              Entegrator
            </h2>
          </div>
          <div className="flex flex-1">
            <Form
              name="normal_login"
              className="login-form w-[300px] h-[229px] font-montserrat"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={
                    <img
                      className="w-5 h-5 site-form-item-icon"
                      src={userSvg}
                      alt={userSvg}
                    />
                  }
                  placeholder="USERNAME"
                  className="bg-inherit w-full h-[45px] font-montserrat"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={
                    <img
                      className="w-5 h-5 site-form-item-icon"
                      src={lockSvg}
                      alt={lockSvg}
                    />
                  }
                  type="password"
                  placeholder="PASSWORD"
                  className="bg-inherit w-full h-[45px] font-montserrat"
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button
                  htmlType="submit"
                  className="login-form-button w-full h-[45px] bg-white font-semibold text-[16px]/[20px] uppercase text-tudorsBlue font-montserrat"
                >
                  login
                </Button>
              </Form.Item>
              <Form.Item className="text-right">
                <a
                  className="login-form-forgot font-montserrat text-[16px]/[19.5px] font-medium text-white"
                  href=""
                >
                  Forgot password?
                </a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
