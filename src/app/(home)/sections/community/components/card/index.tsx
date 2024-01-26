import Image from "next/image";
import React from "react";
import Badge from "../../../../../../components/badge";

export default function CommunityCard({ label, icon, description }) {
  return (
    <div className="block rounded-xl bg-white border border-gray-200 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
      <span className="inline-block rounded-lg bg-gray-100 p-3">{icon}</span>

      <h2 className="mt-2 font-bold">{label}</h2>

      <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        {description}
      </p>
    </div>
  );
}
