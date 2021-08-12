import "./Show.scss";
const Show = (props) => {
  if (props && props.data && props.data.desc) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.desc,
        }}
      ></div>
    );
  } else return null;
};
export default Show;
