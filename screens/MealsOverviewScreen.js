import { View, StyleSheet, FlatList} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId;

    const dispayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData) => {
        const item = itemData.item;

        const mealProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return (
            <MealItem {...mealProps}/>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dispayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})