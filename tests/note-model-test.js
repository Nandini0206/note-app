(function(exports) {
  function testReturnsText() {
    var note = new Note("My favourite language is JavaScript");

    if (note.text !== "My favourite language is JavaScript") {
      throw new Error("Text is not correct");
    }
    else {
      console.log("testReturnsText: Clear")
    }
  };

  function testSavesTextToVariable() {
    var note = new Note("It is a test note");

    if (note.text !== "It is a test note") {
      throw new Error("Error: Does not match");
    }
    else {
      console.log("testSavesTextToVariable: Clear")
    }
  };

  testSavesTextToVariable();
  testReturnsText();
})(this);
