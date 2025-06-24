
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    
    const gisPhrases = [
        "< DevelopingWebGIS />",
        "< SpatialDataIntegration />",
        "< OptimizingQueries />",
        "< />",
        "< Prototype />",
        
    ];

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let timeoutId;

        const typeNextCharacter = () => {
            if (phraseIndex < gisPhrases.length) {
                const currentPhrase = gisPhrases[phraseIndex];
                
                if (charIndex <= currentPhrase.length) {
                    setDisplayText(currentPhrase.substring(0, charIndex));
                    charIndex++;
                    timeoutId = setTimeout(typeNextCharacter, 50); 
                } else {
                    
                    timeoutId = setTimeout(() => {
                        phraseIndex++;
                        setCurrentPhraseIndex(phraseIndex);
                        charIndex = 0;
                        
                        if (phraseIndex < gisPhrases.length) {
                            typeNextCharacter();
                        } else {
                            
                            document.querySelector('.loading-screen')
                                .classList.add('opacity-0', 'transition-opacity', 'duration-500');
                            setTimeout(onComplete, 500);
                        }
                    }, 1000); 
                }
            }
        };

        typeNextCharacter();

        return () => clearTimeout(timeoutId);
    }, [onComplete]);

    return (
        <div className="loading-screen fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {displayText}
                <span className={`inline-block w-2 h-8 bg-blue-500 ml-1 align-middle ${
                    currentPhraseIndex >= gisPhrases.length || 
                    displayText.length === gisPhrases[currentPhraseIndex].length ? 
                    'opacity-0' : 'animate-blink'
                }`}></span>
            </div>
            
            <div className="w-[200px] h-[2px] bg-gray-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_#3b82f6] relative">
                    <div 
                        className="absolute top-0 left-0 h-full bg-white/30 animate-loading-pulse w-[20%]"
                        style={{
                            animationDuration: `${gisPhrases.length * 2}s`
                        }}
                    ></div>
                </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-400 animate-pulse">
                {getStatusMessage(currentPhraseIndex, gisPhrases.length)}
            </p>
        </div>
    );
};


function getStatusMessage(currentIndex, totalPhrases) {
    const messages = [
        "Analyzing user needs...",
        "Data Workflows...",
        "Configuring views and tools...",
        "Almost there...",
        "Customized products",
    ];
    return messages[Math.min(currentIndex, messages.length - 1)];
}