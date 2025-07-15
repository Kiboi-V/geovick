export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-blue mb-2"> GEO-AI</h3>
                        <p className="text-gray-400 mb-4"> Inter-University AI Hackathon</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Geoserver","Dashboard","ConvLSTM","EO"].map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <a href="https://x.com/DiscoverJKUAT/status/1857797385188933861?t=tzi1EvrW08Ky76lKTCANpQ&s=09" className="text-blue-400 hover:text-blue-300 underline transition-colors my-4"> View Project ➤</a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-blue mb-2"> Earth-Observation & Climate Modelling</h3>
                        <p className="text-gray-400 mb-4"> Final Year Project</p>
                        <div className="flex flex-wrap gap-2 mb-4"> 
                            {["GEE","Climate","PLUS Model","jupyter-notebook","LULC","Digital Image Processing","SWE Projection"].map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors my-4"> View Project ➤</a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-blue mb-2"> Land Information Management System</h3>
                        <p className="text-gray-400 mb-4"> Real-property Inventory</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React","Django","Postgres","PostGIS"].map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <a href= {`${import.meta.env.BASE_URL}lims.mp4`}
                                   target="_blank"
                                   className="text-blue-400 hover:text-blue-300 underline transition-colors my-4"> View Project ➤</a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-blue mb-2"> Analogue Research Station</h3>
                        <p className="text-gray-400 mb-4"> OASES Habitat</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Afronauts Team : ArchiTect, Civil, EEE, GIS", "Site Suitability & Design Analysis"].map((tech,key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded text-sm hover:bg-blue-500/20
                                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}

                                </span>
                            ))}
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <a href={`${import.meta.env.BASE_URL}AFRONAUGHTS.pptx`}
                                   target="_blank"
                                   className="text-blue-400 hover:text-blue-300 underline transition-colors my-4"> View Project ➤</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
)}