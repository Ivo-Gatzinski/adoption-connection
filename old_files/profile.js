// get selected dog and dog info from local storage

var selected = localStorage.getItem("dog");

console.log(selected);

var data = localStorage.getItem("dogs");

var parseData = JSON.parse(data);

console.log(parseData);

// match dog with data

if (selected === parseData[0][0]) {

    // display data

    $("#name").text(selected);
    $("#breed").text(parseData[0][2]);
    $("#age").text(parseData[0][3]);
    $("#description").text(parseData[0][4]);
    $("#location").text(parseData[0][5]);
    $("#img").attr("src", parseData[0][6]);
    $("#learn-more").attr("href", parseData[0][7]);
}


if (selected === parseData[1][0]) {

    // display data

    $("#name").text(selected);
    $("#breed").text(parseData[1][2]);
    $("#age").text(parseData[1][3]);
    $("#description").text(parseData[1][4]);
    $("#location").text(parseData[1][5]);
    $("#img").attr("src", parseData[1][6]);
    $("#learn-more").attr("href", parseData[1][7]);
}

if (selected === parseData[2][0]) {

    // display data

    $("#name").text(selected);
    $("#breed").text(parseData[2][2]);
    $("#age").text(parseData[2][3]);
    $("#description").text(parseData[2][4]);
    $("#location").text(parseData[2][5]);
    $("#img").attr("src", parseData[2][6]);
    $("#learn-more").attr("href", parseData[2][7]);
}

if (selected === parseData[3][0]) {

    // display data

    $("#name").text(selected);
    $("#breed").text(parseData[3][2]);
    $("#age").text(parseData[3][3]);
    $("#description").text(parseData[3][4]);
    $("#location").text(parseData[3][5]);
    $("#img").attr("src", parseData[3][6]);
    $("#learn-more").attr("href", parseData[3][7]);
}

if (selected === parseData[4][0]) {

    // display data

    $("#name").text(selected);
    $("#breed").text(parseData[4][2]);
    $("#age").text(parseData[4][3]);
    $("#description").text(parseData[4][4]);
    $("#location").text(parseData[4][5]);
    $("#img").attr("src", parseData[4][6]);
    $("#learn-more").attr("href", parseData[4][7]);
}
