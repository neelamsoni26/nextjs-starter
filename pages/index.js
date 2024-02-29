import Image from 'next/image';
import profilePic from '../public/logo.png';
 
export default function Page() {
  return (
 <Image
    src={"../public/logo.png"}
    alt="image"
    width={80}
    height={80}
  />
  )
}

