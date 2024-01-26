import Image from "next/image";
import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import Badge from "../../../../../../components/badge";

export default function EventCard({ event }: { event: Events }) {
  const descriptionHtml = documentToHtmlString(event.description as any);

  return (
    <a
      href="#"
      className="block relative rounded-lg p-4 shadow-sm shadow-indigo-900 bg-indigo-950"
    >
      <Badge text={event.tag} />
      <Image
        alt="Home"
        src={`https:${event.photo.fields.file.url}`}
        className="h-56 w-full rounded-md object-cover"
        width={200}
        height={100}
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">{event.title}</dt>

            <dd className="font-medium text-white">{event.title}</dd>
          </div>
        </dl>

        <div
          className="text-gray-400 mt-3"
          dangerouslySetInnerHTML={{
            __html: descriptionHtml,
          }}
        ></div>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-400">Horário</p>

              <p className="font-medium text-gray-300">10:00</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-400">Data</p>

              <p className="font-medium text-gray-300">28/01/2024</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
