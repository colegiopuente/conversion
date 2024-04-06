<script setup>
import { ref } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
  }
})

const isOpen = ref(props.open)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="item">
    <div class="details">
      <h3 @click="toggleAccordion">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>

        <span>
          <slot name="heading"></slot>
        </span>
      </h3>
      <div>
        <div v-show="isOpen">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-left: -1.25rem;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  cursor: pointer;
}

h3 span {
  font-weight: 500;
}

.h-5 {
  height: 1.25rem;
}

.w-5 {
  width: 1.25rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
