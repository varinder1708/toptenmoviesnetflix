// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
// import * as data from 'data/himachal/things-to-do-in-dalhousie';
import LoadCarousel from 'components/LoadCarousel'
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";
import {isMobile} from "react-device-detect";
import { useEffect, useState } from "react";


const data=[ {
  "src": "himachal/kasol/kheerganga.jpg",
  "name": "kheer ganga"
},
{
  "src": "himachal/kasol/kheerganga2.jpg",
  "name": "kheer ganga"
},
{
  "src": "himachal/kasol/kheerganga3.jpg",
  "name": "kheer ganga"
},
{
  "src": "himachal/kasol/kheerganga4.jpg",
  "name": "kheer ganga"
}, {
  "src": "himachal/kasol/parvatiriver.jpg",
  "name": "parvati river ,kasol"
},{
  "src": "himachal/kasol/parvatiriver2.jpg",
  "name": "parvati river ,kasol"
},
{
  "src": "himachal/kasol/parvatiriver3.jpg",
  "name": "parvati river ,kasol"
},{
  "src": "himachal/kasol/tosh.jpg",
  "name": "tosh"
},
{
  "src": "himachal/kasol/tosh2.jpg",
  "name": "tosh"
},  {
  "src": "himachal/kasol/manikaran.jpg",
  "name": "manikaran sahib"
}, {
  "src": "himachal/kasol/parvatishangri.jpg",
  "name": "parvati shangri"
},  {
  "src": "himachal/kasol/pin.jpg",
  "name": "Pin Parvati Pass"
},
{
  "src": "himachal/kasol/pin2.jpg",
  "name": "Pin Parvati Pass"
}]


const listing = () => {
  const [device,setDevice]=useState('');
  useEffect(()=>{
   setDevice(isMobile ? 'mobile' : 'desktop')
  })
  const slidePercent=device=="mobile"?'50':'28';

  return (<Layout    data={{showsidebar:"",showsharing:""}}>
   <LoadCarousel data={data} centerMode={true} centerSlidePercentage={slidePercent}  className="multiitems" showStatus={false} selectedItem={0} infiniteLoop={true}/>
   <br/><br/>
   <LoadCarousel data={data} centerMode={true} centerSlidePercentage={slidePercent}  className="multiitems" showStatus={false} selectedItem={0} infiniteLoop={true}/>
   <br/><br/>
   <LoadCarousel data={data} centerMode={true} centerSlidePercentage={slidePercent}  className="multiitems" showStatus={false} selectedItem={0} infiniteLoop={true}/>
   
    {/* <Heading title={heading}/> */}
    {/* <Listing  layout=""  data={data.data}/> */}
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
}

export default listing