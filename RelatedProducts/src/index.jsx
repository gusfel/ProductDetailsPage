import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import RelatedList from './components/RelatedList.jsx';
import OutfitList from './components/OutfitList.jsx';
import CompareProducts from './components/CompareProducts.jsx';
import isInboundary from './utility/isInboundary.js'
import '../public/css/css.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 14807,
      relatedList: [],
      outfitList: [],
      currentImg: '',
      currentProduct: {},
      compareProduct: null,
    };
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
  }

  componentDidMount() {
    const currentProductId = '14307';
    axios.get(`/products/${currentProductId}/related`)
      .then((res) => {
        this.setState({ relatedList: res.data });
      });
    axios.get(`/products/${currentProductId}/styles`)
      .then((res) => {
        this.setState({ currentImg: res.data.results[0].photos[0].thumbnail_url });
      });
    axios.get(`/products/${currentProductId}`)
      .then((res) => {
        this.setState({ currentProduct: res.data });
      });

    if (localStorage.getItem('outfitList')) {
      const outfitList = localStorage.getItem('outfitList').split(',');
      this.setState({ outfitList });
    }
  }

  handleCompare(id) {
    const modal = document.getElementById('compare-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close');
    axios.get(`./products/${id}`)
      .then((res) => {
        this.setState({
          compareProduct: res.data,
          currentProduct: this.state.currentProduct,
        });
      });
    modal.style.display = 'block';
    modalContent.classList.remove('modal-run-out');
    modal.classList.remove('modal-background-out');
    modalContent.classList.remove('modal-scale-out');

    modal.classList.add('modal-background-in');
    modalContent.classList.add('modalContent-in');

    closeBtn.onclick = () => {
      modal.classList.remove('modal-background-in');
      modalContent.classList.remove('modalContent-in');
      modalContent.classList.add('modal-run-out');
      modal.classList.add('modal-background-out');
      // modalContent.classList.add('modal-scale-out');
      setTimeout(() => { modal.style.display = 'none'; }, 1000);
    };
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal-background-in');
        modalContent.classList.remove('modalContent-in');
        modalContent.classList.add('modal-run-out');
        // modalContent.classList.add('modal-scale-out');

        modal.classList.add('modal-background-out');
        setTimeout(() => { modal.style.display = 'none'; }, 1000);
      }
    };
  }

  addToList() {
    let outfitList = [];
    const { currentProductId } = this.state;
    if (localStorage.getItem('outfitList')) {
      outfitList = localStorage.getItem('outfitList').split(',');
    }
    outfitList.unshift(currentProductId.toString());
    localStorage.setItem('outfitList', outfitList);
    this.setState({ outfitList });
  }

  removeFromList(id) {
    const outfitList = localStorage.getItem('outfitList').split(',');
    const newList = outfitList.filter((element) => element !== id);
    localStorage.setItem('outfitList', newList);
    this.setState({ outfitList: newList });
  }

  render() {
    const {
      relatedList, outfitList, currentImg, currentProduct, compareProduct,
    } = this.state;
    return (
      <div>
        <RelatedList
          onCompare={this.handleCompare}
          relatedList={relatedList}
          currentProduct={currentProduct}
        />
        <OutfitList
          currentProduct={currentProduct}
          removeFromList={this.removeFromList}
          addToList={this.addToList}
          outfitList={outfitList}
          currentImg={currentImg}
        />
        <CompareProducts
          compareProduct={compareProduct}
          currentProduct={currentProduct}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
