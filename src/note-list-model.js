(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.addNote = function(text){
    this.list.push(text);
  };

  NoteList.prototype.seeList = function(){
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
