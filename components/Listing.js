import "./Listing.scss";
const Listing = (props) => (
    <ul>
    {props.data.map((post) => (
      <li>
         <p>{post.name}</p>
         <p>{post.desc}</p>
        <p> <img  src={`/images/${post.image}`} /></p>
      </li>
    ))}
  </ul>  
  );
export default Listing;
