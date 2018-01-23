export default (options = {}) => {
  return (module) => {
    // Add services
    module.services({
      hello() {
        return 'hello'
      }
    })
}}

// document.title = message
// document.favicon = icon