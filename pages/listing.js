// import fs from 'fs'
// import path from 'path'
import {data,heading} from '../data/upcomingshows';

import Link from "next/link";
import Layout from "../components/Layout";
import Heading from "../components/Heading";

const listing = () => (
    <Layout>
 {/* <Heading title={heading}/> */}
      <ul>
      {data.map((post) => (
        <li>
           <p>{post.name}</p>
           <p>{post.desc}</p>
        </li>
      ))}
    </ul>  
    </Layout>
  );




export default listing