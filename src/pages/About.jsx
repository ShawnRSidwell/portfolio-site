import Hero from "../ui/Hero";
import Table from "../ui/Table";
import profilePicture from "../assets/LinkedInPhoto Final.jpg";

function About() {
  return (
    <div>
      <Hero headline="Get to know me!" image={profilePicture}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
        provident saepe, inventore consectetur vero optio unde in officia
        repellendus quasi, impedit praesentium aliquid nisi nihil earum
        quibusdam quod dolores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam eos provident saepe, inventore consectetur
        vero optio unde in officia repellendus quasi, impedit praesentium
        aliquid nisi nihil earum quibusdam quod dolores.
      </Hero>

      <Table header="Coding Languages" />
      <Table header="Coding Languages" />
      <Table header="Coding Languages" />
    </div>
  );
}

export default About;
