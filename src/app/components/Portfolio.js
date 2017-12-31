import * as React from 'react';
import Coins from './Coins';
import Modal from './Modal';
import AddCoin from './AddCoin';
import WalletHeader from './WalletHeader';
import PortfolioEmpty from './PortfolioEmpty';
import { coinsValue } from '../services/coin';
import Api from '../services/api';
import PortfolioApi from '../services/portfolio';
import Logo from './Logo';

const api = new Api();
const portfolio = new PortfolioApi();
const mapCoins = (coins) => coins.map(coinsToSelectFormat);
const coinsToSelectFormat = ({Name, FullName}) => ({label: FullName, value: Name});

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { editOpen: false, aboutOpen: false, coinList: [], selectedOption: null };

    this.onEditOpen = this.modalStatus.bind(this, 'edit', true);
    this.onEditClose = this.modalStatus.bind(this, 'edit', false);
    this.onAboutOpen = this.modalStatus.bind(this, 'about', true);
    this.onAboutClose = this.modalStatus.bind(this, 'about', false);
    this.onEscape = this.onEscape.bind(this);
    this.onCoinRemove = this.onCoinRemove.bind(this);
    this.onCoinAdd = this.onCoinAdd.bind(this);
  }

  componentDidMount() {
    api.list().then(mapCoins).then((coinList) => this.setState({coinList}));
    window.addEventListener('keyup', this.onEscape);
  }

  componentWillReceiveProps(nextProps) {
    const { coins } = nextProps;
    if(!coins.length) this.setState({editOpen: true});
  }

  onEscape(e) {
    if(e.key !== 'Escape') return;
    this.setState({editOpen: false, aboutOpen: false});
  }

  onCoinRemove(id) {
    if(!confirm('Remove coin?')) return;
    portfolio.remove(id);
    this.props.onUpdate();
  }

  onCoinAdd(coin) {
    portfolio.add(coin);
    this.props.onUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onEscape);
  }

  modalStatus(key, status) {
    const mapper = {
      edit: 'editOpen',
      about: 'aboutOpen',
    }

    this.setState({[mapper[key]]: status});
  }

  render() {
    const { coins } = this.props;
    const value = coinsValue(coins);

    return <div className="coins">
      <WalletHeader value={value}>
        <button className="btn" onClick={this.onEditOpen}>+coin</button>
      </WalletHeader>

      {!coins.length && <PortfolioEmpty />}

      <Coins coins={coins} onRemove={this.onCoinRemove} />

      <Modal isOpen={this.state.editOpen} onClose={this.onEditClose}>
        {this.state.coinList && <AddCoin coinList={this.state.coinList} onAdd={this.onCoinAdd} />}
      </Modal>

      <Modal isOpen={this.state.aboutOpen} onClose={this.onAboutClose}>
        <div className="pygg__about">
          <h2>About Pygg</h2>
          <p>Add coins to your portfolio, track their growth over time.</p>
          <p><em>Pygg uses local storage to save your data, you can only access it from this device. A fix is in the workings.</em></p>
          <Logo />
        </div>
      </Modal>

      <Logo className="pygg__logo" alt="pygg icon by @nonhotempo" onAbout={this.onAboutOpen} />
    </div>
  }
}
