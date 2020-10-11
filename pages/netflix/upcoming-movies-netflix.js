// import fs from 'fs' import path from 'path'

import * as data  from '../../data/upcomingshows';
import{site} from 'config/constants';
import Link from "next/link";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Listing from "../../components/Listing";
import {nav_config} from "config/constants";


const listing = () => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data.data}/>
  </Layout>
);

export default listing