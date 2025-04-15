import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import VisitCard from "./VisitCard";
import { locations } from "../../data";

const MostVisited = () => {
    return (
        <section style={{ backgroundColor: "#B0E0E6", paddingTop: 100 }}>
            <h1 className="#2B3770" style={{ marginLeft: 70 }}>Most Visited</h1>
            <br />
            <motion.div className="d-flex flex-wrap justify-content-around row-gap-5">
                {locations.map((location, index) => (
                    <Link to={index==0 ? "japan" : null} style={{ textDecoration: 'none' }}><VisitCard location={location} delay={index} key={index} /></Link>
                ))}
            </motion.div>
        </section>
    );
}

export default MostVisited;