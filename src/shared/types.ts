export enum SelectedPage {
  Home = "home",
  About = "aboutus",
  Recruiter = "ourrecruiters",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface PartnerType {
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
