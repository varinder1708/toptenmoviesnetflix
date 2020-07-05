import React, { useState, useEffect } from 'react'
import {isMobile,isBrowser} from "react-device-detect";
import TopPicks from "../components/TopPicks";
import {fixSidebar} from "../utils/fixSidebar";

const SideBar = (props) =>{
    
    useEffect(() => {
        if(isBrowser){fixSidebar("#sidebar")}
        
      });
    
    return (
    <div id="sidebar">
      <TopPicks layout="threecolumnlayout"/>
    </div>
);
}
export default SideBar;
