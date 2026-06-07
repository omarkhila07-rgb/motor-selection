export const carsQuery = `
*[_type=="car"]{
  _id,
  title,
  slug,
  year,
  km,
  fuel,
  gearbox,
  price,
  "image": mainImage.asset->url
}
`
