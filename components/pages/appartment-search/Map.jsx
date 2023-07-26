import React from 'react'

export default function GoogleMap() {
  return (
    <div className="mapouter"><div className="gmap_canvas">
      <iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} 
      src="https://maps.google.com/maps?width=1200&height=300&hl=en&q=united state&t=&z=5&ie=UTF8&iwloc=B&output=embed" />
      <a href="https://formatjson.org/">format json</a></div><style
     dangerouslySetInnerHTML=
     {{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:300px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:300px;}.gmap_iframe {height:300px!important;}"
    }} /></div>
  )
}
