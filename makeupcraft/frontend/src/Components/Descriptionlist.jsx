import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Exploreservices from './Exploreservices';

const DescriptionsList = () => {
    const [description, setDescription] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For handling errors

    // Fetch descriptions using Axios
    useEffect(() => {
        const fetchDescriptions = async () => {
            try {
                const response = await axios.get('/api/v1/description/get-description'); // Replace with your API URL
                setDescription(response.data);
            } catch (error) {
                setError('Error fetching descriptions');
                console.error('Error fetching descriptions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDescriptions();
    }, []);

    // Conditional rendering
    return (
        <div>
            {loading ? (
                <p>Loading descriptions...</p>
            ) : error ? (
                <p>{error}</p>
            ) : description.length > 0 ? (
                description.map((desp) => (
                    <Exploreservices key={desp.id} desp={desp} />
                ))
            )  : (
                <p>No descriptions available.</p>
            )}
        </div>
    );
};

export default DescriptionsList;
