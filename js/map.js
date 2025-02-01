//구글 지도
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 37.3681678, lng: 127.1072197 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "thego-clone",
    scrollwheel: true,
  });

  // A marker with a with a URL pointing to a PNG.
const beachFlagImg = document.createElement("img");

beachFlagImg.src =
  "images/cafethego-pin.png";
beachFlagImg.style.width = "80px";
beachFlagImg.style.height = "74px";

const beachFlagMarkerView = new AdvancedMarkerElement({
  map,
  position: position,
  content: beachFlagImg,
  title: "A marker using a custom PNG Image",
});
}

initMap();