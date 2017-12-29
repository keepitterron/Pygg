import * as React from 'react';
import Coins from './Coins';
import Modal from './Modal';
import Edit from './Edit';
import WalletHeader from './WalletHeader';
import PortfolioEmpty from './PortfolioEmpty';
import { coinsValue } from '../services/coin';
import Api from '../services/api';

const api = new Api();
const mapCoins = (coins) => coins.map(coinsToSelectFormat);
const coinsToSelectFormat = ({Name, FullName}) => ({label: FullName, value: Name});

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { modalOpen: false, coinList: [], selectedOption: null };
    this.onModalOpen = this.modalOpen.bind(this, true);
    this.onModalClose = this.modalOpen.bind(this, false);
  }

  componentDidMount() {
    api.list().then(mapCoins).then((coinList) => this.setState({coinList}));
  }

  componentWillReceiveProps(nextProps) {
    const { coins } = nextProps;
    if(!coins.length) this.setState({modalOpen: true});
  }

  modalOpen(modalOpen) {
    this.setState({modalOpen});
  }

  modalClasses() {
    if(this.state.modalOpen) return 'modal modal--open';
    return 'modal';
  }

  render() {
    const { coins, onUpdate } = this.props;
    const value = coinsValue(coins);

    return <div className="coins">
      <WalletHeader value={value}>
        <button className="btn" onClick={this.onModalOpen}>+coin</button>
      </WalletHeader>
      {!coins.length && <PortfolioEmpty />}
      <Coins coins={coins} />
      <Modal isOpen={this.state.modalOpen} onClose={this.onModalClose}>
        {this.state.coinList && <Edit coinList={this.state.coinList} onUpdate={onUpdate} />}
      </Modal>
    </div>
  }
}
