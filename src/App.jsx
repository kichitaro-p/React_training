import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  const contentStyleB = {
    color: "green",
    fontSize: "18px", //CSSだとfont-sizeのように書くが、Reactではハイフンを消してパスカルケースにすること。
    //margin: 100, //数字の値は、Javascriptでも存在する値のため、""なしでもよい
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button>on/off</button>
      <p>(^o^)/</p>
    </>
  );
  //上記の<></>の部分は、本来はReactが１つの要素しかReturnできないため、２つ以上の要素を返すために生み出された方法・機能
};
//①コンポーネント名は必ず大文字始まり＆パスカルケースにすること。
//②Reactでは、{}で囲った要素はJavascriptとして扱われる
//③スタイルを当てたいときは、style={{ここに記述}}のように書く。ただし、redなどのcssの値は""で囲う必要がある。

const num = 100;
const fee = num || "金額未設定です";
console.log(fee);
