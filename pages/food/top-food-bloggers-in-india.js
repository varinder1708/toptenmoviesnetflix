// import fs from 'fs' import path from 'path'

import * as data  from '../../data/food/top-food-bloggers-in-india';
import{site} from 'config/constants';
import Link from "next/link";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Listing from "../../components/Listing";

const listing = () => (
  <Layout data={data}>
  
    {/* <Heading title={heading}/> */}
    <Listing   data={data.data}/>
  </Layout>
);

export default listing