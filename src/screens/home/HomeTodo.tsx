import { StyleSheet, View, Button, Text, StatusBar, TouchableOpacity } from "react-native";
import BottomSheetComponent, { BottomSheetMethods } from "../../components/BottomSheetComponent"; // Importing BottomSheetMethods
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/globalStyle";
import { useRef } from "react";
import RowComponent from "../../components/RowComponent";
import { Add, Book } from "iconsax-react-native";
import SpaceComponent from "../../components/SpaceComponent";
import { appColor } from "../../constants/appColor";
import TextComponent from "../../components/TextComponent";

const HomeTodo = () => {
    const bottomSheetRef = useRef<BottomSheetMethods>(null); // Ref with the correct type

    const renderContent = () => (
        <View>
            <Text style={{ fontSize: 18 }}>This is the Bottom Sheet content!</Text>
        </View>
    );

    return (
        <GestureHandlerRootView style={globalStyles.flexOne}>
            <View style={{ flex: 1, backgroundColor: '#b9dcfc' }}>

                <View style={{ flex: 1, backgroundColor: '#b9dcfc', margin: 16 }}>
                    <StatusBar barStyle={'light-content'} backgroundColor={'#b9dcfc'} />
                    <RowComponent justify="flex-start">
                        <Book size="28" color={appColor.blue} />
                        <SpaceComponent width={10} />
                        <TextComponent text="To-Do" fontW='bold' size={24} />
                    </RowComponent>
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() =>
                            bottomSheetRef.current?.open()}
                    >
                        <Add size="32" color="#ffffff" />
                    </TouchableOpacity>
                </View>

                <BottomSheetComponent
                    ref={bottomSheetRef}
                    initialIndex={-1}
                >
                    {renderContent()}
                </BottomSheetComponent>

            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: appColor.blue,
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
});

export default HomeTodo;
