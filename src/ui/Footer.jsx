import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className=" p-4 text-white text-center flex justify-center gap-4 items-center bg-slate-300  border-gray-300 border-t">
      <SocialLinks
        link="https://www.linkedin.com/in/sidwellshawn/"
        size="h-6 w-6"
        color="#000000"
        path={"linkedin"}
      />

      <SocialLinks
        link="https://github.com/ShawnRSidwell"
        size="h-6 w-6"
        color="#000000"
        path={"github"}
      />
    </footer>
  );
}

export default Footer;
