import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import {data} from '../../data/more_reads_goa';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  console.log(req.query)  
  const { name,type } = req.query;
    //console.log("********",name)
    //console.log("******",type)
    let doc;
    
    if(type=='all')
    {
      console.log(data)
      //return data;
      doc={"data":data,"heading":"Top Travel Locations in May","canonical":"/"};
      // const pipeline = [
   
      //   { "$project": {_id:0,name:1,"image":{$arrayElemAt:["$data.image",0]}  } }
        
         
        
      //   ]
      // doc = await req.db.collection('places').aggregate(pipeline).toArray()
      // .then(items => {
      //   console.log(`aaaaaaaaaaaaaSuccessfully found ${items.length} documents.`)
      //   return items
      // }) 
      //doc = await req.db.getCollectionNames()
      //   console.log(await req.db.collection('places').aggregate([{$project: {
      //     type: 1,
      //     "_id": 0
      // }}]))     
        console.log("-------------------------------------") 
    }
    else if(type=='tag')
    {
    doc = await req.db.collection('places').find({'type':name},{ projection: { _id: 0, name: 1}}).toArray()
    .then(items => {
      console.log(`Successfully found ${items.length} documents.`)
      //items.forEach(console.log)
      return items
    })    
    }
    else{
    doc = await req.db.collection('places').findOne({'name':name})
    //console.log(doc);  
  }
    console.log(doc);
    res.json(doc);
});

export default handler;