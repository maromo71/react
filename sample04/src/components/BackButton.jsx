import { Link, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Link className="button-link" onClick={() => navigate(-1)}>Voltar</Link>
    </div>

  );
}

export default BackButton;