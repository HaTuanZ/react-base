export function login() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve({ message: "Login Success" }), 1000);
  });
}
