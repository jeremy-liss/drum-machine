var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./data/initialState')
var App = require('./components/App')

var rows = Object.keys(state.pads)

function makeRed(state){
  rows.forEach(function(row){
    state.pads[row].forEach(function(pad) {
      setTimeout(function(){
        pad.isRunning = true
        if (pad.col > 0){
          state.pads[row][pad.col-1].isRunning = false
        }
        else {
          state.pads[row][3].isRunning = false
        }
        render(state)
      }, (pad.col+1) *500)
    })
  })
}

var loop = ()=>makeRed(state)
loop()
setInterval(loop, 2000)

function switchOn (id){
  rows.forEach(function(row){
    state.pads[row].forEach(function(pad) {
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
