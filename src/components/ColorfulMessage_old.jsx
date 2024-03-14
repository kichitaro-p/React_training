export const ColorfulMessage = (props) => {
  //export const ColorfulMessage = ({ color, children}) => {という書き方で分割代入もできる
  const { color, children } = props; //分割代入
  const contentStyleA = {
    color, //コード冒頭で分割代入をしているため、props.colorのprops.を省ける　＆　左のプロパティ名と右の変数名が一緒のときはプロパティ名を省略できる。(本来はcolor: color)
    fontSize: "18px", //CSSだとfont-sizeのように書くが、Reactではハイフンを消してパスカルケースにすること。
    //margin: 100, //数字の値は、Javascriptでも存在する値のため、""なしでもよい
  };
  return <p style={contentStyleA}>{children}</p>; //コード冒頭で分割代入をしているため、props.childrenのprops.を省ける
  //App.jsx側のタグで囲われた部分を受け取る場合は、props.childrenとなり、これはjavascriptでは決まった方法となっている
};

/*//props分割代入じゃないver
export const ColorfulMessage = (props) => {
  const contentStyleA = {
    color: props.color,
    fontSize: "18px", //CSSだとfont-sizeのように書くが、Reactではハイフンを消してパスカルケースにすること。
    //margin: 100, //数字の値は、Javascriptでも存在する値のため、""なしでもよい
  };
  return <p style={contentStyleA}>{props.children}</p>;
  //App.jsx側のタグで囲われた部分を受け取る場合は、props.childrenとなり、これはjavascriptでは決まった方法となっている
};
*/
