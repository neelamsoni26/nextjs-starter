import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

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
       <Image
            src="../components/MS logo.png"
            width={2300}
            height={2300}
            alt="RectangleColored"
            className={styles.ctaImage}
          />
    </div>
  </div>
);

export default Home;
