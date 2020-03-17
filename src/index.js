module.exports = function check(str, bracketsConfig) {
  let config = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    config.push(bracketsConfig[i].join(''))
  }
  for (let j = 0; j < config.length; j++) {
    console.log(j)
    if (str.includes(config[j])) {
      console.log('here')
      str = str.replace(config[j], '')
      j = -1;
    }
  }
  if (str.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
