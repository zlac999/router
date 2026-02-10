import styles from "./Hobby.module.css";

function Hobby() {
  return (
    <div className={styles.hobby}>
      <h1>Ilegal Racing</h1>
      <p>
        We LOVE Street Racing!!! Ilegalne organizirane utrke su nezakonita
        natjecanja u brzini koja se najčešće održavaju na javnim cestama bez
        dozvole i sigurnosnih mjera. Sudionici obično koriste modificirane
        automobile ili motocikle, a događaji se organiziraju putem društvenih
        mreža ili zatvorenih grupa. Takve utrke predstavljaju veliku opasnost za
        vozače, gledatelje i ostale sudionike u prometu. Osim rizika od teških
        nesreća, sudionici se suočavaju s visokim novčanim kaznama, oduzimanjem
        vozačke dozvole, zapljenom vozila pa čak i zatvorskim kaznama. Iako ih
        neki vide kao oblik adrenalinske zabave, ilegalne utrke imaju ozbiljne
        pravne i sigurnosne posljedice.
      </p>
      <img
        src="https://preview.redd.it/a-bit-of-illegal-street-racing-in-the-gran-turismo-world-v0-zn2hgonvi03d1.jpg?width=640&crop=smart&auto=webp&s=1ed44211aabcd264b7bc33e4f7912bc19af1bee2"
        alt="Ulicne utrke"
      />
    </div>
  );
}

export default Hobby;
