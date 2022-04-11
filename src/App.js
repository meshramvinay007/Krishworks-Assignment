import "./App.css";
import Appointment from "./components/Appointment/Appointment";
import Header from "./components/Header/Header";
import Navbar from "./components/navbar/Navbar";
import Notes from "./components/Notes/Notes";
import Print from "./components/Print/Print";
import Profile from "./components/Profile/Profile";
import Files from "./components/Files/Files";
import { useState } from "react";

function App() {
  const [collaspe,setCollaspe] = useState(true);

  return (
    <div className="App">
      <Navbar setCollaspe={setCollaspe} collaspe={collaspe} />
      <section className="main" style={{marginLeft:!collaspe ?"250px": "0"}}>
        <Header setCollaspe={setCollaspe} collaspe={collaspe}/>
        <Print />
       
        <div className="top-3">
          <div className="left">
           <Profile />

            <Appointment />
          </div>
          <div className="right">
            <Notes />
           <Files />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
