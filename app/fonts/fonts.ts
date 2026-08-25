import localFont from "next/font/local";

export const proximaNova = localFont({
    src: [
        {
            path: "./ProximaNovaA-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Extrabld.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./ProximaNovaA-Black.woff2",
            weight: "900",
            style: "normal",
        },

        {
            path: "./ProximaNovaA-ThinIt.woff2",
            weight: "100",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-LightIt.woff2",
            weight: "300",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-RegularIt.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-SemiboldIt.woff2",
            weight: "600",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-BoldIt.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-ExtrabldIt.woff2",
            weight: "800",
            style: "italic",
        },
        {
            path: "./ProximaNovaA-BlackIt.woff2",
            weight: "900",
            style: "italic",
        },
    ],
    variable: "--font-proxima-nova",
});