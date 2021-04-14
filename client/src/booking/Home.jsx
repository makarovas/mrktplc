import React from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="container-fluid h1 p5 text-center">
      {JSON.stringify(name)}
    </div>
  );
}
