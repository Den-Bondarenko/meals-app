import { Pressable, View, Text, StyleSheet } from "react-native";


export default CategoryGridTile = ({title, color}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={'gray'} style={styles.button} >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>

            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: 'hidden',

        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
    },

    button: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },

});