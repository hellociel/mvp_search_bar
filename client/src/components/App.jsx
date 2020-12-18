import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import Table from "./TableHeader.jsx";
import axios from "axios";
import Row from "./TableRow.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: null,
      orders: [],
    };
    this.onChange = this.onChange.bind(this);
    this.findAllOrder = this.findAllOrder.bind(this);
    this.findOrderByID = this.findOrderByID.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    let typed_number = Number(e.target.value);
    let min_number = 0;
    let max_number = 0;
    if (typed_number < 10) {
      min_number = typed_number * 100000000;
      max_number = min_number + 99999999;
    } else if (typed_number < 100) {
      min_number = typed_number * 10000000;
      max_number = min_number + 9999999;
    } else if (typed_number < 1000) {
      min_number = typed_number * 1000000;
      max_number = min_number + 999999;
    } else if (typed_number < 10000) {
      min_number = typed_number * 100000;
      max_number = min_number + 99999;
    } else if (typed_number < 100000) {
      min_number = typed_number * 10000;
      max_number = min_number + 9999;
    } else if (typed_number < 1000000) {
      min_number = typed_number * 1000;
      max_number = min_number + 999;
    } else if (typed_number < 10000000) {
      min_number = typed_number * 100;
      max_number = min_number + 99;
    } else if (typed_number < 100000000) {
      min_number = typed_number * 10;
      max_number = min_number + 9;
    } else if (typed_number < 1000000000) {
      min_number = typed_number * 1;
      max_number = min_number;
    }
    this.setState({ orderId: e.target.value });
    this.findOrderByID(min_number, max_number);
  }

  findAllOrder() {
    axios
      .get("/orders")
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch((error) => {});
  }

  findOrderByID(min, max) {
    axios
      .get("/order", { params: { min: min, max: max } })
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    //to get the entire 5M data, uncomment below.
    // this.findAllOrder();
  }
  render() {
    return (
      <div>
        <div id="title">International Sales Chart</div>
        <div>
          <SearchBar onChange={this.onChange} />
          <table className="table">
            <Table />
            {this.state.orders.map((order) => (
              <Row data={order} />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
