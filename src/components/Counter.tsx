import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>Count Total {count}</h1>
    </div>
  );
};

export default Counter;
