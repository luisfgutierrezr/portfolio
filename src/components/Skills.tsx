"use client";

import { Column, Heading, Badge, Flex, Text } from "@once-ui-system/core";
import styles from "./Skills.module.scss";

const skills = {
  "Mobile Development": {
    skills: ["Mobile Application Development", "Kotlin", "Mobile Enterprise", "Firebase", "UX/UI"],
    image: "/images/skills/mobile-development.png",
    description: "Mobile app development with modern technologies and enterprise features"
  },
  "Web Technologies": {
    skills: ["Angular", "React.js", "Node.js", "Next.js", "HTML", "CSS", "Spring Boot", "JPA"],
    image: "/images/skills/web-tech.png",
    description: "Modern web development frameworks and technologies"
  },
  "Programming Languages": {
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C++", "C#", "R"],
    image: "/images/skills/programming.jpeg",
    description: "Core programming languages I use for development"
  },
  "Cloud & DevOps": {
    skills: ["AWS", "Vercel", "Docker", "Kubernetes", "Jenkins", "GitHub"],
    image: "/images/skills/cloud-devops.png",
    description: "Cloud platforms and DevOps tools for deployment"
  },
  "Databases": {
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    image: "/images/skills/databases.jpeg",
    description: "Database systems and data management"
  }
};

export function Skills() {
  return (
    <Column fillWidth gap="xl" className={styles.skillsSection}>
      <Heading as="h2" variant="display-strong-s" className={styles.sectionTitle}>
        Technical Skills
      </Heading>
      
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, data]) => (
          <div key={category} className={styles.skillCategory}>
            <Heading as="h3" variant="heading-strong-m" className={styles.categoryTitle}>
              {category}
            </Heading>
            
            <Text variant="body-default-s" className={styles.categoryDescription}>
              {data.description}
            </Text>
            
            <Flex wrap gap="8" className={styles.skillBadges}>
              {data.skills.map((skill) => (
                <Badge
                  key={skill}
                  background="brand-alpha-weak"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  className={styles.skillBadge}
                >
                  {skill}
                </Badge>
              ))}
            </Flex>
            
            <div className={styles.skillImage}>
              <img 
                src={data.image} 
                alt={category}
                className={styles.image}
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove(styles.hidden);
                }}
              />
              <div className={`${styles.placeholder} ${styles.hidden}`}>
                <Text variant="body-default-s" className={styles.placeholderText}>
                  Add your {category.toLowerCase()} image here
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
}
