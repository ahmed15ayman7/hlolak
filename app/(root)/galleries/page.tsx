"use client"
import PhotoGallery from '@/components/shared/GallerySection'
import AddGalleryForm from '@/components/forms/AddGalleryForm'
import React, { useState } from 'react'

const Galleries = () => {
  let [reload,setReload]= useState(0)
  let [add,setAdd]= useState(false)
  return (
    <div >
      
      {add&&<div className="flex justify-center px-6">
      <div className="w-1/2 max-md:w-full">
      <AddGalleryForm setReload={setReload}/>
    </div>
    </div>}
      <PhotoGallery reload={reload} setAdd={setAdd} isPage add={add}/>
    </div>
  )
}
export default Galleries
export const dynamic = 'force-dynamic'