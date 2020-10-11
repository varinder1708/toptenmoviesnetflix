// import fs from 'fs' import path from 'path'

import {data, heading} from '../../data/upcomingshows';
import{site} from 'config/constants';
import Link from "next/link";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Listing from "../../components/Listing";
const canonical=`${site}/netflix/upcoming-movies-netflix`;
const listing = () => (
  <Layout layout="singlecolumnlayout" heading={heading} canonical={canonical}>
  
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
  </Layout>
);

export default listing