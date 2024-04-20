"use client";
import Image from "next/image";
import Section from "@/components/animated/section";
import Paragraph from "@/components/animated/paragraph";
import VoxelDog from "@/components/model/voxel-dog";

export default function Home() {
  return (
    <div className="max-w-3xl">
      <VoxelDog />
      <div className="rounded-lg bg-[#363638] p-3 mb-6 text-center">
        Hello, I&apos;m a full-stack developer based in India!
      </div>

      <div className="md:flex md:justify-center">
        <div className="flex-grow-1 ">
          <h2 className=" text-[2.5em] font-bold font-serif">Kunal Shivhare</h2>
          <p>Software Engineer ( Team Lead / Developer / Programmer )</p>
        </div>
        <div className="flex-shrink-0 mt-4 text-center md:-mt-2 md:ml-6 ">
          <Image
            src={require("./profile.jpg")}
            width={100}
            height={100}
            className="border-whiteAlpha-800 border-2 border-solid w-[100px] h-[100px] inline-block rounded-full overflow-hidden"
            alt="Profile"
          />
        </div>
      </div>

      <Section delay={0.1}>
        <h1 className="underline decoration-[#525252] underline-offset-8 font-semibold mb-4 text-lg">
          Work
        </h1>
        <Paragraph>
          Kunal is Team Lead and a full-stack developer based in India with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          to play video games. Currently, he is a working professional at
          <a href="https://www.badho.in" className="text-pink-400">
            {" "}
            Badho
          </a>
          .
        </Paragraph>
      </Section>
    </div>
  );
}
