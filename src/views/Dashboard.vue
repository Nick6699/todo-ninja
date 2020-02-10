<template>
  <div class="dashboard">
    <v-card v-for="(item, index) in shuxue" :key="index">
      <v-row class="text-center">
        <v-col xs6 sm4>
          <div>name</div>
          <div>{{item.name}}</div>
        </v-col>
        <v-col xs6 sm4>
          <div>score</div>
          <div>{{item.score}}</div>
        </v-col>
      </v-row>
    </v-card>
    <v-card  pt-4>
      <div>
        <ve-line
          :data="chartData"
        ></ve-line>
        <button @click="chartSettings = {}">trigger change</button>
      </div>
    </v-card>
    <v-card>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: '',
      shuxue: [
        { name: "张三", score: 45 },
        { name: "李四", score: 89 },
        { name: "王五", score: 99 }
      ],
      chartData: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1391, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  },
  
};
</script>

<style>
</style>