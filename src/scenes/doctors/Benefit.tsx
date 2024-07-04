import { motion } from "framer-motion";

const childVariant = {
  // hidden: { opacity: 0, scale: 0.9 },
  // visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type RecruiterProps = {
  icon: JSX.Element;
  title: string;
};

export const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="md:h-34 mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:w-64"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        // onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink> */}
      {/* <Link to={link} className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
        Learn More
      </Link> */}
    </motion.div>
  );
};

export const Recruiter = ({ icon, title }: RecruiterProps) => {
  return (
    <motion.div
      variants={childVariant}
      className="md:h-34 mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:w-64"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-primary-100 p-4">{icon}</div>
      </div>

      <h4 className="font-bold">{title}</h4>
      {/* <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        // onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink> */}
      {/* <Link to={link} className="text-sm font-bold text-primary-500 underline hover:text-secondary-500">
        Learn More
      </Link> */}
    </motion.div>
  );
};
