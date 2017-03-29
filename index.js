var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./data/initialState')
var App = require('./components/App')

var stableLoop = function(){
  var column = (state.count + 1) % 4
  var last_column = state.count % 4
  state.pads.forEach(function(row){
    row[column].isRunning = true
    row[last_column].isRunning = false
  })
  state.count += 1
  render(state)
}

setInterval(function(){
  stableLoop()
}, 500)

function switchOn(id){
  state.pads.forEach(function(rows){
    rows.forEach(function(pad) {
      if (id == pad.id) {
        pad.isOn = !pad.isOn
        render(state)
      }
    })
  })
}

state.switchOn = switchOn

var target = document.getElementById('root')

function render(){
  var view = App(state)
  ReactDOM.render(view, target)
}

render(state)
