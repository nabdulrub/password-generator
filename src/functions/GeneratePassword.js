export const generatePassword = (
  Passwordlength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {
  // Defined all letters, numbers & symbols that will be used for passwords.
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = '!@#$%^&*()_+-=[]{}|;:",./<>?';

  // Holds all the characters allowed using the preferences of the parameters.
  let allowedChars = "";

  // If any of the following statements are true, the predefined variables are added to it.
  if (includeUppercase) allowedChars += upperCaseLetters;
  if (includeLowercase) allowedChars += lowerCaseLetters;
  if (includeNumbers) allowedChars += numbers;
  if (includeSymbols) allowedChars += symbols;

  // Catch errors incase the password length is 0.
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    throw new Error("No character types selected for password generation.");
  }

  // Holds the password that will be returned to the user.
  let password = "";

  // Loops and adds a character to the password variable each loop, the loop ends based on the length parameter.
  for (let i = 0; i < Passwordlength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);

    password += allowedChars[randomIndex];
  }

  return password;
};
