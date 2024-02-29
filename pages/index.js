import Image from 'next/image';
 
export function Avatar({ id, alt }) {
  return <Image·src={'/logo.png'}·alt="itsme".width="64"·height="64"·/>;
}
 
export function AvatarOfMe() {
  return <Avatar id="logo".alt="A portrait of me"./>;
}
