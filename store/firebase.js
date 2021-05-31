// import firebase from "@/plugins/firebase";

export const state = () => ({
  Logind: false,
  userId: "",
  userUid: ""
});

export const mutations = {
  setUser(state, payload) {
    state.Logind = payload.Logind;
    state.userId = payload.userId;
    state.userUid = payload.userUid;
  }
};

export const getters = {
  getLogind(state) {
    return state.Logind;
  }
};

export const actions = {
  login(context, payload) {
    console.log("login action");
    this.$fire.auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        context.commit("setUser", {
          Logind: true,
          userId: user.email,
          userUid: user.uid
        });
        this.$router.push("/");
      })
      .catch(error => {
        console.log("エラー : " + error.message);
        return;
      });
  },
  logout(context) {
    console.log("logout action");
    this.$fire.auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("logout成功");
        context.commit("setUser", {
          Logind: false,
          userId: "",
          userUid: ""
        });
        this.$router.push("/auth/signin");
      })
      .catch(error => {
        // An error happened.
        console.log("logout失敗");
        console.log(error.code);
        console.log(error.message);
      });
  }
};
