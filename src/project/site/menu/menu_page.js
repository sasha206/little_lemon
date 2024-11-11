import React, { useState, useEffect } from 'react';
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
    const [dishes, setDishes] = useState([]); // Состояние для хранения данных
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [error, setError] = useState(null); // Состояние для ошибок

    useEffect(() => {
        // Получение данных с API
        fetch('https://8nrpfe8x4e.execute-api.eu-north-1.amazonaws.com/prod') // Замените на ваш реальный URL
            .then(response => response.json())
            .then(data => {
                const dishes = JSON.parse(data.body); // Преобразование строки JSON в массив объектов
                console.log(dishes); // Убедись, что это массив
                setDishes(dishes); // Теперь можно использовать .map() на dishes
                setLoading(false); // Ожидание завершено
            })
            .catch(error => {
                setError(error); // Если ошибка
                setLoading(false); // Ожидание завершено
            });
    }, []); // Пустой массив, чтобы запрос выполнялся только при монтировании компонента

    if (loading) return <p>Loading...</p>; // Показываем загрузку
    if (error) return <p>Error: {error.message}</p>; // Если ошибка

    return (
        <MenuContainer>
            <h1>Our Menu</h1>
            <MenuItems>
                {dishes.map(dish => (
                    <MenuItem key={dish.dish_id}>
                        <MenuItemImage src={dish.image_url || 'https://placehold.it/250x250'} alt={dish.name} />
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
