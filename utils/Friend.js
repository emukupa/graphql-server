export default class Friend {
  // constructor(
  //   id,
  //   { firstname, lastname, gender, age, language, email, hobbies }
  // ) {
  //   this.id = id;
  //   this.firstname = firstname;
  //   this.lastname = lastname;
  //   this.gender = gender;
  //   this.age = age;
  //   this.language = language;
  //   this.email = email;
  //   this.hobbies = hobbies;
  // }

  constructor(id, fields) {
    this.id = id;
    Object.keys(fields).forEach(key => (this[key] = fields[key]));
  }
}
