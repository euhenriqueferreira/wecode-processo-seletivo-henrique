import './CategoriesList.scss'

export function CategoriesList({ categories }) {
    return (
        <div className='categoriesListWrapper'>
            <h2>Categorias</h2>

            <div className='categoriesList'>
                {categories.map((category) => {
                    return (
                        <a href=''>
                            <div className='imageWrapper'>
                                <img src={category.imageUrl} alt={category.imageAlt} title={category.imageTitle} />
                            </div>
                            <p>{category.name}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}