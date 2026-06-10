import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Lock, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { getDefaultGestionPath } from "../lib/gestionHelpers";
import { CLUB } from "../config/club";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login, user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate(getDefaultGestionPath(user.role), { replace: true });
    }
  }, [loading, user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const sessionUser = await login(username.trim(), password);
      navigate(getDefaultGestionPath(sessionUser.role), { replace: true });
    } catch (err) {
      setError(err.message || "No se pudo iniciar sesión");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-shell">
        <section className="login-card">
          <Link to="/" className="login-back">
            <ArrowLeft size={16} aria-hidden />
            Volver a la web
          </Link>

          <header className="login-brand">
            <img
              src={`${import.meta.env.BASE_URL}img/logo-clubflow.svg`}
              alt=""
              className="login-brand__logo"
            />
            <div>
              <h1>{CLUB.name}</h1>
              <p>Iniciar sesión</p>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="login-form-body">
            <div className="login-field">
              <label className="login-label" htmlFor="username">
                Usuario
              </label>
              <div className="login-input-wrap">
                <User size={18} className="login-input-icon" aria-hidden />
                <input
                  id="username"
                  type="text"
                  className="login-input"
                  placeholder="Ej. admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <label className="login-label" htmlFor="password">
                Contraseña
              </label>
              <div className="login-input-wrap">
                <Lock size={18} className="login-input-icon" aria-hidden />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="login-input"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>

            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="login-submit-button" disabled={submitting}>
              {submitting ? "Entrando…" : "Entrar"}
            </button>

            <p className="login-demo">
              <strong>Acceso de prueba</strong>
              <br />
              Usuario: <strong>admin</strong> · Contraseña: <strong>ChangeMe123!</strong>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
