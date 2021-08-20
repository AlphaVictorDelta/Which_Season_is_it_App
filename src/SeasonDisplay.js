import './seasonDisplay.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons'

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the Beach',
        iconName: faSun
    },
    winter: {
        text: 'Let\'s stay inside',
        iconName: faSnowflake
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];  // Destructuring the config object.

    // ! Instead of using ternary operators you can use an Config object (on line 3) to store the text and icon required. 
    // const text = (season === 'summer') ? 'Let\'s hit the beach' : 'Let\'s stay inside';
    // const icon = (season === 'summer') ? 'sun' : 'snowflake';


    // Use curly braces whenever you want to access a JS variable inside JSX. 
    return (
        <div className={`season-display ${season}`}>
            <span><FontAwesomeIcon className={`icon-left`} icon={iconName} size="6x" /></span>
            <h1>{text}</h1>
            <span><FontAwesomeIcon className={`icon-right`} icon={iconName} size="6x" /></span>
        </div>);
}
export default SeasonDisplay;

