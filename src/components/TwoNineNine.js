import React from 'react';
import "../styles/TwoNineNine.css";

const numToDayMap = num => {
    switch (num) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return '299';
    }
}

const numToMumMap = num => {
    switch (num) {
        case 0:
            return 'Quenton';
        case 1:
            return 'Chros';
        case 2:
            return 'Ethon';
        case 3:
            return 'Alpuah';
        case 4:
            return 'Yup Eng';
        case 5:
            return 'Jdenz';
        case 6:
            return 'Ah Ang';
        default:
            return '299';
    }
}

const getTodaysDay = () => {
    return numToDayMap(new Date().getDay());
}

const getPersonName = () => {
    return numToMumMap(new Date().getDay());
}

const TwoNineNine = () => {
    return (
        <div className="twoNine-container">
            <div className="twoNine-dolan">
                <div className="twoNine-bigpic-container">
                    <img 
                        className="twoNine-pic" 
                        src="https://scontent.fsin3-1.fna.fbcdn.net/v/t31.18172-8/20157955_1566245410113978_6264115847099732299_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=HtJfZ208Jg8AX_5s_ra&_nc_ht=scontent.fsin3-1.fna&oh=2ea860ac044036b7fbc7ad2a46636b99&oe=60BBAF43" 
                        alt="dolan" 
                    />
                </div>
                <h3>Whosemum will dolan date 29?</h3>
            </div>
            <div className="twoNine-mom">
                <div className="twoNine-bigpic-container">
                    <img 
                        className="twoNine-pic" 
                        src="https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2014/07/marge_simpson.jpg" 
                        alt="urmum"
                    />
                </div>
                <h3></h3>
                <h3>{`Today is ${getTodaysDay()}`}<br></br>{`Congratulations ${getPersonName()}! It's urmum!`}</h3>
            </div>
        </div>
    )
}

export default TwoNineNine;
