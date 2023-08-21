import React, { useState } from 'react';
import './search.css';

function Sort() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSortChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (selectedValue) {
        try {
            const response = await fetch('/sort', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sortBy: selectedValue }),
            });

            if (response.ok) {
            // Handle success if needed
            } else {
            // Handle errors if needed
            console.error('Request failed:', response.status);
            }
        } catch (error) {
            // Handle network errors if needed
            console.error('Network error:', error);
        }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="sortBy">Sortera</label>
        <select
            name="sortBy"
            id="sortBy"
            value={selectedValue}
            onChange={handleSortChange}
        >
            <option value="">Välj ett alternativ</option>
            <option value="New">Nyaste först</option>
            <option value="Old">Äldsta först</option>
        </select>
        <button type="submit">Submit</button>
        </form>
    );
    }

function Search() {
    return (
        <div className="searchBox">
            <div>
                <input type="text" name="searchbar" placeholder="Sök..." />
                <button type="submit" name="submitSearch">Sök</button>
            </div>
            
                <Sort />

            <div>
                <a href="">Fler sökalternativ</a>
            </div>
        </div>
    );
}

export default Search;