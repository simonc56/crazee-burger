import { ChangeEvent, FormEvent, useState } from "react";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez votre prénom..."
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default LoginForm;
