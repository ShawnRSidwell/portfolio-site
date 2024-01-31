import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";

const skillIcons = {
  javascript: <RiJavascriptFill size="3em" />,
  java: <FaJava size="3em" />,
  html: <TiHtml5 size="3em" />,
};

function SkillIcon({ skill }) {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      {skillIcons[skill]}
    </div>
  );
}

export default SkillIcon;
