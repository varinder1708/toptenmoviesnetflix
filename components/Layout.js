
import Head from "next/head";
import Header from "./Header";
import SideBar from "./SideBar";
import {nav_config} from "config/constants";
import Share from "./Share";
import {isMobile,isBrowser} from "react-device-detect";
import {site} from "config/constants";
import "./Layout.scss";
import "./index.scss";
import "./Heading.scss";





const Layout = props => {
  const appTitle = `VAR`;
  
  const {layout="",heading,showsidebar="true",canonical,keywords,data}=props.data;
  let image="";
  image=data[0] && data[0].image[0] && data[0].image[0].src?data[0] && data[0].image[0] && data[0].image[0].src:data[0] && data[0].image?data[0].image:""
  const navbar=nav_config;
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
    
    <main>
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
<meta http-equiv="Last-Modified" content="Monday, 20 July, 2020 07:15:29AM"/>
<meta name="Last-Modified" content="Monday, 20 July, 2020 07:15:29AM"/>
<meta name="Last-Modified-Date" content="Mon, July 20, 2020"/>
<meta name="Last-Modified-Time" content="07.15AM IST"/>
<meta content={`${heading}`} name="description"/>

<meta content={keywords?keywords:heading} name="keywords"/>
<meta content={`${heading}`} property="og:title"/>
<meta content={`${heading}`} property="og:description"/>
<meta content="Trishn" property="og:site_name"/>
<meta content="website" property="og:type"/>
<meta content={`${canonical}`} property="og:url"/>



{image!="" && (<meta content={`${site}/images/${image}`} property="og:image"/>
)}


{canonical && (<link rel="canonical" href={canonical} />
)}


    </Head>
    <header class="header">
    {isMobile?<span class="logo"><img src="/images/logo.png"/></span>:''}
    <Header navbar={navbar}/>
    
    </header>
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
   
  <Share url={canonical}/>
    
        {props.children}        
        </section>
       {showsidebar && showsidebar=="true" && ( <aside className="sidebar"><SideBar/></aside>)}
        

    </div>
    <footer className="footer">
    <div itemscope="itemscope" itemtype="http://schema.org/WebSite">
    <link itemprop="url" href={`${site}`}/>
  </div>
    </footer>
</main>
  );
};

export default Layout;