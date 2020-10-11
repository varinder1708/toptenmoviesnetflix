// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import * as data from '../../../data/goabeacheswithdesc';

import Link from "next/link";
import Layout from "../../../components/Layout";
import{site} from 'config/constants';
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import {nav_config} from "../../../config/constants";


const listing = () => (
  <Layout data={data}>
    
    {/* <Heading title={heading}/> */}
    <Listing   data={data.data}/>
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);

export default listing