import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const { ref: myTitleRef, inView: titleVisible } = useInView();
  const { ref: myDesRef, inView: despVisible } = useInView();

  return (
    <>
      <main className="about-wrapper" id="about">
        <div className="about-title">
          <h2
            ref={myTitleRef}
            className={
              titleVisible ? "component-headings show" : "component-headings"
            }
          >
            A brief <span className="heading-highlight">info about</span> me.
          </h2>
          <div className="underline"></div>
        </div>
        <div
          ref={myDesRef}
          className={
            despVisible ? "about-description show" : "about-description"
          }
        >
          <p>
            Hey ! I am Senior Analyst and Project Manager with over 5 years of
            experience, I currently specialize in leveraging data-driven
            insights to drive strategic decisions and optimize business
            performance.
          </p>
          <p>
            {" "}
            My expertise lies in analysis, market research, data modeling, and
            Community Handling, enabling students to identify growth
            opportunities.
          </p>
          <p>
            I am a Multi-tasker I pursued my degree while I was working full
            time
          </p>
          {/* <p>Me and my team build projects revolving around SaaS, SAPs, Cross platform mobile apps, Cloud ☁️</p> */}
          <p>
            I am open for opportunities in Project Manager, Program Manager
            or Senior Analyst
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
