import React from "react";
import { memo } from "react";

const style = {
  with: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memo:propsが変更されない限りレンダリングしない。
//親コンポーネントがレンダリングされても
export const ChildArea = memo((props) => {
  console.log("ChildArea頭");
  const { open, onClickClose } = props;
  const data = [...Array(100).keys()];

  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
