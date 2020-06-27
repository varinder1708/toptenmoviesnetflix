// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from '../../../data/goabeacheswithdesc';

import Link from "next/link";
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
const listing = () => (
  <Layout layout="" heading={heading} sidebar="true">
    
    <Heading title={heading}/>
    <Listing   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing