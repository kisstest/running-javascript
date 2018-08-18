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
    /**
     * 주문 => 생두(창고) => 로스팅(원두) => 메뉴완성
     */

    /**
     * @description start
     */
    getOrder(menu) {
      this.order(menu)
        .then((coffee) => {
          this.result = `${coffee}가 나왔습니다.`;
        })
        .catch((err) => {
          this.result = err.message;
        });
    },

    /**
     * @description 메뉴 주문
     * @param {String} menu
     * @returns {Promise}
     */
    order(menu) {
      return this.roasting('케냐')
        .then((greenbean) => {
          const promise = new Promise((resolve, reject) => {
            if (menu === '아메리카노' && greenbean === '원두') resolve('맛있는 아메리카노');
            else reject(new Error('메뉴가 존재하지 않습니다.'));
          });
          return promise;
        });
    },

    /**
     * @description 원재료 확인
     */
    getBeenStorage(type) {
      return new Promise((resolve, reject) => {
        if (type === '케냐') resolve('생두');
        else reject('알수없는 타입입니다.');
      });
    },
    /**
     * @description 로스팅
     */
    roasting(beenType) {
      return this.getBeenStorage(beenType)
        .then((greenbean) => {
          const promise = new Promise((resolve, reject) => {
            if (greenbean === '생두') resolve('원두');
            else reject(new Error('메뉴가 존재하지 않습니다.'));
          });
          return promise;
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>

</style>
