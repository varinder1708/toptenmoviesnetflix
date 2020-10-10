// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import {data, heading,keywords} from 'data/travel/hippie-destinations-in-india';
import{site} from 'config/constants';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";
import {nav_config} from "config/constants";
const canonical=`${site}/travel/hippie-destinations-in-india`;
const listing = () => (
  <Layout layout="" heading={heading} showsidebar="true" navbar={nav_config} keywords={keywords} canonical={canonical}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing