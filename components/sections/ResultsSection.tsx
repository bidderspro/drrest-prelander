import Image from 'next/image';

const results = [
  {
    metric: '95%',
    description: 'Report better sleep quality within first week'
  },
  {
    metric: '87%',
    description: 'See reduction in snoring'
  },
  {
    metric: '92%',
    description: 'Feel more energized in the morning'
  },
  {
    metric: '89%',
    description: 'Would recommend to friends & family'
  }
];

export default function ResultsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on a survey of 1,000+ Dr. RestRight customers after 30 days of use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">{result.metric}</span>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Science Behind Better Sleep
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Promotes Nasal Breathing</h4>
                    <p className="text-gray-600 text-sm">Nose breathing filters, warms, and humidifies air more effectively than mouth breathing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Activates Parasympathetic Response</h4>
                    <p className="text-gray-600 text-sm">Nasal breathing triggers your body's natural relaxation response for deeper sleep.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Improves Oxygen Efficiency</h4>
                    <p className="text-gray-600 text-sm">Better oxygen absorption leads to more restorative sleep and increased energy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image 
                src="/assets/images/REM-Tape-Strips.svg"
                alt="REM Tape Strips"
                width={350}
                height={250}
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}