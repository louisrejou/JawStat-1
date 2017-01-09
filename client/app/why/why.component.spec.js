'use strict';

describe('Component: WhyComponent', function() {
  // load the controller's module
  beforeEach(module('jawStat.why'));

  var WhyComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhyComponent = $componentController('why', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
