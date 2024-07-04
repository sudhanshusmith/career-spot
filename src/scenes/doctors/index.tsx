import HText from "@/shared/HText";
import { BenefitType, RecruiterType } from "@/shared/types";
import { UserIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import accenture from "@/assets/company/accenture.png";
import ibm from "@/assets/company/ibm.png";
import infosys from "@/assets/company/infosys.png";
import mahindra from "@/assets/company/mahindra.png";
import lnt from "@/assets/company/lnt.png";
import tata from "@/assets/company/tata.png";
import eicher from "@/assets/company/eicher.png";
import { Benefit, Recruiter } from "./Benefit";

const partners: Array<BenefitType> = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "NSDC",
    description: "National Skill Development Corporation",
  },
];

const recruiters: Array<RecruiterType> = [
  {
    icon: <img src={ibm} className="h-8" />,
    title: "IBM",
  },
  {
    icon: <img src={infosys} className="h-8" />,
    title: "Infosys",
  },
  {
    icon: <img src={accenture} className="h-8" />,
    title: "Accenture",
  },
  {
    icon: <img src={mahindra} className="h-8" />,
    title: "Mahindra",
  },
  {
    icon: <img src={lnt} className="h-8" />,
    title: "L&T Infotech",
  },
  {
    icon: <img src={tata} className="h-8" />,
    title: "Tata Consultancy Services",
  },
  {
    icon: <img src={eicher} className="h-8" />,
    title: "Eicher",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Doctors = () => {
  return (
    <>
      <section id="partners" className="mx-auto w-full bg-primary-100 py-20">
        <motion.div
          className="mx-auto w-5/6"
          // onViewportEnter={() => setSelectedPage(SelectedPage.Patron)}
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
            <HText>Our Prospective Placement Partners</HText>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="mt-5 items-center justify-between gap-6 text-sm md:flex md:flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {partners.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                // link={benefit.link}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="Doctors" className="mx-auto w-full bg-primary-100 py-20">
        <motion.div
          className="mx-auto w-5/6"
          // onViewportEnter={() => setSelectedPage(SelectedPage.Patron)}
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
            <HText>Our Recruiters</HText>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="mt-5 items-center justify-between gap-6 text-sm md:flex md:flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {recruiters.map((benefit: RecruiterType) => (
              <Recruiter
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Doctors;
