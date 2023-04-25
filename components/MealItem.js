import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";


export default MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {   

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={'gray'} 
                style={({ pressed }) => [pressed ? styles.buttonPressed : null,]} 
            >
                <View>
                    <Image 
                        source={{uri: imageUrl}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 10,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white',
        overflow: Platform.OS =='android' ? 'hidden' : 'visible',

        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.5,
    },
});