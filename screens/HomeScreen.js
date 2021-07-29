import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Header from "../components/header";
import AddTodo from "../components/addTodo";
import TodoItem from "../components/todoItem";
import Button from "../components/Button";
import {logOut} from "../api/auth-api";

export default function HomeScreen() {
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
            <Button
            mode="outlined"
            onPress={() => logOut()}
            >Log out</Button>
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