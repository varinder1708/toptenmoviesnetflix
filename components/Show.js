import "./Show.scss";
const Show = (props) => {
  return (
    props &&
    props.data &&
    props.data.desc && (
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.desc,
        }}
      ></div>
    )
  );
};
export default Show;
