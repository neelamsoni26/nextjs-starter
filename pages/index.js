import Image from 'next/image';
 
export function Avatar({ id }) {
  return <Image.src={'/logo.png'}/>;
}
 
export function AvatarOfMe() {
  return <Avatar id="logo"/>;
}
