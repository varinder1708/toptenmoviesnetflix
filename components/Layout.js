
import Head from "next/head";
import Header from "./Header";
import "./Layout.scss";
import "./index.scss";
import TopPicks from "../components/TopPicks";



const Layout = props => {
  const appTitle = `> VAR`;
  const {heading,sidebar,canonical}=props;
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
<script dangerouslySetInnerHTML={
    { __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "UA-170166482-1");
    `}
}>
</script>
<title>{props.heading} | Trishn</title>
<meta http-equiv="Last-Modified" content="Saturday, 20 June, 2020 07:15:29AM"/>
<meta name="Last-Modified" content="Saturday, 20 June, 2020 07:15:29AM"/>
<meta name="Last-Modified-Date" content="Sat, Jun 20, 2020"/>
<meta name="Last-Modified-Time" content="07.15AM IST"/>
<meta content={`${heading} from trishn`} name="description"/>
<meta content={`${heading}`} name="keywords"/>
<meta content={`${heading} | Trishn`} property="og:title"/>
<meta content={`${heading}`} property="og:description"/>
<meta content="Trishn" property="og:site_name"/>
<meta content="website" property="og:type"/>
<meta content="https://trishn.com/" property="og:url"/>
{canonical && (<link rel="canonical" href={canonical} />
)}


    </Head>
    <header class="header">
    <Header appTitle={appTitle} />
    </header>
    {/* <section class="hero">
        Hero
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere longius.
        </p>
    </section> */}

    <div class={`flex-container wrapper ${props.layout}`}>
        <section class="content">
        {props.children}        
        </section>
       {sidebar && sidebar=="true" && (<aside class="sidebar"><div>
        <TopPicks    layout="threecolumnlayout" /> 
        </div></aside>)}
        

    </div>
    <footer class="footer">
    
    </footer>
</main>
  );
};

export default Layout;