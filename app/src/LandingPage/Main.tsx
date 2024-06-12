import Navbar from './Navbar.tsx'
import FirstSection from './FirstSection.tsx'
import Transformative from './Transformative.tsx';
import Leadership from './Leadership.tsx';
import Impact from './Impact.tsx';
import Testimony from './Testimony.tsx';
import CTA from './CTA.tsx';
import { useEffect, useState } from 'react';
import { Map,GoogleApiWrapper, Marker  } from 'google-maps-react'
import MapComponent from './MapComponent.tsx';

function Main(){

    return (
        <div>
            <Navbar></Navbar>
            
            <main>
            <FirstSection></FirstSection>
            
            <Transformative></Transformative>
            <Leadership></Leadership>
            <Impact></Impact>
            <Testimony></Testimony>
            <CTA></CTA>
            
            </main>
         
        </div>
    )
}

export default GoogleApiWrapper({apiKey:'AIzaSyCWLOWG5I01EmjmhN_rQzpv0nRAuR9Bi9o'})(Main);