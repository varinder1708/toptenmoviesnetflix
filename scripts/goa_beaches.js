// https://www.whats-on-netflix.com/coming-soon/
const fs = require('fs')
const https = require('https');
const request = require('request');

// var stream =
// request('https://www.travelogyindia.com/goa/beaches-in-goa.html').pipe(fs.crea
// teWriteStream('./net.html'))  stream.on('finish', function () {

readfile();

// });
function readfile() {
  fs
    .readFile('./beaches.html', 'utf8', function (err, contents) {
      var myfile = contents;
      var list = [];
      // console.log(myfile) console.log("-----------------------------------"); var
      // res = selectContentbyIdInDiv('list_sidebar', contents); console.log(res);
      var moviesarray = contents.split('<div class="image-zooming-effect">');
      console.log(moviesarray.length)
      moviesarray.forEach(function (val, index) {
        console.log(val)
        var obj = {}
        var pushtoarray = true;
        var name = selectTaginString('h3', val);
        try {
          obj.name = name[1];
        } catch (e) {
          //   console.log(e);
          pushtoarray = false;
        }

        // var moviedate = selectTaginString('h4', val); try {   obj.date =
        // moviedate[1]; } catch (e) {   console.log(e);   pushtoarray = false; } var
        // moviedesc = selectTaginString('p', val); try {   obj.desc = moviedesc[1]; }
        // catch (e) {   console.log(e);   pushtoarray = false; } var type =
        // selectTaginString('b', val); try {   obj.type = type[1].replace("Type: ",
        // ""); } catch (e) {   console.log(e);   pushtoarray = false; }

        var imagetag = selectTaginString_custom('img', 'a', val);
        console.log("aaaaaaaaaa")
        console.log(imagetag)
        console.log("bbbbbbbb")

        try {
          console.log(imagetag[0]);
          console.log("ddd")
          var remoteimage = getTagAttribute(imagetag[0].replace(" </a>", "</img>"), 'src').replace("//www", "https://www")
          console.log(remoteimage)
          console.log("ccc")
          var imagename = remoteimage.substring(remoteimage.lastIndexOf("/") + 1, remoteimage.length);
          obj.image = `beaches/${imagename}`;
          saveImageToDisk(remoteimage, `../public/images/beaches/${imagename}`);

          console.log(imagename)
        } catch (e) {
          //pushtoarray = false
          console.log(e)
        }

        if (pushtoarray == true) {
          list.push(obj);
        }

      })

      var filetext = `export const heading="Top Beaches in goa";
   export const data=${JSON.stringify(list)}`;

      fs.writeFile("../data/goabeaches", filetext, 'ascii', function (err, data) {
        if (err) {
          //  return console.log(err);
        }
        //console.log(data);
      })

    });
}
function selectTaginString_custom(tag, end_tag, contents) {
  return contents.match('<\s*' + tag + '[^>]*>(.*?)<\s*/\s*' + end_tag + '>');
}
function selectTaginString(tag, contents) {
  return contents.match('<\s*' + tag + '[^>]*>(.*?)<\s*/\s*' + tag + '>');
}
function selectContentbyIdInUl(id, contents) {
  return contents.match('id=\"' + id + '\">(.*?)</ul>');
}
function selectContentbyIdInDiv(id, contents) {
  return contents.match('id=\"' + id + '\">(.*?)</div>');
}
function saveImageToDisk(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function (response) {
    response.pipe(file);
  });
}
function getTagAttribute(tag, attribute) {
  var regKey = '(?:' + attribute + ')([\\s=\'"./]+)([\\w-./?=\\#"]+)(([\'#\\&?=/".\\w\\d]+|[\\w)(\'-."\\s]+)[\'"]|)'
  var regExp = new RegExp(regKey, 'g');
  var regResult = regExp.exec(tag);
  if (regResult && regResult.length > 0) {
    var splitKey = '(?:(' + attribute + ')+(|\\s)+([=])+(|\\s|[\'"])+)|(?:([\\s\'"]+)$)'
    return regResult[0].replace(new RegExp(splitKey, 'g'), '');
  } else {
    return '';
  }
}
