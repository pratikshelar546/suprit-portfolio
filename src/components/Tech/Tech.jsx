import {
  html,
  css,
  js,
  react,
  sass,
  nodejs,
  express,
  mongodb,
  git,
  github,
  sheet,
  jira,
  trello,
  slack,
  python,
  powerbi,
  canva,
  goggleAnalytics,
  sql,
} from "../../assets";
import "./Tech.css";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  const { ref: myTitleRef, inView: titleVisible } = useInView();
  const { ref: myDesRef, inView: despVisible } = useInView();
  const { ref: skillsRef, inView: skillsVisisble } = useInView();
  return (
    <div className="stack-container" id="tech">
      <h2
        ref={myTitleRef}
        className={
          titleVisible ? "component-headings show" : "component-headings"
        }
      >
        <span className="heading-highlight">Professional </span> Expertise.
      </h2>
      <div className="underline"></div>
      <h3>Analysis | Management | Visualization | Communication</h3>
      <div className="big-flex-box">
        <div
          ref={skillsRef}
          className={`left-side ${skillsVisisble ? "show" : ""}`}
        >
          {/* contains the techs */}
          <img src={sheet} alt="sheet" />
          <img src={jira} alt="jira" />
          <img src={trello} alt="trello" />
          <img src={slack} alt="slack" />
          <img src={python} alt="python" />
          <img src={powerbi} alt="powerBI" />
          <img src={canva} alt="canva" />
          <img src={goggleAnalytics} alt="anaytics" />
          <img src={sql} alt="sql" />
        </div>
        <div
          ref={myDesRef}
          className={despVisible ? "right-side show" : "right-side"}
        >
          <p>
            I leverage various tools like Excel & Google Sheets, Jira & Trello,
            Slack & Basecamp, Python, Power BI, Canva, and Google Analytics.
            With expertise in these platforms, I'm focused on applying my skills
            to real-world projects that solve practical problems.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tech;
