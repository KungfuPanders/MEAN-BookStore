var test = function () {
  var name = "test";
  function showName() {
      console.log("This is" + name);
  }
  return {
      showName: showName
  }
};
var myTest = new test();
myTest.showName();