import React , { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { blue } from 'ansi-colors';

class Explore extends Component {
    render(){
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <View style={{ flex:1 }}>
                    <View style={{ height: 80, backgroundColor: 'white', borderBottomWidth:1 ,borderBottomColor: '#dddddd', }}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 15,
                            backgroundColor: '#ffffff',
                            marginHorizontal: 10, 
                            shadowOffset: { width:0, height:0 }, 
                            shadowColor: 'black', 
                            shadowOpacity: 0.3,
                            }}>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
        }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

