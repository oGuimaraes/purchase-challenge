import React from 'react';
import './styles.css';
import Calendar from '../../icons/calendar.svg';
import Clock from '../../icons/clock.svg'
import Place from '../../icons/place.svg'
import Money from '../../icons/money.svg'

function EventBox() {
    return (
        <div className="container">
            <table className="purchase-table">
                <tbody>
                    <tr className="purchase-info">
                        <td>
                            <img src={Calendar} className="image-icon"></img>
                            <span>22/09/2016</span>
                        </td>
                        <td>
                            <img src={Clock} className="image-icon"></img>
                            <span>13:57</span>
                        </td>
                        <td>
                            <img src={Place} className="image-icon"></img>
                            <span>Pátio Savassi</span>
                        </td>
                        <td>
                            <img src={Money} className="image-icon"></img>
                            <span>R$</span>
                            <span>250,00</span></td>
                    </tr>
                    <tr className="titles">
                        <td className="content-cell"><h6>Produto</h6></td>
                        <td className="content-cell"></td>
                        <td className="content-cell"></td>
                        <td className="content-cell"><h6>Preço</h6></td>
                    </tr>
                    <tr className="products">
                        <td className="content-cell"><span>Camisa Azul</span></td>
                        <td className="content-cell"></td>
                        <td className="content-cell"></td>
                        <td className="content-cell">R$ 100,00</td>
                    </tr>
                    <tr className="products">
                        <td className="content-cell">Calça Rosa</td>
                        <td className="content-cell"></td>
                        <td className="content-cell"></td>
                        <td className="content-cell">R$ 150,00</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default EventBox;
