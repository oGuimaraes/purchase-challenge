import React from 'react';
import './App.css';
import EventBox from './components/EventBox'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      purchases: [[
        {
          "timestamp": "2016-09-22T13:57:32.2311892-03:00",
          "shop_name": "Patio Savassi",
          "total": 250,
          "products": [
            {
              "name": "Camisa Azul",
              "price": 100
            },
            {
              "name": "Calça Rosa",
              "price": 150
            }
          ]
        },
        {
          "timestamp": "2016-10-02T11:37:31.2300892-03:00",
          "shop_name": "BH Shopping",
          "total": 120,
          "products": [
            {
              "name": "Tênis Preto",
              "price": 120
            }
          ]
        },
      ]
      ]
    }
  }

  componentDidMount() {
    axios.get('https://storage.googleapis.com/dito-questions/events.json').then(response => {
      //response.data.events
      // const purchases = []
      // this.setState({ purchases })
    })
  }

  render() {
    const { purchases } = this.state;
    console.log(purchases)
    console.log(purchases[0][0].shop_name)
    return (
      <div className="container">
        {purchases.map(purchase => (
          purchase.map(purchase => (
            <EventBox
              //data={formatToDate(purchase.timestamp)}
              //time={formatToTime(purchase.timestamp)}
              shopName={purchase.shop_name}
              totalPrice={purchase.total}
              products={purchase.products}
            />
          ))
        ))}
      </div>
    )
  }
}

export default App;
