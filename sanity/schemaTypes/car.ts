import { defineField, defineType } from "sanity";

export const car = defineType({
  name: "car",
  title: "Vehículo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "brand", title: "Marca", type: "string" }),
    defineField({ name: "model", title: "Modelo", type: "string" }),
    defineField({ name: "year", title: "Año", type: "string" }),
    defineField({ name: "km", title: "Kilómetros", type: "string" }),
    defineField({ name: "fuel", title: "Combustible", type: "string" }),
    defineField({ name: "gearbox", title: "Cambio", type: "string" }),
    defineField({ name: "power", title: "Potencia", type: "string" }),
    defineField({ name: "price", title: "Precio", type: "string" }),
    defineField({
      name: "status",
      title: "Estado",
      type: "string",
      options: { list: ["Disponible", "Vendido", "Reservado", "Bajo búsqueda"] },
      initialValue: "Disponible",
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
      initialValue: "Figueres, Girona",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "equipment",
      title: "Equipamiento",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Fotos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});
