// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from 'data/goabeaches';

import Link from "next/link";
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
const listing = () => (
  <Layout layout="threecoulumnlayout" heading={heading}>
    <Heading title={heading}/>
    <Listing   data={data} layout="threerowlayout"/>
  </Layout>
);

export default listing