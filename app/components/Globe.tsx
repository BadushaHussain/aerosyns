'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)

    useEffect(() => {
        let phi = 1.5
        let width = 0
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.25,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [0.1, 0.1, 0.1],
            glowColor: [1, 1, 1],
            opacity: 0.7,
            markers: [
                // UAE (approx 23.4° N, 53.8° E)
                { location: [23.4241, 53.8478], size: 0.08 },
                // India (approx 20.6° N, 79.0° E)
                { location: [20.5937, 78.9629], size: 0.08 },
            ],
            onRender: (state) => {
                // This prevents rotation while dragging
                if (!pointerInteracting.current) {
                    // Called on every animation frame.
                    // `state` will be an empty object, return updated params.
                    phi += 0.005
                }
                state.phi = phi + pointerInteractionMovement.current
                state.width = width * 2
                state.height = width * 2
            },
        })
        setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'))
        return () => {
            globe.destroy()
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <div className={`relative flex items-center justify-center w-full h-full max-w-[500px] aspect-square mx-auto ${className}`}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX - pointerInteractionMovement.current
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null
                    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current
                        pointerInteractionMovement.current = delta * 0.01
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current
                        pointerInteractionMovement.current = delta * 0.01
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                    touchAction: 'none',
                }}
            />
        </div>
    )
}
