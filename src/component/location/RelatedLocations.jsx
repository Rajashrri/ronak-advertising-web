import React from 'react'
import Heading from '../reuse/Heading'
import img1 from "../../assets/imgs/location/locationlist.png";
import LocationCard from '../reuse/cards/LocationCard';


const locations = [
    {
        id: 1,
        category: "Hoarding",
        title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
        media: "Palm Media",
        siteCode: "VNM001",
        image: img1,
    },
    {
        id: 2,
        category: "Bill Board",
        title: "VASHI TOLL NAKA FCG VASHI (MIDDLE)",
        media: "Palm Media",
        siteCode: "VNM002",
        image: img1,
    }
];


const RelatedLocations = () => {
    return (
        <div className='p-70'>
            <div className="custom-container">
                <Heading
                    title="Related Locations"
                    // subtitle="Socials"
                    titleclass="text-black"
                />
                <div className="row">
                    {
                        locations.map((item) => (
                            <div className="col-lg-6" data-gsap key={item.id}>
                                <LocationCard item={item} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedLocations