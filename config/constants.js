const isProd = process.env.NODE_ENV === 'production'
//export const  site=isProd?'https://trishn.com':'http://localhost:3000';
//export const  site=isProd?'https://toptenmoviesnetflix.vercel.app/':'http://localhost:3000';
export const  site=isProd?'https://placestotravelinindia.com/':'http://localhost:3000';
export const nav_config = {
    'showmenu': true,
    navButtons : [
      {
        label: "13 Best Hill Stations in Himachal",
        path: "/travel/himachal/hill-stations-in-himachal",
        //   icon: <FontAwesomeIcon icon={faCompass} />
      },
      {
        label: "Waterfalls in Goa",
        path: "/travel/goa/waterfalls-in-goa",
        //   icon: <FontAwesomeIcon icon={faCompass} />
      }, {
        label: "Top 26 beaches in Goa",
        path: "/travel/goa/top-goa-beaches",
        //   icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
      }, {
        label: "hippie destinations in India",
        path: "/travel/hippie-destinations-in-india",
        //   icon: <FontAwesomeIcon icon={faShoppingCart} />
      }, {
        label: "Beautiful Beaches in Thailand",
        path: "/travel/thailand/most-beautiful-beaches-in-thailand",
        //   icon: <FontAwesomeIcon icon={faShoppingCart} />
      }, {
        label: "Top Food Bloggers in India",
        path: "/food/top-food-bloggers-in-india",
        //   icon: <FontAwesomeIcon icon={faShoppingCart} />
      }, {
        label: "Things to do in Dalhousie",
        path: "/travel/himachal/dalhousie/things-to-do-in-dalhousie",
        //   icon: <FontAwesomeIcon icon={faShoppingCart} />
      },
      , {
        label: "Things to do in Kasol",
        path: "/travel/himachal/kasol/things-to-do-in-kasol",
        //   icon: <FontAwesomeIcon icon={faShoppingCart} />
      }
      // {   label: "Profile",   path: "/profile",   icon: <FontAwesomeIcon
      // icon={faUser} /> }
    ]
  };
  
  