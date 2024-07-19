import Link from 'next/link'
import React from 'react'

const CardPost = ({title,img,link,disc,time}:{title:string,img?:string,disc?:string,link:string,time:string,}) => {
  return (
              <div className="p-4 py-8 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center mx-auto">
                <Link className="w-full" href={link}>
                 {img && <div
                    className="bg-gray-300 md:h-56 h-40 w-64 md:w-80 rounded-lg shadow-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                    data-aos="fade-up-right"
                  >
                    
                  </div>}
                  {disc&&<p className='flex items-center bg-gray-200 md:h-56 h-40 w-64 md:w-80 rounded-lg shadow-md bg-cover bg-center text-center'>
                      {disc}
                      </p>}
                  <div
                    className="md:w-80 w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5"
                    data-aos="fade-up-left"
                  >
                    <div className="title-post font-medium">{title}</div>
                    <div className="summary-post text-base text-justify">
                      <time dateTime="2024-05-25T15:00:52Z" data-local="time" data-format="%Y/%m/%d">
                        {time}
                      </time>
                    </div>
                  </div>
                </Link>
              </div>
  )
}

export default CardPost