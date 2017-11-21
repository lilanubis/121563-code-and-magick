'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = Math.max.apply(null, times);

  for (var i = 0; i < names.length; i++) {

    var rectHeight = (150 * times[i]) / max;
    var rectWidth = 40;
    var step = 50;
    var startingX = 160;
    var startingY = 240;
    var startingYnames = 260;
    var startingYtimes = rectHeight - 10;

    ctx.strokeStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random().toFixed(1) + ')';

    ctx.beginPath();
    ctx.moveTo(startingX + ((rectWidth + step) * i), startingY);
    ctx.lineTo(startingX + ((rectWidth + step) * i), rectHeight);
    ctx.lineWidth = rectWidth;
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), (startingX + ((rectWidth + step) * i)) - 20, startingYtimes);
    ctx.fillText(names[i], (startingX + ((rectWidth + step) * i)) - 20, startingYnames);
  }
};
