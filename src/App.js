import React from 'react';
import './App.css';
import EventBox from './components/EventBox'
import axios from 'axios';
const formatResponse = require('./utils/formatResponse');
const formatToDate = require('./utils/formatToDate');
const formatToTime = require('./utils/formatToTime');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      purchases: []
    }
  }

  componentDidMount() {
    axios.get('https://storage.googleapis.com/dito-questions/events.json').then(response => {
      const purchases = formatResponse(response.data);
      this.setState({ purchases })
    })
  }


  render() {
    const { purchases } = this.state;
    console.log (purchases)
    return (
      <div className="container">
        {purchases.map(purchase => (
            <EventBox
              data={formatToDate(purchase.timestamp)}
              time={formatToTime(purchase.timestamp)}
              shopName={purchase.shop_name}
              totalPrice={purchase.total}
              products={purchase.products}
            />
          )
        )}
      </div>
    )
  }
}

export default App;
