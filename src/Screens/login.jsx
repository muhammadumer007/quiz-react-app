
import { useState } from "react";
import { fbLogin } from "../config/fb-method";
import ABButton from "../components/ABButton";
import ABInput from "../components/ABinput";


export default function Login() {
    const [model, setModel] = useState({});

    const fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
    };

    let LoginUser = () => {
        console.log(model);
        fbLogin(model)
            .then((res) => {
                console.log(res);
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
                        <h1 className="text-3xl font-medium">Login</h1>
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
                        <ABButton onClick={LoginUser} label="Sign Up" />
                    </div>
                </div>
            </div>
        </>
    );
}