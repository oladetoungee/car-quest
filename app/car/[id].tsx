import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { carData } from '@/data/carData';
import { CarData } from '@/lib/definitions';
import { text } from 'stream/consumers';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const car = carData.find((car: CarData) => car.id === id);

  const [modalVisible, setModalVisible] = useState(false);

  if (!car) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Car not found</Text>
      </View>
    );
  }

  const handleBookNow = () => {
    setModalVisible(true);
  };

  const handleConfirmBooking = () => {
    setModalVisible(false);
    // Implement payment processing logic here
    Alert.alert('Booking confirmed', 'Your booking has been confirmed.');
  };

  return (
    <View style={styles.container}>
      <Image source={car.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{car.name}</Text>
      <Text style={styles.info}>{car.additionalInfo}</Text>
      <Text style={styles.details}>
        {car.transmission} - {car.model}
      </Text>
      <Text style={styles.details}>NGN {car.rentalRatePerHour}/hour</Text>

      <TouchableOpacity
        style={styles.bookButton}
        onPress={handleBookNow}
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Booking</Text>
            <Text style={styles.modalText}>Are you sure you want to book this car?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleConfirmBooking}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: 'white',
    marginBottom: 4,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#ff5252',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#ff5252',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
