// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";

import * as data from 'data/dudhsagar';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Show from "components/Show";
import TopPicks from "components/TopPicks";

const listing = () => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Show   data={data.data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing