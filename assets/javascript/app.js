
let card = $("#quiz"); 


let questions = [{
    question: "What is Harry Potter's patronus?",
    answers: [
        "Stag",
        "Owl",
        "Chipmunk",
        ],
    correctAnswer: "Stag"
  },
    {
    question: "What is Harry Potter's Hogwarts House?",
    answers: [
        "Slytherin",
        "Griffindor",
        "Hufflepuff"
        ],
    correctAnswer:"Griffindor"
    },
  {
    question: "What shape is Harry Potter's scar?",
    answers: [
        "Heart",
        "Buttcheek",
        "Lightning Bolt"
        ],
    correctAnswer: "Lightning Bolt"
  },
    {
    question: "Who is Harry Potter's best friend?",
    answers: [
        "Ron Weasley",
        "Hermione Granger",
        "Hagrid"
        ],
    correctAnswer: "Ron Weasley",
    }
];

let timer;

let game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function(){
        game.counter--;
        $('#counter-number').html(game.counter);
        if (game.counter===0){
            alert("Whoops, you are out of time");
            game.finished();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);

        $('#sub-wrapper').prepend(
            '<h2>Time Remaining: <span id="counter-number"></span> Seconds</h2>'
        );

        $('#start').remove();

          for(let i = 0; i < questions.length; i++) {
            card.append('<h2>' + questions[i].question + '</h2>');

            for(let j = 0; j < questions[i].answers.length; j++) {

              card.append(
                  "  <input type='radio' name=' question-" + ' ' + i + 
              "' value=' " +questions[i].answers[j]+"' > " +questions[i].answers[j])
            }
          }
      
          card.append('<button type="submit" id="submit">Submit</button>')
    },

        end: function() {
            let inputs = card.children("input:checked");
            let points;
            for (var i = 0; i < inputs.length; i++) {
              let guess = inputs[i].defaultValue;
console.log("default Value", guess);
              let realAnswer = questions[i].correctAnswer;
console.log("correct answer",realAnswer);
              if (guess == realAnswer) {
                console.log(points);
             let points = game.correct++;
              } else {
                let points = game.incorrect++;
              }
            }
            this.result();
          },
        
          result: function() { 
            clearInterval(timer);

            $("#quiz h2").remove();
        
            card.html("<h2>All Done!</h2>");
            card.append("<h3>Correct Answers: " + this.points + "</h3>");
            card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
          }
        };
    $(document).on("click", "#start", function() {
        game.start();
      });
      
      $(document).on("click", "#submit", function() {
        console.log("game is over");
        game.end()
       } );