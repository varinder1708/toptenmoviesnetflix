// import fs from 'fs' import path from 'path'
import Head from 'next/head'
import Link from "next/link";
// import * as data from 'data/travel/hippie-destinations-in-india';
import {site} from 'config/constants';
import {apicall} from 'utils/fixSidebar';
import Layout from "components/Layout";
import Heading from "components/Heading";
import Listing from "components/Listing";
import TopPicks from "components/TopPicks";
import {nav_config} from "config/constants";

const listing = ({data}) => (
  <Layout data={data}>
    {/* <Heading title={heading}/> */}
    <Listing layout="" data={data.data}/> {/* <TopPicks    layout="threecolumnlayout"/> */}
  </Layout>
);
export async function getStaticProps(context) {

  const query = '/api/location?name=hippie destinations in india';
  return await apicall(query);
  // const res = await fetch(`${site}${url}`); //const res = await
  // fetch(`${url}`); const json = await res.json(); //const json = await
  // {"name":"hippie destinations in
  // india","country":"india","canonical":"`/travel/hippie-destinations-in-india`",
  // "keywords":"best hippie places in india, Hippie Destinations in India, Hippie
  // Locations in India","heading":"Hippie Destinations in
  // India","data":[{"link":"","name":"Goa","image":[{"name":"","src":"travel/hippi
  // e-destinations-india/goa2.jpg"},{"name":"","src":"travel/hippie-destinations-i
  // ndia/goa.jpg"}],"desc":"Goa has everything to offer when it comes to being one
  // of the top Hippie Places In India.<br/>It is a far cry from the hippie haven
  // or a beach getaway, and one of the only few destinations that is open 24x7.
  // The laid-backness (susegad) of Goa attracts as many international tourists as
  // it does Indians, or even more so.","best":"Mid November-Mid
  // February","nrs":"","na":"","htr":""},{"link":"","name":"Kasol, Himachal
  // Pradesh","image":[{"src":"travel/hippie-destinations-india/kasol.jpg","name":"
  // kasol"},{"src":"travel/hippie-destinations-india/kasol-trek.jpg","name":"kasol
  // trek"},{"src":"travel/hippie-destinations-india/kasol-kheerganga-trek.jpg","n
  // ame":"kasol kheerganga trek"}],"desc":"The place has been home to many Israeli
  // hippies as suggested by the Hebrew signboards everywhere.<br/><br/>Kasol is
  // a hamlet in the district Kullu of the Indian state of Himachal Pradesh. It is
  // situated in Parvati Valley, on the banks of the Parvati River, on the way
  // between Bhuntar and Manikaran. It is located 30 km from Bhuntar and 3.5 km
  // from Manikaran.<br/>It is called Mini Israel of India due to a high percentage
  // of Israeli tourists here.<br/>Kasol Music Festival is a music festival which
  // happens in Kasol on every New Year\\'s Eve. People from around the world
  // gather for this festival.<br/><br/>Amongst the best places to visit in Kasol,
  // Kheer Ganga showcases the panoramic beauty of the lush green hills and clear
  // skies","best":"October-June","nrs":"","na":"","htr":""},{"link":"","name":"Var
  // kala,
  // Kerala","image":[{"src":"travel/hippie-destinations-india/varkala.jpg","name":
  // "varkala
  // beach"},{"src":"travel/hippie-destinations-india/varkala2.jpg","name":"varkala
  // beach cliff"}],"desc":"A small strand of golden beach nuzzles Varkala\\'s
  // North Cliff area, where restaurants play innocuous world music and shops sell
  // elephant-stamped trousers, silver jewellery and cotton yoga-mat bags. While
  // it\\'s certainly on the beaten track and the sales pitch can be tiring,
  // Varkala is still a great place to watch the days slowly turn into weeks, and
  // it\\'s easy to escape the crowds further north or south where the beaches are
  // cleaner and quieter.<br/><br/>Varkala is a town in the south Indian state of
  // Kerala. Just south, Papanasam Beach is believed to have holy waters.
  // <br/>Varkala offers excellent accommodation facilities for tourists and is
  // fast becoming a popular health resort with many Ayurvedic massage
  // centres.","best":"","nrs":"Varkala, about 3 km away","na":"Trivandrum
  // International Airport, about 57 km away","htr":""},{"link":"","name":"Tosh,
  // Himachal
  // Pradesh","image":"travel/hippie-destinations-india/tosh.jpg","desc":"Tosh is
  // everything you wish for when it comes to exploring places offering beautiful
  // landscapes and an enthralling experience. It\\'s surrounded by mesmerising
  // mountains, lushful forests and scenic routes. An ideal place for all the
  // hippies in India to cure their wanderlust and dwell in good vibes of mother
  // nature.<br/><br/> It is located at about 2,400 metres in elevation on a hill
  // near Kasol in the Parvati Valley, surrounded by mountains.<br/>Since the
  // village of Tosh is located at a high terrain, there are no motorable roads.
  // However, the village is quite small and can be easily explored by walking
  // around.<br/><br/>The trek to Tosh starts from the base of Kheerganga and is
  // one of the most scenic routes in the valley as you walk side by side the
  // Rivulet Tosh. The beauty of Tosh is at its best in the winters, when the snow
  // on the trail and around the village gives you the feeling of being what
  // closely resembles our idea of Paradise. The serene beauty of this place is
  // incomparable and that is why Tosh and a trek to Tosh is a must have experience
  // in Kasol at least once in your lifetime. ","best":"April To
  // October","nrs":"","na":"","htr":"The best way to reach Tosh is to take the bus
  // from Delhi and get down at Bhuntar. Since no buses travel from Delhi to
  // Bhuntar directly, you can take the bus going to Manali as Bhuntar is located
  // 50 km before Manali. From Bhuntar, you will find HRTC buses going to
  // Barshaini. Once you reach Barshaini, you can trek your way to Tosh. You can
  // also take a shared cab for the 5 km long route at the cost of INR
  // 100"},{"link":"","name":"Manali, Himachal
  // Pradesh","image":"travel/hippie-destinations-india/manali.jpg","desc":"Himacha
  // l Pradesh covers the north front of the country, offering the tourists with
  // some of the most wonderful hill stations in the world and Manali is
  // undoubtedly one of the most visited one. The main credit goes to its snow
  // covered peaks, alluring ambience, gorgeous valleys and lush greenery. It is a
  // charming slope station located at the reservoir of the River Beas. The tourist
  // from all parts of the world, look for best tour packages for Manali, every
  // year, as it is the most appreciated getaway in India.<br/>Manali has always
  // been a very popular destination for the old, young travelers as well as newly
  // married couples who look for cheapest Manali tour packages & Honeymoon
  // Packages to experience the perfect solitude and calmness at its
  // best","best":"May to October","nrs":"","na":"","htr":"You can reach Manali by
  // air through the nearest airport located at Bhuntar, which is a well-connected
  // to major cities such as Chandigarh and Delhi.<br/> You can even reach Manali
  // by through AC & Non AC HRTC Buses or Private Bus Operators from many places
  // such as New Delhi, Dharamshala, Kullu, Leh & Shimla. You can book the Manali
  // holiday packages in which the transport is also included or you can book Volvo
  // buses that are good at riding in the mountainous regions. You can even book
  // private cabs to Manali."},{"link":"","name":"McLeodGanj, Himachal
  // Pradesh","image":"travel/hippie-destinations-india/mc.jpg","desc":"Mcleodganj
  // is a hill station near Dharamshala, popular among trekkers. Located in Kangra
  // district, Mcleodganj\\'s culture is a beautiful blend of Tibetan with some
  // British influence.<br/>Also known as Little Lhasa and famous around the world
  // for being home to the Tibetan spiritual leader Dalai Lama, Mcleod Ganj is a
  // beautiful town situated near upper Dharamsala. Nestled amidst majestic hills
  // and lush greenery, this town has one of the most mesmerising landscapes in the
  // entire state of Himachal Pradesh and attracts a lot of tourists throughout
  // the year. The towns of Dharamsala, Mcleodganj, Bhagsu Nag and Kangra are
  // situated very close to each other and tourists must cover all these
  // destinations while travelling here","best":"","nrs":"The nearest broad gauge
  // railway station is Pathankot Cantt.(Chakki) at a distance of 91 km from
  // McleodGanj and 88 km from Dharamshala and nearest narrow gauge railway station
  // is Kangra mandir railway station. Further, you can hire a taxi, or direct
  // buses","na":"Gaggal airport is the nearest airport from Mcleodganj, located at
  // a distance of only 10 km from nearby Dharamshala. This airport is connected
  // to Delhi through frequent flights.","htr":"Mcleodganj can be reached from
  // Dharamshala (10 km from Mcleodganj) as well. Every medium of transport well
  // connects both the cities. From New Delhi, the distance is approximately 500 km
  // to Mcleodganj.You can take overnight Volvo buses or can hire a taxi direct
  // to the destination"},{"link":"","name":"Rishikesh,
  // Uttarakhand","image":"travel/hippie-destinations-india/rishikesh.jpg","desc":"
  // Located in the foothills of the Himalayas along the convergence of Ganga and
  // Chandrabhaga River, Rishikesh is a small town in the Dehradun district,
  // located close to Haridwar in Uttarakhand. Rishikesh (also called as
  // Hrishikesh) is known for its adventure activities, ancient temples, popular
  // cafes and as the \"Yoga Capital of the World\"<br/>As it lies on the holy
  // banks of river Ganga, Rishikesh has been a hub of Sadhus (saints) with
  // numerous ashrams teaching spirituality, yoga, meditation and Ayurveda
  // springing up","best":"","nrs":"","na":"","htr":""}]} return {   props: {
  // data: json,   }, };
}
export default listing