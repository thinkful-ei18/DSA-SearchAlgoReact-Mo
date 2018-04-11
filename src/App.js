import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      array: [
        89,
        30,
        25,
        32,
        72,
        70,
        51,
        42,
        25,
        24,
        53,
        55,
        78,
        50,
        13,
        40,
        48,
        32,
        26,
        2,
        14,
        33,
        45,
        72,
        56,
        44,
        21,
        88,
        27,
        68,
        15,
        62,
        93,
        98,
        73,
        28,
        16,
        46,
        87,
        28,
        65,
        38,
        67,
        16,
        85,
        63,
        23,
        69,
        64,
        91,
        9,
        70,
        81,
        27,
        97,
        82,
        6,
        88,
        3,
        7,
        46,
        13,
        11,
        64,
        76,
        31,
        26,
        38,
        28,
        13,
        17,
        69,
        90,
        1,
        6,
        7,
        64,
        43,
        9,
        73,
        80,
        98,
        46,
        27,
        22,
        87,
        49,
        83,
        6,
        39,
        42,
        51,
        54,
        84,
        34,
        53,
        78,
        40,
        14,
        5,
      ],
      binaryCount: 0,
      linearCount: 0,
    };
  }
  binarySearch(array, value, start, end, count = 0) {
    array = array.sort((a, b) => a - b);
    console.log(array);
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
      return `Not Found in ${count} steps`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
      return count;
    } else if (item < value) {
      count++;
      return this.binarySearch(array, value, index + 1, end, count);
    } else if (item > value) {
      count++;
      return this.binarySearch(array, value, start, index - 1, count++);
    }
  }
  linearSearch(array, value) {
    let count = 0;
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      count++;
      if (array[i] == value) {
        return i;
      }
    }
    return `Not Found in ${count} steps`;
  }
  onClick(e) {
    e.preventDefault();
    console.log('clicked');
    this.setState({
      binaryCount: this.binarySearch(
        this.state.array,
        this.state.search,
        0,
        this.state.array.length
      ),
    });
    this.setState({
      linearCount: this.linearSearch(this.state.array, this.state.search),
    });
  }
  onChange(e) {
    this.setState({
      search: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form onClick={e => this.onClick(e)}>
          <h1>Item to Search</h1>
          <input
            name="binarySearch"
            onChange={e => this.onChange(e)}
            type="text"
          />
          <br />
          <button>Submit</button>
        </form>
        <div>
          <h1>Linear: {this.state.linearCount}</h1>
        </div>
        <div>
          <h1>Binary: {this.state.binaryCount}</h1>
        </div>
      </div>
    );
  }
}

export default App;
