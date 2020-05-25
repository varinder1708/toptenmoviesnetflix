// import fs from 'fs'
// import path from 'path'
import {data,heading} from '../data/upcomingshows';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Listing from "../components/Listing";
const listing = () => (
    <Layout>
 <Heading title={heading}/>
    
      <Listing data={data}/>
      {/* {data.map((post) => (
        <li>
           <p>{post.name}</p>
           <p>{post.desc}</p>
          <p> <img  src={`/images/${post.image}`} /></p>
        </li>
      ))} */}
      
    </Layout>
  );




export default listing