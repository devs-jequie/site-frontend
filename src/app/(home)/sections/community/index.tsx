import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { FaDiscord, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import CommunityCard from "./components/card";
import { DevtoIcon } from "./components/icons";
import DividerRoadmap from "../../../../components/roadmapDivider";

export default function Community({
  title,
  description,
  buttonLabel,
  buttonLink,
}) {
  return (
    <section
      id="community"
      className="min-h-screen flex items-center bg-blue-950 relative"
    >
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-white text-left">
              {title}
            </h2>

            <div
              className="mt-4 text-gray-400 text-left"
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(description),
              }}
            ></div>

            <a
              href={buttonLink || "#"}
              className="uppercase mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {buttonLabel}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <CommunityCard
              label="Whatsapp"
              description="Engajamento e interação com a comunidade"
              icon={<FaWhatsapp />}
            />
            <CommunityCard
              label="Discord"
              description="Live code e competições"
              icon={<FaDiscord />}
            />
            <CommunityCard
              label="Youtube"
              description="Vídeos gravados e lives"
              icon={<FaYoutube />}
            />
            <CommunityCard
              label="Dev.to"
              description="Postagens dos criadores da comunidade"
              icon={<DevtoIcon />}
            />
            <CommunityCard
              label="Github"
              description="Repositorios da comunidade"
              icon={<FaGithub />}
            />
          </div>
        </div>
      </div>
      <DividerRoadmap />
    </section>
  );
}
