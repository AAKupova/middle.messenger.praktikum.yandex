export const userData = {
  id: 0,
  name: '',
  surname: '',
  login: '',
  avatar: '',
  email: '',
  phone: ''
};

export const getUserData = (data: any) => {
  userData.id = data.id;
  userData.name = data.first_name;
  userData.surname = data.second_name;
  userData.login = data.login;
  userData.avatar = data.avatar;
  userData.email = data.email;
  userData.phone = data.phone;

}
