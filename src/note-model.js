(function(exports) {
  function Note(text) {
  return this.text = text;
  };

  Note.prototype.print = function(){
    return this.text;
  }

  exports.Note = Note;
})(this);
