<template>
  <div class="kanban-card">
    <router-link class="main-text" :to="`/board/${boardId}/card/${id}`"> 
      {{ card.text }} 
    </router-link>
    <p class="date-text" v-if="card.dueDate"> {{ card.dueDate }} </p>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    card: Object,
    boardId: Number,
    id: Number,
  }
}
</script>

<style>
  .kanban-card {
    background-color: rgba(255,255,255,0.1);
    margin: 0.5rem 0;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
  .scroll-board > :first-child {
    margin-top: 0;
  }
  .scroll-board > :last-child {
    margin-bottom: 0;
  }
  /* Not doing this because css is bad */
  /* .kanban-card:hover {
    background-color: rgba(255,255,255,0.12);
  } */
  .main-text {
    font-size: 1.125em;
    margin-bottom: 0;
    color: #FFFFFF !important;
    text-decoration: none;
  }
  .date-text {
    font-size: 0.875em;
    color: rgba(255,255,255,0.7);
    margin-top: 0.325rem;
    margin-bottom: 0;
  }
</style>