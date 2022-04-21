import React from 'react';
import { useSelector } from "react-redux";

export default function Banner (props: any) {
    const courses = useSelector((state: Array<any> )=> state.data)
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    { props.appName }
                </h1>
                <p>A place to share your knowledge.</p>
                {courses}
            </div>
        </div>
    )
}