import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="relative max-w-5xl md:bg-none bg-cover bg-center border-none shadow-lg md:shadow-none shadow-green-100/50 mb-6">
      {/* Overlay for the fade effect, placed behind the content */}
      <div className="absolute inset-0 bg-primary opacity-95 z-0 md:hidden"></div>

      {/* Content with higher z-index to remain on top and clickable */}
      <div className="relative z-10">
        <div className="browser-skeleton hidden md:block md:absolute md:min-w-[500px] md:min-h-[362px]">
          <Link href={project.projectUrl} target="_blank">
            <Image
              src={project.imageUrl}
              alt="project image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="relative rounded-md object-contain"
            />
          </Link>
        </div>

        <div>
          <div className="flex justify-end">
            <Link href={project.projectUrl} target="__blank">
              <CardHeader>
                <CardTitle className="font-firaMono font-sm text-secondary">
                  Case Study
                </CardTitle>
                <CardDescription className="text-xl font-semibold text-white-200 hover:text-secondary">
                  {project.title}
                </CardDescription>
              </CardHeader>
            </Link>
          </div>

          <div className="flex justify-end">
            <CardContent className="md:hover:shadow-md md:hover:shadow-sky-500 md:rounded-md md:bg-blue-500 md:w-3/5 transition-shadow">
              <p className="text-lg text-slate-400">{project.description}</p>
            </CardContent>
          </div>
          <div className="flex justify-end">
            <CardFooter className="flex flex-col items-start md:items-end gap-6 md:gap-2 md:pt-4 md:max-w-md">
              <p className="text-xs leading-6 font-firaMono text-white-200">
                {project.technologies.join(', ')}
              </p>
              <div className="flex flex-row gap-7">
                {project.githubLinks.map((githubLink, index) => (
                  <Link key={index} href={githubLink} target="_blank">
                    <Image
                      src="/assets/icons/mingcute_github-line.svg"
                      alt="github"
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}

                <Link href={project.projectUrl} target="__blank">
                  <ExternalLinkIcon className="w-[1.125rem] h-[1.125rem] text-white-300" />
                </Link>
              </div>
            </CardFooter>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
