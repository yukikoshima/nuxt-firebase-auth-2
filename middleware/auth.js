// export default function({ app, route, store, redirect }) {
//   // console.log(store.getters["firebase/getLogind"]);
//   console.log(app.$fire.auth);
//   // app.$fire.auth.onAuthStateChanged(user => {
//   if (app.$fire.auth.currentUser) {
//     // console.log("ログイン済み");
//     if (route.path === "/auth/signin") {
//       redirect("/");
//     }
//   } else {
//     if (route.path !== "/auth/signin") {
//       redirect("/auth/signin");
//     }
//   }
//   // });
// }
export default function({ app, route, redirect }) {
  if (route.path !== "/auth/signin") {
    //we are on a protected route
    if (!app.$fire.auth.currentUser) {
      //take them to sign in page
      return redirect("/auth/signin");
    }
  } else if (route.path === "/auth/signin") {
    if (!app.$fire.auth.currentUser) {
      //leave them on the sign in page
    } else {
      return redirect("/");
    }
  }
}
