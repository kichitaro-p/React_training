import { StrictMode } from "react"; //厳密に記述しないのエラーが出るようにする
import { createRoot } from "react-dom/client"; //必ず必要になるテンプレコード

import { App } from "./App";
//App.jsを読み込んでいる
//拡張子は省略できる

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
