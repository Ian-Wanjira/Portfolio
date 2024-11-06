import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Tab from '@/components/Tab';
import { Button } from '@/components/ui/button';
import { Technologies } from '@/constants';
import { Projects } from '@/constants';
const Home = () => {
  return (
    <main className="bg-primary overflow-y-auto">
      <Header />
      <div className=" flex md:flex-col items-center justify-center fixed my-auto h-screen gap-8 ml-8">
        <div className="hidden md:flex md:flex-col gap-4 w-full justify-center items-center  md:items-start">
          <Link href="https://github.com/Ian-Wanjira" target="_blank">
            <div className="icon-wrapper">
              <Image
                src="/assets/icons/mingcute_github-line.svg"
                alt="github"
                height={20}
                width={20}
              />
            </div>
          </Link>

          <Link
            href={'https://www.linkedin.com/in/ian-wanjira-96659b21a/'}
            target="_blank"
          >
            <div className="icon-wrapper">
              <Image
                src="/assets/icons/lucide_linkedin.svg"
                alt="github"
                height={20}
                width={20}
              />
            </div>
          </Link>
          <Link href={'https://x.com/techsavant__'} target="_blank">
            <div className="icon-wrapper">
              <Image
                src="/assets/icons/mingcute_twitter-line.svg"
                alt="github"
                height={20}
                width={20}
              />
            </div>
          </Link>
        </div>
        <div className="vl"></div>
      </div>
      <div className="hidden md:fixed md:flex md:flex-col items-center justify-center w-8 right-0 h-screen my-auto gap-[6.5rem] mr-8">
        <Link href="mailto:ianwanjira4@gmail.com">
          <p className="rotate-90 text-white-400 hover:text-secondary">
            ianwanjira4@gmail.com
          </p>
        </Link>

        <div className="vl"></div>
      </div>
      <div className=" px-12 md:px-32">
        <section className="min-h-screen mb-32 md:mb-0 flex items-center justify-center md:gap-10 md:pt-32">
          <div className="md:text-center flex flex-col gap-8 md:gap-0 md:items-center">
            <h3 className="font-firaMono text-base leading-4 text-secondary md:pb-6">
              Hi my name is
            </h3>
            <h1 className="text-4xl font-semibold md:text-7xl md:pb-10 text-white-200 leading-[44px] md:leading-tight">
              Ian Wanjira. <br></br>
              <span className="text-white-300">I build Great Software.</span>
            </h1>
            <p className="text-lg max-w-sm md:max-w-2xl md:text-xl md:pb-10 text-white-400">
              I’m a FullStack engineer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building accessible, human-centered
              products.
            </p>
            <Link href="#contact" className="relative z-10 w-56">
              <Button
                variant="outline"
                className="btn w-56 text-secondary border-secondary font-firaMono py-5 px-7 bg-primary"
              >
                Hire Me Today
              </Button>
            </Link>
          </div>
        </section>

        <section
          id="about"
          className="md:min-h-screen mb-32 md:mb-0 md:pt-32 flex flex-col justify-center"
        >
          <h2 className="title font-inter text-2xl font-semibold text-slate-300 mb-8 md:w-3/5">
            <span className="font-firaMono text-base font-normal text-secondary">
              01.{'  '}
            </span>
            About Me
          </h2>

          <div className="flex flex-col md:flex-row md:gap-24">
            <div>
              <p className="text-lg md:text-xl text-white-400 mb-4">
                Hello! My name is Ian and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2019 when I decided to try editing custom Bootstrap themes —
                turns out hacking together a custom reblog button taught me a
                lot about HTML & CSS!
              </p>
              <p className="text-lg md:text-xl text-white-400 mb-4">
                Fast-forward to today, and I’ve had the privilege of working at
                CintelCore I.T Limited and EpicApp Limited. My main focus these
                days is building accessible, inclusive products and digital
                exepriences for everyone.
              </p>
              <p className="text-lg md:text-xl text-white-400 mb-4">
                Here are a few technologies that I work with:
              </p>
              <ul className="grid grid-cols-3 gap-3 mb-16">
                {Technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 font-firaMono text-sm md:text-base text-white-400"
                  >
                    <Image
                      src="/assets/icons/mdi_play.svg"
                      alt="arrow"
                      width={12}
                      height={12}
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="profile relative h-64 w-64 md:w-80 md:h-80">
                <Image
                  src="/assets/images/me.jpg"
                  alt="me"
                  fill
                  sizes="(max-width: 768px) 264px, (min-width: 768px) 500px"
                  className="relative z-10 rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="md:h-screen mb-32 md:mb-0 md:pt-32 flex flex-col justify-center md:pl-16"
        >
          <h2 className="title font-inter text-2xl font-semibold text-slate-300 mb-8 md:mb-0 md:w-3/5">
            <span className="font-firaMono text-base font-normal text-secondary">
              02.{'  '}
            </span>
            Where I&apos;ve Worked
          </h2>
          <div className="md:pt-16 md:min-h-[450px]">
            <Tab />
          </div>
        </section>

        <section
          id="projects"
          className="md:min-h-screen mb-32 md:mb-0 md:pt-32 flex flex-col gap-8"
        >
          <h2 className="title font-inter text-2xl font-semibold text-slate-300 mb-8 md:mb-0 md:w-3/5">
            <span className="font-firaMono text-base font-normal text-secondary">
              03.{'  '}
            </span>
            Projects I&apos;ve Built
          </h2>
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>

        <section
          id="contact"
          className="md:min-h-screen mb-32 md:mb-0 md:pt-32 "
        >
          <h2 className="font-firaMono text-base text-secondary mb-8 md:mb-6 text-center">
            <span className="font-firaMono text-base font-normal text-secondary">
              04.
            </span>
            What&apos;s Next?
          </h2>
          <h1 className="text-center text-3xl md:text-5xl font-semibold text-slate-300">
            Get In Touch
          </h1>
          <div className="flex justify-center">
            <p className="text-center text-white-400 text-lg pt-4 md:pt-8 mb-8 md:mb-16 md:max-w-lg">
              I&apos&apos;m always open to new challenges and opportunities.
              Whether you need a seasoned developer to bring your ideas to life
              or want to connect and exchange insights, feel free to reach out.
              I&apos;ll respond promptly and look forward to engaging with you!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="mailto:ianwanjira4@gmail.com"
              className="flex justify-center w-48 relative z-10"
            >
              <Button
                variant="outline"
                className="btn w-full text-secondary border-secondary font-firaMono py-5 px-7 bg-primary"
              >
                Say Hello
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
