const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "green"
};

export const ChildArea = (props) => {
  const { open } = props;
  console.log("ChildAreaレンダリングされた!!");

  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });
  // console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};