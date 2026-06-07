import "./globals.css";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Selection | Compra y venta de coches en Figueres Girona",
  description:
    "Motor Selection es una empresa de compraventa de coches en Figueres, Girona. Vehículos seleccionados, gestión de venta, , matriculación e importación bajo pedido.",
  keywords: [
    "compraventa coches Figueres",
    "venta coches Girona",
    "coches segunda mano Figueres",
    "comprar coche Girona",
    "vender coche Figueres",
    "concesionario Figueres",
    "Motor Selection",
    "importación coches Girona",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}
        <Footer /></body>
    </html>
  );
}
