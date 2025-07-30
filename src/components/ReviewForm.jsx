import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <h2>você gostou do produto?</h2>
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Não gostei</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Achei bom</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Adorei e recomendo</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment" id="feedback">
          comentário:
        </label>
        <textarea
          name="comment"
          id="comment"
          placeholder="como foi sua experiência?"
          required
          value={data.comment||""}
          onChange={(e)=> updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
