import * as React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class AddCoin extends React.Component {
  constructor() {
    super();
    this.state = {coinList: [], selectedCoin: null, coinsAmount: 0, buyPrice: 0};

    this.coinSelect = this.coinSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addCoin = this.addCoin.bind(this);
  }

  coinSelect(selectedCoin) {
    this.setState({selectedCoin});
  }

  handleInput(event) {
    const {name, value} = event.target;
    this.setState({[name]: parseFloat(value)});
  }

  addCoin() {
    const { selectedCoin, coinsAmount, buyPrice } = this.state;
    if(!selectedCoin) return;

    this.setState({selectedCoin: null, coinsAmount: 0, buyPrice: 0});
    this.props.onAdd({name: selectedCoin.value, qty: coinsAmount, price: buyPrice});
  }

  isValid() {
    const { selectedCoin, coinsAmount, buyPrice } = this.state;
    return selectedCoin && coinsAmount > 0 && buyPrice > 0;
  }

  render() {
    const { coinList } = this.props;
    return <div className="edit">
      <h2>Add Coin</h2>
      {coinList && <Select
        name="coin"
        value={this.state.selectedCoin}
        onChange={this.coinSelect}
        options={coinList}
      />}
      {this.state.selectedCoin && <div className="edit__coin">
        <div className="edit__field">
          <label>How many?</label>
          <input type="number" step="any" placeholder="Amount" name="coinsAmount" onChange={this.handleInput} />
        </div>
        <div className="edit__field">
          <label>Unitary price (EUR)</label>
          <input type="number" step="any" placeholder="Price" name="buyPrice" onChange={this.handleInput} />
        </div>
        <button className="btn btn--pink" onClick={this.addCoin} disabled={!this.isValid()}>save</button>
      </div>}
    </div>
  }
}
