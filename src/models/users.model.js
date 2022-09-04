'use strict';
var dbConn = require('./../../config/db.config');
var queries = require('../allsqlqueries/allsqlqueries');

//User object create

var User = function (user) {
  this.firstname = user.first_name;
  this.lastname = user.last_name;
  this.birthday = user.birthday;
  this.gender = user.Gender;
  this.phone = user.Phone;
  this.email = user.email;
  this.username = user.UserName;
  this.password = user.Enter_Password;
};
User.create = function (newUser, result) {
  dbConn.query(queries.finduserbyphoneno, newUser.phone, function (exssUsererr, esituserres) {
    if (exssUsererr) {
      console.log("error: ", exssUsererr);
      result(exssUsererr, null);
    }else {
      if (esituserres.length == 0) {
        dbConn.query(queries.addnewuser, newUser, function (err, res) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
          }
          else {
            console.log(res.insertId);
            dbConn.query(queries.finduserbyid, res.insertId, function (usererr, userres) {
              if (usererr) {
                console.log("error: ", usererr);
                result(usererr, null);
              } else {
                result(null, userres);
              }
            });
          }
        });
      }else {
        result({ error: true,message: 'User already exists' }, null);
      }
    }
  });
};
User.findById = function (userId, result){
  dbConn.query(queries.finduserbyid, userId ,function (err,res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }else if(res.length == 0){
      result({ error: true,message: 'User does not exist' }, null);
    } else {
      result(null,res)
    }
  })
}
User.update = (userId,userData, result)=>{
  dbConn.query(queries.updateuserbyid, [userData.firstname,userData.lastname,userData.birthday,userData.gender,userData.email,userData.phone,userData.username,userData.password,userId] ,function (err,res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  })
}
module.exports = User;