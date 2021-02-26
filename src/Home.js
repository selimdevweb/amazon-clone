import React from 'react'
import "./Home.css"
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <img 
            className="home__image" src="https://cdn.systweak.com/content/wp/systweakblogsnew/uploads_new/2019/08/Blog-Cover-Best-Sci-fi-Shows-on-Amazon-Prime--1200x750.jpg" alt="amazon banner"/>

            <div className="home__row">
            <Product
            id="123487"
            title="Pack Apple"
            price={1300}
            rating={5}
            image="https://images.idgesg.net/images/article/2018/12/apple-products-2018-100782368-large.jpg"
            />
            <Product
            id="123415"
            title="Ecran Multimdéia"
            price={900.99}
            rating={4}
            image="https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png"
            />
            </div>
            <div className="home__row">
            <Product
            id="123423"
            title="Chaussure"
            price={29.99}
            rating={4}
            image="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
             <Product
            id="123438"
            title="Appareil Photo"
            price={300}
            rating={4}
            image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Product
            id="1234422"
            title="Montre addle"
            price={550}
            rating={3}
            image="https://astorekw.com/web/image/biztech.product.images/468/image?unique=a6cb3a9"
            />
            </div>

            <div className="home__row">
            <Product
            id="123457"
            title="Table Chêne Massif"
            price={450}
            rating={4}
            image="https://www.crozatier.com/czt-content/uploads/2018/09/Extreme-table-SAM-1-1.jpg"
            />
             <Product
            id="1234896"
            title="Lit Velour"
            price={202.99}
            rating={3}
            image="https://cdn.shopify.com/s/files/1/2660/5202/products/xoir1j2ihw9b4bw2apj5_1400x.jpg?v=1598896503"
            />
            <Product
            id="1234775"
            title="TéléCommande Universel"
            price={25.99}
            rating={4}
            image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550085305-31gFK-y42BZL.jpg"
            />
            </div>

            <div className="home__row">
            <Product
            id="12334825"
            title="Iphone"
            price={1400}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-red-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567021767076"
            />
            </div>

            
            
            
        </div>
    )
}
