const SALT_ROUNDS = 10;
const PASSWORD_REGEX = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$";

module.exports = {
    SALT_ROUNDS,
    PASSWORD_REGEX
}