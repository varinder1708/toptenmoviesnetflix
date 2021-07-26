// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
// import * as data from '../../../data/waterfalls';
import{site} from 'config/constants';
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
const listing = ({data}) => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Listing  layout=""  data={data.data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
export async function getStaticProps(context) {
  const url='/api/location?name=waterfalls in goa';
  const res = await fetch(`${site}${url}`);
  //const res = await fetch(`${url}`);
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}
export default listing