import LazyImage from './LazyImage'
import "./Listing.scss";
import Link from "next/link";
import {Carousel} from "react-responsive-carousel";
import {isMobile} from "react-device-detect";
import styles from "react-responsive-carousel/lib/styles/carousel.css";
import "./Carouselfix.css";
import { useEffect, useState } from "react";

//todo use device from layout

const LoadCarousel = (props) => {
  
  const [device,setDevice]=useState('');
  useEffect(()=>{
     setDevice(isMobile ? 'mobile' : 'desktop')
  })  
  let {centerSlidePercentage=false,centerMode=false,className="",infiniteLoop=false,selectedItem=0,showIndicators=false,showStatus=true}=props;
   
   //centerSlidePercentage=device=="mobile"?false:centerSlidePercentage;
   //centerMode=device=="mobile"?false:centerMode;
   
  return(<Carousel dynamicHeight={true} showThumbs={false} centerSlidePercentage={centerSlidePercentage} centerMode={centerMode}  className ={className} selectedItem={selectedItem} infiniteLoop={infiniteLoop} showIndicators={showIndicators} showStatus={showStatus} >
    {props
      .data
      .map((post, i) => (
        <div>
          {/* {i==0?:<LazyImage src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`}/>} */}
          <img src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`}/> {/* <LazyImage src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`}/> */}
          <p className="legend">{props.data[i].name}</p>
        </div>
      ))}
  </Carousel>)
};
export default LoadCarousel;
