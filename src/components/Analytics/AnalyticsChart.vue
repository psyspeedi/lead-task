<script>
  import { Line } from 'vue-chartjs'
  import { mapGetters } from 'vuex'

  export default {
    name: 'AnalyticsChart',
    extends: Line,
    computed: {
      ...mapGetters('analytics', ['chartLabels', 'chartData']),
      data() {
        return {
          labels: this.chartLabels,
          datasets: [
            {
              data: this.chartData,
              label: 'Визиты',
              backgroundColor: 'rgb(230, 200, 250)',
              borderColor: 'rgb(149, 0, 252)',
              pointBackgroundColor: 'rgb(149, 0, 252)',
              borderWidth: 1,
              pointBorderWidth: 3,
              minBarLength: 50,
              barThickness: 50
            }
          ]
        }
      },
      options() {
        return {
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Аналитика по визитам'
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 4,
                  stepSize: 7
                }
              }
            ]
          }
        }
      }
    },
    mounted() {
      this.renderChart(this.data, this.options)
    }
  }
</script>
