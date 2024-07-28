<template>
  <div ref="chart" style="width: 900px; height: 600px;position:relative;left: 250px;top: 3px"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "Performance",
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.chart.setOption({
      title: {
        text: 'student learn'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
      },
      yAxis: {},
      series: [
        {
          name: 'Score',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>
