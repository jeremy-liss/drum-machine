var React = require('react')

module.exports = function (props){

  return (
    <div id="pads">
      {props.pads.map(function(pad) {
        return (
          <div id="pad">
            {pad.isRunning ? <img src={props.images.red} /> : <img src={props.images.black} />}
          </div>
        )
      })}
    </div>
  )
}
