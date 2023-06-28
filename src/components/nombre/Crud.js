import React, { useState } from 'react';
import { View, TextInput, Button, Text,  Modal, StyleSheet } from 'react-native';

const Crud = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [saludo, setSaludo] = useState(false);


    const saludar = () => {
        if (nombre.trim() === '' || apellido.trim() === '') {
            setSaludo('Error', 'Por favor, ingresa un nombre y apellido válidos');
            return;
          }
        setSaludo(true);
    }

    const cerrarSaludo = () => {
        setSaludo(!saludo)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.name}> 
        <Text>Nombre:</Text>
        <TextInput
          value={nombre}
          onChangeText={text => setNombre(text)}
          placeholder="Ingresa tu nombre"
          style={styles.name}
        />
  
        <Text>Apellido:</Text>
        <TextInput
          value={apellido}
          onChangeText={text => setApellido(text)}
          placeholder="Ingresa tu apellido"
          style={styles.name}
        />
        <Button title="Submit" onPress={saludar} />
        </View>
        <Modal animationType="slide" transparent={true} visible ={saludo} 
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setSaludo(!saludo);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}> 
                        <Text style={styles.modalText}>
                        {`Hola ${nombre} ${apellido}`}
                        </Text>
                        <Button title="Cerrar" onPress={cerrarSaludo} />
                    </View> 
                </View>
            </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8EAED",
        display: "flex",
        alignItems: "center"
      },
    name: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5,
        display: "flex",
        width: "95%"
    }, centeredView: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        marginTop: 22
    },modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "90%",
        height: 100,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }, modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
    }
})

export default Crud;