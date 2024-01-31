import Hero from "../ui/Hero";
import Type from "../ui/Type";

function Home() {
  return (
    <div className="p-6">
      <Hero
        headline="Welcome to my site!"
        image="https://thispersondoesnotexist.com/"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid
        alias corrupti in, harum architecto laudantium non exercitationem sit
        totam vel quasi beatae adipisci nam dolor. Veniam nihil praesentium
        fugit.
        <Type />
      </Hero>
    </div>
  );
}

export default Home;
