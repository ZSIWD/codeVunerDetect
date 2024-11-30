<template>
  <div id="index">
    <div class="span-content">
        <div>
            <span class="color-1">
                <BankTwoTone two-tone-color="#dddbdb"/>
            </span>
            <div class="content">    
                <p style="color: #f46ec1;">100</p>
                <p>漏洞总数</p>
            </div>
        </div>
        <div>
            <span class="color-2">
                <AppstoreTwoTone two-tone-color="#dddbdb"/>
            </span>
            <div class="content">
                <p style="color: #52c41a">300</p>
                <p>漏洞总数</p>
            </div>
        </div>
        <div>
            <span class="color-3">
                <BuildTwoTone two-tone-color="#dddbdb"/>
            </span>
            <div class="content">
                <p style="color: #faad14">5260</p>
                <p>漏洞总数</p>
            </div>
        </div>
        <div>
            <span class="color-4">
                <DatabaseTwoTone two-tone-color="#dddbdb"/>
            </span>
            <div class="content">
                <p style="color: #f5222d">100</p>
                <p>漏洞总数</p>
            </div>
        </div>
    </div>
    <div class="statistic">
        <div class="statistic-left">
            <div id="chart1">
                <EchartsVue :option="chartOption1"></EchartsVue>
            </div>
        </div>
        <div class="statistic-right">
            <div id="chart2">
                <EchartsVue :option="chartOption2"></EchartsVue>
            </div>
        </div>    

    </div>

  </div>
</template>
<script setup>
import { BankTwoTone,BuildTwoTone,DatabaseTwoTone,AppstoreTwoTone } from '@ant-design/icons-vue';
import { onMounted } from 'vue';
import * as echarts from 'echarts';

import EchartsVue from '@/components/Echarts.vue';
const chartOption1 = {
    textStyle: {
    fontFamily: 'KaiTi',  // 设置全局字体
    fontSize: 14,         // 设置全局字体大小
    fontWeight: 'normal', // 设置全局字体粗细
    color: '#333'         // 设置全局字体颜色
  },
        title: {
          text: '本周检测与修复漏洞情况'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['检测', '修复']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,  // 设置折线图的起点从X轴左侧开始
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '检测',
            type: 'line',  // 折线图类型
            stack: '总量',  // 同一堆栈上的系列
            areaStyle: {},  // 区域样式，生成阴影效果
            data: [15, 25, 40, 50, 80, 80, 150]
            
          },
          {
            name: '修复',
            type: 'line',  // 折线图类型
            stack: '总量',  // 同一堆栈上的系列
            areaStyle: {},  // 区域样式，生成阴影效果
            data: [40, 22, 75, 30, 70, 90, 130]
          }
        ]
    };
const chartOption2 = {
    textStyle: {
    fontFamily: 'KaiTi',  // 设置全局字体
    fontSize: 14,         // 设置全局字体大小
    fontWeight: 'normal', // 设置全局字体粗细
    color: '#333'         // 设置全局字体颜色
  },
    title: {
          text: '本周漏洞分布情况',
          subtext: '2024年数据',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['死锁','缓冲区溢出', 'sql注入', '内存泄漏', '指针篡改']
        },
        series: [
          {
            name: '漏洞分布',
            type: 'pie',  // 饼图
            radius: ['40%', '70%'],  // 设置内外半径实现环形图
            avoidLabelOverlap: false,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            data: [
            { value: 300, name: '死锁' },
              { value: 335, name: '缓冲区溢出' },
              { value: 234, name: 'sql注入' },
              { value: 154, name: '内存泄漏' },
              { value: 335, name: '指针篡改' },
             
            ]
          }
        ]
}
</script>

<style lang="less" scoped>
    #index{
        width: 100%;
        .span-content{
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 100px;
                width: 240px;
                background-color: #fff;
                span{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 40%;
                    font-size: 40px;
                }
                .content{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 60%;
                    p:first-child{
                        margin: 0;
                        font-size: 36px;
                    }
                }
                .color-1{
                    background-color: #f46ec1;
                }
                .color-2{
                    background-color: #52c41a;
                }
                .color-3{
                    background-color: #faad14;
                }
                .color-4{
                    background-color: #f5222d;
                }
            }

        }
        .statistic{
            display: flex;
            justify-content: space-between;
            .statistic-left{
                width: 68%;
                height: 450px;
                background-color: #fff;
                #chart1{
                    width: 100%;
                    height: 100%;
                }
            }
            .statistic-right{
                width: 30%;
                height: 450px;
                background-color: #fff;
                #chart2{
                    margin-top: 20px;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
</style>

