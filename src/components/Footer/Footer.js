import "./Footer.css";
import React from "react";

export default function Footer() {
  const date = new Date().toLocaleDateString("de");
  return <footer className="footer">Journal App - {date}</footer>;
}
