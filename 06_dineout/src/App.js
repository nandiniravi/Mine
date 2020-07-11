import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Herobanner from './components/Herobanner/Herobanner';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Thalis from './components/Menu/Thalis/Thalis';
import Desserts from './components/Menu/Desserts/Desserts';
import Drinks from './components/Menu/Drinks/Drinks';
import Contactus from './components/Contactus/Contactus';
import Events from './components/Events/Events';
import Mycart from './components/MyCart/MyCart';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
  state = {
    myCart : [],
    itemsTotalCount: '',
    totalPrice: '',
    showSidebar: false
  }

  addtoCartHandler = (event, chosenItem) => {
    let myCurrentCart = [...this.state.myCart];

    let flag = false;

    for (let index in myCurrentCart){
      if (chosenItem.name === myCurrentCart[index].name){
        flag = true;
        myCurrentCart[index].count = myCurrentCart[index].count + 1;
        myCurrentCart[index].price = myCurrentCart[index].price + chosenItem.price;
      }
      else
        flag = false;
    }

    if (flag === false){
      myCurrentCart.push({
        id: chosenItem.id,
        name: chosenItem.name,
        price: chosenItem.price,
        count: 1
      });
    }
  

    // console.log(myCurrentCart);

    let itemsCount = 0;
    let price = 0;
    myCurrentCart.map(each => {
      price = price + each.price;
      itemsCount = itemsCount + each.count;
      return(null);
    });

    // console.log(price);

    this.setState({
      myCart : myCurrentCart,
      itemsTotalCount: itemsCount,
      totalPrice: price});
  }

  checkoutHandler = () => {
    alert('You can now make the payment!')
  }

  clearCartHandler = () => {
    this.setState({
      myCart : [],
      itemsTotalCount: '',
      totalPrice: ''
    });
  }

  showSidebar = () => {
    let currentSidebarState = this.state.showSidebar;
    this.setState({showSidebar: !currentSidebarState});
  }

  closeSidedrawerHandler = () => {
    if (this.state.showSidebar){
      this.setState({showSidebar : false});
    }
  }

  render(){
    // console.log(this.state);

    let sidebar = null;
    if(this.state.showSidebar)
      sidebar = <Sidebar closeSidedrawer={this.closeSidedrawerHandler}/>
    else
      sidebar = null;
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/Home"/>
          <Layout>
            <Header showSidebar={this.showSidebar}/>
            <Route path="/Home" exact component={Herobanner}/>
            <Route path="/Home" exact component={Cards}/>
            <Route path="/Menu" exact component={() => <Thalis 
                                                          addtoCart={this.addtoCartHandler}/>}/>
            <Route path="/Menu" exact component={() => <Desserts 
                                                          addtoCart={this.addtoCartHandler}/>}/>
            <Route path="/Menu" exact component={Drinks}/>
            <Route path="/Desserts" exact component={() => <Desserts 
                                                          addtoCart={this.addtoCartHandler}/>}/>
            <Route path="/Drinks" exact component={Drinks}/>
            <Route path="/Contact-us" exact component={Contactus}/>
            <Route path="/Events" exact component={Events}/>
            <Route path="/Cart" exact component={() => <Mycart 
                                                          myCartArray={this.state.myCart}
                                                          totalPrice={this.state.totalPrice}
                                                          checkout={this.checkoutHandler}
                                                          clearCart={this.clearCartHandler}/>}/>
            {sidebar}
            <Footer/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
