
import Head from "next/head";
import Header from "./Header";
import "./Layout.scss";
import "./index.scss";



const Layout = props => {
  const appTitle = `> VAR`;

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
        {/* <aside class="sidebar">
            Sidebar                
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere longius. At Zeno eum non beatum modo, sed etiam divitem dicere ausus est. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Itaque quantum adiit periculum!
            </p>
        </aside> */}

    </div>
    <footer class="footer">
    
    </footer>
</main>
  );
};

export default Layout;