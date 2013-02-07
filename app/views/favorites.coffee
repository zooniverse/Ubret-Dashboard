MyDataLists = require 'views/my_data_lists'

class Favorites extends MyDataLists
  className: 'my-data favorites'
  template: require './templates/favorite_list'
  templateItem: require './templates/recent'
  type: 'favorites'

module.exports = Favorites
