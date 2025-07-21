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
     const survSkills=[
        'RTK',
        'Land Survey',
        'Topo Survey',
        'Engineering Survey',
        'AutoCAD',

     ]
     const gisSkills=[
        'Spatial Analysis',
        'Remote Sensing',
        'Climate Modelling',
        'GIS & Mapping',
        'ArcGIS Pro',
        'QGIS',
        'STAC'
        ]

    const dataSkills=[
        'Data Analysis and Visualization',
        'Machine Learning',
        'Predictive Modelling',
        'Story Maps',
    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-5xl mx-auto">
                {/* About Me Header */}
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

               
                <div className="p-4 sm:p-6 rounded-xl border border-white/10 mb-6 mx-2 sm:mx-0">
                    <p className="text-sm sm:text-base text-justify leading-relaxed">
                        Passionate developer specialized in Geospatial solutions by integrating Surveying, GIS, 
                        Earth-Observation, Machine Learning, & geospatial web apps using spatial tools.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 gap-4 mb-8">
                    {[
                        {title: "Tech", skills: techSkills},
                        {title: "Survey", skills: survSkills},
                        {title: "GIS", skills: gisSkills}, 
                        {title: "Data", skills: dataSkills}
                    ].map((category, index) => (
                        <div key={index} className="p-4 rounded-xl border border-white/10">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 underline">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="text-xs sm:text-sm bg-blue-500/10 text-blue-500 py-1 px-2 sm:px-3 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg sm:text-xl font-bold mb-3">Education</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <div>
                                    <strong>BSc Geomatic Engineering & GIS - JKUAT</strong>
                                    <p className="text-gray-300 mt-1">Relevant Coursework: Surveying, GeoStatistics, Remote Sensing & GIS</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg sm:text-xl font-bold mb-3">Experience</h3>
                        <div className="space-y-3 text-sm sm:text-base">
                            {[
                                {
                                    role: "Attaché at Athi Water Works (2023)",
                                    desc: "Engineering Survey, GIS"
                                },
                                {
                                    role: "Attaché at DRSRS (2024)",
                                    desc: "Earth Observation, geospatial web apps" 
                                },
                                {
                                    role: "Intern at Geo-Loop (2025)",
                                    desc: "Land Survey, GIS, Land Information Systems"
                                }
                            ].map((exp, i) => (
                                <div key={i} className="flex">
                                    <span className="mr-2">•</span>
                                    <div>
                                        <strong>{exp.role}</strong>
                                        <p className="text-gray-300">{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}