import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Lights()
{
    const light = useRef();

    useFrame((state) => {
      light.current.position.z = state.camera.position.z + 1
      light.current.target.position.z = state.camera.position.z - 4;
      light.current.target.updateMatrixWorld();
    })

    return <>
        <directionalLight
            castShadow
            position={ [ 4, 4, 1 ] }
            intensity={ 2 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }
            ref={light}
        />
        <ambientLight intensity={ 1 } />
    </>
}