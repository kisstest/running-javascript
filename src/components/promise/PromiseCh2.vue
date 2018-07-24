<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    function throwError(value) {
      // 예외 발생
      throw new Error(value);
    }

    // <1> onRejected가 호출되지 않는다.
    function badMain(onRejected) {
      return Promise.resolve(42).then(throwError, onRejected);
    }

    // <2> onRejected가 예외 발생시 호출된다.
    function goodMain(onRejected) {
      return Promise.resolve(42).then(throwError).catch(onRejected);
    }

    // 실행
    badMain(() => {
      console.log('BAD');
    });

    goodMain(() => {
      console.log('GOOD');
    });

    /**
     * 메뉴에 해당하는 생두를 반환한다.
     * @param {string} menu
     * @param {function} callback
     */
    function getGreenBeans(menu, callback) {
      let err = null;
      let result = '';

      if (menu === '아메리카노') {
        result = '생두';
      } else {
        err = new Error('알 수 없는 메뉴입니다.');
      }

      setTimeout(() => {
        callback(err, result);
      }, 0);
    }

    /**
     * 생두를 로스팅하여 원두를 반환한다.
     * @param {string} greenBeans
     * @param {function} callback
     */
    function doRoasting(greenBeans, callback) {
      let err = null;
      let result = '';

      if (greenBeans === '생두') {
        result = '원두';
      } else {
        err = new Error('생두가 아닙니다.');
      }

      setTimeout(() => {
        callback(err, result);
      }, 0);
    }

    /**
     * 원두를 사용하여 메뉴에 해당하는 커피를 만든다.
     * @param {string} menu
     * @param {string} blackBeans
     * @param {function} callback
     */
    function createCoffee(menu, blackBeans, callback) {
      let err = null;
      let result = '';

      if (menu === '아메리카노' && blackBeans === '원두') {
        result = '맛있는 아메리카노';
      } else {
        err = new Error('알 수 없는 메뉴입니다.');
      }

      setTimeout(() => {
        callback(err, result);
      }, 0);
    }

    /**
     * 커피를 주문한다.
     * @param {string} menu
     * @param {function} callback
     */
    function order(menu, callback) {
      getGreenBeans(menu, (err, greenBeans) => {
        if (err) {
          callback(err);
        } else {
          doRoasting(greenBeans, (err, blackBeans) => {
            if (err) {
              callback(err);
            } else {
              createCoffee(menu, blackBeans, (err, coffee) => {
                callback(err, coffee);
              });
            }
          });
        }
      });
    }

    order('아메리카노', (err, coffee) => {
      if (err) throw err;
      console.log(`${coffee} 를 마신다.`);
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
