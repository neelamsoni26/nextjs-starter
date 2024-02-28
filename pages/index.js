import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Image from 'next/image'
import logoimg from '../components/logo.png'

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
  <Image
      src={logoimg}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return (
          <SmallCard
            key={project.id}
            Icon={Icon}
            title={project.name}
            slug={project.slug}
          />
        );
      })}
    </div>
  </div>
);

export default Home;
