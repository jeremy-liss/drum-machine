var React = require('react')

module.exports = function (props){

  return (
    <div>
      <div id="pads">
        Kick
        {props.pads.map(function(pad) {
          return (
            <div id="pad">
              {pad.isRunning ? <img src={props.images.red} /> : <img src={props.images.black} />}
            </div>
          )
        })}
      </div>
      <div id="pads">
        Snare
        {props.pads.map(function(pad) {
          return (
            <div id="pad">
              {pad.isRunning ? <img src={props.images.red} /> : <img src={props.images.black} />}
            </div>
          )
        })}
      </div>
      <div id="pads">
        Hi-Hat
        {props.pads.map(function(pad) {
          return (
            <div id="pad">
              {pad.isRunning ? <img src={props.images.red} /> : <img src={props.images.black} />}
            </div>
          )
        })}
      </div>
  </div>
  )
}
