import { useState } from 'react';
import './DropdownMenu.scss';

export function DropdownMenu({ categories, dropdownVisible, handleMouseEnterDropdownMenu, handleMouseLeaveDropdownMenu }) {

    const [categoryImage, setCategoryImage] = useState({
        url: categories[0].imageUrl,
        alt: categories[0].imageAlt,
        title: categories[0].imageTitle
    });

    function handleMouseEnterDropdownLink(category) {
        const hoveredCategory = categories.filter((categoryItem) => {
            return categoryItem.id === category.id
        })

        setCategoryImage({
            url: hoveredCategory[0].imageUrl,
            alt: hoveredCategory[0].imageAlt,
            title: hoveredCategory[0].imageTitle
        })
    }

    return (
        <div className={`dropdownWrapper ${dropdownVisible ? 'visible' : ''}`} onMouseEnter={handleMouseEnterDropdownMenu} onMouseLeave={handleMouseLeaveDropdownMenu}>
            <div className='dropdownContainer'>
                <ul>
                    {categories.map((category => {
                        return (
                            <li key={category.id}>
                                <a href="" onMouseEnter={() => handleMouseEnterDropdownLink(category)}>{category.name}</a>
                            </li>
                        )
                    }))}
                </ul>

                <img src={categoryImage.url} alt={categoryImage.alt} title={categoryImage.title} />
                {/* <img src="static/images/categorias/menu-image-1.png" alt="" /> */}
            </div>
        </div>
    )
}