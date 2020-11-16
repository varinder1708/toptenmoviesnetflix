import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { name,type } = req.query;
    console.log(name)
    console.log(type)
    let doc;
    if(type=='tag')
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
    }
    //console.log(doc);
    res.json(doc);
});

export default handler;