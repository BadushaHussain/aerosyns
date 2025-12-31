'use client'

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-500/30 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-500/30 rounded-full animate-float animation-delay-600"></div>

            {/* Rotating Rings */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-blue-200/20 rounded-full animate-rotate"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-purple-200/20 rounded-full animate-rotate" style={{ animationDirection: 'reverse' }}></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 animate-gradient"></div>
        </div>
    )
}
