const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AS20Cpk9Jjw4CJoa7fq3NHhd6ulTOmsZtuS8VUeqIADa01qP3cQncYpc7xZ-Akkr_0-j0jDxjiAoTcIr",
  client_secret: "EImFZSFbl7aVo9Y_AF6pvtb8iEPlUTbVVEbQ7ct1AH1GvTM-RW2ORsBfiZWhezWLCJTo-oaM-6BAAUXe",
});

module.exports = paypal;
