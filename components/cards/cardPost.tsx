import Link from 'next/link'
import React from 'react'

const CardPost = ({title,img,link,disc,time}:{title:string,img?:string,disc?:string,link:string,time:string,}) => {
  return (
              <div className="p-4 py-8 max-sm:p-2 text-gray-300 max-sm:py-4  md:mb-0 mb-6 flex flex-col justify-center items-center " style={{direction:"rtl"}}>
                <div className="w-full" >
                 {img && <div
                    className={`bg-gray-500 h-56  w-full rounded-lg shadow-md bg-cover bg-center`}
                    style={{ backgroundImage: `url(${img})`}}
                    data-aos="fade-up-right"
                  >
                    
                  </div>}
                  {disc&&<p className={`flex items-center justify-center bg-gray-500 h-56 w-full rounded-lg shadow-md bg-cover bg-center text-center`}>
                      {disc}
                      </p>}
                  <div
                    className={` w-full bg-gray-700 -mt-10 shadow-lg rounded-lg overflow-hidden p-5`}
                    data-aos="fade-up-left"
                  >
                    <h4 className="font-medium text-start" style={{direction:"rtl"}}>{title}</h4>
                    <div className="summary-post text-base text-justify">
                      <time dateTime="2024-05-25T15:00:52Z" data-local="time" data-format="%Y/%m/%d">
                        {time}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default CardPost