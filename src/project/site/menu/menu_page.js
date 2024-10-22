import React from 'react';
import styled from 'styled-components';

// Styled Components
const MenuContainer = styled.div`
    text-align: center;
`;

const MenuItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const MenuItem = styled.div`
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

const MenuItemImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const MenuItemDetails = styled.div`
    padding: 10px 0;
`;

const DishName = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

const DishDescription = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`;

const Price = styled.p`
    font-weight: bold;
    color: #e74c3c;
    font-size: 16px;
`;

// Компонент меню
const Menu = () => {
    // Статический список блюд
    const dishes = [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            description: "Classic Italian pasta with a creamy egg sauce, pancetta, and parmesan.",
            price: "$12.99",
            image: "https://your-bucket-name.s3.amazonaws.com/carbonara.jpg"
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Traditional pizza topped with fresh mozzarella, basil, and tomatoes.",
            price: "$9.99",
            image: "https://your-bucket-name.s3.amazonaws.com/margherita.jpg"
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, Caesar dressing, croutons, and parmesan cheese.",
            price: "$7.99",
            image: "https://your-bucket-name.s3.amazonaws.com/caesar_salad.jpg"
        }
    ];

    return (
        <MenuContainer>
            <h1>Our Menu</h1>
            <MenuItems>
                {dishes.map(dish => (
                    <MenuItem key={dish.id}>
                        <MenuItemImage src={dish.image} alt={dish.name} />
                        <MenuItemDetails>
                            <DishName>{dish.name}</DishName>
                            <DishDescription>{dish.description}</DishDescription>
                            <Price>{dish.price}</Price>
                        </MenuItemDetails>
                    </MenuItem>
                ))}
            </MenuItems>
        </MenuContainer>
    );
};

export default Menu;
