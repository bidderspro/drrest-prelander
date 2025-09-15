import React from 'react';

export default function TestMethodSection() {
  return (
    <section className="w-full px-4 py-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="section-card">
          <h2 className="section-title">How We Tested Top 10 Mouth Tapes</h2>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#dbeafe] p-3 rounded-md flex">
              <div className="number-badge">
                1
              </div>
              <div>
                <h3 className="font-medium text-xs mb-1">Comfort & Adhesive Quality</h3>
                <p className="text-xs text-gray-700">Wore each tape for a full night to assess comfort and adhesion strength</p>
              </div>
            </div>
            
            <div className="bg-[#dbeafe] p-3 rounded-md flex">
              <div className="number-badge">
                2
              </div>
              <div>
                <h3 className="font-medium text-xs mb-1">Breathability</h3>
                <p className="text-xs text-gray-700">Tested airflow through nose while wearing each tape</p>
              </div>
            </div>
            
            <div className="bg-[#dbeafe] p-3 rounded-md flex">
              <div className="number-badge">
                3
              </div>
              <div>
                <h3 className="font-medium text-xs mb-1">Skin Sensitivity</h3>
                <p className="text-xs text-gray-700">Checked for redness, irritation, or residue after removal</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-gray-500 italic mt-3">
            *Tests conducted over a 30-day period with daily use of each product
          </div>
        </div>
      </div>
    </section>
  );
}
