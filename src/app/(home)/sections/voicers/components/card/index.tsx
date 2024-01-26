import React from "react";
import { Link } from "react-bootstrap-icons";
import { Icon } from "src/components/customIcon";

export default function VoicersCard({ voicer }: { voicer: Voicers }) {
  return (
    <blockquote className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img
        className="w-full h-56 object-cover object-center"
        src={voicer.photoUrl}
        alt="avatar"
      />
      <div className={`flex items-center px-6 py-3 ${voicer.statusColor}`}>
        <div className="bg-black bg-opacity-50 rounded-3xl h-8 w-8 flex text-center items-center justify-center hover:text-xl">
          {voicer.statusIcon}
        </div>
        <h1 className="mx-3 text-white font-semibold text-lg">
          {voicer.status}
        </h1>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{voicer.name}</h1>
        <p className="py-2 text-lg text-gray-700">{voicer.bio}</p>
        {voicer.links.map((link, index) => (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 text-indigo-900"
          >
            <Icon iconName={link.icon} />
            <h1 className="px-2 text-sm">{link.name}</h1>
          </a>
        ))}
      </div>
    </blockquote>
  );
}
