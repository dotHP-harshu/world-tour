import { IoLogoGithub } from "react-icons/io";
import { NavLink } from "react-router";
function Footer() {
  return (
    <footer className="w-full  mt-10 bg-[var(--dark-bg)] text-[var(--dark-text)] flex justify-center items-center py-4 lg:px-20 sm:px-10 max-sm:px-5 max-sm:gap-6 ">
      <div className="logo flex justify-center items-center flex-col gap-3">
        <p className="text-base max-sm:text-sm ">Harsh prajapati</p>
        <a
          className="lg:text-3xl sm:text-xl max-sm:text-lg font-semibold font-mono"
          href="https://github.com/dothp-harshu/"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
