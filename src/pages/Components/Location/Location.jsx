import { Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Location = () => {
    const position = [23.7495, 90.3666]
    return (
        <div className="my-6">
            <h1 className="text-4xl text-black font-bold text-center py-2">Our Location</h1>
            <MapContainer className="h-[500px] w-full md:w-[750px] lg:w-[750px] mx-auto" center={position} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    HouseHunter <br /> Main Office.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Location;
