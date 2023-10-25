function randomName() {
  // prettier-ignore
  var ADJECTIVES = [
        'disgruntled', 'athletic', 'magnificent', 'geriatric', 'moldy', 'piping', 'roiling', 'bulky', 'moist', 'attractive',
        'stunning', 'dank', 'watery', 'glorious', 'sunken', 'perky', 'sultry', 'smarmy', 'kitschy', 'constant',
        'crunchy', 'hot', 'saucy', 'rousing', 'sleepy', 'smoking', 'offensive', 'spooky', 'medical', 'unctuous',
        'healthy', 'unhealthy', 'alluring', 'gorgeous', 'cute', 'petite', 'crude', 'rude', 'appealing', 'lyrical',
        'janky', 'dysfunctional', 'softcore', 'traditional', 'contrived', 'kinky', 'well', 'proportioned', 'native',
        'foreign', 'grand', 'sugary', 'subtle', 'groovy', 'curved', 'silly', 'well', 'endowed', 'plain',
        'faulty', 'fake', 'linear', 'boring', 'callipygian', 'crawling', 'lying', 'imperialistic', 'wired',
        'rugged', 'chunky', 'ravenous', 'sex-crazed', 'anatomically', 'correct', 'smooth', 'wild', 'salty',
        'clean', 'handsome', 'muscly', 'unsavory', 'theatrical', 'buxom', 'pretty', 'beautiful', 'haunting',
        'memorable', 'classy', 'orange', 'purple', 'sweet', 'velveteen', 'blue', 'vile', 'green', 'ornery',
        'mild', 'rocking', 'bashful', 'hardcore', 'necessary', 'horny', 'skanky', 'languid', 'sanguine',
        'lanky', 'proud', 'scandalous', 'sour', 'cranky', 'soul-crushing', 'rolling', 'inebriating',
        'pandering', 'raunchy', 'reckless', 'feckless', 'enticing', 'blasphemous', 'jaunty', 'jovial',
        'jocund', 'arrogant', 'mislabeled', 'funky', 'crabby', 'malevolent', 'fraudulent', 'sexy',
        'ironic', 'trite', 'empty', 'odoriferous', 'snooty', 'spectacular', 'sportsmanlike',
        'fascinating', 'ultimate', 'penultimate', 'punctual', 'humble', 'young', 'nubile',
        'fresh', 'ripe', 'raucous', 'hairy', 'fuzzy', 'fluffy', 'fun', 'funny', 'dull',
        'small', 'large', 'huge', 'tiny', 'infinite', 'nonexistent', 'well', 'placed',
        'successful', 'unsuccessful', 'pathetic', 'unarmed', 'dirty', 'ever changing', 'cromulent',
        'spurious', 'libelous',
    ];
  // prettier-ignore
  var ADVERBS = [
        'functionally', 'strangely', 'wisely', 'sagaciously', 'softly', 'overpoweringly', 'coyly', 'subtly', 'stiflingly',
        'frantically', 'thoroughly', 'wishfully', 'formidably', 'thoughtfully', 'pedantically', 'momentarily', 'mildly',
        'frustratingly', 'angrily', 'habitually', 'seductively', 'devilishly', 'potentially', 'platonically', 'monotonously',
        'meanderingly', 'pointedly', 'decidedly', 'fortunately', 'disapprovingly', 'shockingly', 'wishfully', 'wantonly',
        'wanly', 'victoriously', 'honestly', 'totally', 'truly', 'fascinatingly', 'musically', 'reassuringly',
        'joyfully', 'hopefully', 'happily', 'ethereally', 'ephemerally', 'fleetingly', 'horribly', 'gracefully',
        'clumsily',
    ];
  // prettier-ignore
  var NOUNS = [
        'patron', 'benefactor', 'nemesis', 'ally', 'pedophilia', 'trap', 'cup', 'warmth', 'winter', 'spring',
        'fall', 'summer', 'regret', 'rag-doll', 'punk', 'goth', 'visigoth', 'marauder', 'vision', 'lobster',
        'sunrise', 'american', 'local', 'horror', 'husband', 'wife', 'sweet-wine', 'cocktail', 'humps',
        'terrorist', 'anarchist', 'lad', 'wench', 'cherry', 'jezebel', 'thought', 'wish', 'wonder',
        'actor', 'engineer', 'dope', 'partner', 'politician', 'seductress', 'demon', 'incubus', 'succubus',
        'devil', 'scowl', 'smile', 'rebel', 'king', 'queen', 'cephalopod', 'snail', 'monster',
        'bed', 'sheets', 'master', 'mistress', 'suitor', 'odyssey', 'adonis', 'sculpture', 'wanker',
        'nipples', 'member', 'phallus', 'tits', 'titties', 'butt', 'ass', 'arse', 'goblet',
        'tankard', 'vessel', 'lute', 'affair', 'hookup', 'telephone', 'taunt', 'orgasm', 'ejaculation',
        'semen', 'pinstripes', 'candy', 'victory', 'loser', 'nerd', 'geek', 'illusion',
        'dork', 'funk', 'shaft', 'shorts', 'music', 'battle', 'plan', 'foreplay', 'tease',
        'toy', 'tongue', 'lips', 'mouth', 'accessory', 'gadget', 'bonus', 'joystick', 'job',
        'rod', 'pumpkin', 'flower', 'plot', 'limit', 'theorem', 'postulation', 'posture',
        'position', 'angle', 'arrangement', 'book', 'location', 'drunk', 'rapture', 'proverb',
        'song', 'songbird', 'porpoise', 'raven', 'sex', 'appeal', 'obsession', 'stalker',
        'pork', 'argument', 'bumpkin', 'yodel', 'model', 'actress', 'swagger', 'strut',
        'strategy', 'arousal', 'muscles', 'flex', 'man', 'sex', 'sanctum', 'sanctuary',
        'priest', 'pope', 'hat', 'lingerie', 'codpiece', 'cock', 'crunch', 'sample',
        'letter', 'word', 'hunk', 'specimen', 'abs', 'noodles', 'cavern', 'crotch',
        'thighs', 'chest', 'business', 'nap', 'body', 'porn', 'elderly', 'muck',
        'swashbuckler', 'renegade', 'rogue', 'rapscallion', 'wanderer', 'milkshake',
        'nectar', 'honey', 'sap', 'brew', 'potion', 'octothorpe', 'velociraptor',
        'interrobang', 'Analog Hole',
    ];
  // prettier-ignore
  var FORMULAE_BY_WEIGHT = [
        [1, function () { return 'The ' + thing(); }],
        [1, function () { return 'The ' + adjective(); }],
        [3, function () { return thing() + ' and ' + thing(); }],
        [2, function () { return adjective() + ' and ' + adjective(); }],
        [1, function () { return 'The ' + adjective() + ' and ' + thing(); }],
        [1, function () { return 'The ' + thing() + ' and the ' + thing(); }],
    ];
  function calc_weights(formulae) {
    var total_weight = 0;
    for (var i = 0; i < formulae.length; i++) {
      total_weight += formulae[i][0];
    }
    var stop_points = [];
    var cumulative_total = 0;
    for (var i = 0; i < formulae.length; i++) {
      var increment = formulae[i][0] / total_weight;
      cumulative_total += increment;
      stop_points.push([cumulative_total, formulae[i][1]]);
    }
    return stop_points;
  }
  function invoke(weights) {
    var r = Math.random();
    for (var i = 0; i < weights.length; i++) {
      if (r < weights[i][0]) {
        return weights[i][1]();
      }
    }
    return '';
  }
  function oneof(l) {
    var r = l[Math.floor(Math.random() * l.length)];
    return r[0].toUpperCase() + r.substr(1);
  }
  function thing() {
    var r = oneof(NOUNS);
    if (Math.random() < 0.5) r = adjective() + ' ' + r;
    if (r.indexOf('#') == -1 && Math.random() < 0.1) {
      return '#' + r.replace(/ /g, '');
    }
    return r;
  }
  function adjective() {
    var adverb = '';
    if (Math.random() < 0.5) adverb = oneof(ADVERBS) + ' ';
    return adverb + oneof(ADJECTIVES);
  }
  var weights = calc_weights(FORMULAE_BY_WEIGHT);
  return invoke(weights);
}
var RandomDrinkService = /** @class */ (function () {
  function RandomDrinkService() {
    this.ALCOHOL = 0;
    this.SWEET = 1;
    this.SOUR = 2;
    this.BITTER = 3;
    this.FIZZY = 4;
    this.INGREDIENTS = [
      { name: 'agave syrup', weights: [0, 1, 0, 0, 0] },
      { name: 'amaretto', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'angostura bitters', weights: [0, 0, 0, 0.5, 0] },
      { name: 'bourbon', weights: [1, 0, 0, 0, 0] },
      { name: 'campari', weights: [0.5, 0.5, 0, 1, 0] },
      { name: 'chocolate bitters', weights: [0, 0, 0, 0.5, 0] },
      { name: 'cola', weights: [0, 0.5, 0.3, 0, 1] },
      { name: 'dry vermouth', weights: [0.5, 0.5, 0, 0.5, 0] },
      { name: 'frangelico', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'galliano', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'gin', weights: [1, 0, 0, 0, 0] },
      { name: 'grenadine', weights: [0, 1, 0, 0, 0] },
      { name: 'honey syrup', weights: [0, 1, 0, 0, 0] },
      { name: 'kahlua', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'lemon juice', weights: [0, 0, 1, 0, 0] },
      { name: 'lime juice', weights: [0, 0, 1, 0, 0] },
      { name: 'maple syrup', weights: [0, 1, 0, 0, 0] },
      { name: 'mescal', weights: [1, 0, 0, 0, 0] },
      { name: 'orange bitters', weights: [0, 0, 0, 0.5, 0] },
      { name: 'orange juice', weights: [0, 0.8, 0.25, 0, 0] },
      { name: 'peach schnapps', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'peychauds bitters', weights: [0, 0, 0, 0.5, 0] },
      { name: 'pimms', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'rose', weights: [0, 0, 0, 0.5, 0] },
      { name: 'rum', weights: [1, 0, 0, 0, 0] },
      { name: 'rye', weights: [1, 0, 0, 0, 0] },
      { name: 'scotch', weights: [1, 0, 0, 0, 0] },
      { name: 'simple syrup', weights: [0, 1, 0, 0, 0] },
      { name: 'soda', weights: [0, 0, 0, 0, 1] },
      { name: 'stoli', weights: [1, 0, 0, 0, 0] },
      { name: 'sweet vermouth', weights: [0.5, 0.5, 0, 0.5, 0] },
      { name: 'tequila', weights: [1, 0, 0, 0, 0] },
      { name: 'tonic', weights: [0, 0.2, 0, 0.3, 1] },
      { name: 'triple sec', weights: [0.5, 0.5, 0, 0, 0] },
      { name: 'vodka', weights: [1, 0, 0, 0, 0] },
    ];
    // Array of divisor and probability. If we fall off the end, assume 1.0.
    this.PROPORTION_PROBABILITIES = [
      [2, 0.2],
      [3, 0.05],
      [4, 0.05],
    ];
    this.MIN_PROPORTION = 0.25;
  }
  RandomDrinkService.prototype.shuffle = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      var r = Math.floor(Math.random() * (arr.length - i));
      var t = arr[i];
      arr[i] = arr[r];
      arr[r] = t;
    }
  };
  RandomDrinkService.prototype.is_all_zeros = function (vec) {
    for (var i = 0; i < vec.length; i++) {
      if (vec[i] !== 0) {
        return false;
      }
    }
    return true;
  };
  RandomDrinkService.prototype.sum = function (vec) {
    var s = 0;
    for (var i = 0; i < vec.length; i++) {
      s += vec[i];
    }
    return s;
  };
  RandomDrinkService.prototype.chooseProportion = function (amount) {
    if (amount < this.MIN_PROPORTION) return amount; // Never increase value.
    var r = Math.random();
    for (var i = 0; i < this.PROPORTION_PROBABILITIES.length; i++) {
      var p = this.PROPORTION_PROBABILITIES[i];
      if (r < p[1]) {
        var reduced = amount / p[0];
        return reduced < this.MIN_PROPORTION ? this.MIN_PROPORTION : reduced;
      }
      r -= p[1];
    }
    return amount;
  };
  RandomDrinkService.prototype.chooseRandomIngredients = function (
    ingredients,
    weights,
  ) {
    if (weights.length !== 5) {
      console.log('Bad weights provided: ', weights);
    }
    if (this.is_all_zeros(weights)) {
      return [];
    } /* Finished */
    for (var i = 0; i < ingredients.length; i++) {
      var name = ingredients[i].name;
      var ingredient_weights = ingredients[i].weights;
      /* Figure out the maximum amount we can add without going over any weight */
      var amount = 1000;
      for (var j = 0; j < weights.length; j++) {
        if (ingredient_weights[j] == 0) continue;
        var amount_j = weights[j] / ingredient_weights[j];
        if (amount_j < amount) {
          amount = amount_j;
        }
      }
      if (amount == 0) continue;
      var original_amount = amount;
      var is_bitter =
        ingredient_weights[this.BITTER] == this.sum(ingredient_weights);
      amount = this.chooseProportion(amount);
      if (is_bitter) {
        amount = Math.ceil(amount);
      }
      do {
        /* Calculate the new weights = weights - amount * ingredient_weights */
        var new_weights = new Array(weights.length);
        for (var j = 0; j < weights.length; j++) {
          new_weights[j] = weights[j] - amount * ingredient_weights[j];
          if (new_weights[j] < 0) new_weights[j] = 0;
        }
        /* Recursively find ingredients to fill the remaining weights */
        var remaining_ingredients = this.chooseRandomIngredients(
          ingredients.slice(i + 1),
          new_weights,
        );
        if (remaining_ingredients !== null || amount == original_amount) break;
        amount = original_amount; // Try again with the full proportion.
      } while (true);
      if (remaining_ingredients == null) {
        continue; // This ingredient won't work.
      }
      // We found a recipe!
      var ingredient = { name: name };
      if (is_bitter) {
        ingredient.drops = amount;
      } else {
        ingredient.parts = amount;
      }
      return [ingredient].concat(remaining_ingredients);
    }
    return []; /* We failed to find ingredients to satisfy weights */
  };
  RandomDrinkService.prototype.format = function (r) {
    var s = r.drink_name + ' (' + r.total_oz + ' oz): ';
    for (var i = 0; i < r.ingredients.length; i++) {
      var ingredient = r.ingredients[i];
      s += '\n';
      if (ingredient.drops) s += ingredient.drops + ' drops ';
      else s += ingredient.parts + ' parts ';
      s += ingredient.name;
    }
    return s;
  };
  RandomDrinkService.prototype.createInternal = function (name, weights) {
    var possible_ingredients = this.INGREDIENTS;
    possible_ingredients = possible_ingredients.slice(0);
    this.shuffle(possible_ingredients);
    var ingredients = this.chooseRandomIngredients(
      possible_ingredients,
      weights,
    );
    var total_oz = 5;
    if (weights[this.ALCOHOL]) {
      // If non-virgin, aim for 2oz of alcohol.
      total_oz =
        (2 * (this.sum(weights) - weights[this.BITTER])) /
        weights[this.ALCOHOL];
    }
    ingredients.sort(function (a, b) {
      if ((a.parts || 0) > (b.parts || 0)) return -1;
      if ((a.parts || 0) < (b.parts || 0)) return 1;
      if (a.drops && b.drops) {
        if (a.drops > b.drops) return -1;
        if (a.drops < b.drops) return 1;
      }
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    var r = {
      drink_name: randomName(),
      categories: [],
      ingredients: ingredients,
      total_oz: total_oz,
      template_name: name,
    };
    return r;
  };
  RandomDrinkService.prototype.createDrink = function () {
    var name;
    var weights;
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        name = 'Random Sour';
        weights = [2, 1, 1, 0, 0];
        break;
      case 1:
        name = 'Random Spirituous';
        weights = [4, 1, 0, 1, 0];
        break;
      case 2:
        name = 'Random Bubbly Spirituous';
        weights = [4, 1, 0, 1, 1];
        break;
      case 3:
        name = 'Random Bubbly Sour';
        weights = [2, 1, 1, 0, 1];
        break;
      default:
        name = 'Random Drink';
        weights = [1, 1, 1, 1, 1];
    }
    return this.createInternal(name, weights);
  };
  return RandomDrinkService;
})();

function getDrink() {
  return new RandomDrinkService().createDrink();
}
