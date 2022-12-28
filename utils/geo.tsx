import { getDistance, findNearest } from "geolib";
import geoData from '../data/geodata.json';
import { GeoObject } from "../data/geoObject";

//Calculate distance between two points
export const calculateDistanceKms = (lat1: number, long1: number, lat2: number, long2: number) => {
  var dis = getDistance(
    { latitude: lat1, longitude: long1 },
    { latitude: lat2, longitude: long2 },
  );
  return dis / 1000;
};

//TODO
export const loadLandmarkCoordinates = () => {

};

//Find nearest landmark to the given location of user.
//TODO - Good scope to optimise this logic
export const findNearestLandmark = (originLat: number, originLong: number, maxDistanceKms: number) => {

  let geoDataLocal: GeoObject.RootObject = JSON.parse(JSON.stringify(geoData));

  //Iterate through the landmark json
  let landMarkLat: number;
  let landMarkLong: number;

  for (var indxMain = 0; indxMain < geoDataLocal.locations.length; indxMain++) {
    for (var indxLandmark = 0; indxLandmark < geoDataLocal.locations[indxMain].coordinatesLandmarks.length; indxLandmark++) {
      landMarkLat = geoDataLocal.locations[indxMain].coordinatesLandmarks[indxLandmark].latitude;
      landMarkLong = geoDataLocal.locations[indxMain].coordinatesLandmarks[indxLandmark].longitude;
      if (calculateDistanceKms(originLat, originLong, landMarkLat, landMarkLong) <= maxDistanceKms) {
        //Match found within nearest distance. Only first match is returned
        return geoDataLocal.locations[indxMain].coordinatesLandmarks[indxLandmark].landmarkName;
      }
    }
  }

  //If no nearest landmark is found, return null
  return null;
};