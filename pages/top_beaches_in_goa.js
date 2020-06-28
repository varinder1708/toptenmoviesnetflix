// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from '../data/goabeaches';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Listing from "../components/Listing";
import TopPicks from "../components/TopPicks";
const canonical="https://trishn.com/travel/goa/top_beaches_in_goa";
const listing = () => (
  <Layout layout="threecolumnlayout" heading={heading} canonical={canonical}>
    <Heading title={heading}/>
    <Listing   data={data} layout="threecolumnlayout"/>
    <TopPicks    layout="threecolumnlayout"/>
  </Layout>
);

export default listing