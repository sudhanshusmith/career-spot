import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { FacilityType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import cancer from "@/assets/cancer-awareness-ribbon-vector-2041419.webp";
import ambulance from "@/assets/sticker-ambulance-emergency-care-life-vector-13942974.webp"
import cardio from "@/assets/cardiology-department-rgb-color-icon-vector-33391072.webp"
import Chairman from "@/assets/chairman.jpg";
import surgery from "@/assets/medical-kit-with-cross-symbol-and-stethoscope-vector-35836689.webp"
import gastro from "@/assets/stomach-with-man-line-icon-human-gastrointestinal-vector-30500348.webp"
import Benefit from "./Benefit";
import uro from "@/assets/kidney-line-icon-anatomy-and-biology-urology-vector-21591138.webp"
import ortho from "@/assets/knee-injection-concept-vector-36803924.webp"
import obstrian from "@/assets/obstetrician-icon-isolated-vector-47795641.webp"
import icu from "@/assets/intensive-care-rgb-color-icon-vector-33391071.webp"
import lapa from "@/assets/hysteroscopy-of-female-reproductive-system-treat-vector-43114268 (1).webp"
const benefits: Array<FacilityType> = [
  {
    icon: <img src={ambulance} className="h-8" />,
    title: "Accident and Emergency Care",
  },
  {
    icon: <img src={cancer} className="h-8" />,
    title: "Cancer Care",
  },
  {
    icon: <img src={cardio} className="h-8" />,
    title: "Cardiology",
  },
  {
    icon: <img src={gastro} className="h-8" />,
    title: "Gastrointestinal Science",
  },
  {
    icon: <img src={surgery} className="h-8" />,
    title: "General Surgery",
  },
  {
    icon: <img src={icu} className="h-8" />,
    title: "ICU & Critical Care",
  },
  {
    icon: <img src={lapa} className="h-8" />,
    title: "Laparoscopic Surgery",
  },
  {
    icon: <img src={obstrian} className="h-8" />,
    title: "Obstetrics and Gynaecology",
  },
  {
    icon: <img src={ortho} className="h-8" />,
    title: "Orthopaedics",
  },
  {
    icon: <img src={uro} className="h-8" />,
    title: "Urology",
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
          <HText>MORE THAN JUST HOSPITAL</HText>
          <p className="my-5 text-sm">
            We offer top-tier medical equipment, expert physicians, and
            specialized treatments to guide you toward optimal health outcomes
            effortlessly. We prioritize genuine concern for every patient under
            our care.
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
            src={Chairman}
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
                    CHAIRMAN's MESSAGE
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
                Welcome to GSS Hospital, where we are dedicated to serving our
                community with excellence in healthcare. Our mission is to
                provide compassionate care, advanced treatments, and a healing
                environment for all our patients. We are dedicated to providing
                exceptional healthcare with compassion and expertise. We have a
                team of highly skilled & experienced who deliver personalized
                care tailored to the needs of each patient.
              </p>
              <p className="mb-5">
                Our state-of-the-art facilities always ensure accurate diagnoses
                and effective treatments. From routine check-ups to complex
                surgeries, we are committed to your well-being every step of the
                way.
              </p>
              <p className="mb-5">
                Whether you are here for a consultation, procedure, or ongoing
                treatment, you can trust us to deliver excellence in healthcare.
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
