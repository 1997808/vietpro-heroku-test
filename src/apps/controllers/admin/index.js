module.exports.dashboard = function (req, res) {
  res.render("admin/pages/dashboard");
};

module.exports.login = function (req, res) {
  res.render("admin/pages/login", { error: "" });
};
module.exports.postLogin = function (req, res) {
  const email = req.body.mail;
  const pass = req.body.pass;

  if (email === "abc@gmail.com" && pass === "123456") {
    return res.redirect("/admin/dashboard");
  }

  res.render("admin/pages/login", {
    error: "Tài khoản không hợp lệ",
  });
};
