import "./Listing.scss";
const Listing = (props) => (
    <ul>
    {props.data.map((post,i) => (
      <li>
         <span><strong>{i+1}.{post.name}</strong></span>
         <p> <img  src={`/images/${post.image}`} /></p>
         <p class="type">{post.type} ({post.date})</p>
         <p>{post.desc}</p>
        
      </li>
    ))}
  </ul>  
  );
export default Listing;
