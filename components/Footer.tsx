import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="md:hidden flex items-center justify-center gap-8">
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
      <Link href="https://github.com/Ian-Wanjira" target="_blank">
        <p className="text-center text-xs font-firaMono py-8 text-slate-400 hover:text-secondary">
          Designed & Built by Ian Wanjira
        </p>
      </Link>
    </>
  );
};

export default Footer;
