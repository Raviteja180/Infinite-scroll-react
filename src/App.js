import "./styles.css";
import { useState, useEffect, useRef } from "react";
const a = new Array(20).fill("*");
export default function App() {
  const [items, setItems] = useState(a);
  const prevScrollY = useRef(0);
  const handleScroll = () => {
    if (window.scrollY - prevScrollY.current > 300) {
      setItems((prev) => [...prev, ...new Array(20).fill("a")]);
      prevScrollY.current = window.scrollY;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  console.log(items.length);
  return (
    <div className="App">
      {items.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
}
