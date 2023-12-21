import pic1 from '../../assets/images/GalleryAssets/image/pic1.png';
import pic2 from '../../assets/images/GalleryAssets/image/pic2.png';

const GalleryImageCol = () => {
  return (
    <div className='w-full flex gap-3 pr-[20px]'>
        <img src={pic1} className='h-[325px] w-1/3  object-fit' alt="" />
        <img src={pic2} className='h-[325px] w-1/3 object-fit' alt="" />
        <img src={pic1} className='h-[325px] w-1/3 object-fit' alt="" />
    </div>
  )
}

export default GalleryImageCol