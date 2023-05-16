import React from "react";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import {HiPencil} from "react-icons/hi";

import blankphoto from "../../../res/blankphoto.png";
import "../Styles/banner.css";

const Banner = () => {

    const Data = {
        "_id1": {
            "name": "John Doe",
            "exp": 5,
            "bio": "I am interested in Science and Web technology, Basic Lorem ipsum",
            "interests": ["Science", "Maths", "Hindi"],
            "ratings": 4.5,
            "photo": blankphoto
        }
    }

    return (
        <div className="banner">
            <div className="banner-childA">
                <div className="banner-childA-img">
                    <img src={Data._id1.photo} />
                </div>
                <div className="banner-childA-rating">
                    {Data._id1.ratings}<AiOutlineStar size={13} /><br />
                    <span>Ratings</span>
                </div>
            </div>
            <div className="banner-childB">
                <div className="banner-childB-head">
                    {Data._id1.name}, <span>{Data._id1.exp}</span><span> Yrs Exp.</span>
                </div>
                <div className="banner-childB-body">
                    <span>Details</span><br />
                    {Data._id1.bio}
                </div>
                <div className="banner-childB-subjects">
                    {
                        Data._id1.interests.map((data, key) => {
                            return (
                                <div className="banner-subject">
                                    {data}
                                </div>
                            )
                        })
                    }
                    <div className="subject-plus">
                        <AiOutlinePlus />
                    </div>
                </div>
            </div>
            <div className="banner-childC">
                <div className="banner-childC-profile">
                    <div className="banner-award-container">
                        <div className="banner-award">
                            <div>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <AiOutlineStar />
                            </div>
                            <div>
                                <AiOutlineStar />
                            </div>
                        </div>
                        <span>Awards</span>
                    </div>
                    <div className="banner-profile">
                        <button>
                            <HiPencil size={15}/> Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;