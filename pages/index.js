import Image from "next/image"; 

const HomePage = () => { 
	return ( 
		<> 
			{/* This is a local import, so the 
			height and width props are optional */} 
			<div> 
				<Image src={gfgLogo} 
					alt="GFG logo imported from public directory" /> 
			</div> 

			{/* This image is also served from public 
			directory but using the static path */} 
			<div> 
				<Image 
					src=" 
https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
					alt="GFG logo served with static path of public directory"
					height="100"
					width="400"
				/> 
			</div> 

			{/* This image is being served from an 
			external URL, for this URL to work we 
			will need to add the hostname 
			'media.geeksforgeeks.org' to our 
			next.config.js file */} 
			<div> 
				<Image 
					src=" 
https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
					height="100"
					width="400"
					alt="GFG logo served from external URL"
				/> 
			</div> 
		</> 
	); 
}; 

export default HomePage;
