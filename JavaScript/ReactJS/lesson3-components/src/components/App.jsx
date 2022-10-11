import React, { Component } from 'react'
import List from './List';
import products from '../data/products';
class App extends Component {
    render() {
      return (
        <div className="row gap-5">
          {products.map((fd,i) => {
            return (
              <List
              key={i}
                mytitle={fd.title}
                myprice={fd.price}
                mydescription={fd.description}
                mycategory={fd.category}
              />
            );
          })}
        </div>
      );
    }
  }

export default App