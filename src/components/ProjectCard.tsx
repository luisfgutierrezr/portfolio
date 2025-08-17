"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Badge,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  technologies?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  technologies = [],
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          {images.length > 0 ? (
            <img 
              src={images[0]} 
              alt={title} 
              className={styles.projectImage}
            />
          ) : (
            <div className={styles.placeholderImage}>
              <Text variant="body-default-m" className={styles.placeholderText}>
                {title}
              </Text>
            </div>
          )}
        </div>
        
        <div className={styles.textContent}>
          <Heading as="h3" variant="heading-strong-l" className={styles.title}>
            {title}
          </Heading>
          
          {description && (
            <Text variant="body-default-m" className={styles.description}>
              {description}
            </Text>
          )}
          
          {technologies.length > 0 && (
            <div className={styles.technologies}>
              {technologies.slice(0, 4).map((tech, index) => (
                <Badge 
                  key={index}
                  background="brand-alpha-weak" 
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  className={styles.techBadge}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          
          <Flex gap="16" className={styles.links}>
            {content?.trim() && (
              <SmartLink
                suffixIcon="arrowRight"
                href={href}
                className={styles.link}
              >
                <Text variant="body-default-s">View Details</Text>
              </SmartLink>
            )}
            {link && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                href={link}
                className={styles.link}
              >
                <Text variant="body-default-s">Live Demo</Text>
              </SmartLink>
            )}
          </Flex>
        </div>
      </div>
    </div>
  );
};
