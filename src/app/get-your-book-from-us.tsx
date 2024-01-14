"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: BanknotesIcon,
    title: "세미나",
    description:
      "설명",
  },
  {
    icon: LifebuoyIcon,
    title: "논문",
    description:
      "설명",
  },
  {
    icon: TruckIcon,
    title: "포트폴리오",
    description:
      "설명",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder="title">
          우리는 이런 연구를 합니다!
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
          placeholder="subtitle"
        >
          딥러닝 기초 공부(CNN), 20개 GAN 논문 리뷰와 코드 구현, Diffusion 10개 논문 리뷰와 코드 구현, 최신 연구 동향 파악하고 GenAI 관련 서비스를 구현합니다.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
