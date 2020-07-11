// import fs from 'fs' import path from 'path'

import {data, heading} from '../../data/food/top-food-bloggers-in-india';

import Link from "next/link";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import Listing from "../../components/Listing";
const listing = () => (
  <Layout showsidebar="true"  heading={heading}>
  
    {/* <Heading title={heading}/> */}
    <Listing   data={data}/>
  </Layout>
);

export default listing