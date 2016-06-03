/**-------------------------------------------------------------------------------------------------
*								Turn.js 기반 페이지 넘김 스크립트
*																					Date	: 2015.04.15
*																					Author	: 박정민
**/

/**	★ 최초 열기시 1회 초기화
**/
eBookCore.pageTurn.init = function(){
	
	var _viewport = $('.pageview');
	if(1>_viewport.length){ return; }
	
	var viewframe = $("<div class='viewframe'></div>");
	_viewport.append(viewframe);
	
	// 페이지 사이즈 조정
	eBookCore.pageTurn.resize();
	
	/* 페이지 추가 */
	eBookCore.pageTurn.addPage = function(pageNum) {
		//croTools.log("addPage : "+pageNum);
		if (!viewframe.turn('hasPage', pageNum)) {
			
			var element = $('<div class="loader" style="background-color:white; " />') // 로딩 화면을 먼저 추가하고 본문 페이지 이미지를 로딩함
										.html(	'<img class="loading" src="'+eBookCore.path.pageview + 'turnjs/loading.gif'+'" style="position:absolute; left:0px; top:0px; right:0px; bottom:0px; margin:auto; " />' );
			
			if (viewframe.turn('addPage', element, pageNum)) {
				eBookCore.pageTurn.loadPage(element, pageNum);
			}
		}
	};
	
	/* 본문 페이지 로딩 */
	eBookCore.pageTurn.loadPage = function(element, pageNum) {
		//croTools.log("loadPage : "+pageNum);
		
		var _addImg = $("<img />", {
			"src"	: eBookCore.path.pages + pageNum + "."+eBookData.pageExt,
			"class"	: "target",
			css		: {	width:'100%',
								height:'100%' }
		})
		.on(eBookCore.eventType.dblclick,function(){ /** 더블 클릭시 확대축소 활성화 */
			eBookCore.plugins.zoomview.run(_addImg);
		});
		
		/** 이미지 로딩 완료 처리 */
		var loadingComplete = function(){
			element.removeClass("loader");
			element.find("img.loading").detach();
			element.append( _addImg );
			
			// ★ 페이지 컨텐츠 로딩
			eBookCore.func.loadPageContents(element, pageNum);
			
			if(0<$("#bookclip_pc").length){
				if(croTools.isMobile()){
					$("#bookclip_pc").detach();
				}else{
					$("#bookclip_pc").attr("id","bookclip");
				}
			}
			
			if(0<$("#bookclip_mobile").length){
				if(!croTools.isMobile()){
					$("#bookclip_mobile").detach();
				}else{
					$("#bookclip_mobile").attr("id","bookclip");
				}
			}
			
			var _pageEl=$(".page-wrapper[style*='z-index: "+eBookData.totalPageNum+";']");
			_pageEl = parseInt(_pageEl.first().attr("page")) < parseInt(_pageEl.last().attr("page")) ? _pageEl.last() : _pageEl.first();
			if(0<_pageEl.length) $("#bookclip").css({
				left		: _pageEl.offset().left+_pageEl.width(),
				top			: viewframe.offset().top,
				display	: 'block',
				position: 'absolute',
				zIndex	: 100
			});
		};
		
		// 본문 이미지 로딩이 끝나면 로딩페이지와 교체
		croTools.canHTML5() ? _addImg.load(loadingComplete) : loadingComplete(); // IE8 이하 버전에서 load 이벤트가 제대로 동작하지 않으므로 페이지 이미지로 바로 교체
	};
	
	// ★ turn.js 기능 적용
	viewframe.turn({
		page			: eBookCore.currentPageNum,
		pages			: eBookData.totalPageNum,
		display		: eBookCore.func.nowPageViewSingle() ? "single" : "double",
		duration	: eBookData.pageView.duration,
		elevation	: 0,		// Elevation
		gradients	: true,	// Enable gradients
		autoCenter: true,	// Auto center this flipbook
		when			: {

			start : function(event, pageObject, corner){
				croTools.log("page turn start");
				
				var _pageEl=$(".page-wrapper[style*='z-index: "+eBookData.totalPageNum+";']");
				_pageEl = parseInt(_pageEl.first().attr("page")) < parseInt(_pageEl.last().attr("page")) ? _pageEl.last() : _pageEl.first();
				if(0<_pageEl.length) $("#bookclip").css({
					left		: _pageEl.offset().left+_pageEl.width(),
					top		:viewframe.offset().top
				});
			},
			
			turned : function(e, pageNum, pageObj) {
				croTools.log("page turned : "+pageNum);
				eBookCore.func.setCurrentPageNum(pageNum); // 페이지를 직접 드래그하여 넘길 경우 현재 페이지 번호 설정하기 위해 추가
				eBookCore.func.componentsReset();// 페이지 넘김 후 새 페이지 번호로 화면 갱신
				
				/** 확대축소 이벤트 재등록 : turnjs 특성상 사라진 페이지를 다시 추가하면 이전 이벤트가 제거되어있으므로 재등록함 */
				$(".pageview .target:visible")
					.off(eBookCore.eventType.dblclick)
					.on (eBookCore.eventType.dblclick, function(e){
						eBookCore.plugins.zoomview.run($(e.target));
					})// 핀치 확대 이벤트 추가
					.off("pinchOut")
					.on("pinchOut",function(e,i){ return (0<i.distance)&&eBookCore.plugins.zoomview.run($(e.target)); })
					;
			},
			
			missing : function (e, pages) { // 로딩 안된 페이지를 읽음
				//croTools.log("page missing");
				for (var i = 0; i < pages.length; ++i) {
					eBookCore.pageTurn.addPage( pages[i] );
				}
			}
		}
	});
	
};


/**	★ 페이지 갱신( 페이지 번호 변경시 호출 )
**/
eBookCore.pageTurn.update = function(pageNum){

	var _frame = $(".pageview .viewframe");
	if(!_frame.turn){ return; }
	
	return _frame.turn("page") !== pageNum ? _frame.turn("page", pageNum) : eBookCore.pageTurn.resize(); // 페이지 번호가 변하지 않았으면 리사이징 호출임
};


/**	★ 현재 화면에 표시된 페이지 번호들 반환
**/
eBookCore.pageTurn.getVisiblePageNumbers = function(){
	var retNumbers = [];
	$(".pageview .viewframe [page]:visible").each(function(i,e){
		if( eBookData.totalPageNum === parseInt( $(e).css("z-index") ) ){
			retNumbers.push( parseInt( $(e).attr("page") ) );
		}
	});
	return retNumbers;
};


/**	★ 페이지에 북마크 이미지 추가
**/
eBookCore.pageTurn.addBookmarkToPage = function(pageNum, addObj){
	$(".pageview .viewframe .page.p"+pageNum).append( addObj );
};


/**	★ 페이지 표시 크기 반환
**/
eBookCore.pageTurn.getZoomRatio = function(type){
	var _page = $(".pageview .viewframe [page]:visible").first();
	//return _page.width() / eBookCore.pageOrigWidth;
	if(type){
		return ("w"===type.toLowerCase()) ? _page.width() / eBookCore.pageOrigWidth : _page.height() / eBookCore.pageOrigHeight;
	}
	return (eBookCore.pageOrigWidth > eBookCore.pageOrigHeight) ? _page.width() / eBookCore.pageOrigWidth : _page.height() / eBookCore.pageOrigHeight;
};


/**	페이지 출력창 사이즈 조정
**/
eBookCore.pageTurn.resize = function(){
	
	var _viewport = $('.pageview');
	if(1>_viewport.length){ return; }
	
	var _displaySingle	= eBookCore.func.nowPageViewSingle();
	var _frameWidth		= parseInt( _viewport.height() * eBookCore.thumbRatio * (_displaySingle ? 1 : 2) );
	var _frameHeight	= _viewport.height();
	
	if( _frameWidth > _viewport.width() ){ // 페이지 표시 너비가 뷰 너비를 넘어서면 너비를 기준으로 높이를 설정
		_frameHeight	= parseInt( _viewport.width() / _frameWidth * _frameHeight );
		_frameWidth	= _viewport.width();
	}
	
	var _frameLeft		= ( _viewport.width() - _frameWidth ) / 2;
	var _frameTop		= ( _viewport.height() - _frameHeight ) / 2;

	var viewframe = $(".pageview .viewframe").css({
		left	: (_frameLeft		+20)	+ 'px',
		top		: (_frameTop		+20)	+ 'px',
	});

	if(0<viewframe.children().length){
		viewframe.turn("size",		_frameWidth-40, _frameHeight-40				);
		viewframe.turn("display",	_displaySingle ? "single" : "double"	);
		
		// 단면보기시 뒷면이 흰색이 표시되게 수정
		viewframe.find(".p-temporal").css({backgroundColor:'white'});
	}

	// 컴포넌트 리셋
	eBookCore.func.componentsReset();
	
	var _pageEl=$(".page-wrapper[style*='z-index: "+eBookData.totalPageNum+";']");
	if(0<_pageEl.length){
		_pageEl = parseInt(_pageEl.first().attr("page")) < parseInt(_pageEl.last().attr("page")) ? _pageEl.last() : _pageEl.first();
		$("#bookclip").css({
			left	:_pageEl.offset().left+_pageEl.width(),
			top		:viewframe.offset().top,
			height:viewframe.height()
		});
	}
};


/**	turn.js 스크립트 읽기
**/
yepnope({
	test	: croTools.canHTML5(),
	yep	: [ eBookCore.path.pageview + 'turnjs/turn.min.js'],
	nope: [ eBookCore.path.pageview + 'turnjs/turn.html4.min.js'],
	complete: eBookCore.pageTurn.init
});