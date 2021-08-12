// import fs from 'fs' import path from 'path'
import Head from "next/head";
import Link from "next/link";
// import * as data from 'data/himachal/hill-stations-in-himachal.js';
import { site } from "config/constants";
import { apicall } from "utils/fixSidebar";
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";

const listing = ({ data }) => (
  <Layout data={{ ...data }}>
    {/* <Heading title={heading}/> */}
    <Listing layout="" data={data.data} />
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
export async function getStaticProps(context) {
  const query = "/api/location?name=things to do in pachmarhi";
  return await apicall(query);
}

export default listing;
