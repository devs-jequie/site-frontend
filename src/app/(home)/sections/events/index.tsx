import React from "react";
import EventCard from "./components/card";

export default function Events({
  events,
}: {
  events: EntriesResponse<Events>;
}) {
  function renderEvents() {
    return events.items.map((event) => {
      return <EventCard key={event.fields.slug} event={event.fields} />;
    });
  }

  return (
    <section
      id="events"
      className="bg-gradient-to-r from-blue-950 to-indigo-900 p-10"
    >
      <h1 className="text-3xl font-extrabold sm:text-4xl text-white">
        Meetups e <br />
        eventos:
      </h1>
      <div className="mt-10 grid grid-cols-3 gap-10">{renderEvents()}</div>
    </section>
  );
}
