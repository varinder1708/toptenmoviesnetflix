// import fs from 'fs' import path from 'path'
import Head from 'next/head'
// import * as data from '../../../data/goabeaches';
import{site} from 'config/constants';
import Link from "next/link";
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import {nav_config} from "../../../config/constants";

const listing = ({data}) => (
  // <Layout  data={{...data,layout:"threecolumnlayout",showsidebar:""}}>
    <Layout  data={{...data,showsidebar:""}}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data.data} layout="fourcolumnlayout"/>
    <TopPicks showheading="true"    layout="threecolumnlayout"/>
    

  </Layout>
);
export async function getStaticProps(context) {
  const url='/api/location?name=top beaches in goa';
  //console.log(`${site}${url}`)
  const res = await fetch(`${site}${url}`);
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default listing