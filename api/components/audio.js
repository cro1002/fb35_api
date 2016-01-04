/**-------------------------------------------------------------------------------------------------
*										컴포넌트 오디오 스크립트
*																					Date	: 2015.07.09
*																					Author	: 박정민
**/
eBookCore.components.audio = function(container, data){ // container : DIV
	
	var addEl = $("<audio controls>")
		.attr({
			'class'				: 'ebookpagecomp',
			'id'					: data.id,
			'alt'					: data.name,
			'src'					: eBookCore.path.contents+data.musicURL,
			'type'				: "audio/mpeg",
		})
		.css({
			//'position'			: 'absolute',
			//'border-width'	: data.borderWidth +'px',
		});

	container.prepend(addEl);
}