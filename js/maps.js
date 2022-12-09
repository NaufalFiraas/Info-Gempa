import showMaps from "./modules/showMaps/showMaps.mjs";

const queryString = window.location.search;
console.log(queryString);
const searchParams = new URLSearchParams(queryString);

showMaps(
    searchParams.get('lat'),
    searchParams.get('long'),
    searchParams.get('kedalaman'),
    searchParams.get('magnitude'),
    searchParams.get('koordinat'),
)