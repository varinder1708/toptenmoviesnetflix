// import fs from 'fs' import path from 'path'

import {data, heading} from '../../data/upcomingshows';

import Link from "next/link";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Listing from "../../components/Listing";
import {nav_config} from "config/constants";
const canonical="https://trishn.com/netflix/upcoming-movies-netflix";

const listing = () => (
  <Layout heading={heading} canonical={canonical} showsidebar="true" navbar={nav_config}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
  </Layout>
);

export default listing