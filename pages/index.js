import Image from 'next/image';
import profilePic from '../public/logo.png';
 
export default function Page() {
  return (
    <Image src={profilePic} alt="Picture of the author" />;
  )
}

