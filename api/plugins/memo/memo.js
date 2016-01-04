/**-------------------------------------------------------------------------------------------------
*										메모 플러그인 스크립트
*																					Date	: 2015.05.06
*																					Author	: 박정민
**/
eBookCore.plugins.memo = function(_currentPageNum){

	if(0<$("#ebookmemo").length){ return $("#ebookmemo").detach(); }
	
	// DOM 추가
	var memoEl = $("<div id='ebookmemo'>");
	memoEl.appendTo(document.body);
	
	$(	'<div id="ebookmemoBlind" class="blind" />'
		+	'<div id="ebookmemoWnd">'
		+		'<div				id="ebookmemoHeader"><span>' + eBookCore.getString("memo") + '</span></div>'
		+		'<img				id="ebookmemoClose"	class="ebookmemoBtn" tabindex="0" src="'+eBookCore.resource.close+'" alt="'+eBookCore.getString("close")+'"/>'
		+		'<ul				id="ebookmemoList" />'
		+		'<textarea	id="ebookmemoInput"		placeholder="' + eBookCore.getString("writehere") + '" />'
		+	'</div>'
	).appendTo(memoEl);
	
	// JSON 객체형식으로 쿠키 사용 ★
	$.cookie.json = true;

	// 쿠키 헤더 작성
	var _cookieHeader = "ebookmemo";
	
	// 메모 목록 추가
	var memoList	= memoEl.find("#ebookmemoList");
	var inputArea	= memoEl.find("#ebookmemoInput");
	var memoData = $.cookie(_cookieHeader);
	if( !memoData ){ memoData = {}; }
	for(var i=1; i<=eBookData.totalPageNum; ++i){
		var addEl = $("<li tabindex='0' page='"+i+"'/>")
									.text(i)
									.on(eBookCore.eventType.keyclick, function(e){ // 클릭이벤트 등록
										
										var oldSel = memoList.find(".selected");
										oldSel.removeClass("selected");
										
										var newSel = $(e.target);
										newSel.addClass("selected");
										
										var _num = parseInt( newSel.attr("page") );
										inputArea.val( memoData[_num] );
										//inputArea.focus();
									});
		
		if( memoData[i]				){ addEl.addClass("saved").text("\u2709"+addEl.attr("page")); }
		if( i==_currentPageNum){ addEl.addClass("selected"); }
		
		memoList.append(addEl);
	}
	
	// 쿠키에 기록된 메모가 있으면 현재 창에 반영
	if( memoData[_currentPageNum] ){
		inputArea.val( memoData[_currentPageNum] );
	}
	
	// 내용 수정 이벤트 추가
	inputArea.on("change", function(){
		var selEl = memoList.find(".selected");
		var _num = parseInt( selEl.attr("page") );
		
		if(!memoData[_num] && inputArea.val().length){ // 내용이 추가된경우 saved 클래스 추가 + ✉문자 삽입
			selEl.addClass("saved").text("\u2709"+selEl.attr("page"));
		}else
		if(memoData[_num] && !inputArea.val().length){ // 내용이 삭제된경우 saved 클래스 제거 + ✉문자 제거
			selEl.removeClass("saved");
			selEl.text(selEl.attr("page"));
		}
		
		memoData[_num] = inputArea.val();
	});
	
	// 메모 닫기 이벤트 추가
	memoEl.find('#ebookmemoClose').on(eBookCore.eventType.keyclick, function(e){
		if(!eBookCore.eventType.isExcute(e)){ return; }
		$.cookie( _cookieHeader, memoData, { expires : 365*20, path : '/' } );
		$("#ebookmemo").detach();
	});
	
	// 입력칸에 포커스 설정
	inputArea.focus();
	
	// 목록 스크롤 현재 페이지 위치로 수정
	var _sel = memoList.find(".selected");
	memoList.scrollTop( memoList.scrollTop() + _sel.position().top - (memoList.height()-_sel.height())/2 );
};