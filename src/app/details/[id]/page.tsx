import React from "react";
import { hospitals } from "../../../../lib/data";
import Image from "next/image";
import notFound from "@/app/not-found";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const page = ({ params }: Props) => {
  const hospital = hospitals.find((h) => h.id === params.id);
  if (!hospital) return notFound();
  return(
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
        <Image
          src={hospital.image}
          alt={hospital.name}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">{hospital.name}</h1>
          <p className="text-gray-700 mb-4">{hospital.description}</p>
          <p className="text-gray-600"><strong>Address:</strong> {hospital.description}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {hospital.location}</p>
          <Link href="/hospitals" className="inline-block mt-6 text-blue-600 hover:underline">
            ← Back to hospitals
          </Link>
        </div>
      </div>
    </div>
  )
};

export default page;
