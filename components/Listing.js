import "./Listing.scss";
const Listing = (props) => (
    <ul>
    {props.data.map((post) => (
      <li>
         <span><strong>{post.name}</strong></span>
         <p>{post.type}</p>
         <p>{post.desc}</p>
        <p> <img  src={`/images/${post.image}`} /></p>
      </li>
    ))}
  </ul>  
  );
export default Listing;
