import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
const Home = () => {
  return (
    <main className="bg-primary">
      <Header />
      <div className=" flex md:flex-col items-center justify-center md:py-20 fixed top-24 md:top-1/4 md:left-0 md:pl-12">
        <div className="hidden md:flex md:flex-col gap-20 md:gap-6 md:mb-6 w-full justify-center items-center  md:items-start">
          <Link
            href={'https://github.com/Ian-Wanjira'}
            target="_blank"
            className="hover:fill-secondary"
          >
            <Image
              src="/assets/icons/mingcute_github-line.svg"
              alt="github"
              height={20}
              width={20}
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/ian-wanjira-96659b21a/'}
            target="_blank"
          >
            <Image
              src="/assets/icons/lucide_linkedin.svg"
              alt="github"
              height={20}
              width={20}
            />
          </Link>
          <Link href={'https://x.com/techsavant__'} target="_blank">
            <Image
              src="/assets/icons/mingcute_twitter-line.svg"
              alt="github"
              height={20}
              width={20}
            />
          </Link>
        </div>
        <div className="vl"></div>
      </div>
      <div className="hidden md:fixed md:flex md:flex-col items-center w-8 right-0 top-72 pr-12">
        <p className="rotate-90 text-white-400 mb-20 ">ianwanjira4@gmail.com</p>
        <div className="vl"></div>
      </div>
      <div className="container">
        <section className="h-screen flex items-center justify-center md:gap-10 md:pt-20">
          <div className="md:text-center flex flex-col gap-8 md:gap-0 md:items-center">
            <h3 className="font-firaMono text-sm  md:text-base leading-4 text-secondary md:pb-6">
              Hi my name is
            </h3>
            <h1 className="text-4xl font-semibold md:text-7xl md:pb-10 text-white-200 md:leading-tight">
              Ian Wanjira. <br></br>
              <span className="text-white-300">I build Great Software.</span>
            </h1>
            <p className="text-base max-w-sm md:max-w-2xl md:text-xl md:pb-10 text-white-400">
              I’m a FullStack engineer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building accessible, human-centered
              products.
            </p>
            <Button
              variant="outline"
              className="w-60 text-secondary border-secondary font-firaMono"
            >
              Hire Me Today
            </Button>
          </div>
        </section>

        <section id="about">This is the about section</section>
      </div>
    </main>
  );
};

export default Home;
