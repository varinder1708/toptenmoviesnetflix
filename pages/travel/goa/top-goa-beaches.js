// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading,keywords} from '../../../data/goabeacheswithdesc';

import Link from "next/link";
import Layout from "../../../components/Layout";
import{site} from 'config/constants';
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import {nav_config} from "../../../config/constants";
const canonical="https://trishn.com/travel/goa/top-goa-beaches";

const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={nav_config} keywords={keywords} canonical={canonical}>
    
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing