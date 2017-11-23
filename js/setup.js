'use strict';

document.querySelector('.setup').classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var SIMILAR_LIST = document.querySelector('.setup-similar-list');

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] =
    {
      name: NAMES[i] + ' ' + SURNAMES[i],
      coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
      eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
    };
}

var renderWizards = function (wizard) {

  var wizardsTemplate = TEMPLATE.cloneNode(true);

  wizardsTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardsTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardsTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardsTemplate;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizards(wizards[j]));
}

SIMILAR_LIST.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
