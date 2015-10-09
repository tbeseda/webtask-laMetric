module.exports = function(context, req, res) {
  var t = new Date();
  var theGoods = {
    frames: [
      {
        index: 0,
        text: t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds(),
        icon: 'a77',
      },
    ],
  };
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  res.end(JSON.stringify(theGoods));
};
