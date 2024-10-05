import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Mangue Sapace 2.0",
  description: "We're, MangueSpace 2.0, our goal is to facilitate the access to valuable earth data, which can help on decisions and calculations to the people who play a vital role in the economic chain, the farmers.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
