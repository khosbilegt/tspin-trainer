import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function Box(props: any) {
    const meshRef = useRef<Mesh>(null)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current && meshRef.current.rotation) {
            meshRef.current.rotation.x += delta
        }
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box;