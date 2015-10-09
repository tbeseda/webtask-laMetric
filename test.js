module.exports = function(context, req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(context.data.name || 'Anonymous');
}
