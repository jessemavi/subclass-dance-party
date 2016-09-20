var jumpyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="jumper"></span>');

};

jumpyDancer.prototype = Object.create(Dancer.prototype);
jumpyDancer.prototype.oldStep = Dancer.prototype.step;
jumpyDancer.prototype.constructor = jumpyDancer;
jumpyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var top;
    var left;
    top = (this.top + (Math.random() * 100));
    left = (this.left + (Math.random() * 100));
    this.setPosition(top, left);
    top = (this.top - (Math.random() * 100));
    left = (this.left - (Math.random() * 100));
    this.setPosition(top, left);
    console.log(this.$node)
  };
  