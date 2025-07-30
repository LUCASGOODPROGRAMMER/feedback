import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>quase la...</h2>
      <p>
        "Seu feedback é importante pois nos ajuda a melhorar continuamente
        nossos serviços e atender melhor às suas necessidades. além do mais
        ganhará de brinde um <strong>cupom</strong> com 10% off em qualquer loja
        parceira da empresa"
      </p>
      <p>(para confirmar o envio clique no botão enviar)</p>
      <h3>feedback de {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review]}</span>
      </p>
      <p className="review-data">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
