import data from '../utils/userRegistraton.json'

export function generateUser() {
  const timestamp = Date.now();
 
  return {
    fullName: `testuser_${timestamp}`,
    email: `l_nrpi1+${timestamp}@i.ua`,
  };
}
export function getValidUserFromJson() {
  const timestamp = Date.now();
 
  return {
    fullName: `${data.validUser.fullName}_${timestamp}`,
    email: data.validUser.email.replace('@', `+${timestamp}@`),
    password: data.validUser.password,
  };
}