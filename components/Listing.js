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
            <p>
              <img src={`/images/${post.image}`}/></p>
          )}
          {post.type && (
            <p class="type">{post.type}
              ({post.date})</p>
          )}
          {post.desc && (
            <p>{post.desc}</p>
          )}

        </li>
      ))}
  </ul>
);
export default Listing;
