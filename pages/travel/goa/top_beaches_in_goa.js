// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from '../../../data/goabeaches';

import Link from "next/link";
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import config from "../../../config/goa_travel";
const listing = () => (
  <Layout layout="threecolumnlayout" heading={heading} navbar={config}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data} layout="threecolumnlayout"/>
    <TopPicks showheading="true"    layout="threecolumnlayout"/>
    

  </Layout>
);

export default listing