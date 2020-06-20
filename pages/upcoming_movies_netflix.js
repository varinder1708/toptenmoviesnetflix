// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from '../data/upcomingshows';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Listing from "../components/Listing";
const listing = () => (
  <Layout layout="singlecolumnlayout">
    <Head>
<title>Upcoming netflix movies | Trishn</title>
<meta http-equiv="Last-Modified" content="Saturday, 20 June, 2020 07:15:29AM"/>
<meta name="Last-Modified" content="Saturday, 20 June, 2020 07:15:29AM"/>
<meta name="Last-Modified-Date" content="Sat, Jun 20, 2020"/>
<meta name="Last-Modified-Time" content="07.15AM IST"/>
<meta content="Upcoming nextflix movies from trishn" name="description"/>
<meta content="upcoming movies,upcoming netflix movies" name="keywords"/>
<meta content="Upcoming netflix movies | Trishn" property="og:title"/>
<meta content="Upcoming nextflix movies" property="og:description"/>
<meta content="Trishn" property="og:site_name"/>
<meta content="website" property="og:type"/>
<meta content="https://trishn.com/" property="og:url"/>


    </Head>
    <Heading title={heading}/>
    <Listing   data={data}/>
  </Layout>
);

export default listing