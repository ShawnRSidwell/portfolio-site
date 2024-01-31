import Card from "../ui/Card";

function Projects() {
  return (
    <div>
      <h2 className="text-center">Projects</h2>
      <h3 className=" text-center text-xs">
        Come see what I have been building.
      </h3>
      <div className="grid grid-cols-3 px-3 pt-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
