import { useState } from "react";

import { useNavigate } from "react-router-dom";
import ABInput from "../components/ABinput";
import ABButton from "../components/ABButton";
import { fbSignUp } from "../config/fb-method";

export default function Signup() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-5">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-5">
            <ABInput
              value={model.userName}
              onChange={(e) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-5">
            <ABInput
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-5">
            <ABInput
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-5">
            <ABButton onClick={signUpUser} label="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
}