
//----------------------------- Functions -----------------------------//
var data = getData();
var stack = [];

function updatePersistantBtns(nodeId)
{
    const persistantBtns = document.getElementById('persistant_btns');
    
    if (nodeId == "1") {
        persistantBtns.style.display = 'none';
    } else {
        persistantBtns.style.display = 'block';
    }
}

function displayNode(nodeId) {
    stack.push(nodeId);
    const myDiv = getDtElement();

    var node = data.nodes[nodeId];

    console.log(node.page_title);
    console.log(node.content);
    console.log(node.question);

    myDiv.innerHTML += createTitleElement(node.page_title); 
    myDiv.innerHTML += createContentsElement(node.content);
    myDiv.innerHTML += createQuestionElements(node.question);

    Object.values(node.buttons).forEach(btn => {
        myDiv.innerHTML += createOptionElements(btn.button_text, btn.button_link);
    }); 

    $("#dt_div").fadeIn("300");

    updatePersistantBtns(nodeId);
}

function createQuestionElements(question)
{
    return "<p class='question'>" + question + "</p>"
}

function createOptionElements(optionText, nodeId)
{
    return '<button class="btn-zingtree option-btn" onClick="displayNode(\''+nodeId+'\')">' + optionText + '</button>';
}

function createTitleElement(title)
{
    return "<h3>" + title + "</h3>"
}

function createContentsElement(content)
{
    return '<div class="content">' + content + '</div>';
}

function getDtElement()
{
    const myDiv = document.getElementById('dt_div');
    myDiv.style.display = 'none';
    myDiv.innerHTML = '';
    return myDiv;
}

function goBack()
{
    if (stack.length > 1) {
        stack.pop();
        displayNode(stack.pop());
    }
}

// Root decision tree element
function beginDecisionTree()
{
    stack = [];
    displayNode("1");
}




//----------------------------- Acutal function calls -----------------------------//

document.addEventListener('DOMContentLoaded',  beginDecisionTree );
