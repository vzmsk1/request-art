const PLACEMARK_CONTACT = {
    lalitude: 55.803929,
    longitude: 37.582251
};

function removeControls(map) {
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.controls.remove('default');
    map.controls.remove('inputSearch');
    map.controls.remove('routeButtonControl');
}
function initContactsMap() {
    const contactsMap = new ymaps.Map('location-map', {
        center: [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        zoom: 12,
        controls: []
    });

    const contactsPlacemark = new ymaps.Placemark(
        [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        {},
        {
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#image',
            iconImageHref: './assets/images/icons/placemark.svg',
            iconImageSize: [72, 87]
        }
    );

    contactsMap.geoObjects.add(contactsPlacemark);

    removeControls(contactsMap);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('location-map')) {
        ymaps.ready(initContactsMap);
    }
});
