const mapContainer = document.getElementById('map-container');

// Add a mousemove event listener to the map container
mapContainer.addEventListener('mousemove', event => {
    // Update the position of the tooltip element to follow the cursor
    tooltip.style.left = `${event.clientX + 10}px`;
    tooltip.style.top = `${event.clientY + 10}px`;
});

// Add a mouseover event listener to each province image element

function addTooltip(img, name, status) {
    img.addEventListener('mouseover', event => {
        // Set the text content of the tooltip element to the province name
        tooltip.textContent = name + " - Fase " + status;
        // Make the tooltip element visible
        tooltip.classList.add('visible');

    });
    img.addEventListener('mouseout', event => {
        // Hide the tooltip element
        tooltip.classList.remove('visible');
    });
}

const fields = [
    { "name": "Brabant-Noord", "file": "brabant-noord.png", "x": 218, "y": 486, "status": 1 },
    { "name": "Brabant-Zuidoost", "file": "brabant-zuidoost.png", "x": 212, "y": 539, "status": 1 },
    { "name": "Drenthe", "file": "drenthe.png", "x": 326, "y": 222, "status": 1 },
    { "name": "Flevoland", "file": "flevoland.png", "x": 213, "y": 286, "status": 1 },
    { "name": "Fryslân", "file": "fryslan.png", "x": 239, "y": 190, "status": 1 },
    { "name": "Gelderland Midden", "file": "gelderland-midden.png", "x": 266, "y": 402, "status": 1 },
    { "name": "Gelderland Zuid", "file": "gelderland-zuid.png", "x": 209, "y": 456, "status": 1 },
    { "name": "Noord- en Oost-Gelderland", "file": "noord-en-oost-gelderland.png", "x": 275, "y": 353, "status": 1 },
    { "name": "Gooi en Vechtstreek", "file": "gooi-en-vechtstreek.png", "x": 201, "y": 389, "status": 1 },
    { "name": "Groningen", "file": "groningen.png", "x": 339, "y": 177, "status": 1 },
    { "name": "Haaglanden", "file": "haaglanden.png", "x": 95, "y": 412, "status": 1 },
    { "name": "IJsselland", "file": "ijsselland.png", "x": 302, "y": 284, "status": 1 },
    { "name": "Kennemerland", "file": "kennemerland.png", "x": 142, "y": 344, "status": 1 },
    { "name": "Limburg-Noord", "file": "limburg-noord.png", "x": 276, "y": 500, "status": 1 },
    { "name": "Zuid-Limburg", "file": "zuid-limburg.png", "x": 273, "y": 624, "status": 1 },
    { "name": "Hollands Midden", "file": "hollands-midden.png", "x": 128, "y": 396, "status": 1 },
    { "name": "Midden en West-Brabant", "file": "midden-en-west-brabant.png", "x": 105, "y": 480, "status": 1 },
    { "name": "Noord-Holland-Noord", "file": "noord-holland-noord.png", "x": 161, "y": 226, "status": 1 },
    { "name": "Twente", "file": "twente.png", "x": 348, "y": 363, "status": 1 },
    { "name": "Utrecht", "file": "utrecht.png", "x": 175, "y": 396, "status": 1 },
    { "name": "Zeeland", "file": "zeeland.png", "x": 0, "y": 500, "status": 2 },
];

fetch('https://natuurbrandrisico.scorchchamp.com/')
    .then(response => response.json())
    .then(data => {
        // Use data object keys
        Object.keys(data).forEach(province => {
            const field = fields.find(field => field.name === province);
            if (!field) return;
            switch (data[province]) {
                case "Fase 1":
                    field.status = 1;
                    break;
                case "Fase 2":
                    field.status = 2;
                    break;
                default:
                    field.status = 0;
                    break;
            }
            const img = new Image();
            img.src = `./assets/${field.file}`;
            img.classList.add('province');
            img.onload = () => {
                img.style.left = `${field.x}px`;
                img.style.top = `${field.y}px`;
                img.classList.add(`status${field.status}`);
                mapContainer.appendChild(img);
            };
            addTooltip(img, field.name, field.status);
        });
    });


