export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface RecruiterType {
  icon: JSX.Element;
  title: string;
}

export interface FacilityType {
  icon: JSX.Element;
  title: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
