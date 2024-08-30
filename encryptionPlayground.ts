import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const data = {
  name: "Jon",
};

const myJwt = jwt.sign(data, "super-secret-info");

console.log(myJwt);
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
