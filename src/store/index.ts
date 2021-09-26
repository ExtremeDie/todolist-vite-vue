import { createStore } from 'vuex';
import user from '/@/store/modules/user';

export const Store = createStore({
  modules: {
    user,
  },
});
