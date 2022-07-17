import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
const categories = [
    {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
        name: "portraits",
        description: "Portraits of people in my life"
    },
    {
        name: "food",
        description: "Delicious delicacies"
    },
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
];

const categorySelected = (name) => {
    console.log(`${name} clicked`);
}

const Nav = () => {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label='camera'> 📷</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* the single element should be return from map. that's why we use () not {} */}
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}>
                                {/* if we wont have anonymous function it will call the function on render of the components */}
                            <span onClick={() => categorySelected(category.name)}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;