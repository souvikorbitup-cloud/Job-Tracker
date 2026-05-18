"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const tabs = [
  {
    id: "organize",
    label: "Organize Applications",
    image: "/hero-images/hero1.png",
  },
  {
    id: "hired",
    label: "Get Hired",
    image: "/hero-images/hero2.png",
  },
  {
    id: "boards",
    label: "Manage Boards",
    image: "/hero-images/hero3.png",
  },
];

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="mb-8 flex justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                  activeTab.id === tab.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Image */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            <Image
              src={activeTab.image}
              alt={activeTab.label}
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}