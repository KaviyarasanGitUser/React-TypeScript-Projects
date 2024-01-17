import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";

function NavBar({ active }: any) {
  const mobxRef = useRef<HTMLDivElement | null>(null);
  const reactQueryRef = useRef<HTMLDivElement | null>(null);
  const integrationRef = useRef<HTMLDivElement | null>(null);

  const nav = useNavigate();
  console.log(active);

  if (active === 1) mobxRef?.current?.classList.add("active");
  if (active === 3) integrationRef?.current?.classList.add("active");
  if (active === 2) reactQueryRef?.current?.classList.add("active");

  return (
    <>
      <span ref={mobxRef} className="nav-content" onClick={() => nav("/")}>
        Mobx
      </span>
      <span
        ref={reactQueryRef}
        className="nav-content"
        onClick={() => nav("/PostDetails")}
      >
        React Query
      </span>
      <span
        ref={integrationRef}
        className="nav-content"
        onClick={() => nav("/Integration/Detail")}
      >
        Integration
      </span>
    </>
  );
}

export default NavBar;
