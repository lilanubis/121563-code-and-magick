'use strict';

var FULL_NAMES = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var SIMILAR_LIST = document.querySelector('.setup-similar-list');


document.querySelector('.setup').classList.remove('hidden');

var wizards = [];

var getRandomValue = function (value) {
  return value[Math.floor(Math.random() * value.length)];
};

var createWizardsArray = function (numberOfWizards, names, coats, eyes) {
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] =
      {
        name: getRandomValue(names.names) + ' ' + getRandomValue(names.surnames),
        coatColor: getRandomValue(coats),
        eyesColor: getRandomValue(eyes)
      };
  }
  return wizards;
};

createWizardsArray(4, FULL_NAMES, COAT_COLORS, EYES_COLORS);

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
