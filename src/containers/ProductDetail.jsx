import React from 'react';
import Image from 'next/image';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<Image src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
    );
};

export default ProductDetail;