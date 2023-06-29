import Navbar from "./Navbar";

function Header() {
    return (
        <div className="header">
            <div className="titles no-overflow">
                <h1>Universidad Autónoma de San Luis Potosí</h1>
                <h2>Agenda Ambiental</h2>
                <h2>Green Metric</h2>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
