import styles from "./Car.module.css";

function Car() {
  return (
    <div className={styles.car}>
      <h1>Ferrari LaFerrari</h1>
      <p>
        LaFerrari je jedan od najekskluzivnijih i najmoćnijih automobila koje je
        ikada proizveo Ferrari. Predstavljen 2013. godine, ovaj hibridni
        hiperautomobil kombinira 6.3-litreni V12 motor s električnim pogonom
        (HY-KERS sustav), razvijajući ukupno oko 963 konjske snage. Od 0 do 100
        km/h ubrzava za manje od 3 sekunde, a maksimalna brzina prelazi 350
        km/h. Proizvedeno je samo 499 coupé primjeraka (plus ograničena Aperta
        verzija), što ga čini izuzetno rijetkim i traženim među kolekcionarima.
        LaFerrari nije samo automobil — to je tehnološka demonstracija snage,
        brzine i talijanskog dizajna na najvišoj razini.
      </p>
      <img
        src="https://media.automotiveworld.com/app/uploads/2013/03/12091038/LaFerrari.front_.aperto.jpg"
        alt="LaFerrari image"
      />
    </div>
  );
}

export default Car;
