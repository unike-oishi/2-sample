import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";
export default function App() {
  //ステート
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  //イベント
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  //関数はレンダリングの度に生成され、変更されると判断されてしまう
  //関数のメモ化。useCallbackで囲うと同じものを使いまわす。第二引数で見張る値
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //変数のメモ化。初回のみ計算
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
