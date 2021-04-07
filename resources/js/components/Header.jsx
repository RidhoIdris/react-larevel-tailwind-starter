import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-gray-50 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-lg" >Logo</Link>
                <ul className="flex items-center justify-center space-x-5">
                    <Link to="/page1" className="hover:underline">Page 1</Link>
                    <Link to="/page2" className="hover:underline">Page 2</Link>
                    <Link to="/page3" className="hover:underline">Page 3</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
