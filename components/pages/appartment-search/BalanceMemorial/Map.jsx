// import React from 'react'

// export default function GoogleMapMemorial() {
//   return (
//     <div className="mapouter">
//         <div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=941%20W%20Memorial%20Rd,%20Oklahoma%20City,%20OK%2073114+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/distance-area-calculator.html"&gt;area maps&lt;/a&gt;</iframe></div>
//         </div>
    
//   )
// }
import React from 'react'

export default function GoogleMap() {
  return (
    <div className="mapouter"><div className="gmap_canvas">
      <iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} 
      src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=941%20W%20Memorial%20Rd,%20Oklahoma%20City,%20OK%2073114+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
      <a href="https://formatjson.org/">format json</a></div><style
     dangerouslySetInnerHTML=
     {{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:300px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:300px;}.gmap_iframe {height:300px!important;}"
    }} /></div>
  )
}
