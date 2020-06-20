// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from '../data/goabeacheswithdesc';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Listing from "../components/Listing";
const listing = () => (
  <Layout layout="singlecolumnlayout">
    <Head>
      <title>{heading}</title>
      <meta content="goa beaches from trishn" name="description"/>
<meta content="goa beaches,best goa beaches" name="keywords"/>
<meta content="goa beaches | Trishn" property="og:title"/>
<meta content="goa beaches" property="og:description"/>
<meta content="Trishn" property="og:site_name"/>
<meta content="website" property="og:type"/>
<meta content="https://trishn.com/" property="og:url"/>

    </Head>
    <Heading title={heading}/>
    <Listing   data={data}/>
  </Layout>
);

export default listing