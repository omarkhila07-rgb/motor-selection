export type Car = {
  slug: string;
  title: string;
  image?: string;
  brand: string;
  model: string;
  price: string;
  monthly: string;
  year: string;
  km: string;
  fuel: string;
  gearbox: string;
  power: string;
  location: string;
  status: string;
  description: string;
  equipment: string[];
  images: string[];
};

export const cars: Car[] = [];