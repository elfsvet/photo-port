import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {

    
    const {
        categories =[],
        setCurrentCategory,
        currentCategory
    } = props;
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    // const categorySelected = (name) => {
    //     console.log(`${name} clicked`);
    // }

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label='camera'> 📷</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* the single element should be return from map. that's why we use () not {} */}
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            {/* if we wont have anonymous function it will call the function on render of the components */}
                            <span onClick={() => setCurrentCategory(category)}>
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