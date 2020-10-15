<template>
  <div>
    <h1 class="md-display-2">Аналитика</h1>
    <div class="chart">
      <AnalyticsChart />
    </div>
  </div>
</template>

<script>
  import AnalyticsChart from '@/components/Analytics/AnalyticsChart.vue'

  export default {
    name: 'Analytics',
    components: { AnalyticsChart }
  }
</script>

<style scoped>
  .chart {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 30px;
  }
</style>
