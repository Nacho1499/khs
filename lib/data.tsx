// lib/data.ts
export interface Hospital {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  services: string[];
  phone: string;
  email: string;
  mapUrl: string;
  facilities: { name: string; image: string }[];
}

//top rated hospital data
export const hospitals: Hospital[] = [
  {
    id: "1",
    name: "Asokoro Hospital",
    image: "/hospital1.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
    services: ["Emergency", "Maternity", "Pediatrics", "Radiology"],
    phone: "08012345678",
    email: "info@asokorohospital.com",
    mapUrl: "https://maps.google.com?q=Asokoro+Hospital+Abuja",
    facilities: [
      {
        name: "MRI Center",
        image: "/lab1.jpg",
      },
      {
        name: "Emergency Room",
        image: "/lab4.jpg",
      },
      {
        name: "Pediatric Ward",
        image: "/lab3.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "City Hospital",
    image: "/hospital2.jpg",
    description: "Leading provider of urban health services.",
    location: "Lagos",
    services: ["Emergency", "Maternity", "Pediatrics", "Radiology"],
    phone: "08012345678",
    email: "info@asokorohospital.com",
    mapUrl: "https://maps.google.com?q=Asokoro+Hospital+Abuja",
    facilities: [
      {
        name: "MRI Center",
        image: "/lab4.jpg",
      },
      {
        name: "Emergency Room",
        image: "/lab3.jpg",
      },
      {
        name: "Pediatric Ward",
        image: "/lab1.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "Cadarcrest Hospital",
    image: "/hospital3.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
    services: ["Emergency", "Maternity", "Pediatrics", "Radiology"],
    phone: "08012345678",
    email: "info@asokorohospital.com",
    mapUrl: "https://maps.google.com?q=Asokoro+Hospital+Abuja",
    facilities: [
      {
        name: "MRI Center",
        image: "/lab3.jpg",
      },
      {
        name: "Emergency Room",
        image: "/lab4.jpg",
      },
      {
        name: "Pediatric Ward",
        image: "/lab1.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "National Hospital Abuja",
    image: "/hospital4.jpg",
    description: "A modern hospital located in Asokoro.",
    location: "Abuja",
    services: ["Emergency", "Maternity", "Pediatrics", "Radiology"],
    phone: "08012345678",
    email: "info@asokorohospital.com",
    mapUrl: "https://maps.google.com?q=Asokoro+Hospital+Abuja",
    facilities: [
      {
        name: "MRI Center",
        image: "/lab3.jpg",
      },
      {
        name: "Emergency Room",
        image: "/lab1.jpg",
      },
      {
        name: "Pediatric Ward",
        image: "/lab4.jpg",
      },
    ],
  },
];
