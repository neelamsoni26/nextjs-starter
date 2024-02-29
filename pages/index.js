import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import Image from 'next/image'

import { projects } from '../utils/projectsData';

  <Image src={`/logo.png`} alt={alt} width="64" height="64" />


const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
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
