import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Header } from "@/components/Header";
import { BestBusiness } from "@/components/BestBusiness";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness/>
    </>
  );
}
