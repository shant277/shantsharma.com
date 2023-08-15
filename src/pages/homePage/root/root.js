import Sidebar from "../../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";



import "./root.css";

function Root(){
    return ( <div className="app-wrapper-container">
      <Sidebar /> 
    <div className="pages">
           {/*  <p>Hello World</p> */}
          <Outlet /> 
    </div>
    </div>);
   

}

export default Root;