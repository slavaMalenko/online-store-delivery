import React from 'react';
import ContentLoader from "react-content-loader";


function Placeholder() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="301" rx="5" ry="5" width="280" height="21" />
            <rect x="0" y="333" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="427" rx="5" ry="5" width="104" height="25" />
            <rect x="144" y="423" rx="24" ry="24" width="133" height="35" />
        </ContentLoader>
    )
}

export default Placeholder;