import React, { useEffect, useState } from 'react';
import DeleteService from '../DeleteService/DeleteService';

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://glacial-anchorage-30312.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);

    return (
        <div>
            {
                events.map(event => <DeleteService event={event}></DeleteService>)
            }
        </div>
    );
};

export default Dashboard;