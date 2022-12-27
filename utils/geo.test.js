import React from 'react';
import {calculateDistanceKms} from './geo';
import renderer from 'react-test-renderer';

test('calculateDistance test ', () => {
    expect(1+2).toBe(3);
    console.log(calculateDistanceKms(17.469980519560785, 78.31175205959487, 17.422338785975718, 78.35040102368909));
}) 