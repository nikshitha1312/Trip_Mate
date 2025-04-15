import { motion } from "framer-motion";

import { testimonials } from "../../data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <section className="d-flex vh-100 align-items-center justify-content-center" style={{ backgroundColor: "#B0E0E6" }}>
            <div style={{

                width: "85%",
                backgroundColor: "#B0E0E6",
                borderRadius: 10,
                padding: 30,
                borderWidth: 10,
                borderColor: "#FFFFFF"

            }}>

                <p className="" style={{ marginLeft: 30, fontSize: 20 ,color:'#2B3770'}}>WHAT OTHERS SAY</p>
                <h1 className="" style={{ marginLeft: 30 ,color:'#2B3770'}}>Testimonials</h1>

                <br />
                <motion.div className="d-flex align-items-center justify-content-around flex-wrap row-gap-3 " style={{ marginBottom: 10 }}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard testimonial={testimonial} delay={index} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;