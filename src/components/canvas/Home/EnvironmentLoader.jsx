// LazyEnvironment.js
import React from 'react';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '../../Loader'; // Assuming Loader is in the same directory

const LazyEnvironment = React.lazy(() => import('@react-three/drei').then(module => ({ default: module.Environment })));

export default function EnvironmentLoader()  {
    return  (
    <Suspense fallback={<></>}>
        <LazyEnvironment
            environmentIntensity={0}
            files={"/Enviroment/10.2.hdr"}
            background
            // environmentRotation={[0, Math.PI / 2, Math.PI / 2]}
            resolution={2056}
        />
    </Suspense>
    )
}