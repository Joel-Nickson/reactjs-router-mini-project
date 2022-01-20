import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-slate-800 text-white relative pt-1 border-b-2 border-blue-700">

            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col ">
                    <div className=" text-center py-6">
                        <p className="text-sm ont-bold mb-2">
                            © 2022 by Joel Nickson
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
