import Hero from "../ui/Hero";
import Table from "../ui/Table";

function About() {
  return (
    <div>
      <Hero
        headline="Get to know me!"
        image="https://thispersondoesnotexist.com/"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
        provident saepe, inventore consectetur vero optio unde in officia
        repellendus quasi, impedit praesentium aliquid nisi nihil earum
        quibusdam quod dolores. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Numquam eos provident saepe, inventore consectetur
        vero optio unde in officia repellendus quasi, impedit praesentium
        aliquid nisi nihil earum quibusdam quod dolores.
      </Hero>
      <Table />
    </div>
  );
}

export default About;
