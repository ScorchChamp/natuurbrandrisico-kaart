const mapContainer = document.getElementById('map-container');

const fields = [
    {"name": "Brabant noord", "file": "brabant-noord.png", "x": 218, "y": 486},
    {"name": "Brabant zuid-oost", "file": "brabant-zuidoost.png", "x": 212, "y": 539},
    {"name": "Drenthe", "file": "drenthe.png", "x": 326, "y": 222},
    {"name": "Flevoland", "file": "flevoland.png", "x": 213, "y": 286},
    {"name": "Friesland", "file": "fryslan.png", "x": 239, "y": 190},
    {"name": "Gelderland midden", "file": "gelderland-midden.png", "x": 266, "y": 402},
    {"name": "Gelderland zuid", "file": "gelderland-zuid.png", "x": 209, "y": 456},
    {"name": "Noord- en oost-gelderland", "file": "noord-en-oost-gelderland.png", "x": 275, "y": 353},
    {"name": "Gooi en Vechtstreek", "file": "gooi-en-vechtstreek.png", "x": 201, "y": 389},
    {"name": "Groningen", "file": "groningen.png", "x": 339, "y": 177},
    {"name": "Haaglanden", "file": "haaglanden.png", "x": 95, "y": 412},
    {"name": "IJsselland", "file": "ijsselland.png", "x": 302, "y": 284},
    {"name": "Kennemerland", "file": "kennemerland.png", "x": 142, "y": 344},
    {"name": "Limburg noord", "file": "limburg-noord.png", "x": 276, "y": 500},
    {"name": "Limburg zuid", "file": "zuid-limburg.png", "x": 273, "y": 624},
    {"name": "Hollands midden", "file": "hollands-midden.png", "x": 128, "y": 396},
    {"name": "Midden en West Brabant", "file": "midden-en-west-brabant.png", "x": 105, "y": 480},
    {"name": "Noord Holland noord", "file": "noord-holland-noord.png", "x": 161, "y": 226},
    {"name": "Twente", "file": "twente.png", "x": 348, "y": 363},
    {"name": "Utrecht", "file": "utrecht.png", "x": 175, "y": 396},
    {"name": "Zeeland", "file": "zeeland.png", "x": 0, "y": 500},
];

fields.forEach(field => {
    const img = new Image();
    img.src = `./assets/${field.file}`;
    img.classList.add('province');
    img.onload = () => {
        img.style.left = `${field.x}px`;
        img.style.top = `${field.y}px`;
        mapContainer.appendChild(img);
    };
});