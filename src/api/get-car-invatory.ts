import { useQuery } from "@tanstack/react-query";

const carInventory = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: 25000,
    imageUrl: "/images/cars/car-1.jpg",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 22000,
    imageUrl: "/images/cars/car-2.jpg",
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2014,
    price: 30000,
    imageUrl: "/images/cars/car-3.jpg",
  },
];

function getCarInventory() {
  return Promise.resolve(carInventory);
}

export function useCarInventory() {
  return useQuery({
    queryKey: ["carInventory"],
    queryFn: getCarInventory,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    retry: false,
  });
}
