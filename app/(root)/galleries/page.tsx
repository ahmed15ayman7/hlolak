import PhotoGallery from '@/components/shared/GallerySection'
import AddGalleryForm from '@/components/forms/AddGalleryForm'
import React from 'react'

const Galleries = () => {
  return (
    <div >
      
      <div className="flex justify-center px-6">
      <div className="w-1/2 max-md:w-full">
      <AddGalleryForm/>
    </div>
    </div>
      <PhotoGallery/>
    </div>
  )
}

export default Galleries