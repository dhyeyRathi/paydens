"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import L from "leaflet";
import {
    MapContainer,
    TileLayer,
    Marker,
} from "react-leaflet";

const pharmacyIcon = L.icon({
    iconUrl: "/map-marker.png",
    iconSize: [80, 100],
    iconAnchor: [40, 100],
});

const pharmacies = [
    {
        id: 1,
        position: [51.5095, -0.1390] as [number, number],
    },
    {
        id: 2,
        position: [51.4975, -0.1265] as [number, number],
    },
    {
        id: 3,
        position: [51.4890, -0.1290] as [number, number],
    },
];



export default function Map() {
    const zoom = typeof window !== "undefined" && window.innerWidth < 640 ? 14 : 15;
    return (
        <div className="sticky inset-0 z-0 h-[600px] sm:h-[1100px] w-full overflow-hidden rounded-[16px]">
            <MapContainer
                center={[51.5014, -0.1350]}
                zoom={zoom}
                zoomControl={false}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    url={`https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`}
                    tileSize={512}
                    zoomOffset={-1}
                    attribution="&copy; MapTiler &copy; OpenStreetMap contributors"
                />

                {pharmacies.map((pharmacy) => (
                    <Marker
                        key={pharmacy.id}
                        position={pharmacy.position}
                        icon={pharmacyIcon}
                    />
                ))}
            </MapContainer>
        </div>
    );
}