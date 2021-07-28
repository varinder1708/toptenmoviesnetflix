// import fs from 'fs' import path from 'path'
import Head from 'next/head'
// import * as data from '../../../data/goabeaches';
import{site} from 'config/constants';
import Link from "next/link";
import Layout from "../../../components/Layout";
import Heading from "../../../components/Heading";
import Listing from "../../../components/Listing";
import TopPicks from "../../../components/TopPicks";
import {nav_config} from "../../../config/constants";

const listing = ({data}) => (
  // <Layout  data={{...data,layout:"threecolumnlayout",showsidebar:""}}>
    <Layout  data={{...data,showsidebar:""}}>
    {/* <Heading title={heading}/> */}
    <Listing   data={data.data} layout="fourcolumnlayout"/>
    <TopPicks showheading="true"    layout="threecolumnlayout"/>
    

  </Layout>
);
export async function getStaticProps(context) {
  const url='/api/location?name=Top beaches in goa';
  console.log(`${site}${url}`)
  const res = await fetch(`${site}${url}`);
  const json = await res.json();
  //const json =await {"name":"top beaches in goa","state":"goa","type":"beach","canonical":"`/travel/goa/top-beaches-in-goa`","keywords":"goa hotels,goa beaches,goa trance,goa tours,goa travel,hotels in goa,travel to goa,goa india,goa resorts,beach travel to goa","heading":"top Beaches in goa","data":[{"name":"Anjuna Beach","image":"beaches/anjuna-beach-goa-thumb-d.jpg"},{"name":"Baga Beach","image":"beaches/baga-beach-goa-thumb-d.jpg"},{"name":"Calangute Beach","image":"beaches/calangute-beach-goa-thumb-d.jpg"},{"name":"Candolim Beach","image":"beaches/candolim-beach-goa-thumb-d.jpg"},{"name":"Cansaulim Beach","image":"beaches/cansaulim-beach-goa-thumb-d.jpg"},{"name":"Chapora Beach","image":"beaches/chapora-beach-goa-thumb-d.jpg"},{"name":"Colva Beach","image":"beaches/colva-beach-goa-thumb-d.jpg"},{"name":"Majorda Beach","image":"beaches/majorda-beach-goa-thumb-d.jpg"},{"name":"Miramar Beach","image":"beaches/miramar-beach-goa-thumb-d.jpg"},{"name":"Morjim Beach","image":"beaches/morjim-beach-goa-thumb-d.jpg"},{"name":"Palolem Beach","image":"beaches/palolem-beach-goa-thumb-d.jpg"},{"name":"Vagator Beach","image":"beaches/vagator-beach-goa-thumb-d.jpg"}]}
  return {
    props: {
      data: json,
    },
  };
}

export default listing