<template>
  <div class="profile">
    <h1>{{ name }}</h1>
    <img :src="avatar" :alt="name">
    <p>Age: {{ age }}</p>
    <p>Email: {{ email }}</p>
    <p>Location: {{ location }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      age: 25,
      email: 'john.doe@example.com',
      location: 'New York, NY'
    }
  }
}
</script>

<style>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile h1 {
  margin-top: 0;
}
.profile img {
  border-radius: 50%;
  margin: 20px;
}
</style>
