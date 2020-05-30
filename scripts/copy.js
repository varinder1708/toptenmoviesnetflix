// var request = require('request');

// request('https://www.whats-on-netflix.com/coming-soon/', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//        console.log(body) // Show the HTML for the Google homepage.
//    }
// })
const fs = require('fs')
const https = require('https');
const request = require('request');


 var stream =request('https://www.whats-on-netflix.com/coming-soon/').pipe(fs.createWriteStream('./net.html'))
 stream.on('finish', function () { 


    fs.readFile('./net.html', 'utf8', function(err, contents) {
      var myfile=contents;
      var res = myfile.match('id=\"release-calendar-container\">(.*?)</ul>');
      console.log("----------------------------------------------");
      var moviesarray=res[1].split('<li class="date-header">');
      console.log(moviesarray.length)
      var movielist=[];
      moviesarray.forEach(function(val,index) { 
        var obj={}
        var  pushtoarray=true;

        var moviename=val.match('<\s*h5[^>]*>(.*?)<\s*/\s*h5>');
        try{ obj.name=moviename[1]; 
        }catch(e){console.log(e);pushtoarray=false;}
        
        
        var moviedesc=val.match('<\s*p[^>]*>(.*?)<\s*/\s*p>');
        try{ obj.desc=moviedesc[1];
          }catch(e){console.log(e);pushtoarray=false;}
        
          var type=val.match('<\s*b[^>]*>(.*?)<\s*/\s*b>');
          try{ obj.type=type[1].replace("Type: ","");
            }catch(e){console.log(e);pushtoarray=false;}
          

          var imagetag=val.match('<\s*noscript[^>]*>(.*?)<\s*/\s*noscript>');
          try{
          var remoteimage=getTagAttribute(imagetag[1],'src').replace("//","https://");
          var imagename=remoteimage.substring(remoteimage.lastIndexOf("/")+1,remoteimage.length);
          saveImageToDisk(remoteimage, `../public/images/${imagename}`);
        obj.image= imagename;
        }catch(e){console.log(e)}
        

        if(pushtoarray==true){movielist.push(obj);}
        
     }) 
      
     var filetext=`export const heading="The Best Netflix Original Shows and Movies Coming in 2020";
     export const data=${JSON.stringify(movielist)}`;
     
     fs.writeFile("../data/upcomingshows", filetext,'ascii',function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      })
      //var moviesarry=res[1].match('class=\"date-header\">(.*?)</li>');
      //console.log(moviesarry)
    
    
    });

 });
 function saveImageToDisk(url, localPath) {var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function(response) {
  response.pipe(file);
  });
  }
 function getTagAttribute(tag, attribute){    
  var regKey = '(?:' + attribute + ')([\\s=\'"./]+)([\\w-./?=\\#"]+)(([\'#\\&?=/".\\w\\d]+|[\\w)(\'-."\\s]+)[\'"]|)'
  var regExp = new RegExp(regKey,'g');
  var regResult = regExp.exec(tag);   
  if(regResult && regResult.length>0){                        
      var splitKey = '(?:(' + attribute + ')+(|\\s)+([=])+(|\\s|[\'"])+)|(?:([\\s\'"]+)$)'                
      return regResult[0].replace(new RegExp(splitKey,'g'),'');
  }else{
      return '';
  }
}
// const lineReader = require('line-reader');

// lineReader.eachLine('net.html', function(line) {
//    var abc=line;
//     console.log(abc);console.log("\n")
// });
// lineReader.open('./net.html', function(reader) {console.log(reader);
//     if (reader.hasNextLine()) {
//         reader.nextLine(function(line) {
//             console.log(line);
//         });
//     }
// });

