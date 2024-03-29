import LazyImage from "./LazyImage";
import { isMobile } from "react-device-detect";
import { data } from "../data/more_reads_goa";
import Link from "next/link";
import "./Listing.scss";

const TopPicks = (props) => (
  <>
    {" "}
    {((props.showheading && props.showheading == "true") || isMobile) && (
      <div class="heading_black_bg">
        <span>Related Articles</span>
      </div>
    )}{" "}
   
    <ul class={`${props.layout} roundimages`}>
      {" "}
      {data.map((post, i) => (
        <li>
          {post.image && (
            <p class="img">
              <Link href={post.link}>
                <a>
                  {/* <img src={`/images/${post.image}`}/> */}
                  <LazyImage src={`/images/${post.image}`} alt={post.name} />
                </a>
              </Link>
            </p>
          )}
          {post.name && (
            <span>
              <Link href={post.link}>
                <a>
                  <strong>{post.name}</strong>
                </a>
              </Link>
            </span>
          )}

          {post && post.desc && (
            <div
              dangerouslySetInnerHTML={{
                __html: post.desc,
              }}
            ></div>
          )}
        </li>
      ))}{" "}
    </ul>
  </>
);
export default TopPicks;
