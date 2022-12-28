import {calculateDistanceKms, findNearestLandmark} from './geo';

test('calculateDistance test ', () => {
    var dis = calculateDistanceKms(17.469980519560785, 78.31175205959487, 17.422338785975718, 78.35040102368909);
    expect(dis).toBe(6.706);
}) 

test('findNearestLandmark test ', () => {
    //console.log(findNearestLandmark(17.469980519560785, 78.31175205959487, 1));
    //expect(findNearestLandmark(17.469980519560785, 78.31175205959487, 1)).toBe('Aparna Sarovar');
    //17.420323173168484, 78.3463496522643
    expect(findNearestLandmark(17.420323173168484, 78.3463496522643, 1)).toBe('Wipro circle');

}) 