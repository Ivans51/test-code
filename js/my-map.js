mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnM1MSIsImEiOiJjanEyNWdvZ3oxNHZtNDNwZDgzanprb2F4In0.Uz6zCYJK5glhBOnByNXTvQ'
const site = [-77.605, -21.10667]
let marker
let markerStart

const map = new mapboxgl.Map({
  container: 'map',
  center: site,
  zoom: 13,
  style: 'mapbox://styles/mapbox/streets-v11',
  hash: true,
  transformRequest: (url, resourceType) => {
    if (resourceType === 'Source' && url.startsWith('http://myHost')) {
      return {
        url: url.replace('http', 'https'),
        headers: {'my-custom-header': true},
        credentials: 'include'  // Include cookies for cross-origin requests
      }
    }
  }
})
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
  map.on('click', e => {
    console.log(e.lngLat)
    putMarker(e.lngLat, "")
  });
// create the popup
  const popup = new mapboxgl.Popup({offset: 25})
    .setText('Oficina Principal: Los Olivos, Lima - Perú')

// create the marker
  markerStart = new mapboxgl.Marker()
    .setLngLat(site)
    .setPopup(popup)
    .addTo(map)

  console.log(`marker start ${site}`)
})

// Click in another site
$('.sedes-list ul > li').click(function () {
  let latLong = JSON.parse("[" + $(this).attr('data-internalid') + "]");
  console.log($(this))
  putMarker(latLong, $(this)[0].innerText)
})

function putMarker(lngLat, title) {
  if (markerStart !== undefined)
    markerStart.remove()

  if (marker !== undefined)
    marker.remove()

  const popup = new mapboxgl.Popup()
    .setLngLat(lngLat)
    .setHTML(title)
    .addTo(map)

  marker = new mapboxgl.Marker()
    .setLngLat(lngLat)
    .setPopup(popup)
    .addTo(map)

  console.log(lngLat, title)

  map.flyTo({center: [lngLat]});
}
