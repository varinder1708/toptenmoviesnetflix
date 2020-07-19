import LazyImage from './LazyImage'
import "./Listing.scss";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";
import "./Carouselfix.css";

const LoadCarousel = (props) => (
    <Carousel autoPlay>
    {props
      .data
      .map((post, i) => (
        <div>
          {/* {i==0?:<LazyImage src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`}/>} */}
          <img src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`} />
          {/* <LazyImage src={`/images/${props.data[i].src}`} alt={`${props.data[i].name}`}/> */}
          {/* <p className="legend"></p> */}
        </div>
      ))}
  </Carousel>
);
export default LoadCarousel;
