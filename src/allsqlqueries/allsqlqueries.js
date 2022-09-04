exports.finduserbyphoneno = "SELECT * FROM users WHERE phone=?";
exports.addnewuser = "INSERT INTO users set ?";
exports.finduserbyid = "SELECT * FROM users WHERE id=?";
exports.updateuserbyid = `UPDATE users SET firstname=?, lastname=?,birthday=?,gender=?,email=?,phone=?,username=?,password=? WHERE id=?`;