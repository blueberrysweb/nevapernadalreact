import { useEffect, useState } from "react";
import { crearFlocs } from "./crearFlocs";
import { Floc } from "./Floc";
export const NUMERO_DE_FLOCS_INICIAL = 10;

function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  let x = floc.x + 7 * Math.random();
  if (x > 100) x = -10;
  return { ...floc, x };
}

export default function Neu() {
  const [flocs, setFlocs] = useState(crearFlocs);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setFlocs(moureFlocs);
    }, 100);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      {flocs.map((floc, index) => (
        <Floc key={index} floc={floc} />
      ))}
    </>
  );
}
