var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./data/initialState')
var App = require('./components/App')

function makeRed(state){

  state.pads.forEach(function(pad) {
    setTimeout(function(){
      pad.isRunning = true
      if (pad.id > 0){
        state.pads[pad.id-1].isRunning = false
      }
      else {
        state.pads[3].isRunning = false
      }
      render(state)
    }, (pad.id+1) *500)
  })
}

var loop = ()=>makeRed(state)
loop()
setInterval(loop, 2000)

var target = document.getElementById('root')

function render(){
  var view = App(state)
  ReactDOM.render(view, target)
}

render(state)
