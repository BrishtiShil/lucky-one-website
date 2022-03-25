import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Shop;