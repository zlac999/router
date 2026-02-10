import styles from "./Destination.module.css";

function Destination() {
  return (
    <div className={styles.des}>
      <h1>Miami</h1>
      <p>
        Miami je veliki obalni grad na jugoistoku savezne države Florida u
        United States. Poznat je po toploj klimi, dugim pješčanim plažama,
        latinskoameričkom utjecaju i živopisnom noćnom životu. Grad je posebno
        prepoznatljiv po četvrti South Beach, koja je dio grada Miami Beach.
        Tamo se nalaze poznate Art Deco zgrade, luksuzni hoteli i restorani uz
        ocean. Miami je također važno financijsko i trgovačko središte, često
        nazivan “vrata Latinske Amerike” zbog snažne povezanosti s državama
        Južne i Srednje Amerike. Kulturno je izuzetno raznolik grad, veliki dio
        stanovništva čine Hispanoamerikanci, osobito kubanskog porijekla. Četvrt
        Little Havana poznata je po kubanskoj kuhinji, glazbi i tradicionalnim
        cigarama.
      </p>
      <img
        src="https://gotripzi.com/_astro/miami-us-hero.DNRtzLss.webp"
        alt="Miami iz zraka"
      />
    </div>
  );
}

export default Destination;
