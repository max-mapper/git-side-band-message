// details: https://www.kernel.org/pub/software/scm/git/docs/technical/protocol-capabilities.txt (side-band)
module.exports = function encode(string, prefix) {
  // \1 is an error message
  // \2 is a verbose message (default)
  // protip: don't write more than 1000 bytes total
  
  var msg = (prefix || "\2") + string + "\r\n";
 
  function dec2hex(i) {
    return (i+0x10000).toString(16).substr(-4).toUpperCase()
  }
  
  return new Buffer(dec2hex(msg.length + 4) + msg)
}