import SocialLinks from "./SocialLinks";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className=" p-2 text-white text-center flex flex-col gap-1 justify-center items-center bg-slate-300  border-gray-300 border-t">
      <div className="flex gap-5">
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
      </div>
      <div className="text-xs">Copyright &copy; {date}</div>
    </footer>
  );
}

export default Footer;
