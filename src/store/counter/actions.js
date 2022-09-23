export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 5000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
  login() {},
};
