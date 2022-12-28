//Structure of geo data. This is used by TyeScript for strict enforecement of data type

export module GeoObject {

    export interface Contact {
        Call: string;
        WhatsApp: string;
    }

    export interface CoordinatesLandmark {
        latitude: number;
        longitude: number;
        landmarkName: string;
    }

    export interface CoordinatesJurisdictionPolygon {
        latitude: number;
        longitude: number;
    }

    export interface Location {
        id: number;
        name: string;
        city: string;
        logo: string;
        message: string;
        contact: Contact;
        coordinatesLandmarks: CoordinatesLandmark[];
        coordinatesJurisdictionPolygon: CoordinatesJurisdictionPolygon[];
        lastUpdated: string;
    }

    export interface RootObject {
        locations: Location[];
    }

}
