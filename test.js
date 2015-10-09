module.exports = function(context, req, res) {
  var theGoods = {
    "frames": [
      {
        "index": 0,
        "text": "spooky",
        "icon": "a77"
      }
    ]
  }
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  res.end(theGoods);
}
