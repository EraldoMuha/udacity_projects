// Select color input
var canvasColor;

// Select size input
var numOfRows, numOfCols;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    numOfRows = $('#inputHeight').val();
    numOfCols = $('#inputWidth').val();
    makeGrid(numOfRows, numOfCols);
    // console.log(numOfRows, numOfCols);
})

function makeGrid(x, y) {
    // Your code goes here!
    $('tr').remove();

    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    $('td').click(function addColor() {
        canvasColor = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + canvasColor);
        }
    })
}
