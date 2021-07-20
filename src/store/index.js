import { createStore } from 'vuex'
import Session from "@/store/modules/session";
import InstagramProfiles from "@/store/modules/instagram-profiles";

export default createStore({
  modules: {
    Session,
    InstagramProfiles
  }
});
