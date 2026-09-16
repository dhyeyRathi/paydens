"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
    () => import("./GoogleMaps"),
    {
        ssr: false,
    }
);

export default function GoogleMapsWrapper() {
    return <Map />;
}