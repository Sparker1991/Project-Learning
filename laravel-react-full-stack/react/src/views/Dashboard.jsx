import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDashboardData();
    }, []);
    const getDashboardData = (u) => {
        setLoading(true);

        axiosClient.get('/dashboard-data')
            .then(({ data }) => {
                console.log(data);
                setDashboardData(data.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const cardIcons = {
        games: 'bi-controller',
        media: 'bi-play-circle',
        images: 'bi-images',
        learning: 'bi-book',
    };
    //TODO add pages
    /*const cardLinks = {
        games: '/games',
        media: '/media',
        images: '/images',
        learning: '/learning',
    };*/

    //If loading true, show else show the cards.
    return (
        <div className="dashboard">
            <h1>Users Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="dashboard-cards">
                    {dashboardData.map((card) => (
                        <Link
                            to='/users'
                            className="dashboard-card"
                            key={card.id}
                        >
                            <div className="dashboard-card-icon">
                                <i className={`bi ${cardIcons[card.card_type]}`}></i>
                            </div>

                            <h2>{card.card_type}</h2>

                            <div className="progress">
                                <div className="progress-bar" style={{ width: `${card.progress}%` }} />
                                <span className="progress-tooltip">
                                    {card.progress}%
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
