import { createStore } from 'vuex'

const index = {
  namespaced: true,
  state: {
    notes: [
      {title: 'dolor sit', favorited: true, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis at semper maximus, quam nulla laoreet arcu, eu fermentum sapien lorem'},
      {title: 'viverra a augue', favorited: false, content: 'diam, vulputate id feugiat ut, pulvinar ac urna. Nam blandit, lacus quis porta venenatis, libero sem pellentesque massa, ac molestie turpis ipsum'},
      {title: 'malesuada fames', favorited: false, content: 'diam, vulputate id feugiat ut, pulvinar ac urna. Nam blandit, lacus quis porta venenatis, libero sem pellentesque massa, ac molestie turpis ipsum'},
      {title: 'Maecenas lectus', favorited: true, content: 'diam, vulputate id feugiat ut, pulvinar ac urna. Nam blandit, lacus quis porta venenatis, libero sem pellentesque massa, ac molestie turpis ipsum'},
      {title: 'faucibus volutpat', favorited: false, content: 'Etiam lacus orci, viverra a augue ut, volutpat posuere nisi. Suspendisse dignissim vel quam at finibus. In hac habitasse platea dictumst. Sed '}
    ]
  },
  mutations: {
  },
  actions: {
  }
};

index

export default createStore({
  modules: {
    index
  }
});
