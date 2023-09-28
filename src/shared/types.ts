export enum SelectedPage {
    Home = "home",
    Benfits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  export type BenefitType = {
    icon: JSX.Element;
    title: string;
    description: string;
  }