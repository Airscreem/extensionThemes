(function() {
  var data = {
    listName: document.querySelectorAll('.list-name'),
    tabsGeneralWidth: document.getElementsByClassName('b-themes-tabs-general')[0].offsetWidth,
    tabsOther: document.getElementsByClassName('b-themes-tabs-other')[0],

    widthGeneral: document.getElementsByClassName('b-themes-tabs-general')[0].offsetWidth,
    widthOther: document.getElementsByClassName('b-themes-tabs-other')[0].offsetWidth,
    arrowRight: document.getElementsByClassName('right-button')[0],
    arrowLeft:document.getElementsByClassName('left-button')[0]
  }

  data.tabsOther.style.left = data.tabsGeneralWidth + 'px';

  resizeBlock();

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
        leftBlock = document.getElementsByClassName('b-themes-left')[0];
        mainWidth = document.getElementsByClassName('b-themes-catalog')[0].offsetWidth;
        rightWidth = document.getElementsByClassName('b-themes-right')[0].offsetWidth;

    self.leftWidth = mainWidth - rightWidth;
    leftBlock.style.width = self.leftWidth + 'px';
  }

  function Carousel() {
    var self = this,
        arrowRight = data.arrowRight,
        arrowLeft = data.arrowLeft;

    self.widthTogether = data.widthGeneral + data.widthOther;

    self.visible = visible;
    self.hidden = hidden;

    resizeBlock.apply(self, arguments);

    (self.widthTogether > self.leftWidth) ? self.checkRight = true : self.checkRight = false

    self.checkRight ? visible(arrowRight) : hidden(arrowRight)

    function visible(tag) {
      tag.style.display = 'block';
    }

    function hidden(tag) {
      tag.style.display = 'none';
    }
  }

  var carousel = new Carousel();
  console.log(carousel);

  window.addEventListener('resize', function() {
    resizeBlock();
  });
})();