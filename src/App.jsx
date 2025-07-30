// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr"; // npm install react-icons biblioteca de icones react
import { FiSend } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import "./App.css";

import { useRef } from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  Comment: "",
};
function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const nodeRef = useRef(null);

  return (
    <>
      <div className="App">
        <div className="header">
          <h2>deixe sua avaliação</h2>
          <p>
            ficamos feliz com a sua compra, por favor de um feedback sobre o
            produto
          </p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />

          {/* Animação da troca */}
          <SwitchTransition mode="out-in">
            <CSSTransition
              nodeRef={nodeRef}
              key={currentStep}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div ref={nodeRef} className="inputs-container">
                {currentComponent}
              </div>
            </CSSTransition>
          </SwitchTransition>

          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="actions">
              {!isFirstStep ? (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <MdCancel />
                  <span>cancelar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
