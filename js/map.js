//구글 지도
let map;

async function initMap() {
  const position = { lat: 37.3681678, lng: 127.1072197 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "thego-clone",
    scrollwheel: true,
  });

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