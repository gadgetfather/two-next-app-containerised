
import { useState } from "react";
export default function Home() {
const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to App2</h1>
      <p>This is the homepage of App2.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
