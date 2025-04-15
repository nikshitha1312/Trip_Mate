import { useState, useEffect } from 'react';
import EarthCanvas from './Earth';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 920px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const styles = {
        para: {
            width: 350,
            margin: 0,
            padding: "10px",
            fontFamily: "Arial",
            color: "#B0E0E6"
        }
    }

    return (
        <section className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#B0E0E6" }}>
            <p style={{ marginLeft: isMobile ? "5%" : "15%" }}>
                <h1 style={{ color: "#2B3770 ", fontSize: 70, marginTop: -20, width: 400 }}>Welcome to </h1>
                <h1 style={{ color: "#2B3770 ", fontSize: 70, marginTop: -20 }}>TripMate</h1>
                <p style={styles.para}></p>
            </p>
            <EarthCanvas />
        </section>
    );
}

export default Hero;