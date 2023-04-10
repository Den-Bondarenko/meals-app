import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (item) => {
    return 
}

export default CategoriesScreen = () => {
    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
        />
    );
};