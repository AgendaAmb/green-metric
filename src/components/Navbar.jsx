import Link from "next/link";
export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/forms/dependencia/1">
                <h3>Información</h3>
            </Link>
            <Link href="#">
                <h3>I y E</h3>
            </Link>
            <Link href="#">
                <h3>E y CC</h3>
            </Link>
            <Link href="/forms/residuos/1">
                <h3>Residuos</h3>
            </Link>
            <Link href="#">
                <h3>Agua</h3>
            </Link>
            <Link href="#">
                <h3>Transporte</h3>
            </Link>
            <Link href="#">
                <h3>Educacion</h3>
            </Link>
        </div>
    );
}
