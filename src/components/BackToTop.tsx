import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

type Props = {};

function BackToTop({}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <button
      className={`${
        scrollPosition < 200 && "scale-0"
      } fixed left-1/2 -translate-x-1/2 bottom-5 hover:scale-110 transition-all`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="p-2 bg-black opacity-75 bg-opacity-30 rounded-full">
        <FaChevronUp size={40}></FaChevronUp>
      </div>
    </button>
  );
}

export default BackToTop;
