
/** 스킨 옵션 정보
**/
var eBookSkin = {};
eBookSkin.options = {
	slideShowTimer	: 2,
	pageZoomMin			: 30,
	pageZoomMax			: 200,
	pageZoomDefault	: 30,
	loadingDelay		: 0,
};

eBookSkin.path = {
	image			: "images/",
	slideshow	: "images/slideshow/",
	sound			: "sounds/",
};

/** HTML 객체 생성 정보
**/
eBookSkin.objects = [

	{ type:"window"		, id:"background"	},
	{ type:"window"		, id:"top_window"				, 'class':"mainobjects", children:[
		{ type:"window"		, id:"top_center"				, 'class':"mainobjects", children:[
			{ type:"image"		, id:"top_search_btn"		, 'class':"topobjects", src:"search.svg"		, title:"검색"			, click:"eFnc.wndToggle('#searchlist_window')"		},
			{ type:"logo"			, id:"top_logo"						, src:"logo.png"					, title:"로고이미지"	},
			{ type:"image"		, id:"top_menu_btn"		, 'class':"topobjects", src:"menu.svg"		, title:"메뉴"			, click:"eFnc.wndToggle('#menu_window')"		},
			{ type:"window"		, id:"menu_window"			, 'class':"mainobjects"		, children:[
				{ type:"window"		, id:"arrow_up"			, 'class':"mainobjects" },
				{ type:"window"		, id:"menu_contents"			, 'class':"mainobjects"		, children:[
					{ type:"image"		, id:"menu_category_menu"	, 'class':"menuobjects", src:"menu/category_menu.svg"	, title:"메뉴", tabindex:-1 },
					{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/tablelist.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')"			},
					{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"		, title:"책갈피"		, click:"eFnc.wndToggle('#bookmarklist_window')"	},
					{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()"},
					{ type:"image"		, id:"menu_memo_btn"			, 'class':"menuobjects", src:"menu/memo.svg"				, title:"메모"			, click:"eFnc.runMemo()"},
					{ type:"image"		, id:"menu_draw_btn"			, 'class':"menuobjects", src:"menu/draw.svg"				, title:"판서"			, click:"eFnc.runDrawing()"},
					{ type:"image"		, id:"menu_pdf_down"			, 'class':"menuobjects", src:"menu/pdf.svg"				, title:"PDF 받기"	, click:"eFnc.pdfDown()"},
					{ type:"image"		, id:"menu_print_btn"			, 'class':"menuobjects", src:"menu/print.svg"			, title:"인쇄"			, click:"eFnc.runPrint()", visible:"pc"	},
					{ type:"image"		, id:"menu_thumb_btn"			, 'class':"menuobjects", src:"menu/thumblist.svg"	, title:"섬네일보기"	, click:"eFnc.wndToggle('#thumbnail_window')"	},
					{ type:"image"		, id:"menu_category_sns", 'class':"menuobjects", src:"menu/category_sns.svg"	, title:"SNS", tabindex:-1 },
					{ type:"image" 		, id:"menu_twitter"			, 'class':"menuobjects", src:"menu/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
					{ type:"image" 		, id:"menu_facebook"		, 'class':"menuobjects", src:"menu/facebook.svg"			, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
					{ type:"image" 		, id:"menu_kakaotalk"		, 'class':"menuobjects", src:"menu/kakaotalk.svg"		, title:"카카오톡"		, click:"eFnc.sendSNS('kakaotalk')", visible:"mobile"},
				]},
			]},
			{ type:"booklist"	, id:"booklist"	, 'class':"mainobjects"	},
		]},
	]},
	{ type:"pageview"	, id:"pageview"	},
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects"	, visible:"pc", children:[
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},
		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
	]},
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile", children:[
		{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects_m"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects_m"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
		{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area"		},
		{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area"	},
		{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects_m"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects_m"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
	]},
	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},
	{ type:"thumblist"		, id:"thumbnail_window"	},
];
eFnc.showLoading();