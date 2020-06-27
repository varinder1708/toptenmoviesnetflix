import {data} from '../data/more_reads_goa';
import Link from "next/link";
import "./Listing.scss";
const TopPicks = (props) => (
  <>
  <div class="heading_black_bg"><span>More from our Network</span></div>
  <ul class={props.layout}>
    {data.map((post, i) => (
      <li>
        {post.image && (
          <p class="img">
            <Link href={post.link}>
              <a>
                <img src={`/images/${post.image}`}/></a>
            </Link>
          </p>

        )}
        {post.name && (
          <span>
            <strong>{post.name}</strong>
          </span>
        )}

        {post.desc && (
          <div dangerouslySetInnerHTML={{
            __html: post.desc
          }}></div>
        )}
      </li>
    ))}
    
  </ul>
  </>
);
export default TopPicks;
