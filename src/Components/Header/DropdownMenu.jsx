// Styles
import './DropdownMenu.scss';
// React
import { useState } from 'react';
// Data
import { productCategories } from '../../utils';

export function DropdownMenu({ isDropdownVisible, handleMouseEnterDropdownMenu, handleMouseLeaveDropdownMenu }) {

    const [categoryImage, setCategoryImage] = useState({
        url: productCategories[0].imageUrl,
        alt: productCategories[0].imageAlt,
        title: productCategories[0].imageTitle
    });

    function handleMouseEnterDropdownLink(category) {
        setCategoryImage({
            url: category.imageUrl,
            alt: category.imageAlt,
            title: category.imageTitle
        })
    }

    return (
        <div className='dropdownWrapper' >
            <div className='auxDiv' onMouseEnter={handleMouseEnterDropdownMenu} onMouseLeave={handleMouseLeaveDropdownMenu}></div>

            <div className={`dropdownContainer ${isDropdownVisible ? 'visible' : ''}`} onMouseEnter={handleMouseEnterDropdownMenu} onMouseLeave={handleMouseLeaveDropdownMenu}>
                <ul>
                    {productCategories.map((category => {
                        return (
                            <li key={category.id}>
                                <a href="" onMouseEnter={() => handleMouseEnterDropdownLink(category)}>{category.name}</a>
                            </li>
                        )
                    }))}
                </ul>

                <img src={categoryImage.url} alt={categoryImage.alt} title={categoryImage.title} />
            </div>

            <div className='auxDiv' onMouseEnter={handleMouseEnterDropdownMenu} onMouseLeave={handleMouseLeaveDropdownMenu}></div>
        </div>
    )
}