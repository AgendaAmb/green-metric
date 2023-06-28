import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/informacion/">
                <h3>Información</h3>
            </Link>
            <Link href="/infraestructura/">
                <h3>Infraestructura y escenarios</h3>
            </Link>
            <Link href="/energia/">
                <h3>Energía y cambio climático</h3>
            </Link>
            <Link href="/residuos/">
                <h3>Residuos</h3>
            </Link>
            <Link href="/agua/">
                <h3>Agua</h3>
            </Link> 
            <Link href="/transporte/">
                <h3>Transporte</h3>
            </Link>
            <Link href="/educacion/">
                <h3>Educación</h3>
            </Link>
        </div>
    );
}
