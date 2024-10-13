'use client';

import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";


export function FirstBlock() {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-semibold">
            El nuevo
            <span className="block degradedBlue bg-blueLight">
              banco digital
            </span>
            para todos
          </h1>
          <p className="max-w-md mt-10">Nuestro equipo de expertos utiliza una metodología para identificar las tarjetas de crédito que probablemente se ajusten a sus necesidades. Examinamos tasas porcentuales anuales, tarifas anuales.</p>
          <div className="my-8">
            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Empieza ahora</Link>
          </div>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image src="/assets/cards-block.png" className="h-auto w-72 md:w-full" width={450} height={450} alt="cards image" />
        </MotionTransition>
      </div>
    </div>
  )
}
