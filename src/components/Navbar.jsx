import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/informacion/">
                <h5>Información</h5>
            </Link>
            <Link href="/infraestructura/">
                <h5>Infraestructura y escenarios</h5>
            </Link>
            <Link href="/energia/">
                <h5>Energía y cambio climático</h5>
            </Link>
            <Link href="/residuos/">
                <h5>Residuos</h5>
            </Link>
            <Link href="/agua/">
                <h5>Agua</h5>
            </Link> 
            <Link href="/transporte/">
                <h5>Transporte</h5>
            </Link>
            <Link href="/educacion/">
                <h5>Educación</h5>
            </Link>
        </div>
    );
}
