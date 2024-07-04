import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import { UserIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Manish Kumar",
    description: "Department - I.V.F (Embryologist scientist)",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Amreen Singh",
    description: "Department - I.V.F. Specialist (Gynaecologist)",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Piyush Agrawal",
    description: "Department - Surgical Oncologist",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Naveen Kumar Maurya - M.B.B.S & M.D",
    description:
      "Department - Minimal Invasive Surgeory (General and laparoscopic Surgeon)",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Naveen Mahur - M.B.B.S, M.S",
    description: "Department - Ortho",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Ankresh Rathour - M.B.B.S, M.D Medicine",
    description: "Department - Gastro Medicine",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Vijay Kumar - M.B.B.S, M.D",
    description: "Department - Pediatrics",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Abhay Singh",
    description: "Department - Blood Bank",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Pramod Kumar",
    description: "Department - Radiologist",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Hriday Ram",
    description: "Department - Pediatrics",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "Dr. Harsh Dixit",
    description: "Department - EMO",
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
          <HText>Our Doctors</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-6 text-sm md:flex md:flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
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
  );
};

export default Doctors;
