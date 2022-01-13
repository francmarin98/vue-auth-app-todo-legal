import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const authVuexModule = {
  namespace: true,
  actions,
  getters,
  mutations,
  state,
};

export default authVuexModule;
