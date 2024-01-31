import SocialLinks from "./SocialLinks";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className=" p-2 text-white text-center flex justify-between items-center bg-slate-300  border-gray-300 border-t">
      <div className="text-xs">Created by Shawn Sidwell</div>
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
      <div className="text-xs px-5">Copyright &copy; {date}</div>
    </footer>
  );
}

export default Footer;
