import Image from 'next/image';
import profilePic from '../public/logo.png';
 
export default function Page() {
  return (   <Image src={'/logo.png'} alt={alt} width="64" height="64" /> )
}

