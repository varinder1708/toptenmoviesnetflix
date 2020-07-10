import "./Show.scss";
const Show = (props) => {
  return   (props.data.desc &&
    <div dangerouslySetInnerHTML={{
      __html: props.data.desc
    }}></div>
  )
};
export default Show;
