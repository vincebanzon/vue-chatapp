import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDxgX-tWS_54dk_byA4WRoXj6ziz20Fusk",
  authDomain: "sample-chat2-94afd.firebaseapp.com",
  databaseURL: "https://sample-chat2-94afd.firebaseio.com",
  projectId: "sample-chat2-94afd",
  storageBucket: "sample-chat2-94afd.appspot.com",
  messagingSenderId: "939024724447"
}

const settings = {
  timestampsInSnapshots: true
}

const firebaseConfig = firebase.initializeApp(config)
const firestore = firebaseConfig.firestore()
firestore.settings(settings)

export default firestore