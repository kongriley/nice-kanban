<template>
  <div class="kanban-card">
    <p class="main-text"> {{ card.text }} </p>
    <p class="date-text"> {{ card.dueDate }} </p>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    card: Object,
    id: Number,
  }
}
</script>

<style>
  .kanban-card {
    background-color: rgba(255,255,255,0.1);
    margin: 0.5rem 0;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
  }
  .scroll-board > :first-child {
    margin-top: 0;
  }
  .scroll-board > :last-child {
    margin-bottom: 0;
  }
  .kanban-card:hover {
    background-color: rgba(255,255,255,0.2);
  }
  .main-text {
    font-size: 1.125em;
    margin-bottom: 0;
  }
  .date-text {
    font-size: 0.875em;
    color: rgba(255,255,255,0.7);
    margin-top: 0.325rem;
  }
</style>