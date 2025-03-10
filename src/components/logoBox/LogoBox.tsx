import React from 'react';
import style from './logoBox.module.css';

const LogoBox = () => {
  const data = [
    {
      id: 1,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/happenz.png?v=1698212797&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_01.jpg?v=1698215212&width=375'
    },
    {
      id: 2,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/lastica.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_02.jpg?v=1698215212&width=375'
    },
    {
      id: 3,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Etlix.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_03.jpg?v=1698215211&width=375'
    },
    {
      id: 4,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Orion.png?v=1698213733&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_04.jpg?v=1698215212&width=375'
    },
    {
      id: 5,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/Delta.png?v=1698212782&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_06.jpg?v=1698215211&width=375'
    },
    {
      id: 6,
      imgLogo: 'https://greenshift-road.myshopify.com/cdn/shop/files/wars.png?v=1698212810&width=300',
      imgproduct: 'https://greenshift-road.myshopify.com/cdn/shop/files/IMGs_05.jpg?v=1698215211&width=375'
    }
  ];

  return (
    <div className={style.logoBoxContainer}>
      {data.map((item) => (
        <div key={item.id} className={style.logoBoxItem}>
          <img src={item.imgproduct} alt="Product" className={style.productImage} />
          <img src={item.imgLogo} alt="Logo" className={style.logoImage} />
        </div>
      ))}
    </div>
  );
};

export default LogoBox;
