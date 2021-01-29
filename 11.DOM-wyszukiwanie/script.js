/ Zadanie 1

var listClassElements = document.getElementsByClassName("list");

// Zadanie 2

function getElementsByTags(tagsName) 
{
    return document.getElementsByTagName(tagsName);
} 

var tags = getElementsByTags("li");
console.log(tags)

// Zadanie 3

var list = document.getElementsById("list");

console.log(list);

// Zadanie 4

var allTagLi = getElementsByTags("li");
var allTagUl = getElementsByTags("ul");
var allTagSpans = getElementsByTags("span");
var spanElementsInSpans = document.getElementsById("spans").getElementsByTagName("span");

function writeResult(li, ul, spans, classLi, spansInSpans) {
    console.log("li elements: ", li);
    console.log("ul elements: ", ul);
    console.log("span elements: ", spans);
    console.log("li with 'li' class: ", classLi);
    console.log("spans in element with id 'spans': ", spansInSpans);
}
writeResult(allTagLi, allTagUl, allTagSpans, listClassElements, spanElementsInSpans);
