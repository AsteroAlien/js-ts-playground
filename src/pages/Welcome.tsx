import { Link } from "@tanstack/react-router";

export function Welcome() {
    return (
        <>
            <main id="welcome-container" className="card">
                <h1>Welcome To Practice I Guess</h1>
                <p>To Learn Is To Grow, So Why Not Grow A Little :P</p>
               
                <div className="card">
                    <button>
                        <Link to="/dashboard/WebWorkDemo">WebWork Demo</Link>
                    </button>
                </div>
            </main>

        </>
    );
}