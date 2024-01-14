"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="blue"
            className="text-3xl !leading-snug"
          >
            Generative AI
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-3xl"
          >
            DCV LAB의 아트랩 사업부 Art&Tech 전시 온라인 쇼케이스
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28 text-base"
          >
            크리에이터를 지원하기 위해 &apos;Text to Video with Audio&apos;기술을 활용하고 있습니다.
            이 기술을 통해 음악과 비디오를 결합한 작품 활동을 지원하며, 특히 작품의 초기 아이디어 구상 단계에서 크게 도움을 줍니다.
            원하는 텍스트와 음악을 넣어 작품을 미리 만들어보는 것이 가능하며, 이를 통해 크리에이터들에게 가이드라인을 제공합니다.
          </Typography>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-1 gap-1">
            <Image
              width={600}
              height={600}
              src="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
