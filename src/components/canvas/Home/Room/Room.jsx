import { Suspense, lazy } from 'react';
import WallIntro from './WallIntro';

// Use React.lazy to dynamically import the components
const RoomProjects = lazy(() => import('./RoomProjects'));
const RoomSkills = lazy(() => import('./RoomSkills'));
const RoomIntro = lazy(() => import('./RoomIntro'));

export default function Room() {
    return (
        <>
                   <WallIntro/>
 
            {/* RoomIntro, RoomProjects and RoomSkills are lazy loaded */}
            <Suspense fallback={<> </>}>
                <RoomIntro />
            </Suspense>

            <Suspense fallback={<>...</>}>
                <RoomSkills />
            </Suspense>

            <Suspense fallback={<> </>}>
                <RoomProjects />
            </Suspense>
        </>
    );
}