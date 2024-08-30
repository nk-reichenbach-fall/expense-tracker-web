import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div className="AppContainer">
            <h1 className="HeaderContainer">Expense Tracker</h1>
            <div>
                <Link to='/create-tracker'>
                    <button>Create new tracker</button>
                </Link>
            </div>
            <hr />
            <div>List of trackers </div>
        </div>
    );
}

export default Home