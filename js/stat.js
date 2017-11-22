'use strict';

var RECT_WIDTH = 40;
var STEP = 50;
var STARTING_X = 160;
var STARTING_Y = 240;
var STARTING_Y_NAMES = 260;
var MAX_HEIGHT = 150;

window.renderStatistics = function (ctx, names, times) {

  function drawStatisticsBoard() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  }

  drawStatisticsBoard();

  var max = Math.max.apply(null, times);
  var scale = MAX_HEIGHT / max;

  for (var i = 0; i < names.length; i++) {
    var rectHeight = scale * -times[i];
    var closingX = STARTING_X + ((RECT_WIDTH + STEP) * i);
    var closingY = STARTING_Y + rectHeight;
    var startingYtimes = closingY - 10;

    ctx.strokeStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + (Math.random() * (1 - 0.2) + 0.2).toFixed(1) + ')';

    ctx.beginPath();
    ctx.moveTo(closingX, STARTING_Y);
    ctx.lineTo(closingX, closingY);
    ctx.lineWidth = RECT_WIDTH;
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), closingX - 20, startingYtimes);
    ctx.fillText(names[i], closingX - 20, STARTING_Y_NAMES);
  }
};
