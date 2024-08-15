import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearBookings = async () => {
  try {
    await AsyncStorage.removeItem('bookings');
    console.log('Bookings cleared from storage');
  } catch (error) {
    console.error('Error clearing bookings from storage:', error);
  }
};

export const setLastClearedTime = async () => {
  const currentTime = new Date().toISOString();
  try {
    await AsyncStorage.setItem('lastClearedTime', currentTime);
  } catch (error) {
    console.error('Error setting last cleared time:', error);
  }
};

export const checkAndClearStorage = async () => {
  try {
    const lastClearedTime = await AsyncStorage.getItem('lastClearedTime');
    const currentTime = new Date();
    const threshold = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    if (lastClearedTime) {
      const lastClearedDate = new Date(lastClearedTime);
      if (currentTime.getTime() - lastClearedDate.getTime() > threshold) {
        await clearBookings();
        await setLastClearedTime();
      }
    } else {
      await setLastClearedTime();
    }
  } catch (error) {
    console.error('Error checking and clearing storage:', error);
  }
};
