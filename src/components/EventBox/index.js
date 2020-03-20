import React from 'react';
import './styles.css';
import Calendar from '../../icons/calendar.svg';
import Clock from '../../icons/clock.svg'
import Place from '../../icons/place.svg'
import Money from '../../icons/money.svg'

function EventBox(props) {
    return (
            <table className="purchase-table">
                <tbody>
                    <tr className="purchase-info">
                        <td>
                            <img src={Calendar} className="image-icon"></img>
                            <span>{props.data}</span>
                        </td>
                        <td>
                            <img src={Clock} className="image-icon"></img>
                            <span>{props.time}</span>
                        </td>
                        <td>
                            <img src={Place} className="image-icon"></img>
                            <span>{props.shopName}</span>
                        </td>
                        <td>
                            <img src={Money} className="image-icon"></img>
                            <span>R$</span>
                            <span>{props.totalPrice}</span></td>
                    </tr>
                    <tr className="titles">
                        <td className="content-cell"><h6>Produto</h6></td>
                        <td className="content-cell"></td>
                        <td className="content-cell"></td>
                        <td className="content-cell"><h6>Preço</h6></td>
                    </tr>
                    {props.products.map(product => (
                    <tr className="products">
                        <td className="content-cell">{product.name}</td>
                        <td className="content-cell"></td>
                        <td className="content-cell"></td>
                        <td className="content-cell">R$ {product.value}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default EventBox;
