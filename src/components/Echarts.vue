<template>
    <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
</template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'EChartsComponent',
    props: {
      option: {
        type: Object,
        required: true
      }
    },
    mounted() {
      // 初始化 ECharts 实例
      this.chart = echarts.init(this.$refs.chartContainer);
      // 设置图表的配置项和数据
      this.chart.setOption(this.option);
    },
    watch: {
      // 当传入的option发生变化时，重新设置图表
      option(newOption) {
        if (this.chart) {
          this.chart.setOption(newOption);
        }
      }
    },
    beforeDestroy() {
      // 在组件销毁时销毁图表实例
      if (this.chart) {
        this.chart.dispose();
      }
    }
  };
  </script>
  
  <style scoped>
  /* 可添加自定义样式 */
  </style>
  