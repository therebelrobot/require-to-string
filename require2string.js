module.exports = (extension, encoding = 'utf8') => {
  if (extension.constructor === 'Array') {
    for (extIndex in extension) {
      require.extensions[extension[extIndex]] = function (m, filename) {
        m.exports = fs.readFileSync(filename, encoding)
      }
    }
  } else {
    require.extensions[extension] = function (m, filename) {
      m.exports = fs.readFileSync(filename, encoding)
    }
  }
}
