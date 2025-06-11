import React from "react";
import { hospitals } from "../../../../lib/data";
import Image from "next/image";
import notFound from "@/app/not-found";
import Link from "next/link";
import {
  HiPhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiArrowLeft,
} from "react-icons/hi";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  // Await the params since it's now a Promise in Next.js 15
  const { id } = await params;

  const hospital = hospitals.find((h) => h.id === id);
  if (!hospital) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold mb-10"
      >
        <HiArrowLeft className="mr-2 w-6 h-6" />
        Back to dashboard
      </Link>

      {/* Hospital Image Full Width */}
      <div className="relative w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden shadow-xl mb-12">
        <Image
          src={hospital.image}
          alt={hospital.name}
          fill
          sizes="(max-width: 640px) 100vw, 1400px"
          className="object-cover"
          priority
        />
      </div>

      {/* Hospital Info Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Name & Description */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-6 tracking-tight">
            {hospital.name}
          </h1>
          <p className="text-gray-800 text-md leading-relaxed mb-10">
            {hospital.description}
          </p>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-5 tracking-wide">
              Services
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm max-w-xl mb-16">
              {hospital.services.map((service, i) => (
                <li
                  key={i}
                  className="hover:text-blue-700 transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Facilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hospital.facilities?.map((facility, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="w-full h-40 relative">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {facility.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Contact & Location */}
        <aside className="space-y-10 border-l border-blue-200 pl-8">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-5 tracking-wide">
              Contact & Location
            </h2>
            <ul className="space-y-6 text-gray-700 text-sm">
              <li className="flex items-center gap-4">
                <HiOutlineLocationMarker className="w-5 h-7 text-blue-600 flex-shrink-0" />
                <span>{hospital.location}</span>
              </li>
              <li className="flex items-center gap-4">
                <HiPhone className="w-5 h-7 text-blue-600 flex-shrink-0" />
                <span>{hospital.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlineMail className="w-5 h-7 text-blue-600 flex-shrink-0" />
                <span>{hospital.email}</span>
              </li>
            </ul>
          </div>

         
        </aside>
      </section>
    </main>
  );
};

export default page;
