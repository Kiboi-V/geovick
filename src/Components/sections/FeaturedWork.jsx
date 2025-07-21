import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export const FeaturedWork = () => {
  // Animation trigger using Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="featured-work"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-black"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent text-center">
          Featured GIS Work
        </h2>

        {/* Animated Map Slide */}
        <div className={`mb-20 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative overflow-hidden rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all z-10" />
            <iframe 
              src={`${import.meta.env.BASE_URL}GIS_Stak.jpg`} 
              className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
              title="Urban Planning Map"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
              <h3 className="text-xl font-bold text-white">GIS Stack</h3>
              <p className="text-cyan-100 mt-2"> "You can't fix by analysis what you bungled by design"
              </p>
            </div>
          </div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Water Service Coverage",
              description: "Analysing & Mapping Potential Consumers",
              file: "Water_map.pdf",
              tags: ["ArcGIS", "Spatial analysis"]
            },
            {
              title: "  LULC",
              description: "Supervised Classification",
              file: "Lulc.jpg",
              tags: ["STAC", "ArcGIS", "Python","RandomForest"]
            },
            {
              title: "Route Planning",
              description: "Systematic Sampling, Proper distribution & max coverage",
              file: "Route.jpg",
              tags: ["Google Earth Pro", "Clustering","TSP"]
            },
            
          ].map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:bg-gray-800/70 transition-all duration-500 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <iframe 
                  src={`${import.meta.env.BASE_URL}maps/${item.file}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  title={item.title}
                />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={`${import.meta.env.BASE_URL}maps/${item.file}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Full Map <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};