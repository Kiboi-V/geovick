// import { RevealOnScroll } from "../RevealOnScroll"
export const About = () => {

     const techSkills=[
        'React',
        'Django',
        'python',
        'Google Earth Engine',
        'Postgres',
        'javascript'
    ]
     const gisSkills=[
        'Surveying',
        'Spatial Analysis',
        'Remote Sensing',
        'Climate Modelling',
        'GIS & Mapping',
        'ArcGIS Pro',
        'QGIS',
        'AutoCAD',
        ]

    const dataSkills=[
        'Data Analysis and Visualization',
        'Machine Learning',
        'Predictive Modelling',
        'Story Maps',
    ]
    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <p>
                        Passionate developer specialized in Geospatial solutions by intergrating Surveying, GIS, Earth-Observation,
                        Machine Learning, & geospatial web apps using spatial tool.
                    </p>
                    <div className="grid grid-cols-1  gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 underline">Tech</h3>
                            <div className="flex flex-warp gap-2">
                                {techSkills.map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}

                                    </span>
                                ))
                                }
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 underline">GIS</h3>
                                <div className="flex flex-wrap gap-2">
                                    {gisSkills.map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                        >
                                            {tech}

                                        </span>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 underline">Data</h3>
                            <div className="flex flex-warp gap-2 center">
                                {dataSkills.map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 center rounded text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}

                                    </span>
                                ))
                                }
                            </div>
                        </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl fot-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                                    <li>
                                        <strong>Bachelor of Science in Geomatic Engineering & GIS - JKUAT 
                                            
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework: Surveying, GeoStatistics, Remote sensing & GIS applications
                                        </ strong >
                                            
                                    </li>
                                </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl fot-bold mb-4">Work Experience</h3>
                                <div className="space-y-4 text-grau-300">
                                    <div>
                                        <h4 className="font-semibold">Attaché at Athi Water Works (2023)</h4>
                                        <p> Engineering Survey, GIS </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Attaché at DRSRS (2024) </h4>
                                        <p> Earth Observation, geospatial web apps </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Intern at Geo-Loop (2025) </h4>
                                        <p> Land Survey, GIS, Land Information Management Systems </p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}