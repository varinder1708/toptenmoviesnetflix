
import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import {nav_config} from "config/constants";
import Share from "./Share";
import {isMobile,isBrowser} from "react-device-detect";
import {site} from "config/constants";
import "./Layout.scss";
import "./index.scss";
import "./Heading.scss";
import { useEffect, useState } from "react";






const Layout = props => {
  const appTitle = `VAR`;
  
  const {layout="",heading,showsidebar="true",canonical,keywords,data,showsharing="true"}=props.data;
  
  let image="";
  if(data && data[0] && data[0].image[0] && data[0].image[0].src){
    image=data[0].image[0].src
  }
  else if(data && data[0] && data[0].image){ 
    image=data[0].image;

  }
  
  const navbar=nav_config;

  const [device,setDevice]=useState('');
  useEffect(()=>{
     setDevice(isMobile ? 'mobile' : 'desktop')
  })


  return (
    // <div className="Layout">
    //   <Head>
    //     <title>WHATABYTE</title>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <meta charSet="utf-8" />
    //   </Head>

    //   <Header appTitle={appTitle} />
    //   <div className="Content">{props.children}</div>
    //   <NavBar navButtons={navButtons} />
      
    // </div>
    
    <main className={`${device}`}>
      <Head>
      <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-170166482-1" >

</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script dangerouslySetInnerHTML={
    { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-170166482-1");
    `}
}>
</script>
<link rel="icon" href="/images/icon.png"/>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
<title>{`${heading}`}</title>
<meta http-equiv="Last-Modified" content="Monday, 10 Oct, 2020 07:15:29AM"/>
<meta name="Last-Modified" content="Monday, 10 Oct, 2020 07:15:29AM"/>
<meta name="Last-Modified-Date" content="Mon, Oct 10, 2020"/>
<meta name="Last-Modified-Time" content="07.15AM IST"/>
<meta content={`${heading}`} name="description"/>

<meta content={keywords?keywords:heading} name="keywords"/>
<meta content={`${heading}`} property="og:title"/>
<meta content={`${heading}`} property="og:description"/>
<meta content="Trishn" property="og:site_name"/>
<meta content="website" property="og:type"/>
<meta content={`${site}/images/${image}`} property="og:image"/>
<meta content={`${canonical}`} property="og:url"/>

{canonical && (<link rel="canonical" href={`${site}${canonical}`} />
)}


    </Head>
    
    <header className={`${device} header`}>
    
    <span class="logo">
    <Link href="/">
      <a>
      <img alt="travel" src="/images/logo.png"/>
      </a>
    </Link>
    </span>
    
    <Header navbar={navbar}/>
    </header>
    {/* <nav>
      <ul>
      <li><a href="">Hill Stations</a></li>
      <li><a href="">Beaches</a></li>
      </ul>
    </nav> */}
  
    {/* <section class="hero">
        Hero
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere longius.
        </p>
    </section> */}

    <div className={`flex-container wrapper ${layout}`}>
    
        <section class="content">
        <h1>
      {heading}
    </h1>
   
  {showsharing && showsharing=="true" && (<Share url={canonical}/>)}
    
        {props.children}        
        </section>
       {showsidebar && showsidebar=="true" && ( <aside className="sidebar"><SideBar/></aside>)}
        

    </div>
    <div className="clearfix"></div>
    <Footer/>
    
</main>
  );
};

export default Layout;