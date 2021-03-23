export const state = () => ({
  products: {}
})
export const actions = {
  async GET_PRODUCTS({commit}) {
    const res = await this.$axios.$get('https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=659')
    commit('GET_PRODUCTS', res)
  }
}
export const mutations = {
  GET_PRODUCTS(state, payload) {
    state.products = payload
  }
}
