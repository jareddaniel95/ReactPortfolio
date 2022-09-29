import React from "react";

export default function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top container">
            <div className="row">
                <div className="col-6 col-md text-center">
                    <a href='https://github.com/jareddaniel95'>
                        <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="Github profile" className="icon"/>
                    </a>
                </div>
                <div className="col-6 col-md text-center">
                    <a href='https://www.linkedin.com/in/jared-daniel/'>
                        <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} alt="LinkedIn profile" className="icon"/>
                    </a>
                </div>
                <div className="col-6 col-md text-center">
                    <a href='https://stackoverflow.com/users/20116209/jared-daniel'>
                        <img src={process.env.PUBLIC_URL + '/images/stackoverflow.png'} alt="Stack Overflow profile" className="icon"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}