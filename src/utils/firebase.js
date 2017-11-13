import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBxmWLWoZQkq7hqXvOkrSc3BtGAp5ve55I',
  authDomain: 'good-egg-guide.firebaseapp.com',
  databaseURL: 'https://good-egg-guide.firebaseio.com',
  projectId: 'good-egg-guide',
  storageBucket: '',
  messagingSenderId: '397015102638'
}

firebase.initializeApp(config)

export const database = firebase.database()