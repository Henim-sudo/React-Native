import { Client, Account , Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6812356b00222246ac83')
    .setPlatform('dev.henim.movies');

export const account = new Account(client)
export const avatars = new Avatars(client)