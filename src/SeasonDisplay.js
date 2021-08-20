import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the Beach',
        icon: 'sun'
    },
    winter: {
        text: 'Let\'s stay inside',
        icon: 'snowflake'
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
    const { text, iconName } = seasonConfig[season];
    // const text = (season === 'summer') ? 'Let\'s hit the beach' : 'Let\'s stay inside';
    // const icon = (season === 'summer') ? 'sun' : 'snowflake';

    // Use curly braces whenever you want to access a JS variable inside JSX. 
    return (
        <div>
            <i className={`${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive`} />
        </div>);
}
export default SeasonDisplay;

