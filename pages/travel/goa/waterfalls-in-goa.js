// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import * as data from '../../../data/waterfalls';

import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
const listing = () => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Listing  layout=""  data={data.data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing