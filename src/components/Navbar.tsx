import Link from "next/link";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Peluquería</h2>

      <ul className="menu">
        <li>
          <Link href="/" className="link">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/servicios" className="link">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
