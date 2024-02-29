import Image from 'next/image'
 
export function Avatar({ id, alt }) {
  return <Image src=" 
https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                    alt="GFG logo served with static path of public directory"
                    height="100"
                    width="400"
                /> 
 
export function AvatarOfMe() {
  return <Avatar id="me" alt="A portrait of me" />
}
