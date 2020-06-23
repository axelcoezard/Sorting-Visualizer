import React from 'react';

import SelectionSort from "../Algorithms/SelectionSort"
import InsertionSort from "../Algorithms/InsertionSort"
import BubbleSort from "../Algorithms/BubbleSort"

export default class Visualizer extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      itemsCount: 100,
      items: []
    }

    this.handleRandom = this.handleRandom.bind(this)
    this.handleRange = this.handleRange.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  componentDidMount () {
    this.setState({ items: this.generateItems(this.state.itemsCount) })
  }

  generateItems (itemsCount) {
    let items = []
    for (let i = 0; i < itemsCount; i++)
      items.push({
        size: Math.floor(Math.random() * 99 + 1),
        className: "visualizer-item"
      })
    return items
  }

  handleRandom (event) {
    this.setState({ items: this.generateItems(this.state.itemsCount) })
  }

  handleRange (event) {
    let value = event.currentTarget.value

    this.setState({
      itemsCount: value,
      items: this.generateItems(value)
    })
  }

  handleSort (event) {
    let items = this.state.items

    let sorter = new SelectionSort()
    sorter.execute(items)

    let stepIndex = 0
    while(stepIndex < sorter.steps.length) {
      let step = sorter.steps[stepIndex]

      setTimeout(function () {
        items.forEach(item => item.className = "visualizer-item")

        if (step.select !== false && items[step.select] !== undefined) {
          items[step.select].className = "visualizer-item selected"
        }
        else if (step.swap) {
          let tmp = items[step.swap.pointer]
          items[step.swap.pointer] = items[step.swap.minimum_index]
          items[step.swap.minimum_index] = tmp
        }

        this.setState({ items })
      }.bind(this), 5 * stepIndex)
      stepIndex += 1
    }
  }

  render () {
    return <div className="visualizer">
      <nav className="visualizer-navigation">
        <div className="left">
          <button
            className="visualizer-navigation__random"
            type="button"
            onClick={this.handleRandom}
          ><i class="fas fa-random"></i></button>
          <input
            className="visualizer-navigation__count"
            type="range"
            min="10"
            max="100"
            value={this.state.itemsCount}
            onChange={this.handleRange}
          />
        </div>
        <div className="right">
          <button
            className="visualizer-navigation__sorter"
            type="button"
            onClick={this.handleSort}
          >Tri par sélection</button>
          <button
            className="visualizer-navigation__sorter"
            type="button"
            onClick={this.handleSort}
          >Tri par insertion</button>
          <button
            className="visualizer-navigation__sorter"
            type="button"
            onClick={this.handleSort}
          >Tri à bulle</button>
        </div>
      </nav>
      <div className="visualizer-container">
        {this.state.items.map((item, index) => {
          if(item !== undefined) {
            return <div
            className={item.className}
            style={{
              height: item.size + "%"
            }}
            key={index}
            />
          }
        })}
      </div>
    </div>;
  }
}
