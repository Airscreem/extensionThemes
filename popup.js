(function() {
  //console.log(Rx);

  var data = {
    listName: document.querySelectorAll('.list-name'),

    tabsOther: document.getElementsByClassName('b-themes-tabs-other')[0],
    tabsGeneral: document.getElementsByClassName('b-themes-tabs-general')[0],
    leftBlock: document.getElementsByClassName('b-themes-left')[0],
    insideBlock: document.getElementsByClassName('b-themes-inside')[0],

    widthTabsGeneral: document.getElementsByClassName('b-themes-tabs-general')[0].offsetWidth,
    widthTabsOther: document.getElementsByClassName('b-themes-tabs-other')[0].offsetWidth,

    arrowRight: document.getElementsByClassName('right-button')[0],
    arrowLeft:document.getElementsByClassName('left-button')[0]
  }

  data.tabsOther.style.left = data.widthTabsGeneral + 'px';

  addEventAndTabs(data.listName, 'click', 'active');

  function addEventAndTabs(s, e, a) {
    for(var i = 0; i < s.length; i++) {
      s[i].addEventListener(e, function(e) {
        var target = e.target,
            active = document.querySelector('.' + a);

        active.classList.remove(a);

        if(target.classList.contains(a)) return false;

        target.classList.add(a);
      }, false);
    }
  }
  
  function resizeBlock() {
    var self = this,
        mainWidth = document.getElementsByClassName('b-themes-catalog')[0].offsetWidth;
        rightWidth = document.getElementsByClassName('b-themes-right')[0].offsetWidth;

    self.leftWidth = mainWidth - rightWidth;
    self.widthTogether = data.widthTabsGeneral + data.widthTabsOther;
    self.eq = self.widthTogether - self.leftWidth - 14;

    (self.eq >= 0) ? self.checkRight = true : self.checkRight = false

    data.insideBlock.style.width = self.leftWidth + 'px';
  }

  function Carousel(opt) {
    var self = this,
        arrowRight = data.arrowRight,
        arrowLeft = data.arrowLeft;

    self.init = init;
    self.visible = visible;
    self.hidden = hidden;
    self.scroll = 100;
    self.count = 0;

    arrowRight.addEventListener('click', clickRight);
    arrowLeft.addEventListener('click', clickLeft);

    function init() {
      carousel.resize();

      if(self.checkRight) {
        visible(arrowRight);
      } else {
        hidden(arrowRight);
        hidden(arrowLeft);
      }
    }

    function clickRight() {
      self.count += self.scroll;
      data.insideBlock.scrollLeft += self.scroll;
      (data.insideBlock.scrollLeft != 0) ? visible(arrowLeft) : hidden(arrowLeft)
      if(self.count > self.eq) {
        hidden(arrowRight);
      }
    }

    function clickLeft() {
      self.count -= self.scroll;
      data.insideBlock.scrollLeft -= self.scroll;
      (data.insideBlock.scrollLeft != 0) ? visible(arrowLeft) : hidden(arrowLeft)
      visible(arrowRight);
    }

    function visible(tag) {
      tag.style.display = 'block';
    }

    function hidden(tag) {
      tag.style.display = 'none';
    }
  }

  Carousel.prototype.resize = function() {
    resizeBlock.apply(this, arguments);
  }

  var carousel = new Carousel();
  carousel.init();
  console.log(carousel);

  window.addEventListener('resize', function() {
    carousel.init();
    carousel.count = 0;
    console.log(this);
  }.bind(carousel));
})();