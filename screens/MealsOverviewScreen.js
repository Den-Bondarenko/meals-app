import { View, Text, StyleSheet} from "react-native";
import { MEALS } from "../data/dummy-data";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.development";

export default MealsOverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meals overview</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})