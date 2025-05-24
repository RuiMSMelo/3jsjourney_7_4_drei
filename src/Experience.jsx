import {
    Float,
    Text,
    Html,
    PivotControls,
    TransformControls,
    OrbitControls,
} from '@react-three/drei'
import { useRef } from 'react'

export default function Experience() {
    const cubeRef = useRef()
    const sphereRef = useRef()

    return (
        <>
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <PivotControls anchor={[0, 0, 0]} depthTest={false}>
                <mesh ref={sphereRef} position-x={-2}>
                    <sphereGeometry />
                    <meshStandardMaterial color='orange' />
                    <Html
                        position={[1, 1, 0]}
                        wrapperClass='label'
                        distanceFactor={6}
                        center
                        occlude={[sphereRef, cubeRef]}
                    >
                        That's a sphere!
                    </Html>
                </mesh>
            </PivotControls>

            <mesh ref={cubeRef} position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>
            <TransformControls object={cubeRef} />

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>

            <Float speed={2} floatIntensity={2}>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    position={[1.2, 0.5, -3.2]}
                    scale={2}
                    color='crimson'
                >
                    I LOVE R3F
                </Text>
            </Float>
        </>
    )
}
