// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import {data, heading} from 'data/travel/hidden-gems-of-india';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";
import {nav_config} from "config/constants";
const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={nav_config}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing