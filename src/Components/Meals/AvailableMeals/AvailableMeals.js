import React from "react";
import styles from "./AvailableMeals.module.css"
import Card from "../../UI/Card/Card";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((meal) => {
        return (
            <div className={styles.listItem}>
                <h1>{meal.name}</h1>
                <li>{meal.description}</li>
                <h3>${meal.price}</h3>
                <hr />
            </div>
        )
    })

    return (
        <section className={styles.meals}>
            <Card className={styles.cardItem}>
                <ul>
                    {mealsList}
                </ul>
            </Card>

        </section>
    )
}
export default AvailableMeals;