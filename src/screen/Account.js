import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { userDetail, user } from "../utils/userDb";
import Icono from '../assets/Logo.png';

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>
        <Image source={Icono} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.label}>Mi Cuenta</Text>
          <Text style={styles.label}>Usuario</Text>
          <Text style={styles.text}>{user.username}</Text>

          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.text}>{userDetail.fristName}</Text>

          <Text style={styles.label}>Apellido</Text>
          <Text style={styles.text}>{userDetail.lastName}</Text>

          <Text style={styles.label}>Correo</Text>
          <Text style={styles.text}>{userDetail.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    width:340,
    height:580,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    
    width: 340,
    height: 150,
   
  },
  label: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
