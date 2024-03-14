import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const contentStyleB = {
    color: "green",
    fontSize: "18px", //CSSだとfont-sizeのように書くが、Reactではハイフンを消してパスカルケースにすること。
    //margin: 100, //数字の値は、Javascriptでも存在する値のため、""なしでもよい
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
        //isShowFaceがtrueなら左辺で終了。falseなら、右辺に進みtrueに切り替える（　＝　＼(^o^)／を表示）
      } else {
        isShowFace && setIsShowFace(false);
        //isShowFaceがfalseなら左辺で終了。trueなら、右辺に進みfalseに切り替える（　＝　＼(^o^)／を非表示）
      }
    }
  }, [num]);
  //useEffectの第２引数(今回で言えば[num])(通称：依存配列)に変更があったときのみ、第一引数が実行される。そのため、on/offボタンを押したときは数字が変わらないため、if文を通らなくなり、バグが解消された。
  //reactではstateが更新される度に再レンダリングが走り、コードが再読み込みされる。そのため、useEffectで依存配列に[num]を指定しないと、on/offボタンを押しても、if文の内容に邪魔されて切り替えができなくなっていた。

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^o^)/</p>}
    </>
  );
  //上記の<></>の部分は、本来はReactが１つの要素しかReturnできないため、２つ以上の要素を返すために生み出された方法・機能
};
//①コンポーネント名は必ず大文字始まり＆パスカルケースにすること。
//②Reactでは、{}で囲った要素はJavascriptとして扱われる
//③スタイルを当てたいときは、style={{ここに記述}}のように書く。ただし、redなどのcssの値は""で囲う必要がある。
