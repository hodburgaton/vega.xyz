import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const BoxLinkSimple = ({ text, link }) => {
  const isExternal = link.startsWith("http");
  const buttonClass = `title-xs md:title-s before:absolute relative z-10 before:bottom-1.5 before:left-0 before:right-0 inline-block pb-5 md:pb-10 pt-4 pl-4 pr-4 md:pr-16 w-full dark:bg-black bg-white border before:border-t before:border-current border-current dark:border-white hover:-top-1.5 transition-[top] duration-75`;

  if (isExternal) {
    return (
      <div className="mx-auto w-full">
        <a href={link} target="_blank" rel="noreferrer" className={buttonClass}>
          {text}
          <div className="mt-2 md:absolute md:right-4 md:top-4 md:mt-0">
            <LinkArrow />
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="mx-auto w-full">
        <Link to={link} className={buttonClass}>
          {text}
        </Link>
      </div>
    );
  }
};

export default BoxLinkSimple;