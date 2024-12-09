import React from "react";
import "./style.jsx";
import { H2, H22, H3, P1 } from "./style.jsx";
function Hr() {
  return (
    <div>
      <div className="flex justify-center items-center gap-24 pt-32">
        <div>
          <img src="/hr.svg" alt="" />
        </div>
        <div>
          <H2>
            Put the human <br /> back in HR.
          </H2>
          <H3>
            Your employees are the real stars. Show the <br /> love and help
            them perform!
          </H3>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-24 pt-32">
          <div>
            <H2>
              You don’t have to <br /> play all the parts.
            </H2>
            <H3>
              Sales, accounting, HR— Oh My! You can’t do <br /> it all - let
              Clerksy help.
            </H3>
          </div>
          <div>
            <img src="/hr2.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-[113px] pb-[120px]">
        <H2 className="text-center">We partner with the best</H2>
        <div className="flex gap-20 pt-[66px] justify-center items-center">
          <img src="/partner1.png" alt="" />
          <img src="/partner2.png" alt="" />
          <img src="/partner3.png" alt="" />
          <img src="/partner4.png" alt="" />
          <img src="/partner5.png" alt="" />
        </div>
      </div>
      <div className="bg-[#163a24] pt-16">
        <H22>HR Production of the Highest Quality</H22>
        <div className="flex justify-center items-center pt-[73px] gap-10 pb-[120px]">
          <div>
            <img
              className="justify-self-center pb-7"
              src="/quality1.svg "
              alt=""
            />
            <P1>
              Educates & Informs <br />
              Employee Expectations
            </P1>
          </div>
          <div>
            <img
              className="justify-self-center pb-7"
              src="/quality2.svg"
              alt=""
            />
            <P1>
              Protects Your Business <br />
              Just in Case
            </P1>
          </div>
          <div>
            <img
              className="justify-self-center pb-7"
              src="/quality3.svg"
              alt=""
            />
            <P1>
              Manages & Stores
              <br />
              Important Documents
            </P1>
          </div>
          <div>
            <img
              className="justify-self-center pb-7"
              src="/quality4.svg"
              alt=""
            />
            <P1>
              Create a Healthy <br />
              Work Environment
            </P1>
          </div>
        </div>
      </div>
      <div className="py-[119px] text-center bg-[#f2efe6]">
        <H2>
          Employees come in all shapes and <br /> sizes. Find the right fit.
        </H2>
        <H3>
          Focus on casting and screening. Let Clerksy handle contracts, resolve
          any on set-conflicts <br /> and make sure you are compliant with work
          and safety boards.
        </H3>
        <img className="justify-self-center" src="/employee.svg" alt="" />
      </div>

      <div className="flex justify-center items-center gap-24 pt-44 pb-28">
        <div>
          <H2>
            How the scenes <br /> fit together
          </H2>
          <H3>
            Employee Training & Development, Diversity <br /> & Inclusion
            Programs, and Conflict <br /> Resolution.
          </H3>
        </div>
        <div>
          <img src="/together.svg" alt="" />
        </div>
      </div>
      <div className="text-center">
        <H2>Consider everyone's best interest</H2>
        <H3>HR is for everyone. Clerksy can help you.</H3>
        <div>
            <div>
                <img src="/consider1.svg" alt="" />
            </div>
        </div>
      </div>


    </div>
  );
}

export default Hr;
