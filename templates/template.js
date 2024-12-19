 
 
 //scaling the images coordenates :P
 function scaleImageMap() {
    const img = document.getElementById("responsive-img");
    const originalWidth = img.naturalWidth; 
    const currentWidth = img.offsetWidth; 
    const scale = currentWidth / originalWidth;


    const areas = document.querySelectorAll("map area");
    areas.forEach(area => {
        const originalCoords = area.dataset.originalCoords.split(",").map(Number);
        const scaledCoords = originalCoords.map(coord => coord * scale);
        area.coords = scaledCoords.join(",");
    });
}


window.onload = () => {

    const areas = document.querySelectorAll("map area");
    areas.forEach(area => {
        area.dataset.originalCoords = area.coords;
    });

    scaleImageMap(); 
};


window.onresize = scaleImageMap;