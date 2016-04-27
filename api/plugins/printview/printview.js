/**-------------------------------------------------------------------------------------------------
*										인쇄 플러그인 스크립트
*																					Date	: 2015.04.27
*																					Author	: 박정민
**/
eBookCore.plugins.printView = {
	open		: function(){},
	update	: function(){}
};

eBookCore.plugins.printView.open = function(_pageUrl, _pageExt, _currentPageNum, _totalPageNum){

	var printViewEl = $("<div id='ebookprintview' class='blind' />");
	printViewEl.append($("<h1 id='printHeader' >"+eBookCore.getString("printPreview")+"</h1>"));
	printViewEl.append($("<span id='printCloseBtn' />"));
	printViewEl.append($("<div id='printPreview' />").html("<div id='printPreviewContents' />"));
	
	var printOptForm	= $("<form id='printOptions' ></form>");
	printOptForm.append(
			"<span id='print_title_range'>"+eBookCore.getString("printRange")+"</span><br/>"
		+ "<ul><li>"
		+	"<input name='pageRange' type='radio' id='printPageCurr'  value='current' checked=''checked' />" + "<label for='printPageCurr'>"+eBookCore.getString("currentPage")+"("+_currentPageNum+")</label>"
		+ "</li><li>"
		+	"<input name='pageRange' type='radio' id='printPageRange' value='range' />" + "<label for='printPageRange'>"+eBookCore.getString("selectRange")+"</label>"
		+	"<div style='text-indent:1.5em; '>"
		+	"	<select id='print_page_st' dir='rtl' disabled/>" + "<span> ~ </span>" + "<select id='print_page_ed' dir='rtl' disabled/>"
		+	"</div>"
		+ "</li><li>"
		+	"<input name='pageRange'	type='radio' id='printPageAll' value='all' />" + "<label for='printPageAll'>"+eBookCore.getString("allPages")+"</label>"
		+ "</li></ul>"
		+	"<input id='print_ok'			type='button' value='"+eBookCore.getString("print")+"' />"
		+	"<input id='print_close'	type='button' value='"+eBookCore.getString("close")+"' />"
	);
	printViewEl.append(printOptForm);
	
	printViewEl.appendTo(document.body);
	printViewEl.focus();
	
	// 선택페이지 항목 페이지 번호 추가
	var selPageNums = '';
	for(var i=1; i<=_totalPageNum; ++i){
		selPageNums += "<option>"+i+"</option>";
	}
	$("#print_page_st").append(selPageNums);
	$("#print_page_ed").append(selPageNums);
	

	/** 이벤트 처리 **/
	
	// 인쇄범위 옵션 변경 이벤트 처리
	$( "input[name='pageRange']" ).on("change", function(e){
		
		// 선택페이지 선택시 페이지 번호 선택 항목 활성화 여부 처리
		$(e.target).val() === 'range' ? $("#printOptions select").removeAttr("disabled") : $("#printOptions select").attr("disabled", "");
		
		eBookCore.plugins.printView.update(_pageUrl, _pageExt, _currentPageNum, _totalPageNum); // 미리보기 갱신
	});
	
	// 선택페이지 범위 변경 이벤트 처리
	$("#printOptions select").on("change", function(e){
		
		var _stNum	= parseInt( $("#print_page_st option:selected").val() );
		var _edNum	= parseInt( $("#print_page_ed option:selected").val() );
		
		if(_stNum > _edNum){ // 올바르지 않은 범위 선택시 값을 재조정
			
			if( $("#print_page_st ").is(e.target) ){
				$(e.target).val(_edNum);
			}else{ // 다음 코드를 생략 : if( $("#print_page_ed ").is(e.target) )
				$(e.target).val(_stNum);
			}
		}
		
		eBookCore.plugins.printView.update(_pageUrl, _pageExt, _currentPageNum, _totalPageNum); // 미리보기 갱신
	});
	
	// 인쇄 버튼 이벤트 처리
	$("#print_ok").on("click", function(){
		$("#printPreviewContents").print({
			globalStyles						: false,
			mediaPrint							: false,
			stylesheet							: null,
			iframe									: false,
			manuallyCopyFormValues	: false,
		});
	});
	
	// 취소 버튼 이벤트 처리
	$("#print_close").on("click", function(){
		$("#ebookprintview").detach(); // 인쇄 창 닫기
	});
	
	// 닫기 버튼 이벤트 처리
	$("#printCloseBtn").on("click", function(){
		$("#ebookprintview").detach(); // 인쇄 창 닫기
	});
	
	eBookCore.plugins.printView.update(_pageUrl, _pageExt, _currentPageNum, _totalPageNum); // 최초 미리보기 갱신
};

/**	인쇄 범위 화면에 그리기
**/
eBookCore.plugins.printView.update = function(_pageUrl, _pageExt, _currentPageNum, _totalPageNum){
	
	var	pageNums	= [],
			_rangeType	= $( "#ebookprintview input:checked" ).val(),
			_stNum		= 1,
			_edNum		= _totalPageNum;
	
	switch(_rangeType){
		case 'current' :
			_stNum	= _edNum = _currentPageNum;
			break;
		
		case 'range' :
			_stNum	= parseInt( $("#print_page_st :selected").val() );
			_edNum	= parseInt( $("#print_page_ed :selected").val() );
			break;
		
		case 'all' :
			// 기본 값으로 지정되어있음
			break;
	}
	
	var _previewWnd = $("#printPreviewContents");
	
	_previewWnd.children().detach();
	for(var i=_stNum; i<=_edNum; ++i){
		// 각 페이지 이미지를 추가
		_previewWnd.append("<img src='" + _pageUrl + i + "." + _pageExt + "' />");
	}
	
};
