import Image from "next/image";
 
const index = () => {
    return (
        <>
            <h1 style={{ color: 'green' }}>GeeksForGeeks</h1>
            <Image src="/logo.png" alt="Loading"
                width={500}
                height={550}
                quality="100"
            />
        </>
    );
};
export default index;
