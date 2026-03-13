import { Search } from 'lucide-react'
import React from 'react'
import WindowControls from '#components/WindowControls.jsx';
import { Mail } from 'lucide-react';
import { photosLinks, gallery } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import useWindowStore from '#store/window';


const PhotosContent = () => {
    const {openWindow} = useWindowStore();
  return (
    <>
    <div id='window-header'>
        <WindowControls target='photos' />
        <div className='w-full flex justify-end items-center gap-3 text-gray-500'>
            <Mail className='icon' />
            <Search className='icon' />
        </div>
    </div>
    <div className='flex w-full'>
        <div className='sidebar'>
            <h2>My Photos</h2>
            <ul>
                {photosLinks.map(({id, icon, title})=>(
                    <li key={id}>
                        <img src={icon} alt={title} />
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className='gallery'>
            <ul>
                {gallery.map(({id, img})=>(
                    <li key={id}
                    onClick={() =>
                        openWindow("imgfile", {
                            id,
                            name: "Gallery image",
                            icon: "images/image.png",
                            kind: "file",
                            fileType: "img",
                            imageUrl: img,
                        })
                    }
                    >
                        <img src={img} alt="Gallary image" />
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
    
  )
}

const Photos = WindowWrapper(PhotosContent, 'photos');


export default Photos