import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import React, {useState} from 'react';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

export default function Sale ({navigation}) {
    const [controlledValue, setControlledValue] = useState(false);
    const handleSave = async ()=> {
        await navigation.navigate("Scan")
    }
    return (
        <View>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>
                        Payment
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>
                        Replacement
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: "center" }}>
                <CollapsibleView title="Cash" unmountOnCollapse>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5,height:30}}>
                        <Text>
                            Amount
                        </Text>
                        <Text>
                            Kshs. 90000
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5,height:60,alignItems:"center"}}>
                        <Text>
                            Discount
                        </Text>
                        <TextInput style={styles.inputText} placeholderTextColor="white" placeholder="Discount"/>
                    </View>
                    <View style={{justifyContent:"flex-end",marginBottom:15}}>
                        <TouchableOpacity onPress={handleSave} style={styles.button2}>
                            <Text style={styles.title2}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CollapsibleView>
            </View>
            <View style={{justifyContent: "center" }}>
                <CollapsibleView title="MPEASP" unmountOnCollapse>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5,height:30}}>
                        <Text>
                            Amount
                        </Text>
                        <Text>
                            Kshs. 90000
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5,height:60,alignItems:"center"}}>
                        <Text>
                            Discount
                        </Text>
                        <TextInput style={styles.inputText} placeholderTextColor="white" placeholder="Discount"/>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5,height:60,alignItems:"center"}}>
                        <Text>
                            Confirmation Code
                        </Text>
                        <TextInput style={styles.inputText} placeholderTextColor="white" placeholder="Confirmation Code"/>
                    </View>
                    <View style={{justifyContent:"flex-end",marginBottom:15}}>
                        <TouchableOpacity onPress={handleSave} style={styles.button2}>
                            <Text style={styles.title2}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CollapsibleView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize:16,
        color:"white"
    },
    button: {
        borderRadius:5,
        width:165,
        height:45,
        alignSelf:"center",
        backgroundColor:"#3261d8",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
    },
    descriptionText: { textAlign: "center" },
    inputText: {
        backgroundColor:"#1166be",
        color:"white",
        width:150,
        height:50,
        borderWidth:0.8,
        padding:10,
        borderRadius:5
    },
    title2: {
        fontSize:16
    },
    button2: {
        borderRadius:30,
        width:165,
        height:45,
        alignSelf:"center",
        backgroundColor:"#FFE600",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    }
})
