'use strict';

var WIZARDS_OPTS = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};
var NUMBER_OF_WIZARDS = 4;
var TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var SIMILAR_LIST = document.querySelector('.setup-similar-list');

var showElement = function (nameOfClass) {
  document.querySelector(nameOfClass).classList.remove('hidden');
};

showElement('.setup');

var getRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizardsArray = function (numberOfWizards, wizardsOptions) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] =
      {
        name: getRandomValue(wizardsOptions.names) + ' ' + getRandomValue(wizardsOptions.surnames),
        coatColor: getRandomValue(wizardsOptions.coatColor),
        eyesColor: getRandomValue(wizardsOptions.eyesColor)
      };
  }
  return wizards;
};

var wizards = createWizardsArray(NUMBER_OF_WIZARDS, WIZARDS_OPTS);

var renderWizard = function (wizard) {
  var wizardsTemplate = TEMPLATE.cloneNode(true);

  wizardsTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardsTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardsTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardsTemplate;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

SIMILAR_LIST.appendChild(fragment);
showElement('.setup-similar');
