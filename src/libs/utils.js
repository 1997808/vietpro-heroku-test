const format = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

exports.formatPrice = (numb) => {
  return format.format(numb);
};
