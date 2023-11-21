//----------------------------- Functions -----------------------------//
var stack = [];

function createQuestionElememnt(question)
{
    return "<p class='question'>" + question + "</p>"
}

function createOptionElememnt(optionText, optionFuntPtr)
{
    return '<button class="option" onClick="' + optionFuntPtr + '">' + optionText + '</button>';
}

function getDtElement()
{
    const myDiv = document.getElementById('dt_div');
    myDiv.style.display = 'none';
    return myDiv;
}

function goBack()
{
    if (stack.length > 1) {
        stack.pop()
        window[stack.pop()]();
    }
}

// Root decision tree element
function beginDecisionTree()
{
    stack = [];
    stack.push("beginDecisionTree");
    const myDiv = getDtElement();

    myDiv.innerHTML = createQuestionElememnt("What are you looking at recording?");
    myDiv.innerHTML += createOptionElememnt("Bats", "displayBatOptions()");
    myDiv.innerHTML += createOptionElememnt("Birds", "displayBirdOptions()");
    myDiv.innerHTML += createOptionElememnt("Bats and Birds", "displayBirdAndBatOptions()");
    
    $("#dt_div").fadeIn("slow");
}

function displayBatOptions()
{
    stack.push("displayBatOptions");
    const myDiv = getDtElement();
    myDiv.innerHTML = createQuestionElememnt("Bats");
    myDiv.innerHTML += createOptionElememnt("I want to play flappy bat", "displayChorus()");

    $("#dt_div").fadeIn("slow");
}

function displayChorus() 
{
    stack.push("displayChorus");
    const myDiv = getDtElement();

    myDiv.innerHTML = "<h1>Chorus</h1>";

    $("#dt_div").fadeIn(500);
}







//----------------------------- Acutal function calls -----------------------------//


document.addEventListener('DOMContentLoaded',  beginDecisionTree );
