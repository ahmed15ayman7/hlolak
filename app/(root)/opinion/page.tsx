"use client"
import PhotoGallery from '@/components/shared/GallerySection'
import React, { useState } from 'react'
import AddOpinianForm from '@/components/forms/AddOpinianForm'
import Test from '@/components/shared/test'

const Galleries = () => {
  let [reload,setReload]= useState(0)
  let [add,setAdd]= useState(false)
  return (
    <div >
      
      {add&&<div className="flex justify-center px-6">
      <div className="w-1/2 max-md:w-full">
      <AddOpinianForm setReload={setReload}/>
    </div>
    </div>}
      <Test reload={reload} setAdd={setAdd} isPage add={add}/>
      {/* <PhotoGallery reload={reload} setAdd={setAdd} isPage add={add}/> */}
    </div>
  )
}
export default Galleries
export const dynamic = 'force-dynamic'