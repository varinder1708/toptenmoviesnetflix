// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import {data, heading} from '../../../data/thailand/most-beautiful-beaches-in-thailand';
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import {nav_config} from "../../../config/constants";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.css";


const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={nav_config}>
    <Carousel autoPlay>
    
   
    <div>
      <img alt="" src="/images/beaches/anjuna-beach-goa-thumb-d.jpg" />
      <p className="legend"></p>
    </div>
    <div>
      <img alt="" src="/images/beaches/anjuna-beach-goa-thumb-d.jpg" />
      <p className="legend"></p>
    </div>
  </Carousel>
    {/* <Heading title=2heading}/> */}
    {/* <Listing   data={data}/> */}
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing