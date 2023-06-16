import Navbar from "./Navbar";

function Header() {
    return (
        <div className="header">
            <div className="titles">
                <h3>Agenda Ambiental</h3>
                <h1>Green Metric</h1>
                <h3>Universidad Autónoma de San Luis Potosí</h3>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
