import LazyImage from './LazyImage'
import LoadCarousel from './LoadCarousel'
import "./Listing.scss";
import Link from "next/link";

const Listing = (props) => (
  <ul class={`${props.layout} fullscreen_images`}>
    {props
      .data
      .map((post, i) => (
        <li>
          {post.name && (
            <h3>
              {post.link
                ? <Link href={post.link}>
                    <a>{i + 1}. {post.name}</a>
                  </Link>
                : `${i + 1}. ${post.name}`}
              {/* {i + 1}.{post.name} */}
            </h3>
          )}

          {post.image && Array.isArray(post.image) && (
            <LoadCarousel data={post.image}/>
           
          )}
           {post.image && (!Array.isArray(post.image)) && (
            <p class="img">
              <LazyImage src={`/images/${post.image}`} alt={post.name}/> {/* <img src={`/images/${post.image}`}/> */}
            </p>
          )}

          {post.i && (
            <div
              class="insta"
              dangerouslySetInnerHTML={{
              __html: post.i
            }}></div>
          )}
          {post.type && (
            <p class="type">{post.type}
              ({post.date})</p>
          )}
          {post.desc && (
            <div class="desc" dangerouslySetInnerHTML={{
              __html: post.desc
            }}></div>
          )}
          {post.best && (
            <div class="na">
              <strong>Best Time to Visit</strong>: {`${post.best}`}</div>
          )}

          {post.na && (
            <div class="na">
              <strong>Nearest Airport</strong>: {`${post.na}`}</div>
          )}
          {post.nra && (
            <div class="nra">
              <strong>Nearest Railway Station</strong>: {`${post.nra}`}</div>
          )}
          {post.nrs && (
            <div class="nrs">
              <strong>Nearest Railway Station</strong>: {`${post.nrs}`}</div>
          )}
          {post.htr && (
            <div class="nra">
              <strong>How to Reach</strong>: {`${post.htr}`}</div>
          )}
          {post.lt && (
            <div class="nra">
              <strong>Local Transport</strong>: {`${post.lt}`}</div>
          )}
          {post.ptv && (
            <div class="nra">
              <strong>Places to Visit</strong>: {`${post.ptv}`}</div>
          )}
        </li>
      ))}
  </ul>
);
export default Listing;
