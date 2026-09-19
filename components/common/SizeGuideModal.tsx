"use client";

import { useState } from "react";
import { Modal } from "./Modal";

interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
}

const SIZE_CHART: Record<string, Record<string, string>> = {
  US: { "5": "US 5", "6": "US 6", "7": "US 7", "8": "US 8", "9": "US 9", "10": "US 10", "11": "US 11" },
  UK: { "5": "UK 4", "6": "UK 5", "7": "UK 6", "8": "UK 7", "9": "UK 8", "10": "UK 9", "11": "UK 10" },
  EU: { "5": "EU 37", "6": "EU 37.5", "7": "EU 38", "8": "EU 39", "9": "EU 40", "10": "EU 41", "11": "EU 42" },
  CM: { "5": "23", "6": "24", "7": "25", "8": "26", "9": "27", "10": "28", "11": "29" },
};

const BRANDS = ["Men", "Women", "Kids"];

export function SizeGuideModal({ open, onClose }: SizeGuideModalProps) {
  const [gender, setGender] = useState("Men");
  const [brand, setBrand] = useState("US");

  return (
    <Modal open={open} onClose={onClose} title="Size Guide" size="lg">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <div>
            <label className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">Gender</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {BRANDS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setGender(b)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] ${
                    gender === b ? "bg-[#1f3855] text-white" : "border border-stone-300 bg-white text-[#3f514a] dark:border-stone-600 dark:bg-[#222a24] dark:text-[#8a9a94]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">Size System</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.keys(SIZE_CHART).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setBrand(s)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] ${
                    brand === s ? "bg-[#1f3855] text-white" : "border border-stone-300 bg-white text-[#3f514a] dark:border-stone-600 dark:bg-[#222a24] dark:text-[#8a9a94]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-700">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-800">
                <th className="px-4 py-2 font-bold text-[#153d30] dark:text-[#c4e0a8]">Size</th>
                {Object.entries(SIZE_CHART[brand] || {}).map(([key, val]) => (
                  <th key={key} className="px-4 py-2 font-bold text-[#153d30] dark:text-[#c4e0a8] text-right">
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-100 dark:border-stone-700/50">
                <td className="px-4 py-2 font-medium text-[#1a2d2e] dark:text-[#e8ede8]">Foot Length (cm)</td>
                {Object.entries(SIZE_CHART[brand] || {}).map(([key]) => (
                  <td key={key} className="px-4 py-2 text-right text-[#53665c] dark:text-[#8a9a94]">
                    {parseInt(key) * 0.85 + 12}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-[#1a2d2e] dark:text-[#e8ede8]">Inches</td>
                {Object.entries(SIZE_CHART[brand] || {}).map(([key]) => (
                  <td key={key} className="px-4 py-2 text-right text-[#53665c] dark:text-[#8a9a94]">
                    {(parseInt(key) * 0.85 + 12) * 0.393701}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[0.7rem] text-[#53665c] dark:text-[#8a9a94]">
          Measure your foot length from heel to longest toe for the best fit. When between sizes, we recommend going up one size for a comfortable fit.
        </p>
      </div>
    </Modal>
  );
}
