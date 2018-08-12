<template>
  <div>
    <home-button></home-button>
    <h1>Promise3</h1>
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
      * 메뉴에 해당하는 생두를 반환한다.
      * @param {string} menu
      * @returns {Promise}
      */
    getBeansStorage(type) {
      return new Promise((resolve, reject) => {
        if (type === '케냐') resolve('생두');
        else reject(new Error('존재하지 않는 메뉴입니다.'));
      });
    },
    /**
      * 생두를 로스팅하여 원두를 반환한다.
      * @param {string} greenBeans
      * @returns {Promise}
      */
    excuteRoaster(beanType) {
      return this.getBeansStorage(beanType)
        .then((greenBeans) => {
          const promise = new Promise((resolve, reject) => {
            if (greenBeans === '생두') resolve('원두');
            else reject(new Error('생두가 아닙니다.'));
          });
          return promise;
        });
    },
    /**
      * 커피를 주문한다.
      * @param {string} menu
      * @returns {Promise}
      */
    orderMenu(menu) {
      return this.excuteRoaster('케냐')
        .then((blackBeans) => {
          const promise = new Promise((resolve, reject) => {
            if (menu === '아메리카노' && blackBeans === '원두') resolve('맛있는 아메리카노');
            else reject(new Error('존재하지 않는 메뉴입니다.'));
          });
          return promise;
        });
    },
    getOrder(menu) {
      this.orderMenu(menu)
        .then((coffee) => {
          this.result = `${coffee}가 나왔습니다.`;
        })
        .catch((err) => {
          this.result = err.message;
        });
    },
  },
  computed: {},
  mounted() {
    console.log('nextTick1');
  },
};
</script>

<style scoped>

</style>
