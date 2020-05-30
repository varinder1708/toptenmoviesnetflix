// import fs from 'fs'
// import path from 'path'
import Head from 'next/head'
import {data,heading} from '../data/upcomingshows';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Listing from "../components/Listing";
const listing = () => (
    <Layout>
      <Head>
        <title>{heading}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
 <Heading title={heading}/>
 <Listing data={data}/>
    </Layout>
  );




export default listing