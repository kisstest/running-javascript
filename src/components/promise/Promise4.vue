<template>
  <div>
    <home-button></home-button>
    <h1>Promise4</h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="getOrder('아메리카노')">아메리카노</a>
        <a class="dropdown-item" @click="getOrder('쥬스')">쥬스</a>
        <a class="dropdown-item" @click="getOrder('우유')">우유</a>
      </div>
    </div>
    <h2>Order result: {{ result }}</h2>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Promise3',
  data() {
    return {
      result: '주문이 아직 없습니다.',
    };
  },
  components: { HomeButton },
  methods: {
    getOrder(menu) {
      console.log(`menu: ${menu}`);
      this.orderAmericano(menu)
        .then((order) => {
          this.result = order;
        })
        .catch((err) => {
          this.result = err.message;
        });
    },
    /**
     * @description 주문을 받는다
     * @param {String} menu
     * @returns {Promise}
     */
    orderAmericano(menu) {
      const promise = new Promise((resolve, reject) => {
        if (menu === '아메리카노') resolve('생두');
        else reject(new Error('매장에 없는 메뉴입니다.'));
      });
      return promise;
    },
    /**
     * @description 생두를 찾는다
     * @param {String} foodstuffs
     * @returns {Promise}
     */
    getGreenBean(foodstuffs) {
      const promise = this.roasting(foodstuffs)
        .then((resolve, reject) => {
          if (foodstuffs === '생두') resolve('원두');
          else reject(new Error('재료가 떨어졌습니다.'));
        });
      return promise;
    },
    /**
     * @description 로스팅한다
     * @param {String} roast
     * @returns {Promise}
     */
    roasting(roast) {
      const promise = this.getGreenBean(roast)
        .then((resolve, reject) => {
          if (roast === '원두') resolve('맛있는 아메리카노');
          else reject(new Error('로스터기가 고장났습니다.'));
        });
      return promise;
    },
  },
  mounted() {},
};
</script>

<style scoped>

</style>
