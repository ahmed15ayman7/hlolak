"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
const NavBar: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let pathname =usePathname()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white  p-2 shadow-lg rounded-lg sticky top-0 z-50 flex flex-nowrap justify-center items-center">
      <div className="flex justify-between w-full">
        <div className="flex  items-center justify-between h-16 w-full">
          <div className="flex items-center justify-between py-4 px-2 mr-6">
            <Link href="/">
              <p className="flex gap-5">
              <img src="/assets/logo-img.jpg" alt="logo" width="70px" height="50px"/>
              <img src="/assets/logo-title.jpg" alt="logo" width="200px" height="25px"/>
              
              </p>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="/" text="الرئيسية" />
            <NavItem href="/services" text="خدماتنا" />
            <NavItem href="/about_us" text="نبذة عنا" />
            <NavItem href="/blog_posts" text="المدونة" />
            <NavItem href="/galleries" text="معرض الصور" />
            <NavItem href="/partners" text="شركائنا"  />
            <NavItem href="/offers" text="العروض العقارية" />
            <NavItem href="/faqs" text="الأسئلة الشائعة" />
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleSidebar}
          className={`mobile-menu-button p-2 transition-colors rounded-lg shadow-md ${isSidebarOpen ? 'bg-[#ab994e] text-white' : 'bg-white text-gray-500'}`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>
      <div className={`fixed inset-y-0 left-0 z-10 flex-shrink-0 w-80 bg-white border-r-2 border-indigo-100 shadow-lg rounded-tr-3xl rounded-br-3xl overflow-scroll transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav aria-label="Main" className="flex flex-col h-full">
          <button
          onClick={toggleSidebar}
          className={`mobile-menu-button p-2 transition-colors rounded-lg shadow-md ${isSidebarOpen ? 'bg-[#ab994e] text-white' : 'bg-white text-gray-500'}`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
          <div className="flex items-center justify-center flex-shrink-0">
            <Link href="/">
            <p className="flex flex-col gap-5">
              <img src="/assets/logo-img.jpg" alt="logo" width="70px" height="50px"/>
              {/* <img src="/assets/logo-title.jpg" alt="logo" width="200px" height="25px"/> */}
              
              </p>
            </Link>
          </div>
          <div className="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto">
            <NavItem href="/" text="الرئيسية" mobile />
            <NavItem href="/services" text="خدماتنا" mobile />
            <NavItem href="/about_us" text="نبذة عنا" mobile />
            <NavItem href="/blog_posts" text="المدونة" mobile />
            <NavItem href="/galleries" text="معرض الصور" mobile />
            <NavItem href="/partners" text="شركائنا" mobile />
            <NavItem href="/offers" text="العروض العقارية" mobile />
            <NavItem href="/faqs" text="الأسئلة الشائعة" mobile />
          </div>
        </nav>
      </div>
    </nav>
  );
};

type NavItemProps = {
  href: string;
  text: string;
  mobile?: boolean;
};

    const NavItem: React.FC<NavItemProps> = ({ href, text, mobile }) => {
      let pathname =usePathname()
    let check=href==='/'?false:pathname.includes(href.slice(1))

    return(
<Link href={href}>
    <p className={` flex items-center font-bold border-b-4  px-4 py-4 justify-center transition-colors  ${check||(href==='/'&&pathname==='/')?' border-[#ab994e]':'border-transparent'} ${mobile ? ' text-black hover:bg-[#ab994e] hover:text-white p-2 rounded-lg' : 'h-full'}`}>
      {text}
    </p>
  </Link>
)};

export default NavBar;
