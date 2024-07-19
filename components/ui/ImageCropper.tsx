import React, { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import { Slider } from "./slider";
import { Button } from "./button";

interface ImageCropperProps {
  image: string;
  onCropComplete: any;
  onChange:(value: string) => void,
value:string,
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCropComplete,
  onChange,
value
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState([1]); // Slider value as array for shadcn-ui
  const [aspect, setAspect] = useState(1); // Default aspect ratio 1:1

  const onCropCompleteHandler = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      onCropComplete(croppedAreaPixels,onChange
        ,value);
    },
    [onCropComplete]
  );

  return (
      <div className="relative w-64 h-64 max-md:w-full bg-gray-200">
        <div className="flex gap-2">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom[0]}
        aspect={aspect}
        onCropChange={setCrop}
        onCropComplete={onCropCompleteHandler}
        onZoomChange={(zoomValue) => setZoom([zoomValue])}
      />
        </div>
      <div className="flex gap-2">
      <Slider
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onValueChange={( newValue) => setZoom(newValue as unknown as number[] )}
      />
      </div>
      <div className="flex gap-2">
        {/* <Button onClick={() => setAspect(1)}>1:1</Button> */}
        {/* <Button onClick={() => setAspect(16 / 9)}>16:9</Button> */}
      </div>
    </div>
  );
};

export default ImageCropper;
