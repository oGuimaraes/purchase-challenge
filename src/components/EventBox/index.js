import React from 'react';
import './styles.css';
import Calendar from '../../icons/calendar.svg';
import Clock from '../../icons/clock.svg'
import Place from '../../icons/place.svg'
import Money from '../../icons/money.svg'

function EventBox() {
  return (
    <div className="container">
        <div className="purchase-box">
            <div className="purchase-info">
                <div className="info-column date">
                    <img src={Calendar} className="image-icon"></img>
                    <span>22/09/2016</span>
                </div>
                <div className="info-column hour">
                    <img src={Clock} className="image-icon"></img>
                    <span>13:57</span>
                </div>
                <div className="info-column place">
                    <img src={Place} className="image-icon"></img>
                    <span>Pátio Savassi</span>
                </div>
                <div className="info-column total-price">
                    <img src={Money} className="image-icon"></img>
                    <span>R$</span>
                    <span> 250,00</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EventBox;
