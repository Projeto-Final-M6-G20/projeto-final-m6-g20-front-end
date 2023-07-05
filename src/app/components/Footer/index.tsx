'use client';
import { useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
const FooterComponent = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('scrollTopButton');
      if (button) {
        button.style.display = window.scrollY > 300 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="w-full relative bottom-0 flex justify-between h-32 bg-black max-lg:flex-col max-lg:items-center max-sm:min-h-80 max-sm:justify-normal  max-sm:py-1">
      <div className="flex  text-center  justify-center items-center max-lg:w-5/6">
        <p className="heading-2-600 text-white max-lg:text-center">
          Motors <span className="text-lg">shop</span>
        </p>
      </div>

      <div className="flex w-96 items-center justify-center gap-2 max-sm:w-full">
        <p className="text-white text-sm">
          © 2023 - Todos os direitos reservados.
        </p>
      </div>

      <div className="flex w-48 items-center justify-center gap-2">
        <button
          id="scrollTopButton"
          className="relative w-12 rounded-md text-white font-bold bg-gray-900 h-12"
          onClick={handleClick}
        >
          <IoIosArrowUp className="absolute inset-y-0 inset-x-0 m-auto text-xl" />
        </button>
      </div>
    </footer>
  );
};

export default FooterComponent;
