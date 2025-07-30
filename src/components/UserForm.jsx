import { FaArrowRotateLeft } from "react-icons/fa6";
import './UserForm.css'

const UserForm = ({data, updateFieldHandler}) => {

  return (
    <div className="user-form">
      <h2>DADOS DO COMPRADOR</h2>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="digite o nome de usuário"
            value={data.name || ""}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="digite o seu e-mail"
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
