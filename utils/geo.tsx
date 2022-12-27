import { getDistance, getPreciseDistance } from "geolib"

//Calculate distance between two points
export const calculateDistanceKms = (lat1: number, long1: number, lat2: number, long2: number) => {
    var dis = getDistance(
      {latitude: lat1, longitude: long1},
      {latitude: lat2, longitude: long2},
    );
    return dis/1000;
  };

  //TODO
  export const loadLandmarkCoordinates = () => {


  };

  export const findNearestLandmark = (originLat: number, originLong: number, maxDistanceToLandmark: number) => {
    
  };