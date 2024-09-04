import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const actualJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9uIiwiaWF0IjoxNzI1MTUzODE2fQ.JelVwAZovQD2hvwsA0Nvr8urbjbviyp8qXJZvn9dR3U";
//super-secret
const editedJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmlzaCIsImlhdCI6MTcyNTE1MzgxNn0.qxqOV1VN640bKYq4Sk94FD0sFXf8YYiMvzcKQmTExXU";
//super-secret-bish
const messingAroundJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ28gZmFzdGVyIiwibGFzdE5hbWUiOiJjb25zaXN0ZW5jeSIsImFnZSI6MzcsImlhdCI6MTcyNTQ1NDU1N30.afb1YdpQ4_vzrGRO_uhuqMa0DLp-VqeYx2IPID_bRyM";

// const data = {
//   name: "Jon",
// };
const data = {
  name: "sucka",
  lastName: "phish",
  age: 37,
};

const myDataCheck = jwt.verify(messingAroundJWT, "super-secret-info");

const myJwt = jwt.sign(data, "super-secret-info");

console.log(myJwt);
console.log(myDataCheck);
// ******************
// const johnsHashedPassword =
//   "$2b$11$dlVldyLRIF8F5Uk0pt1gRek1SbVxee6Z.tOFFFzhWxARfKZKzXAqW";
// const petersHashedPassword =
//   "$2b$11$XBSfSfsxHyV9zfLMNm1uS.QaIHzNhi1CycO1PtBJ/IB7Ra2x6GVVu";

// const plainTextPassword = "peters_password";

// console.log("Plain Text Password:", plainTextPassword);
// console.log("Peter's Hashed Password:", petersHashedPassword);

// bcrypt
//   .compare(plainTextPassword, petersHashedPassword)
//   .then((result) => {
//     console.log({ result: result });
//   });
// ****************
