// lib/data.ts
export interface Hospital {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
}

//top rated hospital data
export const hospitals: Hospital[] = [
  {
    id: "1",
    name: "Asokoro Hospital",
    image: "/hospital1.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
  },
  {
    id: "2",
    name: "City Hospital",
    image: "/hospital2.jpg",
    description: "Leading provider of urban health services.",
    location: "Lagos",
  },
  {
    id: "3",
    name: "Cadarcrest Hospital",
    image: "/hospital3.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
  },
  {
    id: "4",
    name: "National Hospital Abuja",
    image: "/hospital4.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
  },
];

