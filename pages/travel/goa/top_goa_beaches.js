// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import {data, heading} from 'data/goabeacheswithdesc';

import Link from "next/link";
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
const listing = () => (
  <Layout layout="singlecolumnlayout" heading={heading}>
    
    <Heading title={heading}/>
    <Listing   data={data}/>
  </Layout>
);

export default listing