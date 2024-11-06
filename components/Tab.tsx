import { PlayIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Tab = () => {
  return (
    <Tabs
      defaultValue="cintelcore"
      className="w-full md:flex md:gap-10 md:items-start md:justify-start"
    >
      <TabsList className="md:flex md:flex-col md:gap-5 md:items-start md:min-w-48">
        <TabsTrigger
          value="cintelcore"
          className={cn(
            'font-firaMono text-xs',
            'data-[state=active]:text-secondary data-[state=active]:border-b-2 md:data-[state=active]:border-0 md:data-[state=active]:border-l-2 md:data-[state=active]:border-r-2 data-[state=active]:border-secondary md:data-[state=active]:border-l-secondary md:data-[state=active]:border-r-secondary',
          )}
        >
          Cintelcore I.T Limited
        </TabsTrigger>
        <TabsTrigger
          value="epicapp"
          className={cn(
            'font-firaMono text-xs',
            'data-[state=active]:text-secondary data-[state=active]:border-b-2 md:data-[state=active]:border-0 md:data-[state=active]:border-l-2 md:data-[state=active]:border-r-2 data-[state=active]:border-secondary md:data-[state=active]:border-l-secondary md:data-[state=active]:border-r-secondary',
          )}
        >
          EpicApp Limited
        </TabsTrigger>
      </TabsList>
      <div>
        <TabsContent value="cintelcore">
          <div className="pt-5 md:pt-0 md:max-w-screen-sm">
            <h3 className="text-xl font-semibold text-white-200">
              React-Native Developer{' '}
              <Link
                href="https://cintelcore.com"
                className="text-secondary underline underline-offset-4"
                target="_blank"
              >
                @ CintelCore I.T Limited
              </Link>
            </h3>
            <p className="font-firaMono text-sm pt-4 mb-6 text-white-300">
              Jan 2023 - Dec 2023
            </p>
            <ul>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Developed a mobile application for a visitor management system
                  incorporating facial recognition technology.
                </p>
              </li>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Implemented automatic user face capture and API based
                  authentication to streamline the visitor check-in and
                  check-out process.
                </p>
              </li>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Designed user flows for various stages of image processing and
                  data capture.
                </p>
              </li>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Ensured seamless integration with backend APIs for image
                  mapping and user-detail retrieval.
                </p>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="epicapp">
          <div className="pt-5 md:pt-0 md:max-w-screen-sm">
            <h3 className="text-xl font-semibold text-white-200">
              Angular Developer{' '}
              <Link
                href="https://www.appinapp.co.ke/"
                className="text-secondary underline underline-offset-4"
                target="_blank"
              >
                @ EpicApp Limited
              </Link>
            </h3>
            <p className="font-firaMono text-sm pt-4 mb-6 text-white-300">
              May 2022 - Oct 2023
            </p>
            <ul>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Collaborated with designers, project managers, and other
                  engineers to transform creative concepts into production
                  realities for clients and stakeholders
                </p>
              </li>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Developed and styled interactive admin dashboard for{' '}
                  <Link
                    href={'https://www.appinapp.co.ke/'}
                    target="_blank"
                    className="text-secondary"
                  >
                    AppInApp {''}
                  </Link>
                  using Angular and Angular Material
                </p>
              </li>
              <li className="flex items-start gap-5 mb-4">
                <Image
                  src="/assets/icons/mdi_play.svg"
                  alt="play"
                  height={16}
                  width={16}
                  className="shrink-0 relative top-1"
                />
                <p className="text-lg text-white-400">
                  Integrated with REST APIs from different micro-services to
                  enable effortless administration of the entire system
                </p>
              </li>
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Tab;
