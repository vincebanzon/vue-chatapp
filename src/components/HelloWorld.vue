<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    Hello World!
    <br>
    <form @submit.prevent="sendMessage">
      <input v-model="message" placeholder="New Message">
      <button type="submit">Send</button>
    </form><br>
    <div v-for="message in messages" :key="message.id">
      {{ message.message }}
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      messages: [],
      msgObj: {
        message_id: null,
        message: null
      }
    }
  },
  created () {
    db.collection('messages').orderBy('created_at').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'message_id': doc.data().message_id,
          'message': doc.data().message,
          'created_at': doc.data().created_at
        }
        this.messages.push(data)
      })
    })
  },
  methods: {
    sendMessage () {
      db.collection('messages').add({
        message_id: this.msgObj.message_id,
        message: this.msgObj.message
      }).then(docRef => {
        console.log('message sent: ', docRef.id)
        this.msgObj.message_id = null
        this.msgObj.message = ''
        this.message = ''
      }).catch(error => {
        console.error('Error sending message: ', error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
