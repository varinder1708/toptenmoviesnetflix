// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
// import * as data from 'data/himachal/things-to-do-in-dalhousie';
import{site} from 'config/constants';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";

  // const data={
  // canonical:`/travel/himachal/dalhousie/things-to-do-in-dalhousie`,
  // keywords : "Things to do in dalhousie, himachal pradesh, Places To Visit In Dalhousie,kalatop wildlife,khajjiar,mini switzerland of india,Panch Pulla Waterfall,dainkund peak,chamera lake",
  // heading : "Things to do in Dalhousie",
  // data : [
  //   {
  //     "link": "",
  //     "name": "Panch Pulla Waterfall",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/Panchpula.jpg",
  //         "name": "panchpula"
  //       }, {
  //         "src": "himachal/dalhousie/panch2.jpg",
  //         "name": "panchpula"
  //       }
  //     ],
  //     "desc": 'Panchpula is a waterfall and a popular picnic spot in Dalhousie. It is best known for trekking and its marvellous, cascading beauty. Five streams come together to form this waterfall, while Panchpula\'s main stream supplies water to the various localities of Dalhousie. The best time to visit this wonderful spot is in summer and monsoon as the water gushes with full force during this season and the place looks its bes'
  //   },
  //   {
  //     "link": "",
  //     "name": "Khajjiar, mini-Switzerland of India",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/khajjar1.jpg",
  //         "name": "Khajjiar"
  //       },{
  //         "src": "himachal/dalhousie/khajjar2.jpg",
  //         "name": "Khajjiar"
  //       },{
  //         "src": "himachal/dalhousie/khajjar3.jpg",
  //         "name": "Khajjiar"
  //       },{
  //         "src": "himachal/dalhousie/khajjar4.jpg",
  //         "name": "Khajjiar"
  //       },{
  //         "src": "himachal/dalhousie/khajjar5.jpg",
  //         "name": "Khajjiar"
  //       }
  //     ],
  //     "desc": 'Often referred to as \'mini-Switzerland of India\', Khajjiar is a small town near Dalhousie which provides tourists a unique combination of forests, lakes and pastures.<br/> Khajjiar is a small plateau which also has a small lake which is one of the most favored tourist spots in this town. Khajjiar is surrounded by green meadows and dense forests and it is also known for its beautiful temples. This region also attracts adventure seekers and has a lot of options in adventure sports like paragliding, horse riding, zorbing, trekking etc. Khajjiar is a must visit place for everyone coming to Dalhousie and its nearby regions. However, the way to Khajjiar can be closed sometimes during winters because of heavy snowfall.'
  //   },
  //   {
  //     "link": "",
  //     "name": "Hike up to Kalatop Khajjiar Sanctuary",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/kalatop1.jpg",
  //         "name": "kalatop"
  //       },{
  //         "src": "himachal/dalhousie/kalatop2.jpg",
  //         "name": "kalatop"
  //       },{
  //         "src": "himachal/dalhousie/kalatop3.jpg",
  //         "name": "kalatop"
  //       },{
  //         "src": "himachal/dalhousie/kalatop4.jpg",
  //         "name": "kalatop"
  //       }
  //     ],
  //     "desc": 'Kalatop Khajjiar Sanctuary is a 30.69 km² animal sanctuary at Kalatop and Khajjiar in the Chamba district of Himachal Pradesh, India. The sanctuary area is well laid out for trekking trails both at Kalatop and Khajjiar<br/>Pheasants, serow and black bear are some of the common animals found here<br/>Its a trackers paradise looking for mild trackings(beginners) 12 km track from Kalatop to Khajjiar is fun forest rest house and trackers hut provide nice accommodation.<br/>Tourists normally prefer to walk up to Kalatop from Lakkarmandi, which is approximately 4 kms from Kalatop, to take in the amazing views of the beautiful landscapes of Kalatop. This region is less explored compared to other area of Dalhousie, and so forest trailing, wildlife safari, and picnics are so much fun here.'
  //   },
  //   {
  //     "link": "",
  //     "name": "Dainkund Peak",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/dainkund1.jpg",
  //         "name": "dainkund peek"
  //       },{
  //         "src": "himachal/dalhousie/dainkund2.jpg",
  //         "name": "dainkund peek"
  //       },{
  //         "src": "himachal/dalhousie/dainkund3.jpg",
  //         "name": "dainkund peek"
  //       }
  //     ],
  //     "desc": 'Being the highest point in Dalhousie, the peak offers a bird’s eye view of the astonishing verdant valleys and mountains. For nature fanatics seeking a serene and calm place, Dainkund Peak is worth exploring.<br/> Camping and trekking to the peak makes your trip all the more exciting.<br/>Dainkund peak is a 5km trek starting from Dainkund basecamp which is Lakkadmandi. Start the trek at 10.00 am in the morning after meeting the guide at the Lakkadmandi, the reporting point for the trek. The Dainkund trek with an experienced English speaking trekking guide will make your journey more convenient and informative.<br/> The route to the peak is covered with a dense forest of fir and deodars. The woods, gently squeeze the trail and there will be times when you will be walking over, or between fallen trees. Reach the ridge at the end of the forest from where it\'s a one and a half kilometer stretch to the peak.'
  //   },
  //   {
  //     "link": "",
  //     "name": "Satdhara Falls",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/satdhara1.jpg",
  //         "name": "Satdhara"
  //       }
  //     ],
  //     "desc": 'The Satdhara Falls lie on the way to Panchpulla, which is another favorite destination of tourists in Dalhousie. This waterfall is known to have great therapeutic value as the water in these springs contains mica, which has medicinal properties that are able to cure many diseases. One can go for a walk to this lovely waterfall and enjoy the everlasting beauty that it has while taking a dip in the crystal clear water of the fall.<br/>There are many sightseeing attractions nearby Satdhara Fall that offer amazing views of snow-capped hills, lush green valleys, and exquisite springs. One can easily access this serene destination through a bus or car, but trekking remains one of the best options to explore the loveliness of the place more closel'
  //   },
  //   {
  //     "link": "",
  //     "name": "Chamera Lake",
  //     "image": [
  //       {
  //         "src": "himachal/dalhousie/chamera1.jpg",
  //         "name": "chamera lake"
  //       },
  //       {
  //         "src": "himachal/dalhousie/chamera2.jpg",
  //         "name": "chamera lake"
  //       },
        
  //     ],
  //     "desc": 'Chamera Lake is a mystic lake located in the Chamba district in , in the northern state of Himachal Pradesh. It is actually located 25 kms from the main hill station. At an elevated height of 763 meters above sea level, it makes a perfect getaway with friends, family and loved ones, to spend a day or have a picnic. The Chamera Dam nearby is the source of Chamera Lake, as it is the former’s reservoir. Apart from this source, it receives a continual supply from River Ravi. '
  //   }
  // ]
  // }

const listing = ({data}) => (
  <Layout    data={{...data,showsidebar:""}}>
    {/* <Heading title={heading}/> */}
    <Listing  layout="homelayout"  data={data.data} />
    {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
export async function getStaticProps(context) {
  const url='/api/location?type=all';
  const res = await fetch(`${site}${url}`);
  const json = await res.json();
  //const json= await {"data":[{"name":"13 best hill stations in Himachal","image":"himachal/shimla/shimla.jpg","desc":"","link":"/travel/himachal/hill-stations-in-himachal","id":"hill-stations-in-himachal"},{"name":"Things to do in Kasol","image":"himachal/kasol/kheerganga.jpg","desc":"","link":"/travel/himachal/kasol/things-to-do-in-kasol","id":"things-to-do-in-kasol"},{"name":"Things to do in Dalhousie","image":"himachal/dalhousie/khajjar1.jpg","desc":"","link":"/travel/himachal/dalhousie/things-to-do-in-dalhousie","id":"things-to-do-in-dalhousie"},{"name":"Top 10 Beaches in Goa","image":"beaches/anjuna-beach-goa-thumb-d.jpg","desc":"","link":"/travel/goa/top-beaches-in-goa","id":"top-beaches-in-goa"},{"name":"Waterfalls in goa","image":"waterfalls/dudhsagar_falls.jpg","desc":"","link":"/travel/goa/waterfalls-in-goa","id":"waterfalls-in-goa"},{"name":"Top 25 beaches in Goa","image":"beacheswithdesc/Panjim_Goa.jpg","desc":"","link":"/travel/goa/top-goa-beaches","id":"top-beaches-in-goa"},{"name":"Thailand Beautiful Beaches","image":"thailand/beaches/ang_thong.jpg","desc":"","link":"/travel/thailand/most-beautiful-beaches-in-thailand","id":"most-beautiful-beaches-in-thailand"},{"name":"Hippie Destinations in India","image":"travel/hippie-destinations-india/hippie.jpg","desc":"","link":"/travel/hippie-destinations-in-india","id":"hippie-destinations-in-india"}],"name":"Top Travel Locations in May","heading":"Top Travel Locations in May","canonical":"/"}
  //console.log(json);
  //console.log("aaaaaaaa")
  return {
    props: {
      data: json,
    },
  };
}

export default listing