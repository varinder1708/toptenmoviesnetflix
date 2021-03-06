import React, { useState, useEffect } from 'react'
// import navButtons from "../config/buttons";
import "./NavBar.scss";
import {isMobile,isBrowser} from "react-device-detect";
import NavButton from "./NavButton";
const NavBar = props => {
  useEffect(() => {
    if(isMobile){
      $("#burger").on("click",()=>{
        var burger = $('#burger');
        var links = $('#links');
        var quit = $('#quit');
        $(burger).css( {'padding':'16px 16px 200vw 200vw','color':'#fff','background':'linear-gradient(45deg, #9682C8 10%, #05BCC9)'});
        $(links).css({'display':'flex'});
        $(quit).css({'display':'inline'});
      })
      
      $("#quit").on("click",()=>{
        var burger = $('#burger');
        var links = $('#links');
        var quit = $('#quit');
        $(burger).css({'padding':'5px','background':'none','color':'#05BCC9'});
        
        $(links).css({'display':'none'});
        $(quit).css({'display':'none'});
      })

      $("#links .NavButton ").on("click",()=>{
        $( "#quit" ).trigger( "click" );
      })
    }
  });
  return (<>
    <i id="burger" class="material-icons" >menu</i>
    <i id="quit" class="material-icons" >clear</i>
    <div id="links">
      {props.navButtons.map((obj)=>{return <NavButton path={obj.path} icon={obj.icon} label={obj.label}/>})}
    </div>
    </>
)
};
  export default NavBar;
