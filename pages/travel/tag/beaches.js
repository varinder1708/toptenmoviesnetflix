// import fs from 'fs' import path from 'path'
import Head from 'next/head'
// import * as data from '../../../data/goabeaches';
import{site} from 'config/constants';
import { apicall } from 'utils/fixSidebar';
import Link from "next/link";
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";
import {nav_config} from "config/constants";

const listing = ({data}) => (
  // <Layout  data={{...data,layout:"threecolumnlayout",showsidebar:""}}>
    <Layout  data={{...data,showsidebar:""}}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data} layout="fourcolumnlayout"/>
    
    

  </Layout>
);
export async function getStaticProps(context) {
  const query='/api/location?name=beach&type=tag';
  return await apicall(query);
}

export default listing