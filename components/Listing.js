import LazyImage from './LazyImage'
import "./Listing.scss";
import Link from "next/link";
const Listing = (props) => (
  <ul class={props.layout}>
    {props
      .data
      .map((post, i) => (
        <li>
          {post.name && (
            <h3>
                {post.link? <Link href={post.link}><a>{i + 1}. {post.name}</a></Link>:`${i + 1}. ${post.name}`}
                {/* {i + 1}.{post.name} */}
                </h3>
          )}
          {post.image && (
            <p class="img">
              <LazyImage src={`/images/${post.image}`} alt={post.name}/>
              {/* <img src={`/images/${post.image}`}/> */}
              </p>
          )}
          {post.i && (
            <div dangerouslySetInnerHTML={{__html: post.i}}></div>
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
