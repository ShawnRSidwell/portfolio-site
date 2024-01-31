import Hero from "../ui/Hero";
import Type from "../ui/Type";
import profilePicture from "../assets/LinkedInPhoto Final.jpg";
function Home() {
  return (
    <div className="p-6">
      <Hero headline="Welcome to my site!" image={profilePicture}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid
        alias corrupti in, harum architecto laudantium non exercitationem sit
        totam vel quasi beatae adipisci nam dolor. Veniam nihil praesentium
        fugit.
        <Type />
      </Hero>
      <div className="mt-6">
        <Hero headline="Let me introduce myself" image={profilePicture}>
          <ul className="list-disc">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              aliquid alias corrupti in, harum architecto laudantium non
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              aliquid alias corrupti in, harum architecto laudantium non
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              aliquid alias corrupti in, harum architecto laudantium non
            </li>
          </ul>
        </Hero>
      </div>
    </div>
  );
}

export default Home;
