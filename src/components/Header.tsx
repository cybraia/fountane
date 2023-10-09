import Image from 'next/image';
import logo from '../../public/logo.png';

function Header() {
  return (
    <header className="z-[999] relative">
      <nav className="flex fixed left-1/2 mt-10 transform -translate-x-1/2 -translate-y-1/2 h-[4.5rem] max-w-screen-xl rounded-none border border-white border-opacity-40 bg-black bg-opacity-70 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <ul className="flex items-center space-x-4">
          <li className="flex items-center space-x-4 mr-6 ml-2">
            <Image src={logo} alt="Logo" width={140} height={90} />
          </li>
        </ul>
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <li className="h-3/4 flex items-center justify-center relative">
            Products
          </li>
          <li className="h-3/4 flex items-center justify-center relative">
            duo
          </li>
          <li className="h-3/4 flex items-center justify-center relative">
            build
          </li>
          <li className="h-3/4 flex items-center justify-center relative">
            docs
          </li>
        </ul>
        <button className="px-4 ml-12 rounded-[20px] bg-[#64AE9D] text-black mt-2 mb-2">
          Launch
        </button>
      </nav>
    </header>
  )
}

export default Header;
