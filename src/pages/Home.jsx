import Hero from "../components/Hero";
import Date from "../components/Date";
import Ceremony from "../components/Ceremony";
import Family from "../components/Family";
import { invitadosCeremonia } from "../data/people";

import ButtonConfirmation from "../components/ButtonConfirmation";
import DecorativeStars from "../components/DecorativeStars";

function Home() {
  const params = new URLSearchParams(window.location.search);

  const codigoInvitado = params.get("i");

  const nombreInvitado = invitadosCeremonia[codigoInvitado];
  return (
    <main className="relative bg-[#00295C]">
      <DecorativeStars />
      <Hero />
      {nombreInvitado && <Ceremony nombre={nombreInvitado} />}
      <Date />
      <Family />
      <ButtonConfirmation />
    </main>
  );
}

export default Home;
