import{site} from 'config/constants';

export async function apicall(url)
 {
    const res = await fetch(`${site}${url}`);
    const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
 }
 export  function fixSidebar(id) {
    var e = $(id);
    var lastScrollTop = 0;
    var firstOffset = e.offset().top;
    var lastA = e.offset().top;
    var isFixed = false;
    $(window).scroll(function(event){
        if (isFixed) {
            return;
        }
        var a = e.offset().top;
        var b = e.height();
        var c = $(window).height();
        var d = $(window).scrollTop();
        if (b <= c - a) {
            e.css({position: "fixed"});
            isFixed = true;
            return;
        }			
        if (d > lastScrollTop){ // scroll down
            if (e.css("position") != "fixed" && c + d >= a + b) {
                e.css({position: "fixed", bottom: 0, top: "auto"});
            }
            if (a - d >= firstOffset) {
                e.css({position: "absolute", bottom: "auto", top: lastA});
            }
        } else { // scroll up
            if (a - d >= firstOffset) {
                if (e.css("position") != "fixed") {
                    e.css({position: "fixed", bottom: "auto", top: firstOffset});
                }
            } else {
                if (e.css("position") != "absolute") {
                    e.css({position: "absolute", bottom: "auto", top: lastA});
                }               
            }
        }
        lastScrollTop = d;
        lastA = a;
    });
}

//fixMe("#stick");
