import LazyImage from './LazyImage'
import "./Listing.scss";
const Listing = (props) => (
  <ul class={props.layout}>
    {props
      .data
      .map((post, i) => (
        <li>
          {post.name && (
            <span>
              <strong>{i + 1}.{post.name}</strong>
            </span>
          )}
          {post.image && (
            <p class="img">
              <LazyImage src={`/images/${post.image}`} alt={post.name}/>
              {/* <img src={`/images/${post.image}`}/> */}
              </p>
          )}
          {post.type && (
            <p class="type">{post.type}
              ({post.date})</p>
          )}
          {post.desc && (
            <div dangerouslySetInnerHTML={{__html: post.desc}}></div>
         )}
        </li>
      ))}
  </ul>
);
export default Listing;
