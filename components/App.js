var React = require('react')


function getImageSrc (pad, props){
  if (pad.isOn) {
    return props.images.on
  }
  else if (pad.isRunning) {
    return props.images.red
  } else {
    return props.images.black
  }
}

module.exports = function (props){
  
  function getId(ev){
    props.switchOn(ev.target.dataset.id);
  }

  return (
    <div>
      <div id="pads">
        Kick
        {props.pads.row0.map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
            </div>
          )
        })}
      </div>

      <div id="pads">
        Snare
        {props.pads.row1.map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
            </div>
          )
        })}
      </div>

      <div id="pads">
        Hi-Hat
        {props.pads.row2.map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
            </div>
          )
        })}
      </div>

  </div>
  )
}
