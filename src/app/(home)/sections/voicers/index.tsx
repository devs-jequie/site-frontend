import React from "react";
import VoicersCard from "./components/card";

export default function Voicers({ voicers }: { voicers: Voicers[] }) {
  return (
    <section id="voicers" className="bg-gray-50 pt-20">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Conheça os organizadores
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {voicers &&
            voicers.length > 0 &&
            voicers.map((voicer, index) => (
              <VoicersCard key={index} voicer={voicer} />
            ))}
        </div>
      </div>
    </section>
  );
}
