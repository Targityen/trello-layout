$(function() {
  const update = function() {
    const $timeline = $('div.egt-ui-timeline-wrapper');
    if ($timeline.length == 0) {
      setTimeout(function() {
        update();
      }, 0);
      return;
    }
    const $div = $('<div/>', {
      css: {
        'flex': 'none'
      }
    });
    const $wrapper = $('div.egt-ui-widgets-wrapper');
    $wrapper.css({
      'width': '50%',
      'float': 'left'
    });
    const $canvas = $('div.board-canvas');
    $canvas.css({
      'width': '50%',
      'float': 'right',
      'maxHeight': '90vh',
      'minHeight': '90vh'
    });
    $div.append($wrapper);
    $div.append($canvas);
    $('div.board-main-content').append($div);
  };
  update();
});