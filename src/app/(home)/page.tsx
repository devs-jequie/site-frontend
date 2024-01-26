import Header from "../../components/header";
import Hero from "./sections/hero";
import Footer from "../../components/footer";
import Events from "./sections/events";
import Community from "./sections/community";
import Voicers from "./sections/voicers";
import getEntry, { getEntries } from "../../services/contentfull";

export default async function Home() {
  const voicers: Voicers[] = [
    {
      name: "Tulio Calil",
      bio: "Software Engineer, apaixonado por tecnologia e por compartilhar conhecimento. Atualmente trabalha na empresa GOK.Digital como Tech Lead.",
      photoUrl: "https://avatars.githubusercontent.com/u/22357579?v=4",
      status: "On fire",
      statusColor: "bg-red-700",
      statusIcon: "🔥",
      links: [
        {
          name: "Github",
          url: "",
          icon: "Github",
        },
        {
          name: "Linkedin",
          url: "",
          icon: "Linkedin",
        },
        {
          name: "Blog",
          url: "",
          icon: "BrowserSafari",
        },
      ],
    },
  ];

  const heroData = await getEntry<Hero>("lwjRqhQceN06klZ7qswTV");
  const headerMenu = await getEntries<HeaderMenu>("headerMenu");
  const communityData = await getEntry<Community>("66i8P6AFQVEuRWEbQxdJRI");
  const eventsData = await getEntries<EntriesResponse<Events>>("eventsSection");

  return (
    <>
      <Header headerMenu={headerMenu} />
      <Hero heroData={heroData} />
      <Community {...communityData} />
      <Voicers voicers={voicers} />
      <Events events={eventsData} />
      <Footer />
    </>
  );
}
