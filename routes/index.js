var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function (req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
} else {
  return "invalid";
  }
}

function generateStory1(formData){
  return `My name is ${formData.personinroom1} and I am ${formData.number1} years old. 
If I were president, I'd do a whole bunch of ${formData.adjective1} things:
1. I would drive the biggest ${formData.color1} car in the country. 
And that car would go faster then any other ${formData.noun1} in the world!
2. Everyone would eat pepperoni ${formData.typeoffood1} for dinner.
3. I would live in the State of ${formData.noun2} and build a ${formData.verbendingining1}
pool at her feet. 4. I would wear a/an ${formData.articleofclothing1} on my head, and
everyone would say I look ${formData.adjective2} like ${formData.famousperson1}. 5. School would
be open only ${formData.number2} days a year. 6. I would give my friends the best jobs.
I would nominate ${formData.personinroom2} to be secretary of the ${formData.noun3}, and
${formData.personinroom3} could be vice president of ${formData.occupation1}`
}

function generateStory2(formData){
  return `My name is ${formData.personinroom1} and I am ${formData.number1} years old. This is my story of how my ${formData.adjective1} ${formData.noun3} ate my homework.
   It was a nice day with the nice bright ${formData.color1} sky. I was walking home after I saw the ${formData.noun1} at school. 
   On my way home I took a break and ate ${formData.typeoffood1}. While eating I saw a ${formData.noun2} and quickly started ${formData.verbendingining1} as I escaped.
    While leaving I dropped my ${formData.articleofclothing1}. I cried when I got home after I noticed I left my ${formData.adjective2} ${formData.articleofclothing1}.
    I walked to my room and saw my picture of ${formData.famousperson1} torn up into ${formData.number2} pieces. I called ${formData.personinroom2} and 
  told them that ${formData.noun3} ate my homework. ${formData.personinroom3} walked in and looked at the mess saying I will never be able to apply for ${formData.occupation1}.`
}

function generateStory3(formData){
  return `My name is ${formData.personinroom1} and I am ${formData.number1} years old. This is my story of how I lost my job as a ${formData.occupation1}.
   It was a nice ${formData.adjective1} ${formData.noun3} day. The ${formData.color1} ${formData.noun1} was eating my ${formData.typeoffood1}. 
   Luckly there were still ${formData.number2} ${formData.typeoffood1}s left in my ${formData.noun2}. After that incedent I started to ${formData.verbendingining1} 
   while putting on my ${formData.adjective2} ${formData.articleofclothing1}. I was called by ${formData.personinroom2} and headed to the ${formData.noun3}. 
   When I got to the ${formData.noun3} I pushed ${formData.famousperson1} into ${formData.personinroom3} causing everything to fall apart. `
}

module.exports = router;
