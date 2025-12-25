'use client'

import { useState } from 'react'

export interface DiagramNode {
    id: string
    label: string
    type: 'client' | 'server' | 'database' | 'cloud' | 'network' | 'storage' | 'custom'
    description?: string
    x: number
    y: number
}

export interface DiagramConnection {
    from: string
    to: string
    label?: string
    bidirectional?: boolean
}

export interface ArchitectureDiagramProps {
    title?: string
    nodes: DiagramNode[]
    connections: DiagramConnection[]
    width?: number
    height?: number
}

const nodeColors = {
    client: 'from-blue-500 to-blue-600',
    server: 'from-green-500 to-green-600',
    database: 'from-purple-500 to-purple-600',
    cloud: 'from-cyan-500 to-cyan-600',
    network: 'from-orange-500 to-orange-600',
    storage: 'from-pink-500 to-pink-600',
    custom: 'from-gray-500 to-gray-600',
}

const nodeIcons = {
    client: '💻',
    server: '🖥️',
    database: '🗄️',
    cloud: '☁️',
    network: '🌐',
    storage: '💾',
    custom: '📦',
}

export default function ArchitectureDiagram({
    title,
    nodes,
    connections,
    width = 800,
    height = 600,
}: ArchitectureDiagramProps) {
    const [selectedNode, setSelectedNode] = useState<string | null>(null)
    const [hoveredNode, setHoveredNode] = useState<string | null>(null)

    const getNodeById = (id: string) => nodes.find((n) => n.id === id)

    return (
        <div className="card-enterprise p-6">
            {title && (
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
            )}

            <div className="relative bg-gray-50 rounded-lg p-8" style={{ minHeight: height }}>
                {/* SVG for connections */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 1 }}
                >
                    {connections.map((conn, idx) => {
                        const fromNode = getNodeById(conn.from)
                        const toNode = getNodeById(conn.to)
                        if (!fromNode || !toNode) return null

                        const x1 = fromNode.x
                        const y1 = fromNode.y
                        const x2 = toNode.x
                        const y2 = toNode.y

                        // Calculate midpoint for label
                        const midX = (x1 + x2) / 2
                        const midY = (y1 + y2) / 2

                        return (
                            <g key={idx}>
                                {/* Connection line */}
                                <line
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="#94a3b8"
                                    strokeWidth="2"
                                    strokeDasharray={conn.bidirectional ? '0' : '5,5'}
                                    markerEnd="url(#arrowhead)"
                                />
                                {conn.bidirectional && (
                                    <line
                                        x1={x1}
                                        y1={y1}
                                        x2={x2}
                                        y2={y2}
                                        stroke="#94a3b8"
                                        strokeWidth="2"
                                        markerStart="url(#arrowhead-reverse)"
                                    />
                                )}
                                {/* Connection label */}
                                {conn.label && (
                                    <text
                                        x={midX}
                                        y={midY - 10}
                                        fill="#475569"
                                        fontSize="12"
                                        textAnchor="middle"
                                        className="font-semibold"
                                    >
                                        {conn.label}
                                    </text>
                                )}
                            </g>
                        )
                    })}
                    {/* Arrow markers */}
                    <defs>
                        <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="10"
                            refX="9"
                            refY="3"
                            orient="auto"
                        >
                            <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                        </marker>
                        <marker
                            id="arrowhead-reverse"
                            markerWidth="10"
                            markerHeight="10"
                            refX="1"
                            refY="3"
                            orient="auto"
                        >
                            <polygon points="10 0, 0 3, 10 6" fill="#94a3b8" />
                        </marker>
                    </defs>
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{
                            left: node.x,
                            top: node.y,
                            zIndex: selectedNode === node.id ? 10 : 2,
                        }}
                        onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        {/* Node */}
                        <div
                            className={`flex flex-col items-center transition-all duration-200 ${hoveredNode === node.id || selectedNode === node.id
                                    ? 'scale-110'
                                    : 'scale-100'
                                }`}
                        >
                            <div
                                className={`w-20 h-20 rounded-xl bg-gradient-to-br ${nodeColors[node.type]
                                    } shadow-lg flex items-center justify-center text-3xl mb-2 ${selectedNode === node.id ? 'ring-4 ring-primary-500' : ''
                                    }`}
                            >
                                {nodeIcons[node.type]}
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                                    {node.label}
                                </div>
                            </div>
                        </div>

                        {/* Tooltip */}
                        {(hoveredNode === node.id || selectedNode === node.id) && node.description && (
                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-20">
                                <p className="text-xs text-gray-600">{node.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {Object.entries(nodeIcons).map(([type, icon]) => (
                    <div key={type} className="flex items-center gap-2">
                        <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${nodeColors[type as keyof typeof nodeColors]
                                } flex items-center justify-center text-sm`}
                        >
                            {icon}
                        </div>
                        <span className="text-sm text-gray-600 capitalize">{type}</span>
                    </div>
                ))}
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center text-sm text-gray-500">
                Click on nodes to view details
            </div>
        </div>
    )
}
