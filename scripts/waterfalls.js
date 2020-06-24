// https://www.thrillophilia.com/waterfalls-in-goa
// https://www.whats-on-netflix.com/coming-soon/
const fs = require('fs')
const https = require('https');
const request = require('request');
const jsdom = require("jsdom")
const $ = require("jquery")(new jsdom.JSDOM().window);

const directreadsource = true;

if (directreadsource == true) {
  readfile();
} else {
  var stream = request('https://www.thrillophilia.com/waterfalls-in-goa').pipe(fs.createWriteStream('./downloaded_html/waterfalls.html'))
  stream.on('finish', function () {
    readfile();
  });
}
function readfile() {
  fs
    .readFile('./downloaded_html/waterfalls.html', 'utf8', function (err, contents) {
      var array_file=[];
      
      
      var container = $(contents).find(".post-holder");
      $(container).find(".main-card-container").each(function (index, obj) {
            var local_obj={};
            var pushtoarray = true;
            console.log("-----------------")
          
          var name=$(obj).find("h3").text().trim()
          local_obj.name=name;
          console.log(local_obj.name)
          
          var imageName=local_obj.name.toLowerCase().replace(" ","_").replace(" ","_").replace(" ","_");
          local_obj.image='waterfalls/'+imageName+'.jpg';
          console.log(local_obj.image);
          
          
          var remoteImage=$(obj).find("picture img").attr("data-src");
          console.log(remoteImage)
          //saveImageToDisk(remoteImage, `../public/images/${local_obj.image}`);
          
          var desc=$(obj).find(".read-more-content").html();
          local_obj.desc=desc;
          console.log(local_obj.desc)
          if(pushtoarray){array_file.push(local_obj)}
        })
      
    

      var filetext = `export const heading="Waterfalls in Goa";
   export const data=${JSON.stringify(array_file)}`;

      fs.writeFile("../data/waterfalls", filetext, 'ascii', function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      })
      // var moviesarry=res[1].match('class=\"date-header\">(.*?)</li>');
      // console.log(moviesarry)

    });
}

function saveImageToDisk(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}
