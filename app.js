// good luck !
/* 
1ere étape
Les boutons doivent avoir leur fond de la couleur qui se trouve dans le data attribute data-color

2e étape
Un click sur le bouton doit mettre cette couleur en fond

3e étape
quand la case #modify-texte est cochée, la couleur du texte doit etre modifiée */


/* Je clique sur le bouton et la couleur de fond change */
console.log($('.color'))

$(".color").each(function(){
	var couleur = $(this).attr('data-color');
	$(this).css("background-color", couleur);
	console.log($(this));

	$(this).click(function(){
		if ($("#modify-texte").is(":checked")) {
		$(".main").css("color", couleur);
		console.log(couleur);}
		else
			{$(".main").css("background-color", couleur);
}
	})
})



