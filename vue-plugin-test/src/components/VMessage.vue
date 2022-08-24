<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
  },
});
</script>

<template>
  <div class="greetings-msg">
    <h1 style="font-weight: bold; font-size: 30px">{{ heading }}</h1>
    <h1 class="green">Changed, {{ msg }}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ex
      adipisci, vitae tempora dolorem consequatur molestias. Animi eius cum odit
      debitis, nisi eligendi, nemo saepe magni nam blanditiis atque doloe.
    </p>
    <p>Shout out: Venkatesh Bishu</p>
    <div>
      <p>Hello world, <i> Testing App</i></p>
    </div>
  </div>
</template>
