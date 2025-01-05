import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AdminDashBoard from "./Pages/AdminDashBoard";
import PlansAndClasses from "./Pages/PlansAndClasses";
import Trainers from "./Pages/Trainers";
import Members from "./Pages/Members"
import TrainerDashBoard from "./Pages/TrainerDashBoard";
import MemberDashBoard from "./Pages/MemberDashBoard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admindashBoard" element={<AdminDashBoard/>}/>
            <Route path="/plansAndClasses" element={<PlansAndClasses/>}/>
            <Route path="/trainers" element={<Trainers/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/trainerDashBoard" element={<TrainerDashBoard/>}/>
            <Route path="/memberDashBoard" element={<MemberDashBoard/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;