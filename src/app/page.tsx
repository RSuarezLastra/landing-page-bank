import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Header } from "@/components/Header";
import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { Testimonials } from "@/components/Testimonials";
import { PaymentMethods } from "@/components/PaymentMethods";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness/>
      <ChooseYourCards/>
      <ControlBilling/>
      <Testimonials/>
      <PaymentMethods/>
    </>
  );
}
