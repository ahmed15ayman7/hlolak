"use client"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 flex flex-wrap justify-between">
        <div className="w-1/6  max-md:w-1/3  max-sm:w-1/2 ">
          {/* <h2 className="text-xl font-bold">Logo</h2> */}
          <ul className="mt-4 max-sm:flex gap-[20px] flex-wrap">
            <li className="mb-2"><Link href="/">الرئيسية</Link></li>
            <li className="mb-2"><Link href="/services"> خدماتنا</Link></li>
            <li className="mb-2"><Link href="/about_us">عنّا</Link></li>
            <li className="mb-2"><Link href="/blog_posts">المدونة</Link></li>
          </ul>
          <div className="flex space-x-4 mt-4 gap-[10px]">
            <a href="#"><Facebook color="#0f8ded"  /></a>
            <a href="#"><Linkedin color="#0d63bc" /></a>
            <a href="#"><Youtube color="#f60001" /></a>
            <a href="#"><Instagram color="#5153c7" /></a>
          </div>
        </div>
        <div className="w-1/6 max-md:w-1/3  max-sm:w-1/2">
          {/* <h2 className="text-xl font-bold">Topic</h2> */}
          <ul className="mt-4">
            <li className="mb-2"><Link href="/galleries"> معرض الصور</Link></li>
            <li className="mb-2"><Link href="/offers">العروض العقارية</Link></li>
            <li className="mb-2"><Link href="/blog_posts">الأسئلة الشائعة</Link></li>
          </ul>
        </div>
        <div className="w-1/6 max-md:w-1/3  max-sm:w-1/2">
          {/* <h2 className="text-xl font-bold">Topic</h2> */}
          <ul className="mt-4">
            <li className="mb-2"><Link href="/opinion?o=true">رأيك؟</Link></li>
            <li className="mb-2"><Link href="/opinion"> أراء عملائنا</Link></li>
            <li className="mb-2"><Link href="">المدونة</Link></li>
          </ul>
        </div>
        <div className="w-1/3 max-md:w-1/2 order-least  max-sm:w-full">
          {/* <h2 className="text-xl font-bold">Logo</h2> */}
          <ul className="mt-4">
            <li className="mb-2 flex">
              العنوان  
             :
              <p className="text-[#ab994e]" style={{direction:'ltr'}} >الرياض</p>
              </li>
            <li className="mb-2 flex">
              رقم الهاتف 
            :
             <p className="text-[#ab994e]" style={{direction:'ltr'}} > +966 57 535 2108</p>
             </li>
            <li className="mb-2 flex max-sm:flex-col">
              البريد الالكتروني 
            : 
            <p className="text-[#ab994e]" style={{direction:'ltr'}} > halloulalamkanrealestate@gamil.com</p>
            </li>
          </ul>
        </div>
        <div className="w-1/6 max-md:w-1/3  max-sm:w-1/2 max-md:-order-1">
          {/* <h2 className="text-xl font-bold">Site name</h2> */}
          <img src="/assets/logo.jpg" alt="logo" width="200px" height="200px"/>
        </div>
      </div>
    </footer>
  );
}