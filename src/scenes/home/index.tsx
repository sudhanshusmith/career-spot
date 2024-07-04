import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePage from "@/assets/name.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

import Sponsor1 from "@/assets/gallery/1.jpg";
import Sponsor2 from "@/assets/gallery/2.jpg";
import Sponsor3 from "@/assets/gallery/3.jpg";
import Sponsor4 from "@/assets/gallery/4.jpg";
import Homeimg1 from "@/assets/gallery/7.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="">
                {/* before:absolute before:-top-10 before:-left-20 before:z-[-1]
                md:before:content-evolvetext */}
                <p className="text-3xl font-semibold">
                  Career Spot: We Don't Believe In Making Engineers, We Believe
                  In Making Careers
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Career Spot is a place where students are helped to achieve their
              dreams. This has been Developed keeping in mind the future of the
              students. At career spot we take care of not only the education
              but the overall development of the students' future.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Spot your seat
            </ActionButton>
            {/* <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink> */}
          </motion.div>
        </div>
        <motion.div />
        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <motion.img
            whileHover={{ scale: 1.3, rotate: 4 }}
            whileTap={{ scale: 0.9 }}
            alt="home-pageGraphic"
            src={Homeimg1}
            className="mt-6 h-auto w-80 rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="Health Insurance" src={Sponsor1} className="h-16" />
              <img alt="Health Insurance" src={Sponsor2} className="h-16" />
              <img alt="Health Insurance" src={Sponsor3} className="h-16" />
              <img alt="Health Insurance" src={Sponsor4} className="h-16" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
