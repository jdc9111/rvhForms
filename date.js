function dateAndTime() {
  var f = this.getField("Date");
  f.value = util.printd("mm/dd/yyyy", new Date());
  var g = this.getField("Time");
  g.value = util.printd("HH:MM", new Date());
}

dateAndTime();
