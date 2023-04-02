import React from "react";
import NavBar from "@/components/common/Navbar";

export default function Container(props) {
  return (
    <>
      <NavBar />
      <div className="container">{props.children}</div>
    </>
  );
}
