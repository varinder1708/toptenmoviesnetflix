import nextConnect from 'next-connect';
import middleware from 'middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { name } = req.query;
    console.log(name)
    let doc = await req.db.collection('places').findOne({'name':name})
    //console.log(doc);
    res.json(doc);
});

export default handler;