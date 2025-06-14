import homeBg from '../../assets/Home.jpg'

export const Home = () => {
    return <section 
            id='home' 
            className="min-h-screen flex items-center justify-center relative bg-no-repeat"
            style={{backgroundImage:`url(${homeBg})`,
                    backgroundPosition: 'center',
                    
                    }}
            >
                
            <div className="text-center z-10 px-4 mt-1">
                <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    Hi, I'm Victor
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    A Geospatial Developer
                </p>

                <div className="flex justify-center space-x-4 mt-50">
                    <a href="#projects" 
                        className="border border-green-500 text-brown-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover: bg-blue-500/10"
                        >
                            View Projects
                    </a>
                    <a href="#contact" 
                        className="border border-green-500 text-brown-500 py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover: bg-blue-500/10"
                        >
                            Contact Me
                    </a>

                </div>
            </div>
            </section>
        }