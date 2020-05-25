import "./Listing.scss";
const Listing = (props) => (
    <ul>
    {props.data.map((post) => (
      <li>
         <span>{post.name}</span>
         <p>{post.desc}</p>
        <p> <img  src={`/images/${post.image}`} /></p>
      </li>
    ))}
  </ul>  
  );
export default Listing;
