function getLocation() {
    const ipInput = document.getElementById('ipInput').value;
    const mapDiv = document.getElementById('map');

    // Clear previous map
    mapDiv.innerHTML = '';

    // Fetch location from ipapi
    fetch(`https://api.ipapi.com/${ipInput}?access_key=API_KEY`)
        .then(response => response.json())
        .then(data => {
            const latitude = data.latitude;
            const longitude = data.longitude;
            const city = data.city;

            // Update map with city location
            const map = new google.maps.Map(mapDiv, {
                center: { lat: latitude, lng: longitude },
                zoom: 10
            });
            const marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
                title: city
            });
        })
        .catch(error => console.log(error));
}