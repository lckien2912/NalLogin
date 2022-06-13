const USERS = [
  {
    id: 1,
    email: "admin@admin.com",
    password: "admin",
    role: "Admin",
  },
  {
    id: 2,
    email: "user@user.com",
    password: "useruser",
    role: "User",
  },
  {
    id: 1,
    email: "kien@gmail.com",
    password: "kkkkk",
    role: "User",
  },
];

const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const REGEX_PASSWORD = /^[A-Za-z]+$/;

export { USERS, REGEX_EMAIL, REGEX_PASSWORD };
