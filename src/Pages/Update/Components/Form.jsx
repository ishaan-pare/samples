import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import {IoIosArrowBack} from "react-icons/io";
import "../Styles/form.css";

const Form = () => {
    return (
        <div className="form-container">
            <div className="form">
                <div className="form-childA">
                    <div className="form-childA-head">
                        Edit Your Educational Profile
                    </div>
                    <div className="form-childA-inputs">
                        <div>
                            Highest Qualification
                            <div>
                                <input type="text" name="a-one" placeholder="abc" />
                                <HiOutlinePencilSquare className="pen"/>
                            </div>
                        </div>
                        <div>
                            Name of Institution
                            <div>
                                <input type="text" name="a-two" placeholder="anc" />
                                <HiOutlinePencilSquare className="pen"/>
                            </div>
                        </div>
                        <div>
                            Course
                            <div>
                                <input type="text" name="a-three" placeholder="MCA" />
                                <HiOutlinePencilSquare className="pen"/>
                            </div>
                        </div>
                        <div>
                            Years of Experience
                            <div>
                                <input type="text" name="a-four" placeholder="3" />
                                <HiOutlinePencilSquare className="pen"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-childB">
                    <div className="form-childB-head">
                        Additional Details <br />
                        <span style={{ color: "gray", fontSize: "20px" }}> <span style={{ color: "#6864ff" }}>Note:</span> Any detail that are not verified yet contribute to profile strength</span>
                    </div>
                    <div className="form-childB-inputs">
                        <div>
                            Primary Qualification
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Name of Institution
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Intermediate Course
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Name of Institution
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Course (Intermediate)
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Year of Passing
                            <div>
                                <input type="text" name="a-four" placeholder="123" />
                            </div>
                        </div>



                    </div>
                    <div className="form-childB-drop">
                        <div>
                            Upload Ceritfication
                        </div>
                    </div>
                </div>
                <div className="form-childC">
                    <div className="form-childC-head">
                        Certification / Recognition / Award (if any)
                    </div>
                    <div className="form-childC-inputs">
                        <div>
                            Title
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div><div>
                            Name of Institution / Signatory
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                            Field of Recognition
                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                        <div>
                        Date of Publishing

                            <div>
                                <input type="text" name="a-four" placeholder="abc" />
                            </div>
                        </div>
                    </div>
                    <div className="form-childC-drop">
                        <div>
                            Upload Ceritfication
                        </div>
                    </div>
                </div>
                <div className="form-childD">
                    <button id="back"><IoIosArrowBack size={12}/> Back</button>
                    <button id="update">Update</button>
                </div>
            </div>
        </div>
    );
}

export default Form;