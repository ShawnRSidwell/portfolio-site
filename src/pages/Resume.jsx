import Button from "../ui/Button";
import ResumeDocument from "../ui/ResumeDocument";

function Resume() {
  return (
    <div className="flex flex-col">
      <h1 className="p-5 font-bold">Resume</h1>
      <Button>Download Resume</Button>
      <ResumeDocument />
      <Button>Download Resume</Button>
    </div>
  );
}

export default Resume;
