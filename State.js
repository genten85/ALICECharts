var Esri = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png?access_token={accessToken}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1IjoiZ2VudGVuIiwiYSI6ImNrMmdzOHFsdTA2Z2UzY252b3B1cjJqdXQifQ.B2doXxjSELmQIf7wIIDBZg"
    }
  ),
  Wikimedia = L.tileLayer(
    "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
      minZoom: 1,
      maxZoom: 19
    }
  ),
  Darkness = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    }
  );

var stateMap = L.map("state", {
  center: [39.82, -98.57],
  zoom: 4,
  layers: [Esri, Wikimedia, Darkness]
});

var baseMaps = {
  "Esri WorldImagery": Esri,
  Wikimedia: Wikimedia,
  Darkness: Darkness
};

L.control.layers(baseMaps).addTo(stateMap);
var stateLayers = L.control.layers().addTo(stateMap);

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("State.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        ALICE = feature.properties.ALICE_Coun;
      if (ALICE < 100000) fillColor = "#eef2f9";
      else if (ALICE >= 100000 && ALICE < 500000) fillColor = "#c7d5eb";
      else if (ALICE >= 500000 && ALICE < 1000000) fillColor = "#8fabd6";
      else if (ALICE >= 1000000 && ALICE < 1500000) fillColor = "#5681c2";
      else if (ALICE >= 1500000 && ALICE < 2000000) fillColor = "#365c96";
      else if (ALICE >= 2000000) fillColor = "#223a5e";
      else fillColor = "#f7f7f7"; // no data
      return {
        color: "#999",
        weight: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<strong>" +
          "State: " +
          "</strong>" +
          feature.properties.STUSPS10 +
          "<br><strong>" +
          "Total Households: " +
          "</strong>" +
          feature.properties.Total +
          "</br><strong>" +
          "Poverty (%): " +
          "</strong>" +
          Math.round(
            (feature.properties.Poverty_Co / feature.properties.Total) * 100
          ) +
          "%" +
          "</br><strong>" +
          "ALICE Count (%): " +
          "</strong>" +
          Math.round(
            (feature.properties.ALICE_Coun / feature.properties.Total) * 100
          ) +
          "%" +
          "</br><strong>" +
          "Above ALICE Threshold (%): " +
          "</strong>" +
          Math.round(
            (feature.properties.Above_ALIC / feature.properties.Total) * 100
          ) +
          "%"
      );
    }
  }).addTo(stateMap);
  stateLayers.addOverlay(geojsonLayer, "ALICE Count");
});
