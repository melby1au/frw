import './Footer.css'
function Footer(){
    return(
        <footer>
           <div className="footer-section">
    <h2>Links Importantes</h2>
    <ul>
      <li><a href="#">Suporte</a></li>
      <li><a href="#">Sobre Nós</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
 
  <div className="footer-section">
    <h2>Contato</h2>
    <p>Email: barbie.contato@mattel.com</p>
    <p>Telefone: (00)4002-8922</p>
  </div>
 
  <div className="footer-section">
    <h2>Redes Sociais</h2>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </div>

        </footer>
    )
}
export default Footer