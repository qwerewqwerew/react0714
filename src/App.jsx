import Child from "./Child";
import Member from "./Member.jsx";
import "./style.css";

function Name() {
  return <h1>App안에서 태어난 컴포넌트</h1>;
}

function App() {
  return (
    <>
      <Name />
      <Child></Child>
      <Child />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </>
  );
}
export default App;
