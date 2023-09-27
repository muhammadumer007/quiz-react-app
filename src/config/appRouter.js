import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Protect from "../Screens/protect"
import SignUP from "../Screens/signup"
import Login from "../Screens/login"
import Quiz from "../Screens/quiz-screen"
export default function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                
                <Route path="/" element ={<Protect Screen={Quiz}/>}/>
                <Route path="signup" element ={<SignUP/>}/>
                <Route path="login" element ={<Login/>}/>
            </Routes>
        </Router>
        </>
    )
}