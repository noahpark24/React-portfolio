//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/ivan-correa-1b9a7322a/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/noahpark24",
    style: "rounded-tr-md",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:ivan.correa24@yahoo.com",
    style: "rounded-tr-md",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export default links;
