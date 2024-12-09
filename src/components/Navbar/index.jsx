import React from "react";
import "./style.jsx";
import { Button, P1, Wrapper } from "./style.jsx";

function Navbar() {
  return (
    <div>
      <Wrapper>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div className="flex items-center gap-6">
          <P1>Log In</P1>
          <P1>844-332-6440</P1>
          <Button>Get Started</Button>
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
