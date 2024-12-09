import React from "react";
import "./style.jsx";
import { H1, H3, Wrapper } from "./style.jsx";
function Main() {
  return (
    <div className="flex justify-around bg-[#163a24]">
      <Wrapper>
        <H1>
          Running the show <br /> has never been so <br /> easy.
        </H1>
        <H3>
          Ready to put the human back in HR? Clerksy helps you <br /> set the
          stage with an inclusive and compliant <br /> workplace.
        </H3>
      </Wrapper>
      <div>
        <img className="" src="/main.svg" alt="" />
      </div>
    </div>
  );
}

export default Main;
