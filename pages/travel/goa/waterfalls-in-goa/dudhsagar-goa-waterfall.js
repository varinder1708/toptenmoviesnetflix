// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import {data, heading} from 'data/dudhsagar';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Show from "components/Show";
import TopPicks from "components/TopPicks";
import {nav_config} from "../../../config/constants";
const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={nav_config}>
    {/* <Heading title={heading}/> */}
    <Show   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing