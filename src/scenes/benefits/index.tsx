import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { FacilityType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import notes from "@/assets/gallery/12.jpg";
import preClass from "@/assets/gallery/1.jpg";
import college from "@/assets/gallery/7.jpg";
import extraClass from "@/assets/gallery/12.jpg";
import hostel from "@/assets/gallery/8.jpg";
import training from "@/assets/gallery/10.jpg";
import jobs from "@/assets/gallery/29.jpg";
import placement from "@/assets/gallery/36.jpg";
import chairman from "@/assets/gallery/32.jpg";
import Benefit from "./Benefit";
const benefits: Array<FacilityType> = [
  {
    icon: <img src={notes} className="h-8" />,
    title: "Live Notes, Internet Lab",
  },
  {
    icon: <img src={preClass} className="h-8" />,
    title: "Pre-Classes",
  },
  {
    icon: <img src={college} className="h-8" />,
    title: "College",
  },
  {
    icon: <img src={extraClass} className="h-8" />,
    title: "Extra Classes",
  },
  {
    icon: <img src={hostel} className="h-8" />,
    title: "Hostel",
  },
  {
    icon: <img src={training} className="h-8" />,
    title: "Industrial Training",
  },
  {
    icon: <img src={jobs} className="h-8" />,
    title: "Jobs",
  },
  {
    icon: <img src={placement} className="h-8" />,
    title: "Placement",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Our Caring process</HText>
          <p className="my-5 text-sm">
            The New Generation spends a lot of time on the internet browsing
            through a lot of websites. They also spend time on social networks
            like Facebook, Twitter, Whatsapp, Instagram, LinkedIn. etc. We are
            providing them a platform where they could use the internet for
            educational purposes. Many students spend most of their time on the
            internet, so to utilize student's time, we have a CSO application
            which is available in the play store. Here we give a calendar in
            which students can track their upcoming assignments, exams, projects
            and other important events, as well as a homework widget where
            students can sync their assignments and receive reminders for
            when they're due.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex md:flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: FacilityType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              // description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-96 rounded-xl"
            alt="benefits-page-graphic"
            src={chairman}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Scholarship
                    {/* <span className="text-primary-500">FIT</span> */}
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Our organization help those students who comes from Below the Poverty Line (BPL). Those who are talented but due to lack of resources their talents are not brought to the forefront. We help them get the government provided scholarships for their education. Our organization is already providing many students education with Scholarship according to Government Policies.
              </p>
            </motion.div>

            {/* BUTTON */}
            {/* <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
