exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] == item) {
          arr.splice(i, 1);
          i--;
        }
      }
      return arr;
  },

  append : function(arr, item) {

    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count += 1
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var more = [];
    for (var i = 0; i > arr.length; i++) {
      var extra = count(arr, arr[i]);
      if (extra > 1) {
        more.push(arr[i])
      }
    }
    return more;
  },

  square : function(arr) {
    square = [];
    for(var i = 0; i < arr.length; i++) {
      square.push(arr[i] * arr[i]);
    }
    return square;
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }
    return indices;
  }
};
