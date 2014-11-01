var WordGame = {
    word : []
};

WordGame.getGridLocation = function (box) {
    // this is probably a bad idea
    return box.prop("id")[1] + box.prop("id")[2];
}

WordGame.getLetter = function (box) {
    return box.text();
};

WordGame.addLetter = function ( box ) {
    return WordGame.word.push( WordGame.getGridLocation(box) );
};

WordGame.removeLetter = function ( box ) {
    var index = WordGame.word.indexOf( WordGame.getGridLocation(box) );
    if ( index + 1 === WordGame.word.length ) {
	return WordGame.word.pop();
    } else {
	return null;
    }
};

function addSelected (event) {
    if( WordGame.addLetter( $( this ) ) !== null ) {
	$( this ).addClass( "selected" );
	$( this ).off("click");
	$( this ).on("click", removeSelected );
    }
}

function removeSelected (event) {
    if( WordGame.removeLetter( $( this ) ) !== null ) {
	$( this ).removeClass( "selected " );
	$( this ).off("click");
	$( this ).on("click", addSelected );
    }
}

$( document ).ready( function() {
    $( "td" ).click( addSelected );
});


// word acceptance: words needs to be at least three letters
// word selection times out after three second
