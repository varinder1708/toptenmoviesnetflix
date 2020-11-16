// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
import{site} from 'config/constants';
// import * as data from 'data/dudhsagar';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Show from "components/Show";
import TopPicks from "components/TopPicks";

const listing = ({data}) => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Show   data={data.data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
export async function getStaticProps(context) {
  const url='/api/location?name=dudhsagar';
  const res = await fetch(`${site}${url}`);
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default listing