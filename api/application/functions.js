/**	HTML 로딩 완료 후 시작점
**/
$(document).ready(function() {
	
	// 우클릭 차단
	//document.oncontextmenu = function (e) { return false; }
	
	// 뷰 스크롤 차단
	$(window).bind('touchmove scroll',function(e){
		if(($(window).scrollTop() ||  $(window).scrollLeft()) ){
			return $("html").is(":animated") ? e.preventDefault() : $("html").stop().animate({scrollTop:0, scrollLeft:0}, 100);
		}
	});
	
	// 디버그 모드 체크
	eBookData.useDebug ? croTools.logOn() : croTools.logOff();
	
	// api, skin 폴더 경로 설정
	eBookCore.path.api				= $("script[src*='import.js']").attr("src").replace('import.js', '');
	eBookCore.path.assets			= $("script[src*='data.js']").attr("src").replace('data.js', '');
	eBookCore.path.skin				= $("link[href*='skin.css']").attr("href").replace('skin.css', '');
	eBookCore.path.plugins		= eBookCore.path.api			+ "plugins/";
	eBookCore.path.pageview		= eBookCore.path.plugins	+ "pageview/";
	eBookCore.path.printview	= eBookCore.path.plugins	+ "printview/";
	eBookCore.path.slideshow	= eBookCore.path.plugins	+ "slideshow/";
	eBookCore.path.drawing		= eBookCore.path.plugins	+ "drawing/";
	eBookCore.path.memo				= eBookCore.path.plugins	+ "memo/";
	eBookCore.path.bookmark		= eBookCore.path.plugins	+ "bookmark/";
	eBookCore.path.jquery			= eBookCore.path.plugins	+ "jquery/";
	eBookCore.path.pages			= eBookCore.path.assets		+ "pages/";
	eBookCore.path.thumb			= eBookCore.path.assets		+ "thumb/";
	eBookCore.path.contents		= eBookCore.path.assets		+ "contents/";
	
	// PC, 모바일 구별하여 이벤트 타입 지정
	eBookCore.eventType.click			= "click touchstart";
	eBookCore.eventType.keyclick	= "click keyup";
	eBookCore.eventType.dblclick	= "dblclick doubleTap";
	eBookCore.eventType.isExcute	= function(e){ // LeftClick, ENTER 이벤트 체크
		return (	e.which === 0			// touch & ie8click
					||	e.which === croTools.keyCode.ENTER
					||	e.which === croTools.keyCode.MOUSELEFT);
	};
	
	// 스킨 내장 스크립트 로딩
	yepnope({
		load			: [ eBookCore.path.skin + "skin.js" ],	// 스킨 스크립트 로드( 로딩화면 처리 포함 )
		complete	:  eBookCore.func.initializeApplication	// ★ 스크립트 로딩 완료 후 초기화 진행
	});
});


/**	URL 페이지 번호 변경 이벤트 처리
**/
$(window).on('hashchange', function(e){
	croTools.log("hashchange : " +  window.location.hash);
	
	// 현재 페이지 번호 설정
	if( !eBookCore.func.setCurrentPageNum( eBookCore.func.getPageNumByHash() ) ){
		return croTools.log("invalid page : "+e.originalEvent.newURL);
	}
	
	// 페이지 전환 효과음 재생 후 내부 컨텐츠 읽기
	croTools.playMedia("#sound_flip");
	eBookCore.pageTurn.update(eBookCore.currentPageNum);
});


/**	창 크기 변경 이벤트 처리
**/
$(window).resize(function(){
	
	// 창크기가 변경된게 맞는지 확인( for IE8 )
	var _newSize = croTools.getClientSize();
	
	if(	this.oldSize
	&&	this.oldSize.width	=== _newSize.width
	&&	this.oldSize.height	=== _newSize.height ){ return; }
	
	this.oldSize = _newSize;
	
	// 동영상 전체화면 보기 실행시 컴포넌트 재조정 안하게 수정
	var _videoEl = $(".mejs-video[class*='fullscreen'], .mejs-video[class*='ios']");  // 아이폰은 fullscreen 속성이 없으므로 별도로 체크함
	if(0<_videoEl.length){
		croTools.log("resize : detected full★screen video mode");
		return !croTools.isIOS() && _videoEl.css({'left':'', 'top':''}); // 비디오개체 좌표를 0,0으로 수정 후 전체화면으로 늘임
	}

	// 드래그 속성을 가진 창이 화면에서 가려지면 위치 재조정
	$(".draggable").each(function(i,e){
		eBookCore.func.moveWindowIntoView($(e).parent());
	});

	$.doTimeout('wndResize', 100, eBookCore.pageTurn.resize); // 페이지 리사이즈 호출
});


/**	창 회전 이벤트 처리( 모바일용 )
**/
croTools.isMobile() && $(window).on("orientationchange", function(){
	$.doTimeout('wndResize', 500, eBookCore.pageTurn.resize); // 페이지 리사이즈 호출
});

/**	키보드 이벤트 처리
**/
$(window).on("keydown", function(e){
	eBookCore.keyDownState[e.which] = true;
});
$(window).on("keyup", function(e){
	
	var goToByKeyCode = function(){
		if(	1>$(".blind").length
		&&	!eBookCore.keyDownState[croTools.keyCode.WINKEYLEFT]
		&&	!eBookCore.keyDownState[croTools.keyCode.WINKEYRIGHT]
		&&	!e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey	){
			switch(e.which){
		
			case croTools.keyCode.HOME:
				eBookCore.func.gotoPage(1);
				break;
				
			case croTools.keyCode.END:
				eBookCore.func.gotoPage(-1);
				break;
		
			case croTools.keyCode.LEFT:
			case croTools.keyCode.UP:
				eBookCore.func.gotoPrev();
				break;
			
			case croTools.keyCode.RIGHT:
			case croTools.keyCode.DOWN:
				eBookCore.func.gotoNext();
				break;
			}
		}
	};
	
	// 특정 태그객체를 선택중인경우 키 동작이 사용되지 않게 막음
	if(	!document.activeElement
	||	!RegExp("select|textarea|input","i").test(document.activeElement.tagName)){
		goToByKeyCode();
	}
	
	eBookCore.keyDownState[e.which] = false;
});

/**	이북 어플리케이션 초기화
**/
eBookCore.func.initializeApplication = function() {
	var sampleImageUrl = eBookCore.path.pages + "1." + eBookData.pageExt;
	
	var imageSample = $("<img />")
		.css("visibility", "hidden")
		.load( function(e) {
			eBookCore.pageOrigWidth	= e.currentTarget.width;		// 페이지 원본 이미지 너비
			eBookCore.thumbRatio		= e.currentTarget.width / e.currentTarget.height; // 섬네일 이미지 가로세로 비율 값 초기화
			eBookCore.func.initializeEbook(); // ★ 이북 초기화 시작
	}).attr("src", sampleImageUrl); // 지정 url 이미지 load 함수 호출 후 비율 값 설정함
};


/**	skin.js 의 objects 정보로 DOM 생성
**/
eBookCore.func.createSkinObjects = function() {

	/**	탭 인덱스 등록 */
	var addTabIndex = function(e){
		if(isNaN(e.attr("tabindex"))){ // 따로 지정하지 않은 경우 자동 추가
				e.attr("tabindex", 0);
		}
	};
	
	/**	링크 열기 이벤트 등록 */
	var addOpenUrl = function(_addEl, _url){
		if(_url.replace("http://","").length < 1){ return croTools.log("addOpenUrl : invalid open url = "+_url); } // URL 유효성 검사
		
		_addEl.on(eBookCore.eventType.keyclick, function(e){
			eBookCore.eventType.isExcute(e) && window.open(_url, "_blank");
		});
	};
	
	/**	이전 호 목록창 생성 */
	var bookListCreate = function(bookListEl) {
		try {
			if(!bookListEl){ return; }
			
			eBookData.bookList && $(eBookData.bookList).each( function(i,e){
				e && bookListEl.append( $("<option/>").text(e.title).attr("value",	e.url).attr("target",	e.target) );
			});
			
			bookListEl.on("focusin", function(){ // 포커스 상태면 목록 열기
				//bookListEl.attr("size", bookListEl.find("option").length);
				bookListEl.height( Math.min( bookListEl.height(), croTools.getClientSize().height - bookListEl.offset().top ) ); // 목록이 화면을 벗어나지않게 함
				bookListEl[0].selectedIndex = 0; // 선택 아이템 항목 초기화
			}).on("focusout", function(){ // 포커스 벗어나면 목록 닫고 선택항목 초기화
				//bookListEl.attr("size", "");
				bookListEl.css({height : ""});
			});
			
			if( croTools.isMobile() ){
				bookListEl.on("change", function(){ // 모바일 환경 : change 이벤트로 처리
					var _sel = bookListEl.find("option:selected").first();
					if( 0<_sel.length && 0<_sel.attr("value").length ){
							window.open(_sel.attr("value"), _sel.attr("target"));
					}
				});
			}else{
				bookListEl.on(eBookCore.eventType.keyclick, function(e){
					if( eBookCore.eventType.isExcute(e) ){ // PC환경 : 선택 항목 클릭, 엔터 이벤트 처리
						var _sel = bookListEl.find("option:selected").first();
						if( 0<_sel.length && 0<_sel.attr("value").length ){
							window.open(_sel.attr("value"), _sel.attr("target"));
						}
					}
				});
			}
			
		} catch (e) {
			croTools.log(e);
		}
	};
	
	
	/**	드래그바 추가 */
	var addDragBar = function(title, targetEl){
		targetEl.append("<div class='draggable'><p>"+title+"</p></div><span class='close' tabindex='0'>\u2715</span>");
		targetEl.find(".close").on(eBookCore.eventType.keyclick, function(e){ eBookCore.eventType.isExcute(e) && eBookCore.func.wndHide(targetEl); });
	};
	
	
	/**	목차창 생성 */
	var tableListCreate = function(tableListEl) {
		
		addDragBar(eBookCore.getString("contents"), tableListEl); // 드래그바 추가
		
		var listUl = $("<ul />");
		tableListEl.append(listUl);
	
		$(eBookData.tableList).each( function(i,e){
			if(!e){ return; }
			
			var addEl = $(
				"<li class='contents' tabindex='0'>"
			+		"<p>"		+ e.label
			+		"<span>"+ e.index	+ "</span>"
			+ 	"</p>"
			+	"</li>"
			).on(eBookCore.eventType.keyclick, function(key){
				if(!eBookCore.eventType.isExcute(key)){return; }
				if(0<e.url.length)		{	window.open(e.url,"_blank");	}
				if(0<e.index.length)	{	eBookCore.func.gotoPage(parseInt(e.index));	}
			});
			listUl.append(addEl);
		});
	};
	
	/**	책갈피창 생성 */
	var bookmarkListCreate = function(bookmarkListEl) {
		
		addDragBar(eBookCore.getString("bookmark"), bookmarkListEl); // 드래그바 추가
		
		var listUl = $("<ul />");
		bookmarkListEl.append(listUl);
	
		eBookCore.func.bookmarkListUpdate(listUl); // 북마크 자료 최초 1회 갱신
	};
	
	/**	검색 기능 생성 */
	var searchListCreate = function(searchListEl) {
		if(!searchListEl){ return; }
		searchListEl.children().detach();
		
		addDragBar(eBookCore.getString("search"), searchListEl); // 드래그바 추가
		
		var listUl = $("<ul />");
		searchListEl.append(listUl);
		
		listUl.append( // 검색 칸 삽입
			$("<li class='header'/>").html(
					"<input class='search_text' type='text' placeholder='"+eBookCore.getString("input_here")+"' />"
				+	"<p class='result_count'>[result count]</p>"
			)
		);

		var inputEl = listUl.find(".header input.search_text");
		
		/** 검색 개수 문자열 갱신 */
		this.updateResultCount = function(){
			var _itemCnt = listUl.find("li.contents").length;
			var _textLen = inputEl.val().trim/*for IE8*/ ? inputEl.val().trim().length : inputEl.val().length;
			listUl.find(".header p.result_count").text("\u25BC"+eBookCore.getString("result") + (0<_textLen ? " : "+_itemCnt : "") );
		};
		updateResultCount(); // 최초 갱신
		
		this.latestSearchPageNum = 1; // 마지막으로 검색한 페이지 번호
		
		/** 검색 결과 추가 */
		var addSearchContents = function(_stPageNum, _searchText){
			listUl.find("li.more").detach(); // 더보기 버튼 제거
		
			_searchText = _searchText.toLowerCase();
		
			var addedCnt = 0;
			for(var i=_stPageNum-1; i<eBookData.textList.length; ++i){ // 본문 텍스트 탐색
				var _bodyText		= eBookData.textList[i];
				var _bodyIndex	= 0;
				
				while(1){
					var _searchIndex = _bodyText.toLowerCase().substr(_bodyIndex).search(_searchText);
					if(0>_searchIndex){ break; }
					
					_searchIndex		+= _bodyIndex;		// 탐색시 잘려진 텍스트 만큼 위치 수정
					_bodyIndex			= _searchIndex+1;	// 다음 탐색 위치 설정
					
					var _textLen		= _bodyText.length;
					var _maxLen		= Math.min	(50,					_textLen);
					
					var _searchLen	= Math.min	(_maxLen-1,	_searchText.length);
					var _marginLen	= Math.max	(0,					parseInt( (_maxLen - _searchText.length)/2 ));
					
					var _prevIndex	= Math.max	(0,					_searchIndex-_marginLen	);
					var _prevLen		= _searchIndex - _prevIndex;
					
					var _nextIndex	= Math.min	(_textLen-1,	_searchIndex+_searchLen	);
					var _nextLen		= Math.min	(_marginLen*2-_prevLen,	(_textLen-1)-_nextIndex	);
					
					listUl.append($("<li class='contents' tabindex='0' />")
						.html(
								"<img src='"+eBookCore.path.thumb + (i+1) + "." + eBookData.pageExt+"' />"
							+	"<span class='page'>"+ (i+1) +"</span>"
							+	"<span class='text'>"			+ (0<_prevIndex?"\u00B7\u00B7\u00B7":"") + _bodyText.substr(_prevIndex,		_prevLen)	+ "</span>"
							+	"<span class='highlight'>"+ _bodyText.substr(_searchIndex,	_searchLen)	+ "</span>"
							+	"<span class='text'>"			+ _bodyText.substr(_nextIndex,		_nextLen)	+ (_textLen-1 > _nextIndex+_nextLen?"\u00B7\u00B7\u00B7":"") + "</span>"
						).on(eBookCore.eventType.keyclick, function(e){ // 검색결과 클릭시 페이지 이동
							eBookCore.eventType.isExcute(e) && eBookCore.func.gotoPage( parseInt( $(e.target).closest('li').find('.page').text() ) );
						})
					);
					
					++addedCnt;
				}
				
				// 검색 더보기 버튼 추가
				if(	i<eBookData.textList.length-1								// 검색 페이지가 남았으면
				&&	eBookCore.searchCountMax <= addedCnt		){	// 검색 결과 개수가 제한을 넘었는지 확인
					latestSearchPageNum = i+2;	// 다음 검색 대상 페이지 번호 기록
					listUl.append( $("<li class='more' tabindex='0' ><p>"+eBookCore.getString("search_more")+"</p></li>")
						.on(eBookCore.eventType.keyclick, function(e){	// 마우스 클릭 이벤트에 추가로 엔터키 이벤트도 함께 등록함
							return (eBookCore.eventType.isExcute(e) && addSearchContents(latestSearchPageNum, _searchText));
						})
					);
					break;
				}
			}
			
			updateResultCount(); // 검색 개수 문자열 갱신
		};

		this.latestSearchText		= '';		// 최근 입력 검색어 보관
		
		// 키 입력시 검색 이벤트 처리
		inputEl.on("keyup", function(){
			var _inputText = inputEl.val().trim();
			if( latestSearchText === _inputText ){ return; }
			
			latestSearchPageNum	= 1;
			latestSearchText			= _inputText;
			
			$.doTimeout('searchContents', 500, function(){
				listUl.find("li.contents, li.more").detach(); // 기존 검색결과 제거
				
				if(0<latestSearchText.length){	// 검색어가 있으면 본문 검색하여 추가
					addSearchContents(1, latestSearchText);
				}else{
					updateResultCount(); // 검색 개수 문자열 갱신
				}
			});
		});
	};
	
	
	/** [재귀호출] : JSON 객체정보로 html 객체 생성 */
	var _obj2tag = function(obj, parent) {
		
		if(	!obj
		||		(obj.type=="logo" && !eBookData.useLogo) // 로고 이미지 추가시 사용 옵션이 활성화 되어있는지 체크
		){ return; }
		
		var addElem = null;
		
		switch( obj.type ){
		
		case "window"	:	addElem = $("<div/>");				// 창화면(div) 생성
										break;
		case "image"		:	addElem = $("<img/>");			// 이미지(img) 생성
										addTabIndex(addElem);
										break;
		
		/** 고유 속성 항목 */
		case "pageview":addElem = $("<div class='pageview' />");				// 페이지 출력 영역 생성
										break;
		case "pagenum":	addElem = $("<span class='pagenum' />");				// 현재 페이지 번호 출력 칸 생성
										break;
		case "pagetotal":	addElem = $("<span class='pagetotal' >"+eBookData.totalPageNum+"</span>");		// 총 페이지 수 출력 칸 생성
											break;
		case "logo"		:	addElem = $("<img class='logo' />");						// 로고 이미지 생성
										addTabIndex(addElem);
										addOpenUrl(addElem, eBookData.logoUrl);
										break;
		case "home"		:	addElem = $("<img class='home' />");						// 홈 링크 이미지 생성
										addTabIndex(addElem);
										addOpenUrl(addElem, eBookData.homeUrl);
										break;
		case "thumblist"	:	addElem = $("<div class='thumblist' ><ul /></div>");	// 섬네일 리스트 생성
												break;
		case "booklist"		:	addElem = $("<select class='booklist' />");						// 이전호 보기 리스트 읽기
												bookListCreate(addElem);
												break;
		case "tablelist"	:	addElem = $("<div class='tablelist' />");							// 목차 리스트 읽기
												tableListCreate(addElem);
												break;
		case "bookmarklist":addElem = $("<div class='bookmarklist' />");					// 책갈피 리스트 읽기
												bookmarkListCreate(addElem);
												break;
		case "searchlist"	:	addElem = $("<div class='searchlist' />");						// 검색 리스트 읽기
												searchListCreate(addElem);
												break;
		
		/* 잘못된 타입. 에러 로그 출력 */
		default						:	croTools.log( "unknown type object : " + obj.type );
		}
		if(!addElem){ return; }
		
		var usingHTML5 = false;
		
		/* 객체 속성 추가 */
		for(var _name in obj){
			
			var _value = obj[_name];
			
			switch( _name ){
			
			/* 별도 처리 속성 패스 */
			case "children"	:
			case "type"			:
			case "usable"		:
			case "visible"	:
				break;

			/* 이벤트 등록 */
			case "click"			:
				addElem.css("cursor", "pointer"); // 마우스 커서 버튼형으로 설정
				
				// 동작 이벤트 함수 등록( 2개 이상 등록시 ; 로 구분 )
				$(_value.split(";")).each(function(i, v){
				
					if(/runPrint/.test(v) && !croTools.isMobile() && !$.print){
						yepnope({ // 프린트 관련 스크립트 읽기
							load	: [	eBookCore.path.jquery		+ "print.js"	,
											eBookCore.path.printview	+ "printview.js"	,
											eBookCore.path.printview	+ "printview.css"	]
						});
					}else
					if(/runSlideShow/.test(v) && !eBookCore.plugins.slideshow){
						yepnope({ // 자동넘김 관련 스크립트 읽기
							load	: [	eBookCore.path.slideshow	+ "slideshow.js"		,
											eBookCore.path.slideshow	+ "slideshow.css"	]
						});
					}else
					if(/runDrawing/.test(v) && !eBookCore.plugins.drawing){
						yepnope({ // 판서 관련 스크립트 읽기
							load	: [	eBookCore.path.drawing	+ "sketch.min.js"	,
											eBookCore.path.drawing	+ "drawing.js"		,
											eBookCore.path.drawing	+ "drawing.css"	]
						});
						useHTML5 = true; // HTML5 사용 확인 요청
					}else
					if(/runMemo/.test(v) && !window.pluginMemoOpen){
						yepnope({ // 메모 관련 스크립트 읽기
							load	: [	eBookCore.path.memo	+ "memo.js"	,
											eBookCore.path.memo	+ "memo.css"	]
						});
					}
					
					addElem.on( eBookCore.eventType.keyclick, function(e){	// 마우스 클릭 이벤트에 추가로 엔터키 이벤트도 함께 등록함
						return (eBookCore.eventType.isExcute(e) && eval(v));
					}); 
					
				});
				break;
				
			case "draggable": // 마우스 끌기 속성 부여
				if(!_value){ break; }
				addElem.draggable({ // 스크롤바가 생성되는 태그는 끌기에서 제외함
					addClasses	: false,
					handle			: ".draggable",
					opacity			: 0.9,
					start				: function(e,ui){
						addElem.trigger(eBookCore.eventType.click);			// z-index 수정 이벤트 동작
					},
					stop				: function(e,ui){
						eBookCore.func.moveWindowIntoView($(e.target)); // 드래그 완료시 창이 뷰를 벗어나면 강제로 안으로 이동
					}
				});
				addElem.css("position","");
				addElem.on(eBookCore.eventType.click, function(e){ // 클릭된 창이 앞에 나오도록 z-index 수정
					var targetEl = addElem;
					$(".draggable").parent().css('z-index', '');
					var defaultZ = parseInt( targetEl.css('z-index') );
					targetEl.css('z-index', defaultZ+1);
				});
				break;
			
			case "resizable": // 마우스 사이즈조절 속성 부여
				_value && addElem.resizable();
				break;
			
			/* 기본 속성 : id, class, src, title, tabindex ... */
			case "src" : // 이미지 상대 경로 수정
				_value = eBookCore.path.skin + eBookSkin.path.image + _value; // ./assets/theme/ + images/ + _value.jpg
			default :
				addElem.attr(_name, _value);
			}
		}
		
		/** 장치 호환성 옵션 체크( PC, Mobile ) */
		
		var _usable = $(obj).attr("usable");
		if(	!!_usable
		&&	(	( !croTools.isMobile()	&& !/pc/i.test(_usable)			)
		||		( croTools.isMobile()		&& !/mobile/i.test(_usable)	)
		||		( usingHTML5						&& !croTools.canHTML5()		)	)
		){ // 호환되지 않는 객체 비활성화
				addElem	.css	("cursor",		""				)
								.css	("opacity",		"0.25"		)
								.attr	("tabindex",	"-1"			)
								.attr	("title",			eBookCore.getString("unusable"))
								.off	(eBookCore.eventType.keyclick	);
		}
		
		var _visible = $(obj).attr("visible");
		if(	!!_visible
		&&	(	( !croTools.isMobile()	&& !/pc/i.test(_visible)		)
				||( croTools.isMobile()	&& !/mobile/i.test(_visible)	)	)
		){ // 호환되지 않는 객체 생성 취소
				return;
		}
		
		// DOM에 추가
		addElem.appendTo( parent );
		
		// 자식 객체 재귀호출
		return obj.children && $.each( obj.children, function(i,e){ _obj2tag(e, addElem); });
	}
	return $.each(eBookSkin.objects, function(i,e) { _obj2tag(e, document.body); }); // ★ 처리 시작점
};


/**	페이지 이동( 성공시 페이지 번호 반환 )
**/
eBookCore.func.gotoPage = function(_pageNum){
	if(isNaN(_pageNum)){ return croTools.log("invalid page number : "+ _pageNum); } // 숫자 값이 올바른지 체크
	
	var _oldHash = location.hash;
	
	location.hash = "#page=" + ( _pageNum > -1 ? croTools.rangeValue( _pageNum, 1, eBookData.totalPageNum ) : eBookData.totalPageNum );
	
	if(location.hash === _oldHash){			// 동일한 hash 값을 지정한 경우
		eBookCore.func.componentsReset();	// 컴포넌트만 리셋
	}
	return _pageNum;
};
eBookCore.func.gotoPrev = function(){
	return (-1<eBookCore.pageTurn.getVisiblePageNumbers().indexOf(1))
					? eBookCore.func.showFlashPopup(eBookCore.getString("first_page"))
					: eBookCore.func.gotoPage( eBookCore.currentPageNum	-	(eBookCore.func.nowPageViewSingle() ? 1 : 2) );
	
};
eBookCore.func.gotoNext = function(){
	return (-1<eBookCore.pageTurn.getVisiblePageNumbers().indexOf(eBookData.totalPageNum))
					? eBookCore.func.showFlashPopup(eBookCore.getString("last_page"))
					: eBookCore.func.gotoPage( eBookCore.currentPageNum	+	(eBookCore.func.nowPageViewSingle() ? 1 : 2) );
};

/**	화면에 팝업 메세지 띄우기
**/
eBookCore.func.showFlashPopup = function(_msg, _elapsed){
	
	if(1>_msg.length){ return; }
	if(isNaN(_elapsed)){ _elapsed = 1000; } // 기본값 1초
	
	// 활성된 이전 팝업이 있으면 제거
	$(".fb_flash_popup").stop().detach();
	
	var _addPopup
		= $("<div/>")
			.attr({"class":"fb_flash_popup ui-corner-all"})
			.css({
				backgroundColor : "rgba(255,255,255,0.7)",
				width						: (_msg.length+1)+"em",
				height					: "2em",
				lineHeight			: "2em",
				zIndex					: croTools.zTopMost,
				
				left		: "0px",
				top			: "0px",
				right		: "0px",
				bottom	: "0px",
				
				position	: "absolute",
				margin		: "auto",
				padding		: "0px",
				textAlign	: "center",
				
				borderWidth	: "1px 2px 2px 1px",
				borderStyle	: "solid",
				borderColor	: "rgb(128,128,128)"
			})
			.html(_msg);
		
	$(document.body).append(_addPopup);
	
	_addPopup.fadeOut(_elapsed, function(){ $(".fb_flash_popup").detach(); });
}


/**	뷰 크기에 따른 현재 페이지 표시 방식 판단( single : TRUE )
**/
eBookCore.func.nowPageViewSingle = function(){

	switch(eBookData.pageView.side.toLowerCase()){
		case "single"	: return true;
		case "double"	: return false;
	}

	// 설정값 auto 면 페이지뷰 비율로 판단하여 설정
	var _viewport = $('.pageview');
	
	if(!_viewport.length){
		return croTools.log("viewport is empty");
	}
	
	return ( _viewport.height() * eBookCore.thumbRatio * 2 >= _viewport.width() );
};


/**	해시값에서 페이지 번호 추출하여 반환( 잘못된 값 : return NaN )
**/
eBookCore.func.getPageNumByHash = function(){
	return parseInt( location.hash.replace("#page=","") );
};


/**	현재 페이지 번호 설정( 숫자 값이 올바르면 return TRUE )
**/
eBookCore.func.setCurrentPageNum = function(_num){
	var _isNum = !isNaN(_num);
	if(_isNum){ eBookCore.currentPageNum = croTools.rangeValue(_num, 1, eBookData.totalPageNum); }
	location.hash = "#page="+eBookCore.currentPageNum;
	return _isNum;
};


/**	전체화면 보기 토글
**/
eBookCore.func.fullscreenToggle = function(){
	return croTools.toggleFullscreen(document.body);
};


/**	창, 오브젝트 켜고 끔
**/
eBookCore.func.wndToggle = function(_wnd){
	$(_wnd).each(function(i,e){
		$(e).is(":visible") ? eBookCore.func.wndHide(e) : eBookCore.func.wndShow(e);
	});
};
eBookCore.func.wndShow = function(_wnd){
	var wndEl = $(_wnd);
	
	wndEl.each(function(i,e){
		if( $(e).is(":animated") ){ return /* croTools.log("eBookCore.func.wndShow : now animating") */; }
		$(e).fadeIn("fast");
	});
	
	if(0<wndEl.find(".thumblist").length){ // 섬네일 리스트가 있으면 갱신
		eBookCore.func.thumbnailImageUpdate(eBookCore.currentPageNum);
	}
};
eBookCore.func.wndHide = function(_wnd){
	$(_wnd).each(function(i,e){
		if( $(e).is(":animated") ){ return /* croTools.log("eBookCore.func.wndHide : now animating") */; }
		$(e).fadeOut("fast",
			function(){ // completed event
				if($(e).is(".thumblist") || 0<$(e).find(".thumblist").length){ // 섬네일 리스트가 있으면 갱신
					eBookCore.func.thumbnailImageUpdate(eBookCore.currentPageNum);
				}
			}
		);
	});
};
eBookCore.func.wndMove = function(_wnd, _data){
	$(_wnd).each(function(i,e){
		if( $(e).is(":animated") ){ return /* croTools.log("wndMoving : now animating") */; }
		$(e).animate(	_data, "slow" );
	});
};


/** 뷰 영역을 벗어난 창을 안으로 이동
*/
eBookCore.func.moveWindowIntoView = function(_wndEl){
	var	childLeft	= 0,
			childTop	= 0;
	
	_wndEl.children().each(function(i,e){ // 자식 노드도 함께 탐색
		var _pos = $(e).position();
		childLeft= Math.min( childLeft, _pos.left );
		childTop = Math.min( childTop , _pos.top  );
	});
	
	var _viewSize  = croTools.getClientSize();
	var offsetLeft = _wndEl.position().left+childLeft,
			offsetTop  = _wndEl.position().top +childTop;
	
	if(0>offsetLeft){ _wndEl.animate({"left":-childLeft}); }
	else if(_viewSize.width < offsetLeft+10){ _wndEl.animate({"left":_viewSize.width-_wndEl.width()}); }
	
	if(0>offsetTop) { _wndEl.animate({"top" :-childTop }); }
	else if(_viewSize.height < offsetTop+10){ _wndEl.animate({"top":_viewSize.height-_wndEl.height()}); }
};


/**	메모기능 실행
**/
eBookCore.func.runMemo = function(){
	eBookCore.plugins.memo(eBookCore.currentPageNum);
};


/**	책갈피 목록 갱신
**/
eBookCore.func.bookmarkListUpdate = function(listUl) {

	if(!listUl){
		listUl = $("div.bookmarklist ul");
		if(1>listUl.length){ return; }
	}
	listUl.children().detach();
	
	$.cookie.json = true; // JSON 객체형식으로 쿠키 사용 ★
	var bookmarkPages = $.cookie("ebookmark");
	if(!bookmarkPages){ return; }
	
	for(var i=1; i<=eBookData.totalPageNum; ++i){
		if(isNaN(bookmarkPages[i])){continue;}
		var addEl = $("<li class='contents' tabindex='0' />");
		addEl.html(
				"<img src='"+eBookCore.path.thumb + i + "." + eBookData.pageExt+"' />"
			+	"<span class='page'>"+ i +"</span>"
			+	"<span class='text'>" + (eBookData.textList[i-1] ? eBookData.textList[i-1].substr(0,50) : "") + "...</span>" )
			.on(eBookCore.eventType.keyclick, function(e){
				eBookCore.eventType.isExcute(e) && eBookCore.func.gotoPage( parseInt( $(e.target).closest('li').find('.page').text() ) );
		});
		listUl.append(addEl);
	}
};
	

/**	책갈피 표시 갱신
**/
eBookCore.func.bookmarkUpdate = function(){
	
	//croTools.log("eBookCore.func.bookmarkUpdate");
	
	/** 책갈피 토글 */
	this.bookmarkToggle = function(pageNum){
		$.cookie.json = true; // JSON 객체형식으로 쿠키 사용 ★

		// 북마크 쿠키 읽기
		var bookmarkPages = $.cookie("ebookmark");
		
		// 북마크가 설정시 true 삭제시 false 반환
		var _isMarked = !( bookmarkPages && !isNaN(bookmarkPages[pageNum]) );
		
		if( _isMarked ){
			if(!bookmarkPages){ bookmarkPages = {}; }
			bookmarkPages[pageNum] = '';
		}else{
			delete bookmarkPages[pageNum];
		}

		// 쿠키 갱신
		$.cookie( "ebookmark", bookmarkPages, { expires : 365*20, path : '/' } );
		
		// 책갈피 목록 갱신
		eBookCore.func.bookmarkListUpdate();
	};
	
	/** 책갈피 활성상태 반환 */
	this.isMarked = function(pageNum){
		$.cookie.json = true;
		var bookmarkPages = $.cookie("ebookmark");
		return bookmarkPages && !isNaN(bookmarkPages[pageNum]);
	};
	
	// 이전 책갈피 표시 제거
	$(".pageview img.bookmark").detach();
	
	// 화면에 표시중인 책갈피 페이지 읽기
	var _pageNums = eBookCore.pageTurn.getVisiblePageNumbers();
	if(!_pageNums){ return croTools.log("failed : getVisiblePageNumbers"); }
	for(var i=0; i<_pageNums.length; ++i){
		
		var bookmarkObj
			= $("<img/>")
					.attr({	'class'			: 'bookmark',
									'src'				: eBookCore.path.skin + eBookSkin.path.image + "bookmark.png",
									'tabindex'	: 0,
									'title'			: eBookCore.getString('bookmark')
					});
					
		bookmarkObj.on(eBookCore.eventType.keyclick, function(e){ // 이미지 클릭시 책갈피 해제
			if(!eBookCore.eventType.isExcute(e)){ return; }
			eBookCore.func.bookmarkToggle( parseInt( $(e.target).closest("[page]").attr("page") ) );
			eBookCore.func.bookmarkUpdate(); // 책갈피 갱신
		});
		
		if( eBookCore.func.isMarked( _pageNums[i] ) ){ // 활성화된 책갈피는 투명도 해제
			bookmarkObj.addClass("activate");
		}
		
		eBookCore.pageTurn.addBookmarkToPage( _pageNums[i], bookmarkObj );
	}
};


/**	판서기능 실행
**/
eBookCore.func.runDrawing = function(){
	croTools.canHTML5() && eBookCore.plugins.drawing.run(eBookCore.currentPageNum);
};


/**	슬라이드쇼 실행
**/
eBookCore.func.runSlideShow = function(){
	eBookCore.plugins.slideshow.run(
		eBookCore.path.skin + eBookSkin.path.slideshow,	// 슬라이드쇼 이미지 폴더 지정
		eBookCore.currentPageNum,										// 현재 페이지 번호
		eBookData.totalPageNum											// 전체 페이지 수
	);
};


/**	인쇄 실행
**/
eBookCore.func.runPrint = function(){
	if( !croTools.isMobile() ){ // PC환경에서만 동작하게 함
		eBookCore.plugins.printView.open(
			eBookCore.path.pages,			// 이미지 폴더 URL 경로
			eBookData.pageExt,				// 이미지 확장자 ( ex : jpg )
			eBookCore.currentPageNum,	// 현재 페이지 번호
			eBookData.totalPageNum		// 전체 페이지 수
		);
	}
};


/**	SNS 보내기
**/
eBookCore.func.sendSNS = function(text){

	var snsMsg = encodeURI("저의 NexBook을 소개 합니다.");
	var snsTitle = encodeURI(document.title);
	var snsHref = encodeURIComponent(location.href);
	
	var kakaoImg = ""; // 카카오이미지 버튼 URL 정의시 사용하기
	
	switch(text){
	
	case "kakaotalk":
		window.location.href = "http://api.ebook.co.kr/nexbook/viewer/kakaolinker.php?t=talk&m="+snsMsg+"&p="+snsHref+"&i="+kakaoImg;
		break;
	
	case "kakaostory":
		window.location.href = "http://api.ebook.co.kr/nexbook/viewer/kakaolinker.php?t=story&m="+snsMsg+"&p="+snsHref;
		break;
	
	case "facebook":
		window.open("http://facebook.com/sharer.php?u=" + snsHref, "sendFacebook");
		break;
	
	case "twitter":
		window.open("http://twitter.com/share?text="+snsTitle+"&url="+snsHref, "sendTwitter");
		break;
	
	default:	// 사용자 정의 SNS 링크 사용 / ex) http://www.band.us/plugin/share?body=##MSG##&route=##URL##
		text = text.replace("##MSG##", snsMsg)
						.replace("##TITLE##", snsTitle)
						.replace("##URL##", snsHref);

		window.open(text, "eBookCore.func.sendSNS");
	}
};


/**	이북 초기화 시작
**/
eBookCore.func.initializeEbook = function() {
	
	// 현재 페이지 번호 설정
	if( !eBookCore.func.setCurrentPageNum( eBookCore.func.getPageNumByHash() ) ){
		eBookCore.func.setCurrentPageNum(1);
	}

	// 스킨 정보로 객체 생성
	eBookCore.func.createSkinObjects();

	// 책넘김 효과음 객체 추가
	$(document.body).append("<audio id='sound_flip' src='./assets/theme/sounds/page.mp3' type='audio/mpeg' style='display:none' ></audio>");
	
	// 책넘김 컴포넌트 초기화
	yepnope({
		load			: [ eBookCore.path.pageview + eBookData.pageView.type + ".js" ], // 페이지 넘김 스크립트 로드
		complete	:  function(){ // ★ 스크립트 로딩 완료 후 내부 컨텐츠 읽기
			eBookCore.pageTurn.update(eBookCore.currentPageNum);
		}
	});
	
	// ★ 로딩화면 제거
	$.doTimeout(eBookSkin.options.loadingDelay || 0, function(){ $("#loading_area").remove(); croTools.log("loading done"); });
};


/**	페이지 컴포넌트 리셋 ( 사이즈 재조정 + 미디어 재생성 )
**/
eBookCore.func.componentsReset = function(){
	croTools.log("componentsReset");
	
	// 스킨 컴포넌트 페이지 번호 갱신
	$(".pagenum").text									(eBookCore.currentPageNum); // 페이지 번호칸
	eBookCore.func.thumbnailImageUpdate	(eBookCore.currentPageNum); // 섬네일
	eBookCore.func.bookmarkUpdate				(eBookCore.currentPageNum); // 책갈피 상태
	
	// ★ 미디어 컴포넌트 초기화( 리사이징 후 재 생성 )
	$(".mejs-container").each(function(i,e){
			e = $(e);
			e.parent().prepend( e.find("video,audio").clone() );
			e.detach();
	});
	
	var targetEl = $(".pageview"); // 페이지뷰 안의 모든 페이지 컴포넌트를 재설정
	
	// 리사이징 처리
	targetEl.find(".ebookpagecomp").each(function(i,e){ eBookCore.components.resizing(e); });
	
	// 링크 컴포넌트 이벤트 재 설정
	targetEl.find("div.ebookpagecomp[id^='Link']").each(function(i,e){ eBookCore.components.setLinkEvent(e); });
	
	// 텍스트 컴포넌트 이벤트 재 설정
	targetEl.find("textarea.ebookpagecomp").each(function(i,e){ eBookCore.components.setTextEvent(e); });
	
	// 이미지 컴포넌트 이벤트 재 설정
	targetEl.find("img.ebookpagecomp").each(function(i,e){ eBookCore.components.setImageEvent(e); });
	
	// 미디어 컴포넌트 재 생성 ★
	targetEl.find("video,audio").each(function(i,e){ eBookCore.components.createMediaPlayer(e); });
	
	// 미디어 생성시 불필요한 span 태그가 생성되므로 삭제
	targetEl.find("span.mejs-offscreen").detach();
	
	// 액션 이벤트 재 설정
	targetEl.find("div.ebookpagecomp[id^='Interaction']").each(function(i,e){ eBookCore.components.setActionEvent(e); });
	
	// 최초 생성시 붙은 숨김처리 속성 제거
	targetEl.find(".ebookpagecomp").css('display', '');
};


/**	섬네일 이미지 갱신
**/
eBookCore.func.thumbnailImageUpdate = function(pageNum) { // pageNum : 1 ~ totalPageNum
	
	croTools.log("thumbnailImageUpdate");
	
	var thumbList	= $(".thumblist");
	if(!thumbList.is(":visible")){ return; } // 화면 감춤 상태면 갱신 안함
	
	var thumbUL	= $(".thumblist ul");
	if(1>thumbUL.length){ return; }
	
	if( thumbUL.is(":empty") ){ // 섬네일 이미지가 없으면 초기화
	
		for(var i=1; i<=eBookData.totalPageNum; ++i){
			thumbUL.append ("<li page='"+i+"'><span>"+i+"</span><img src='"+eBookCore.path.thumb+i+".jpg' class='thumbloader' tabindex='0'></img></li>");
		}
		
		thumbUL.find("img").each(function(i,e){
			var imgEl	= $(e),
					_num	= i+1;
			imgEl
				.load(function(f){
					imgEl.removeClass("thumbloader");
					if(pageNum===_num){
						imgEl.addClass("on");
					}
					if(thumbUL.find(".thumbloader").is(":empty")){ // 섬네일 로딩이 끝난경우 선택 페이지에 스크롤 맞추기
						var _currImg = thumbList.find("span:contains('"+pageNum+"')").next();
						thumbList.scrollTop ( thumbList[0].scrollHeight / eBookData.totalPageNum * (pageNum-1) - ((thumbList.height() - _currImg.height()) / 2));
						thumbList.scrollLeft( thumbList[0].scrollWidth  / eBookData.totalPageNum * (pageNum-1) - ((thumbList.width()  - _currImg.width())  / 2));
					}
				})
				.on("dragstart", function(f){f.preventDefault();})
				.on(eBookCore.eventType.keyclick, function(f){
					return eBookCore.eventType.isExcute(f) && eBookCore.func.gotoPage(_num);
				});
		});
	
	}else{
		thumbUL.find(".on").removeClass("on");

		var _currImg = thumbUL.find("li[page='"+pageNum+"'] img");
		_currImg.addClass("on");
		
		if($(".thumblist :focus").length){
			_currImg.prev().focus(); // 포커스 해제
		}else{
			// 현재 페이지 섬네일을 중앙에 정렬
			thumbList.scrollTop (thumbList[0].scrollHeight / eBookData.totalPageNum * (pageNum-1) - ((thumbList.height() - _currImg.height()) / 2));
			thumbList.scrollLeft(thumbList[0].scrollWidth  / eBookData.totalPageNum * (pageNum-1) - ((thumbList.width()  - _currImg.width())  / 2));
		}
	}
};


/**	페이지내 컨텐츠 읽기( pageturn.init 에서 사용)
**/
eBookCore.func.loadPageContents = function(pageEl, pageNum) { // pageNum : 1 ~ totalPageNum
	
	var _cont = eBookData.pageContents;
	for(var i=0; i<_cont.length; ++i){
		if(pageNum === _cont[i][0]){
			
			croTools.log("component page : "+pageNum);
			
			for(var k=1; k<_cont[i].length; ++k){
				var _data = _cont[i][k];
				
				// 추가할 컴포넌트 정보를 ID 인덱스로 보관
				eBookCore.components.data[_data.id] = _data;
				
				croTools.log("component id : " + _data.id);
				switch(_data.type){
					case "action"	:	eBookCore.components.action	(pageEl, _data);	break;
					case "audio"	:	eBookCore.components.audio	(pageEl, _data);	break;
					case "video"	:	eBookCore.components.video	(pageEl, _data);	break;
					case "text"		:	eBookCore.components.text		(pageEl, _data);	break;
					case "link"		:	eBookCore.components.link		(pageEl, _data);	break;
					case "image"	:	eBookCore.components.image	(pageEl, _data);	break;
					default				:	croTools.log("unknown component");
				}
			}
			break;
		}
	}
	
	pageEl.find(".ebookpagecomp").css("display","none"); // 추가한 컴포넌트를 감추고 리셋이벤트에서 보이게 처리(로딩 중 이상하게 보이는 문제 해결)

	// 모든 이미지가 로딩됐으면 컴포넌트 리셋 호출
	return 1>$(".loader").length && eBookCore.func.componentsReset();
};
