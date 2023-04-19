import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from "moment";

const prefix = 'cache';
const expiry = 5;

const store = async (key,value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item) => {
    const storedTime = moment(item.timestamp);
    const now = moment(Date.now())

    return now.diff(storedTime,'minutes') > expiry;
}

const get = async (key) => {
    try {
        const item = await AsyncStorage.getItem(key)

        if (!item) return null;

        if (isExpired){
            await AsyncStorage.removeItem(prefix+key)
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

export default {
    store,
    get
}