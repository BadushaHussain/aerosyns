'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export function KeralaGlobe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)

    useEffect(() => {
        let phi = 1.3 // Adjusted to focus on India
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
            markerColor: [255 / 255, 0 / 255, 0 / 255], // Red markers for emphasis
            glowColor: [1, 1, 1],
            opacity: 0.7,
            markers: [
                // Palakkad, Kerala (10.7867° N, 76.6548° E)
                { location: [10.7867, 76.6548], size: 0.12 },
                // Calicut, Kerala (11.2588° N, 75.7804° E)
                { location: [11.2588, 75.7804], size: 0.12 },
            ],
            onRender: (state) => {
                if (!pointerInteracting.current) {
                    phi += 0.003
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
        <div className={`relative flex items-center justify-center w-full h-full aspect-square mx-auto ${className}`}>
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
