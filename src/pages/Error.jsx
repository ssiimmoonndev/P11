import "../style/error.scss"

export default function ErrorPage() {
  return (
    <div className="error-style">
      <img src="./src/assets/404.png" alt="Erreur 404" />
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
    </div>
  )
}
