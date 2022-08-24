<script setup>
defineProps({
  text: {
    type: String,
  },
});
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>
