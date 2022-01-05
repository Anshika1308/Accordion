import React, { useState } from "react";
import { questions} from "./Api";
import MyAccordion from "./MyAccordion";
import "./accordion.css"

const Accordion= () => {
    const[data, setData] = useState(questions);
    return(
        <>
          <section className="main_div">
          <h1>React Interview Questions</h1>
          {
              data.map((curElem) => {
                  const{id} = curElem;
                  return <MyAccordion key={id}{...curElem}/>
              })
          }
          </section>
        </>
    )
}

export default Accordion;