import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Header from "./header";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";

export default function Todo() {
    const [todos, setTodos] = useState([
        {text: "buy coffee", key: '1'},
        {text: "create an app", key: '2'},
        {text: "play on the switch", key: '3'}
    ])
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key)
        })
    }

    const submitHandler = (text, setText) => {
        setTodos((prevTodos) => {
            return [
                {text: text, key: Math.random().toString()},
                ...prevTodos
            ];
        })
        setText('')
    }
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
});