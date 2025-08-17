import { getPosts } from "@/utils/utils";
import { Column, Flex, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  showTitle?: boolean;
}

const projectTechnologies = {
  "academic-monitoring-system": ["C++", "Java", "GitHub", "Brightspace"],
  "crossword-solver-app": ["Next.js", "Vercel", "Supabase", "Figma"],
  "rental-property-management-app": ["Angular", "Spring Boot", "MySQL", "TypeScript"]
};

export function Projects({ range, showTitle = false }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" className={styles.projectsSection}>
      {showTitle && (
        <Heading as="h2" variant="display-strong-s" className={styles.sectionTitle}>
          Featured Projects
        </Heading>
      )}
      
      <div className={styles.projectsGrid}>
        {displayedProjects.map((post, index) => {
          const technologies = projectTechnologies[post.slug as keyof typeof projectTechnologies] || [];
          
          return (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
              href={`work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
              technologies={technologies}
            />
          );
        })}
      </div>
    </Column>
  );
}
