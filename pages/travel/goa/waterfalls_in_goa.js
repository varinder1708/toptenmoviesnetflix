// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import {data, heading} from '../../../data/waterfalls';
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import config from "../../../config/goa_travel";
const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={config}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing