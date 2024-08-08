import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Experience.css";
import { experiences } from "../../data/experiences";

const Experience = () => {
  const { ref: myTitleRef, inView: titleVisible } = useInView();
  const { ref: myexpRef, inView: expVisible } = useInView();
  const [elementsInView, setElementsInView] = useState(
    Array(experiences.length).fill(false)
  );

  return (
    <section className="experience-wrapper" id="experience">
      <h2
        ref={myTitleRef}
        className={
          titleVisible ? "component-headings show" : "component-headings"
        }
      >
        My <span className="heading-highlight"> experience</span> so far.
      </h2>
      <div className="underline"></div>

      <div
        ref={myexpRef}
        className={expVisible ? "list-wrapper show" : "list-wrapper"}
      >
        <ul>
          {experiences?.map((item, index) => {
            const { ref, inView } = useInView({ threshold: 0.1 });

            // Update the state when the item comes into view
            useEffect(() => {
              if (inView) {
                setElementsInView((prev) => {
                  const newInViewState = [...prev];
                  newInViewState[index] = true;
                  return newInViewState;
                });
              } else {
                setElementsInView((prev) => {
                  const newInViewState = [...prev];
                  newInViewState[index] = false;
                  return newInViewState;
                });
              }
            }, [inView, index]);

            const directionClass =
              index % 2 === 0 ? "slide-in-left" : "slide-in-right";
            return (
              <li
                key={index}
                ref={ref}
                className={`experience-item ${directionClass} ${
                  elementsInView[index] ? "show" : ""
                }`}
                //   className={elementsInView[index] ? 'experience-item show' : 'experience-item'}
              >
                <div>
                  <p className="position">{item.position}</p>
                  <p className="organisation">{item.organisation}</p>
                  <p className="duration">{item.duration}</p>
                  <div className="org-underline"></div>
                  <ul>
                    {item.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
