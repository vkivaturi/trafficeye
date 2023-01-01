import { Camera, CameraType } from 'expo-camera';
import * as Location from 'expo-location';
import { LocationGeocodedAddress } from 'expo-location/build/Location.types';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraPreview } from '../components/CameraPreview';
import { TextPreview } from '../components/TextPreview';
import { CurrentDateFormat } from '../utils/dateformatter';

//Traffic violation screen is used to open camera, take picture, preview the image
export default function TrafficViolationScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState<Camera | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentDateLocal, setCurrentDateLocal] = useState<string | null>(null);

  //Location permission - start
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);
  //Location permission - end

  //Camera permission - start
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  //Camera permission - end

  //Take picture and set preview flag to true
  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      console.log("Main screen photo.uri - ", photo.uri);

      //console.log(location?.coords.latitude);

      //Redirect user to the preview screen. Location address is slow and async operation and will run in background
      setPreviewVisible(true);
      setCapturedImage(photo);

      //Fetch current date in specific format
      setCurrentDateLocal(CurrentDateFormat());
      console.log("## Traffic violation screen currentDateLocal " + currentDateLocal);

      //Fetch address details based on location - start
      let location: Location.LocationObject = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if(location.coords) {
//        const {latitude, longitude} = location.coords;

//        TEST
        let latitude = 17.427533003510074;
        let longitude = 78.33180817127493;

        let response = await Location.reverseGeocodeAsync({latitude, longitude});
        for (let item of response) {
          //let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
          console.log(item);    
        }
        //Fetch address details based on location - end
      }      
    }
  }

  //Retake picture from the image preview screen
  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    takePicture();
  }

  return (
    <View style={styles.container}>

      {previewVisible && capturedImage ? (
        //<CameraPreview photo={capturedImage} retakePicture={retakePicture}/>
        <TextPreview timestamp={currentDateLocal} locationName="Nallagandla" landmark="Citizens" photo={capturedImage} retakePicture={retakePicture}/>
      ) :
        (<Camera
          style={styles.camera}
          type={type}
          ref={(ref) => setCamera(ref)} >
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between'
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff'
                }}
              />
            </View>
          </View>
        </Camera>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});