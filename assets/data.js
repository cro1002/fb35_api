
/** 이북 데이터 자료 정의
**/

var eBookData = {
	
	useGuidePopup : 2000, // 16.04.05 박정민 : 가이드팝업사용 속성 추가
	
	// 이북 비밀번호 사용(SHA512)
	// password : testpass
	//password			: "78ddc8555bb1677ff5af75ba5fc02cb30bb592b0610277ae15055e189b77fe3fda496e5027a3d99ec85d54941adee1cc174b50438fdc21d82d0a79f85b58cf44",
	useDebug			: true,		// 디버그 모드 사용 여부
	pageExt				: 'jpg',	// 페이지 이미지 확장자
	totalPageNum	: 12,			// 전체 페이지 수
	
	useLogo			: true,		// 로고 이미지 사용여부
	logoUrl			: "http://www.google.com/",	// 로고 클릭시 링크
	homeUrl			: "http://www.ebook.co.kr",	// 홈버튼 링크
	
	useBooklist	: true, // 이전호 목록 사용여부
	
	pageView : { /** 페이지 넘김 속성 */
		type			: "flip",	// pageView.type + .js
		side			: "auto",	// 페이지 표시 양단면 설정 : auto, single, double
		duration	: 600,		// 페이지 전환 속도
		cover			: true,		// 커버페이지 사용여부 : added 15.10.07
	},
	
	bookList : [ /** 이전호 목록 */
		{ title:"지난호 보기",			url:"",												target:""				},
		{ title:"네이버 새창",			url:"http://www.naver.com",		target:"_blank"	},
		{ title:"이앤아이 현재창",	url:"http://www.ebook.co.kr",	target:"_self"	},
		{ title:"이앤아이 새창",		url:"http://www.ebook.co.kr",	target:"_blank"	},
	],
	
	tableList : [ /** 목차 */
		{ index : "1",		label : "첫페이지",	url:"" },
		{ index : "3",		label : "중간페이지",	url:"" },
		{ index : "5",		label : "14페이지",	url:"" },
		{ index : "6",		label : "18페이지",	url:"" },
		{ index : "7",		label : "20페이지",	url:"" },
		{ index : "8",		label : "30페이지",	url:"" },
		{ index : "9",		label : "40페이지",	url:"" },
		{ index : "10",		label : "50페이지",	url:"" },
		{ index : "11",		label : "끝페이지",	url:"" },
		{ index : "",			label : "외부링크",	url:"http://www.ebook.co.kr" },
	],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[	1,
			{ type:"action", id:"Interaction11435134959473", name:"액션1", height:"16", width:"30", y:"100", x:"100", dispatcher:"Text11435053604405", event:"onRelease", target:"Mp3Player11435050111825", action:"toggleVisible",  },
			{ type:"text", id:"Text11435053604405", name:"글상자1", height:"231", width:"205", y:"524", x:"116", text:"테스트\n1234\n가나다\nabbcc\n100", font:"바탕", textHeight:"24", letterSpacing:"0", leading:"0", align:"left", bold:"false", italic:"false", underline:"false", textColor:"0x000000,100", backgroundColor:"0xFFFFFF,50", borderColor:"0x000000,100", borderWidth:"1", link:"",  },
			{ type:"audio", id:"Mp3Player11435050111825", name:"MP3플레이어1", height:"60", width:"320", y:"393", x:"405", borderWidth:"1", musicURL:"0910253195.mp3", autoplay:"true", scale:"1",  },
			{ type:"video", id:"Movie11435050026485", name:"동영상1", height:"450", width:"550", y:"500", x:"250", movieURL:"0910237787.mp4", normalImage:"0910232846.jpg", borderColor:"0x000000,100", borderWidth:"1",  },
			{ type:"link", id:"Link11435050004029", name:"링크1", height:"211", width:"229", y:"130", x:"520", backgroundColor:"0xffffff,50", rolloverColor:"0xff00ff,50", borderColor:"0x000000,0", borderWidth:"1", link:"address|_blank|http://www.ebook.co.kr/",  },
			{ type:"image", id:"Image11435049946157", name:"그림1", height:"264", width:"395", y:"119", x:"262", normalImage:"0910095317.jpg", rolloverImage:"0910127987.jpg", borderColor:"0x000000,100", borderWidth:"1", link:"popup|0|0|300|300|FBookLinkWindow|http://www.google.com/(_-__-_)300(_-__-_)300|false|false|false", originalSize:"false", }
		],
		[	3,
			{ type:"image", originalSize:"false", link:"address|_blank|http://www.google.com/", borderWidth:"1", borderColor:"0x000000,100", rolloverImage:"http://", normalImage:"0910232846.jpg", name:"그림2", id:"Image21435545737769", height:"66", width:"96", y:"627", x:"498",  },
			{ type:"image", originalSize:"false", link:"page|5", borderWidth:"1", borderColor:"0x000000,100", rolloverImage:"http://", normalImage:"0910232846.jpg", name:"그림1", id:"Image11435545735189", height:"196", width:"99", y:"277", x:"735",  },
			{ type:"text", id:"Text11435545724621", name:"글상자1", height:"246", width:"304", y:"154", x:"253", text:"sdfg211213123", font:"바탕", textHeight:"32", letterSpacing:"0", leading:"0", align:"left", bold:"false", italic:"false", underline:"false", textColor:"0x000000,100", backgroundColor:"0xFFFFFF,100", borderColor:"0x000000,100", borderWidth:"1", link:"", },
			{ type:"text", id:"Text11435545724622", name:"글상자2", height:"100", width:"200", y:"0", x:"590", text:"ㄱㄴㄷㄻㅄ", font:"굴림", textHeight:"32", letterSpacing:"0", leading:"0", align:"left", bold:"false", italic:"false", underline:"false", textColor:"0x000000,100", backgroundColor:"0xFFFFFF,100", borderColor:"0x000000,100", borderWidth:"1", link:"", }
		],
	],
	
	textList : [ /** 본문 검색 */
		/*1*/
		"행정정보공동이용 서비스    ",
		/*2*/
		"목    차    1차시. 행정정보공동이용 업무의 개요 2차시. 열람권한 승인신청 및 회원 사전동의 절차 3차시. 사무별 이용정보 4차시. 금고 처리사항 5차시. 개인정보보호 관련 법령 및 준수사항    ",
		/*3*/
		"1 차시  행정정보공동이용 업무의 개요    1. 추진 배경 및 서비스 개요 2. 업무 일반    ",
		/*4*/
		"1. 추진 배경 및 서비스 개요  (1) 추진배경 ○ 회원의 대출신청시 각종 서류 제출의 어려움 해소 ○ 행정정보를 공동이용함으로서 회원들에 편익 제공 ○ 행정정보공동이용을 통해 전자정부 및 민본ㆍ녹색행정 실현을 위한 사회적 비용절감, 종이문서발생량 및 탄소 배출량 감축 등 정부정책에 일조    (2) 추진경과 ○ 2010.05.28 : 안전행정부에 행정정보공동이용 신청 ○ 2010.09.03 : 새마을금고 확대기관으로 선정 ○ 2010.12.28 : 시범금고(세종) 개통식 개최 ○ 2011.12.31 : 790개 금고 개통 ○ 2014.8월 현재 : 1,216개 금고 이용 (3) 서비스 개요 ○ 행정정보공동이용서비스 개요 금고와 거래하고자 하는 고객이 거래에 필요한 구비서류 없이 창구방문 후 실명증표로 본인임을 확인하고 사전 동의를 하면 바로 창구직원 단말기에서 필요한 행정정 보를 조회ㆍ열람하여 업무를 처리하는 서비스    ",
		/*5*/
		"○ 업무흐름도  구비서류 없이 금고창구 방문 실명확인, 사전동의 창구단말기 조회 업무완료    ➧    ➧    ➧    ➧    실명증표, 사전동의서 징구    GPKI 인증서 로그인    2. 업무 일반  (1) 행정정보공동이용 사용을 위한 업무 절차  주체 중앙회 금고 금고 금고 중앙회지역본부 금고 중앙회지역본부 금고 처리순서 초기데이터 구축 (금고 조직정보 등록) ê 행정전자서명인증서(GPKI) 신청 ê 행정전자서명인증서 발급 (금고 업무처리담당자 직접 발급) ê 단말기 사용승인 신청(금고) ê 중앙회 분임공동이용관리자가 승인 ê 열람권한 승인 신청 ê 중앙회 분임공동이용관리자 업무분장 확인 후 승인 ê 회원의 신청에 따라 정보 이용    ",
		/*6*/
		"(2) 금고 신청사항    가) 금고 신규취급 절차 ○ 금고에서 행정정보공동이용 업무를 취급하고자 하는 금고는 중앙회 본부 또는 지역본부에서 실시하는 행 정정보공동이용 교육 이수 필수 ○ 신청방법 : 신청서 양식을 중앙회 본부에 제출 ○ 「행정정보공동이용 대상기관 지정/해지신청서」,「행정 정보공동이용 위임장」에 동의 ○ 취급금고로 전산에 등록된 시점으로부터 5영업일 이 후부터 이용가능 (조직정보, 사용자정보 등록에 일정기간 소요) 나) 금고 취급 취소 절차 ○ 신청방법 : 신청서 양식을 중앙회 본부에 제출 ○ 「행정정보공동이용 대상기관 지정/해지신청서」 작성 후 제출 ○ 미취급금고로 전산에 등록된 시점부터 신청금고는 행 정정보공동이용 이용 불가 (3) 행정전자서명인증서 신청방법 가) 발급 대상자 ○ 신규 이용자 - 신규신청자는 통합단말에서 「사용자정보 제공동의 서」 및 「보안서약서」에 대한 동의 완료 후 신규신청    ",
		/*7*/
		"- 신청화면 : 통합단말 010248 - 신청내역은 중앙회가 한국지역정보개발원 정보기반과 (인증서관리센터)로 일괄 신청 - 중앙회에서 신청분 일괄 신청시기 : 매주 월요일    사용자정보 신규 신청 [010248]    업무처리구분 : “2-신청”, 신청유형 : “01-신규” 선택    ",
		/*8*/
		"보안서약서의 항목에 대한 동의를 체크 (모든 항목에 동의해야 완료 가능)    사용자정보 제공동의서의 항목에 대한 동의를 체크 (모든 항목에 동의해야 완료 가능)    ",
		/*9*/
		"‘보안서약서, 사용자정보 제공동의서’의 동의를 완료한 후 신청목록이 자동생성    ○ 기존 이용자 - 인증서 기이용자의 인증서가 삭제, 기간 만료가 된 경우, 재발급 신청 - 재발급 신청 : 통합단말 화면번호 [010249] 등록 - 구비서류 : 별도 없음    ",
		/*10*/
		"사용자정보 재발급 신청 [010249]    ‘2-재발급’으로 신청    (나) 행정전자서명인증서 발급순서  금고 직원이 신규(등록화면 : 010248), 재발급(등록화면 : 010249)일 때 각각 통합단말에 신청 완료 ê 등록된 신청 내역은 중앙회에서 일괄로 한국지역정보개발원 정보기반과(인증서관리센터)에 시행문으로 신청 ê 신청자인 금고 직원에게 발급안내 문자 또는 이메일이 수신된 경우 해당사이트(www.gpki.go.kr)에서 인증서 발급 ※ 금고 인터넷용 PC에서 사이트 접속 ê 발급받은 인증서는 USB에 저장하여 단말용PC의 C:에 GPKI폴더를 복사 사용    ",
		/*11*/
		"행정전자서명인증서(GPKI) 발급 절차    ○ 붉은색 안의 발급 버튼을 클릭하여 다음페이지 화면으 로 이동합니다. ○ 인증서 발급 안내 메일을 수신하지 못한 사용자는 인 터넷이 가능한 금고 PC에서 해당 주소 (http://www.gpki.go.kr)를 인터넷 주소창에 입력하고 Enter를 치면 다음페이지의 화면으로 이동하므로 메일 을 수신하지 못하였다 하더라도 동 절차를 이행하면 인증서 발급 대상자라면 인증서 발급이 가능    ",
		/*12*/
		"※ 유의사항 발급을 위한 유효기간이 2주정도 있으나, 메일 수신 즉시 발급받아 저 장하시기 바라며, 유효기간 경과시 재발급신청에 따른 금고 불신 및 번거 로운 절차가 수반되므로 반드시 유효기간내 발급실행    새마을금고중앙 회    ○ 기타 기관을 체크하고, 기관 찾기 팝업창에서 “새마을 금고중앙회”를 입력 후 검색 선택    ",
		/*13*/
		"안 전 행 정부    새마을금고중 앙회    ○ ‘개인용’을 체크하고 아래의 확인 버튼 클릭    ○ 사용자 이름, 주민등록번호 입력 후 확인 버튼 클릭    ",
		/*14*/
		"○ 만일 안내 이메일 또는 문자를 받지 못한 사용자는 임 시비밀번호를 아래와 같이 입력해 보시기 바랍니다. - 영문소문자 share에 연속하여 본인의 주민등록번호 뒤 7자리를 입력 예) share1011111 또는 kfcc1111111    ",
		/*15*/
		"○ 반드시 증적데이터 열람을 위해 암호키를 저장 요망    ",
		/*16*/
		"○ 인증서를 하드웨어에 다운 받은 경우 좌측 그림과 같 이 반드시 C드라이브 아래에 GPKI 폴더가 형성되었는 지 그리고 certificate 아래 class 2에서 4가지 파일이 있는지 확인하시기 바랍니다. ○ 이동식디스크(USB)에 저장한 경우에도 반드시 확인하 여 주시기 바랍니다. (4) 인증서 발급 유의사항 ○ 인증서 발급 유효기간 : 발급관련 문자(이메일) 수신 후 2주 이내 ○ 인증서 발급 유효기간이 경과한 경우, 재발급을 다시 신청해야 함 ○ 인증서 신청 후 2~3일이 경과하여도 안내메일이 도 착하지 않는 경우 www.gpki.go.kr에서 인증서 발급 시 도    ",
		/*17*/
		"(5) 인증서 관리방법 ○ 인증서는 사용컴퓨터 및 USB에 동시 저장(금고보관용 1개, 내부통제책임자관리용 1개) - USB에는 전직원의 인증서를 저장하여 보관 ○ 인사이동, 업무분장변경, 단말기 교체시 인증서 관리방 법 : 인증서를 USB에 저장하여 이동하며, 기존 PC에 설 치된 인증서는 삭제 ○ 비밀번호 분실, 인증서 폐기, 삭제된 경우, 갱신기간 경과시, 인증서발급 유효기간 경과시 : 인증서 재발급 대상 ○ 설정한 인증서 비밀번호는 본인만 알 수 있기 때문 에, 비밀번호 분실시 재발급 신청 요망 ○ 인증서 및 비밀번호 도난, 분실 또는 도용되지 않도록 관리 철저 ○ 인증서는 인증서를 발급받은 업무처리담당직원에 한하 여 사용(공유불가) ○ 인증서는 2인 이상 공동사용 또는 타인에게 양도불 가. 대여 또는 분실에 따른 책임은 본인이 부담하므로 관리 철저 (6) 사용컴퓨터 사용승인 신청 업무처리담당자는 인증서가 발급된 후 사용할 컴퓨터 단말기를 지역본부 경영지원팀 분임공동이용관리자에게 사용승인 신 청하여 승인을 득해야 함(최초인 경우 자동승인됨)    ",
		/*18*/
		"사용 승인 신청(공통)  q    통합단말기 차세대전산시스템 초기 화면 우측 상단의 안의 설정을 클 릭하면 환경설정 부재중 설정 행정정 보관리 메뉴가 나타납니다 여기서 행 정정보관리 메뉴를 클릭하면 아래의 팝업창이 뜹니다  ( ) , , . .    q    상기 팝업창에서 인증서 발급 행정정보공동이용서비스 정보를 열람 할 개인컴퓨터사용관리 정보를 열람 하기 위한 권한을 신청하고 다자열람 신청을 위한 메뉴가 나타 납니다  GPKI , , , .    q    개인컴퓨터사용관리를 선택하고 확인을 누릅니다  .    ",
		/*19*/
		"컴퓨터 사용 승인 신청    ○ 상기 화면이 나타나면 사전에 발급받아 컴퓨터 하드 웨어에 저장되어 있는 행정전자서명인증서(GPKI) 비밀번호 를 안에 입력하여 확인 버튼을 누릅니다.    ○ 상기 화면이 나타나면 IP를 검색버튼을 눌러 나타나는 IP주소를 클릭하여 입력하고, 신청사유에 최초등록을 체크(최 초등록이 아닌 경우는 다른 사유 체크)하고 신청버튼 클릭 ○ 승인권자 : 분임공동이용관    ",
		/*20*/
		"1. 추진 배경 및 서비스 개요 § 추진 배경 - 회원의 대출신청 시 각종 서류 제출의 어려움 해소 - 행정정보 공동이용으로 회원들에게 편익 제공 - 전자정부 및 사회적 비용절감, 종이문서발생량 및 탄소배출량 감축 등 정부정책에 일조 § 서비스 개요 - 금고와 거래하고자 하는 고객이 거래에 필요한 구비서류 없이 창구방문 후 실명증표로 본인임을 확인하고 사전 동의를 하면 바로 창구직원 단말기에서 필요한 행정정보를 조회 · 열람하여 업무를 처리하는 서비스 2. 업무 개요 § 행정정보공동이용 사용을 위한 업무 절차  주체 중앙회 금고 금고 금고 중앙회지역본부 금고 중앙회지역본부 금고 처리순서 초기데이터 구축 (금고 조직정보 등록) ê 행정전자서명인증서(GPKI) 신청 ê 행정전자서명인증서 발급 (금고 업무처리담당자 직접 발급) ê 단말기 사용승인 신청(금고) ê 중앙회 분임공동이용관리자가 승인 ê 열람권한 승인 신청 ê 중앙회 분임공동이용관리자 업무분장 확인 후 승인 ê 회원의 신청에 따라 정보 이용    ⇨⇨⇨학습정리    ",
		/*21*/
		"2 차시    열람권한 승인신청 및 회원 사전동의 절차    1. 열람권한 승인 신청 2. 행정정보 열람사무 추가 시 업무처리 절차    ",
		/*22*/
		"1. 열람권한 승인 신청  (1) 신청대상자 ○ 열람권한 신청시 행정정보를 열람하여 업무를 처리해 야하는 사용자 개개인이 접근권한신청서를 작성 (2) 신청방법 ○ 업무처리담당자는 본인의 사무에서 동 서비스를 이용 하기 위해서는 열람권한을 분임공동이용관리자에게 신청하 여 승인을 받아야 함 ○ 신청서류(문서에 반드시 직인날인) - 내부결재 문서 - 사전에 결재를 득한 업무분장 문서 사본 - 접근권한신청서 ○ 제출처 : 지역본부 경영지원팀 ○ 승인권자 : 분임공동이용관리자(지역본부 경영지원팀)    (3) 유의사항 ○ 본인의 사무는 금고 내부품의서상의 분장업무에 따름 ○ 분장업무와 신청사무가 상이한 경우 해당 사무에 대한 열람권한을 부여 받을 수 없음 ○ 직제규정(예) 제12조의 [별표5]업무분장표상 업무내용 에 있는 업무명으로 작성하여 제출 - 업무분장표로 해당 직원의 업무가 확인이 불가능한    ",
		/*23*/
		"경우 신청 반려 ○ 사용자 또는 조직 정보 변경시 즉시 현행화 협조 - 사용자 또는 금고의 조직정보가 변경되는 경우 변동사 항이 즉각 반영토록 조치 요망 - 대상 : 금고는 임·직원 (입사, 퇴사, 사용자 정보 중 1개 이상 변동이 있는 경우) 또는 조직명칭(금고명) 등 변동 - 조치사항 : 통합단말(010248 행정이용임직원관리)에 사 용자의 변경사항을 등록신청 - 등록항목    성명 차상위기관코드 직급 직위 전자우편 전화번호 기관코드 부서명 주민등록번호 사번 재직상태명 적용일자    ①    ②    ③ ④    ⑤    ⑥    ⑦    ⑧    ⑨    ⑩    ⑪    ⑫    ※ 기재요령 ② 차상위기관코드 : 빈칸으로 둘 것(자동생성) ⑤ 전자우편 : 000@kfcc.co.kr(푸르넷 개인 메일 등록) ⑥ 전화번호 : 문자를 받을 수 있는 개인휴대전화번호 ⑦ 기관코드 : 빈칸으로 둘 것(자동생성) ⑧ 부 서 명 : 새마을금고 전체 명칭 기재 (예 : 청운동새마을금고) ⑨ 주민등록번호 : 엑셀로 작업시 앞뒤공란이 있거나 지 수(1.11111E+12)로 입력되지 않도록 주의하여 가운데 (-)없이 연속으로 작성 ⑩ 사 번 : 금고에서 사용하는 사용자의 사번 ⑪ 재 직 상 태 명 : 신규입사 또는 인증서를 신규로 발급 받아야 하는 직원은 “신규”, 인증서를 발급받은 사용자 중 ① ~ ⑩항목 중 한 항목이라도 변경된 직원은 “변    ",
		/*24*/
		"동”, 인증서를 폐지하지 않을 것이며, 행정정보공동이용 을 사용하지 않을 직원은 “삭제”, 퇴사하여 인증서를 폐지할 직원은 “퇴사”로 기재 ⑫ 적 용 일 자 : 본 서식을 작성하는 당일자 (4) 통합단말기에서 사용자 등록 ○ 화면번호 : [010311]    ",
		/*25*/
		"열람권한 신청    ○ 검색결과의 본인이 담당하여 처리할 이용사무명을 클 릭하면 해당화면 생성    ",
		/*26*/
		"○ 열람근거를 작성한 예와 같이 작성하고, 아래의 열람권 한 신청 버튼 클릭 ○ 필요사항 : 열람권한 승인을 위해서 금고는 해당 직원 이 업무분장상 해당업무를 취급하는지 여부 확인토록 업무분장근거 문서를 지역본부 경영지원팀으로 팩스 또 는 우편 전송 ○ 직원의 업무가 변동될 경우 열람권한 변경을 위하여 변경된 업무분장문서를 즉시 지역본부 경영지원팀으로 제출하고 열람권한 변경    ",
		/*27*/
		"○ 화면 상단의 열람권한 신청 결과를 클릭하여 검색결과 처리상태에 “신청”이 나타나면 『가계자금대출』 사무에 대한 정보 열람 가능 ○ 승인권자 : 지역본부 경영지원팀 ○ 동 절차를 통해 담당자가 이용사무를 중복하여 신청 가능 ○ 단 업무분장이 된 경우에만 신청 가능    ",
		/*28*/
		"2. 행정정보 열람사무 추가시 업무처리 절차  ○ 담당자가 기존 승인받은 열람권한 전부를 “반납” 후 다시 신청 ○ 통합단말 “설정”>“행정정보관리”>“열람권한신청 및 조회화 면”(웹화면)에서 login ① 열람권한신청 결과탭 에서 조회 후 각 이용사무 더 블클릭 ② 권한처리에  반납 으로 하고, 사유를  행정정보공동 이용정보 추가에 따른 반납 으로 입력 후 반납처리 ③ 열람권한 신청탭 에서 반납한 7개 업무를 조회 후  각 이용사무 더블클릭 ④ 신청근거에  행정정보공동이용 정보 추가에 따른 재신 청  입력 후 열람권한 신청 ○ 재신청 후 지역본부 담당자에게 승인 요청(유선) ○ 지역본부 담당자 승인 후 해당 정보 열람 가능 ○ 주민등록등본열람 업무는 최초열람시 고객동의가 필요 한 업무이므로  고객동의서작성여부 와  동의일자 를 반드시 입력하여야 하며 입력시 자동으로 동의서가 인 자되므로 고객에게 출력받은 동의서의 서명을 받아 보 관 ○ 동의서 상단의  사전동의 신청번호 는 열람이 끝난 뒤 행정이용정보열람내역조회(010244)에서 조회 후 해당 일련번호 기입 ○ 행정이용정보조회(0102410P00) 팝업화면에서 F1(도움 말)키를 누르시면 이용가능한 업무 확인 가능    ",
		/*29*/
		"(가) 회원(고객)의 사전동의 ○ 회원(고객) 정보는 정보주체에 대한 실명확인증표로 본 인 여부를 철저히 확인 후 반드시 사전 동의서 징구 후 열람 ○ 관련법령 : 전자정부법 제42조 ○ 사전동의를 하지 않는 경우에는 고객으로부터 구비서류 직접 징구 ○ 사전동의를 하는 경우에는 창구직원은 고객이 사전동의 서에 이용사무와 이용정보를 체크하여 조회ㆍ열람함을 설명 ○ 전산에 사전동의 여부 체크 ○ 최초열람은 반드시 사전동의를 받은 후 조회ㆍ열람 진 행 ○ 재열람, 다자열람, 증적열람시는 사전동의 불필요  ☞ 재열람이란 ▢ 최초열람한 대상정보를 최초열람한 직원이 다시 열람할 필요가 있을 때에는 재열람이 가능 ▢ 최초열람 후 14일 이내에 1회 가능 ▢ 예시 고객A가 방문하여 자녀명의의 계좌를 3개를 개설하고자 하는 경우, - 사전동의서 1회 징구 → 주민등록등본 1회 최초열람, 재열람1회로 계좌 2개 개설    ",
		/*30*/
		"- 사전동의서 다시 1회 징구 → 주민등록등본 1회 최초열람하여 3번째 계좌 개설 ⇒ 계좌3개를 개설하기 위해서는 총 2장의 사전동의서를 징구해야 함    ☞ 다자열람이란 ▢ 동일 금고, 부서(본부 부(실), 지부 팀)에서 업무관련 결 재자가 업무처리담당자의 최초 열람내역을 확인할 필요가 있을 때 열람하는 것 ▢ 사전에 분임공동이용관리자로부터 이용사무별 다자열람 권한을 승인절차 필요 ▢ 예시 대출심사 등의 업무를 위해 최초 열람내역을 열람할 필 요가 있는 업무협조자 또는 결재권자의 경우에는 해당 이 용사무의 최초 열람자가 최초 열람시 업무협조자 또는 결 재권자를 다자열람자로 지정가능    ☞ 증적열람이란 ▢ 행정정보를 최초·재열람한 다음 일정기간이 경과한 후 공동이용센터의 증적관리시스템에 보관되어 있는 기열람 행정정보를 사후관리(민원제기, 감사 등) 등을 위하여 재 차 열람하는 절차 ▢ 분임공동이용관리자는 업무처리담당자가 열람한 정보에 대하여 감사 등의 목적으로 증적자료 열람 가능    ",
		/*31*/
		"▢ 증적자료를 열람하기 위해서는 행정정보를 신청했을 당 시의 인증서를 가지고 있어야 하며, 인증서 갱신 등으로 당시의 인증서를 가지고 있지 않을 때는 행정전자서명 인 증관리센터의 암호관리시스템에서 복구 가능    (나) 유효한 사전동의로 인정받기 위한 조건 ○ 해당 업무의 처리 전에(사전성) 동의를 받아야 함 ○ 당해 동의행위가 본인에 의하여 이루어졌음을 제3자가 객관적으로 인식할 수 있을 정도의 본인확인 절차가 존재해야 함 ○ 행정정보공동이용에 동의하지 아니하는 경우 해당 구비서류를 직접 제출하여야 한다는 사실을 고지함 ○ 업무 처리를 위하여 해당 행정정보를 공동이용 한다는 사실에 대하여 민원인(정보주체) 또는 정당한 대리인이 동의한다는 의사를 표시함 ○ 앞의 내용을 제3자가 객관적으로 사후에 확인할 수 있어야 함 (다) 이용열람내역에 접수번호가 없는 사전동의서의 보관여부 ○ 이용열람내역에 접수번호가 없는 사전동의서도 보관 ○ 고객의 요청으로 접수번호가 없는 사전동의서 페기 시 폐기대장에 기록 ○ (예외처리)행정정보 열람을 여러번 시도하여 마지막 에 한번 열람한 경우 한 장의 사전동의서만 보관    ",
		/*32*/
		"(라) 공제심사 업무에 대한 사전 동의 ○ 금고에서 공제청약서를 받을 때 중앙회제공 사전동의서를 징구하여 지역본부 공제사업팀으로 보내고 지역본부 공제사업팀은 본부 계약심사팀 또는 유지보상팀으로 제출하면 공제관리부 해당팀에서 보관·관리 (마) 행정정보공동이용 사전 동의서 ○ 내부통제책임자가 매월 1회 이상 사전동의 전수 조사 및 매일 열람이용내역 점검  ※ 사전동의가 필요 없는 공시성 정보(10종) - 등기부등본(법인, 토지, 건물 : 3종) - 대장(토지, 임야, 건축물 : 3종) - 도면(지적, 임야 : 2종) - 확인서(개별공시지가, 토지이용계획 : 2종)    ",
		/*33*/
		"○ 붙임서식    ",
		/*34*/
		"⇨⇨⇨학습정리  1. 열람권한 승인 신청 § 열람권한 신청 시 업무처리자 개개인이 접근권한신청서 작성 § 내부결재 후 사전에 결재된 업무분장 문서 사본과 접근권한신청서를 첨부하여 문서로 지역본부에 신청 (문서에 반드시 직인날인) § 동 서비스 이용을 위해 열람권한을 분임공동이용관리자 (지역본부 경영지원팀)에게 신청 § 본인 사무는 금고 내부품의서상의 분장업무에 따르며, 분장업무와 신청사무가 상이한 경우 열람권한을 부여 받을 수 없음 2. 행정정보 열람사무 추가 시 업무처리 절차 § 기존 승인받은 열람권한은 담당자가 반납 후 다시 신청    ",
		/*35*/
		"3 차시  사무별 이용정보    1. 이용사무별 정보 현황 2. 이용사무별 정보이용 방법 3. 열람사무별 이용 방법    ",
		/*36*/
		"1. 이용사무별 정보 현황  (1) 가계자금대출(신용, 담보)    구비서류명 1. 주민등록등본 2. 지방세 납세증명서 3. 개별공시지가 확인서 인감증명서 세목별과세증명서 건물분 주택분 토지분 건물등기부등본 토지등기부등본 법인등기부등본  4. 5. 6. 7. 8. ( , ,    )    보유기관 안전행정부 안전행정부 국토해양부 안전행정부 안전행정부 대법원 대법원 대법원 보유기관 안전행정부 안전행정부 국토해양부 안전행정부 안전행정부 대법원 대법원 대법원 보유기관 안전행정부 안전행정부 국토해양부 국토해양부 안전행정부 안전행정부 대법원 대법원 대법원 국토해양부 국토해양부 국토해양부 국토해양부 국세청    여부    불가 불가 불가 불가 불가 여부  승인 승인 승인    승인 승인 승인    (2) 기업자금대출(신용, 담보) : 1과 동일    구비서류명 1. 주민등록등본 2. 지방세 납세증명서 3. 개별공시지가 확인서 인감증명서 세목별과세증명서 건물분 주택분 토지분 건물등기부등본 토지등기부등본 법인등기부등본  4. 5. 6. 7. 8. ( , ,    )    불가 불가 불가 불가 불가 여부 불가 불가 불가 불가 불가 불가 불가 불가 불가 불가  승인 승인 승인 승인    (3) 신용조사 및 여신심사    구비서류명 1. 주민등록등본 2. 지방세 납세증명서 3. 건축물대장 (4종 ) 4. 토지이용계획확인서 5. 인감증명서 6. 세목별과세증명서 건물분 주택분 토지분 건물등기부 등본 토지등기부 등본 법인등기부 등본 토지대장 임야대장 지적도 임야도 사업자등록증  ( , , 7. 8. 9. 10. 11. 12. 13. 14.    )    ",
		/*37*/
		"(4) 연대보증 및 담보제공    구비서류명 1. 주민등록등본 2. 지방세 납세증명서 3. 개별공시지가 확인서 4. 토지이용계획확인서 인감증명서 세목별과세증명서 건물분 주택분 토지분 건물등기부등본 토지등기부등본 법인등기부등본  5. 6. 7. 8. 9. ( , ,    )    보유기관 안전행정부 안전행정부 국토해양부 국토해양부 안전행정부 안전행정부 대법원 대법원 대법원 보유기관 안전행정부 국가보훈처 보건복지부 보건복지부 대법원 보유기관 국토해양부 보건복지부 국토해양부 대법원 법무부 국세청 소방방재청    여부 불가 불가 불가 불가 불가 여부  승인 승인 승인 승인 승인 승인 승인 승인    (5) 예금 등(계좌개설, 해지, 사고신고, 조건변경 등)    구비서류명 1. 주민등록등본 2. 국가유공자확인원 3. 국민기초생활수급자증명서 4. 장애인증명서 법인등기부등본  5.    불가    (6) 공제심사    구비서류명 1. 건축물대장 (4종 ) 2. 장애인증명서 3. 이륜자동차사용신고필증 건물등기부등본 외국인등록사실증명 사업자등록증 안전시설등완비증명서  4. 5. 6. 7.    여부 불가 불가 불가 불가  승인 승인 승인    2. 이용사무별 정보이용 방법  (1) 이용가능한 경우 ○ 이용사무는 고객사무에 한함 ○ 승인을 받은 7가지 사무에 대하여 필요한 정보 중 보유 기관으로부터 승인된 정보(주민등록등본 포함 10종)만 열람가능    ",
		/*38*/
		"○ 사전동의가 필요없는 공시성 정보(10종)는 예외로 열 람가능 (2) 이용불가한 경우 ○ 내부사무에 해당하는 각종 계약시 제출서류 또는 대출사 후관리를 위한 채권추심 등의 업무 ○ 신청사무와는 별개로 다른 사무에서만 열람 가능한 정보 를 열람하는 경우 ○ 회원(고객)이 신청한 사무일지라도 사전동의가 없는 정보 는 열람불가 ○ 공제심사 신청을 받고 사전 동의서를 징구한 것으로는 대 출관련 정보를 열람할 수 없으며, 그 반대의 경우도 같음 (3) 열람예시 ○ 회원(고객)이 가계자금용도로 대출을 신청한 경우 - 이용사무는 상기 1번 사무 가계자금대출(신용, 담보), 3번 사무 신용조사 및 여신심사, 4번 사무 연대보증 및 담보 제공을 통해서만 필요정보를 열람가능 ○ 가계자금대출(신용, 담보)신청이 있는 경우 - 이용사무 : ‘가계자금대출’과 ‘신용조사 및 여신심사’ 2가 지 사무를 작성 - 이용정보 : 2가지 사무에 필요한 정보를 회원(고객) 본인자 필로 작성 서명케하여 대출서류와 편철보관하며 행정정보 공동이용 대장을 작성(만일 연대보증인이 있거나 담보제 공자가 제3자인 경우 이용사무명에 연대보증 및 담보제 공 사무명을 추가    ",
		/*39*/
		"※ [참고] 이용사무별 정보유형이 상이하므로 필요에 따라 대출의 경우에는 상기와 같이 이용사무를 2가지 이상 작성하여 해당사무에 필요한 정보를 열람할 수 있습니다. (예 : 주민 등록등본은 가계자금대출에서는 “C 형, 신용조사 및 여신 심사에서는 ”G“형, 연대보증 및 담보제공에서는 ”E“형이므 로 유형의 차이는 해당 정보에서 이용사무에 따라 필요한 정보제공 범위의 차이입니다.) ○ 출력된 행정정보의 법적 효력 - 법적 효력 없음 - 참고용으로 사용할 뿐이며, 주민등록등본의 경우 행정정 보공동이용서비스를 통해 출력된 열람용을 「금융실명거래 및 비밀보장에 관한 법률」에 의한 가족관계 확인서류로 사용가능 ※ 2013.12월 발간 금융실명거래 업무해설 75페이지 참조 ○ 출력된 행정정보의 교부여부 : 정보주체일지라도 교부 절 대불가    3. 열람사무별 이용방법  여 신(4종) 가계자금 대출, 기업자금대출, 신용조사 및 여신심사, 연대보증인 및 담보제공 (1) 여신업무시 확인 가능한 서류 ○ 행정정보공동이용 승인서류(2011.1.6일 기준) - 주민등록등본, 건축물관리대장, 토지이용계획확인서,    ",
		/*40*/
		"개별공시지가확인서 (2) 조회화면 (가) 회원기본정보관리(011000)    - 확인 가능한 서류  이용사무 신용조사 및 여신심사 연대보증 및 담보제공 확인가능한 서류 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    ",
		/*41*/
		"(나) 대출상담자료입력(031105)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    연대보증 및 담보제공    ",
		/*42*/
		"(다) 대출신청자료입력(031201)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 연대보증 및 담보제공 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    ",
		/*43*/
		"(라) 담보등록(032201)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 연대보증 및 담보제공 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증 명서 주민등록등본, 개별공시지가확인서, 지방세납세증 명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    ",
		/*44*/
		"(마) 차주 보증인 정보등록관리(031110)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 연대보증 및 담보제공 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증 명서 주민등록등본, 개별공시지가확인서, 지방세납세 증명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    ",
		/*45*/
		"(바) 기업체 현황관리(031113)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    연대보증 및 담보제공    ",
		/*46*/
		"(사) 대출서류 접수관리(039102)    확인 가능한 서류  이용사무 가계자금대출 (신용, 담보) 기업자금대출 (신용, 담보) 신용조사 및 여신심사 확인가능한 서류 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 지방세납세증명서 주민등록등본, 건축물관리대장, 토지이용계획확인서, 지방세납세증명서 주민등록등본, 개별공시지가확인서, 토지이용계획확인서, 지방세납세증명서    연대보증 및 담보제공    ",
		/*47*/
		"예금 등 업무 (신규개설, 해지, 조건변경, 사고신고 등) (1) 수신업무시 확인 가능한 서류 ○ 행정정보공동이용 승인서류(2011.1.6 기준) - 주민등록등본, 국가유공자확인원, 장애인증명서 (2) 조회화면 (가) 회원기본정보관리(011000)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본, 장애인증명서, 국가유공자확인원    ",
		/*48*/
		"(나) 신규입금(020001)    (다) 정기예탁금 재예치(02006)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본, 장애인증명서, 국가유공자확인원    ",
		/*49*/
		"(라) 금고예금해지(020005)    (마) 금고 제사고 신고 등록/해제(020211)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본    ",
		/*50*/
		"(바) 계좌분할(020201)    (사) 명의변경(020203)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본    ",
		/*51*/
		"(아) 회전주기 및 이자지급변경(020222)    (자) 금고일부금액 출금중지 일괄해제(020216)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본    ",
		/*52*/
		"(차) 통장관리(020101)    (카) 금고잔액증명서 발급(020106)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본    ",
		/*53*/
		"(파) 자동화기기 거래신청(020231)    확인 가능한 서류  이용사무 예금 등 업무  (신규개설, 해지, 조건변경, 사고신고 등)    확인가능한 서류 주민등록등본    ",
		/*54*/
		"공제심사    (1) 공제업무(신계약) ○ 해피플랜, 화재공제, 신장기화재공제, 어린이놀이시설 배상책임공제 등에서 가입설계화면에서 건축물관리 대장 확인 가능 ○ 건축물 관리대장 : 4종 - 일반건축물대장 - 건축물대장(총괄) - 집합건축물대장(전유부) - 집합건축물대장(표제부)  ※ 참고 ‣ 건축물대장 종류 : 집합건축물대장, 일반건축물대장 ‣ 집합건축물대장 : 집합건축물대장 표제부, 집합건축물대장 전유부 구분 • 표제부 : 건축물 전체에 대한 내용 즉 아파트나 다세 대주택의 경우 하나의 대지 위에 건축된 1동 건 물의 전체에 대한 것 • 전유부 : 독립된 세대에 대한 것임.    ○ 건축물관리대장은 ‘행정정보공동이용지침’에 의거하 여 정보주체의 사전동의를 받지 않아도 됨(동의서 징구하지 않고 정보열람 가능)    ",
		/*55*/
		"(2) 조회화면 (가) 화재공제가입설계(040136)    ○ 행정이용정보 클릭하면 보조창 팝업    - 주민등록번호 입력, ‘최초열람’ 선택, ‘건축물관리대장’선택 후 조회 클릭하면 행정정보공동이용 서버로 이동 - ‘건축물관리대장’은 고객동의를 받지 않고 조회가능하므로 ‘고객동의서 작성여부’는 미선택    ",
		/*56*/
		"(나) 신장기화재공제가입설계(040141)    - 행정이용정보 클릭하고, 보조창이 뜨면 주민번호 입력 - ‘건축물관리대장’ 선택 후 조회 클릭 (다) 어린이배상가입설계(040151)    - 행정이용정보 클릭하고, 보조창이 뜨면 주민번호 입력 하고 ‘건축물관리대장’ 선택 후 조회 클릭    ",
		/*57*/
		"(라) 해피플랜가입설계(040155)    - 행정이용정보 클릭하고, 보조창이 뜨면 ‘건축물관리대장’ 선 택 후 조회 클릭    ",
		/*58*/
		"전산장애 또는 오류로 인한 전산다운 후 정보를 열람하는 경우 ○ 조회 화면이 나타나고 열람가능한 상태에서 프린트를 하 다가 정지 상태에서 강제 또는 임의로 전산다운 된 경우에 는 우선 재열람을 통해 조회된 정보인지를 확인 ○ 이 때 재열람을 위한 접수번호는 이용열람내역서의 접수 번호를 입력하여 열람하면 이용수수료가 부과되는 정보는 최초열람에 의한 이용수수료가 미부과 ○ 재열람 가능여부를 확인하여도 미열람 상태라면 최초열람 으로 처리 ○ 최초열람은 반드시 사전동의서를 징구하여야 하며, 관련 증빙자료 필수(예 : 계좌개설 신청시 개좌개설 신청서 등)    ",
		/*59*/
		"⇨⇨⇨학습정리  1. 이용사무별 정보 현황 § 가계자금대출·기업자금대출(신용, 담보) - 주민등록등본, 지방세 납세증명서, 개별공시지가 확인서 § 신용조사 및 여신심사 - 주민등록등본, 지방세 납세증명서, 건축물대장, 토지이용계획확인서 § 연대보증 및 담보제공 - 주민등록등본, 지방세 납세증명서, 개별공시지가 확인서, 토지이용계획확인서 § 예금 등 - 주민등록등본, 국가유공자확인원, 국민기초생활수급자증명서, 장애인증명서 § 공제심사 - 건축물대장, 장애인증명서, 이륜자동차사용신고필증    ",
		/*60*/
		"⇨⇨⇨학습정리  2. 이용사무별 정보이용 방법 § 이용가능한 경우 - 이용사무는 고객사무에 한함 - 승인을 받은 7가지 사무에 대하여 필요한 정보 중 　　　　보유기관으로부터 승인된 정보(주민등록등본 포함 　　　　10종)만 열람가능 　　　- 사전동의가 필요없는 공시성 정보(10종)는 예외로 　　　　열람가능 § 이용불가한 경우 - 내부사무에 해당하는 각종 계약시 제출서류 또는 대출사후관리를 위한 채권추심 등의 업무 - 신청사무와는 별개로 다른 사무에서만 열람 가능한 　정보를 열람하는 경우 - 회원(고객)이 신청한 사무일지라도 사전동의가 없는 　　　　정보는 열람불가 　- 공제심사 신청을 받고 사전 동의서를 징구한 것으로는 　　　　대출관련 정보를 열람할 수 없으며, 그 반대의 경우도 　　　　같음    ",
		/*61*/
		"⇨⇨⇨학습정리  ３.　열람사무별 이용방법 § 여신업무시 확인 가능한 서류 - 주민등록등본, 건축물관리대장, 토지이용계획확인서, 개별공시지가확인서 § 수신업무시 확인 가능한 서류 - 주민등록등본, 국가유공자확인원, 장애인증명서 § 공제업무(신계약)시 확인 가능한 서류 - 건축물 관리대장 4종 : 일반건축물대장, 건축물대장(총괄), 집합건축물대장(전유부), 집합건축물대장(표제부)    ",
		/*62*/
		"4 차시  금고 처리사항    1. 제출서류 및 유의사항 2. 가족에 의한 계좌 개설 시 행정정보 공동이용 방법 3. 사전동의서 보관 및 편철 방법 4. 유료정보 수수료에 관한 사항    ",
		/*63*/
		"1. 제출서류 및 유의사항  (1) 금고 신규이용 신청시 서류 ○ 공문서 ○ 첨부서류  행정정보 공동이용 대상기관 지정/지정취소 신청서 1부 ‚ 행정정보공동이용을 위한 위임장(신청일 현재 최근 3개월내 법인인감증명서 1부 포함) 1부 ƒ 새마을금고 조직정보 제공동의서 1부 (2) 접근권한 신청서류 ○ 공문서 ○ 첨부서류  내부품의 업무분장 문서 사본 및 업무분장표 1부 ‚ 접근권한 신청서(소정양식) 각 1부    (3) 제출서류 작성시 유의사항 ○ 타이핑, 고무인 등에 의한 기명 또는 대필 불가 ○ 위임장상 신청일 기재 - 법인인감증명서 발급일 신청일부터 최근 3월 이내 ○ 제출공문서에 직인생략 불가 - 생략 또는 누락된 경우 문서 반송 예정 ○ 업무분장이 정상적인 내부품의에 의하여 분장된 문서일 것 - 업무분장표로 해당 직원이 어떤 업무를 하고 있는지 확    ",
		/*64*/
		"인이 불가한 경우 반려 예정 - 직제규정(예) 제12조의 [별표5]업무분장표상 업무내용 에 있는 업무명으로 작성하여 제출 ○ 1인이 전체 이용사무를 체크한 경우 재작성 제출(반려 대 상) ○ 접근권한신청서 하단은 실무책임자 자필로 작성(업무분장 이 상이 없음 확인) ○ 자리이동시(지점내 자리이용, 본지점간 자리이동) 반드 시 기존 컴퓨터 사용승인 반납처리 철저 ○ 인사이동으로 자리이동 및 업무분장이 변경된 경우, 반 드시 기존 컴퓨터 사용승인 반납 및 업무권한 반납 후 컴퓨터 사용승인 및 업무권한 재신청    2. 가족에 의한 계좌 개설시 행정정보 공동이용 방 법  ○ 본인이 아닌 가족에 의하여 예금계좌 개설시 실명확인을 위해 행정정보공동이용으로 “주민등록등본”(가족관계확    인서류용)을 “열람(출력)”하기 위한 “사전동의” 업무처리방 법 ○ 부모가 미성년 자녀 명의의 계좌를 개설하는 경우 - 미성년자의 주민등록번호로 부모가 법정대리인의 자격 으로 사전 동의 후 “주민등록등본”의 열람(출력)이 가능 ○ 가족이 성년인 자녀 또는 동일세대원(직계존비속에 한함)    ",
		/*65*/
		"명의의 계좌 개설시 “주민등록등본” 열람(출력)이 가능한 경우 - 정보주체인 성년 가족으로부터 대리권을 부여받아 정보주 체인 본인을 대리하여 사전 동의한 경우  ※ 대리권이 부여되었음을 객관적으로 증명할 수 있는 서류 - 위임장 및 본인의 인감증명서 - 대리인의 실명확인증표 사본    - 정보주체가 사전에 작성한 “사전동의서”를 가족이 가지고 창구를 방문한 경우 - 대리권을 부여받지 않은 가족이 동일세대원(직계존비속에 한함)인 경우 창구를 방문한 동일세대원이 사전 동의 후 그 동일세대원의 주민등록번호로 하는 경우    3. 사전동의서 보관 및 편철방법  ○ 업무처리담당자는 매 영업일 마감시 사전동의서를 취합 하여 “행정이용정보 열람내역 조회표”와 함께 금고의 내부 통제책임자의 결재 득한 후 보관 ○ 사전동의서와 “행정이용정보열람내역 조회”원본을 함께 별도 편철 ○ 행정정보공동이용 중 고객의 요청이 있어 열람이 중지된 경 우, 시스템의 오류로 열람이 중지(이용사무접수번호 미생성 된 것)된 경우 고객의 폐기 요청이 있는 경우, 출력물은 폐기 하고 “행정정보공동이용 열람내역 폐기대장”에 기록, 관리    ",
		/*66*/
		"(1) 일일정사내역 ○ 담당자 : 금고 내부통제책임자 ○ “행정이용정보 열람내역 조회표”와 사전동의서를 대사하 여 실명확인여부, 매수, 열람대상자 일치여부 등을 확인    (2) 월간정사내역 ○ 담당자 : 금고 내부통제책임자 ○ 개인정보보호 실태점검 실시, 행정정보공동이용 자체 실 태점검 실시 (3) 개인정보보호 및 행정정보공동이용관련 교육 실시 ○ 주기 : 매분기 1회 정기적으로 실시 ○ 교육실시관련 사진 및 내부결재문서 형태로 실시내역 보 관    ",
		/*67*/
		"4. 유료정보 수수료에 관한 사항  (1) 유료정보 현황    구 분 가 격 사용가부    주민등록등본 30원 / 건 가능    등기부등본 500원 / 건 불가    (2) 고객으로부터 수수료 징수하는 경우 ○ 주민등록등본 수수료(30원)의 경우 기본적으로 면제(v) 로 되어 있으나 고객에게 징수할 경우  수수료면제 에   v  를 지우고 처리하면 30원이 전표처리(회계처리만)됨 ※ 30원을 초과하는 금액을 고객으로부터 징수하는 것 은 불가 ○ 해당 전표는 전표내역조회(051105)에서 재발행 하여야 함 ○ 고객이 영수증을 원할 경우 수수료영수증발급(013302)에 서 처리 ○ 유료정보 수수료의 정산방법 - 정산주기 : 매월 1일~말일(1개월 단위) - 금고별 수수료 계산 : 이용건수×30원(주민등록등본 건당 정보 이용료) - 금고 출금방법 : 금고 일시예치금에서 일괄 출금처리 - 중앙회에서 안행부 주민과 계좌로 일괄 송금처리    (3) 유료정보 회계처리 ○ 회원으로부터 수납시    ",
		/*68*/
		"- 현금 XXX / 기타수입수수료 XXX ○ 보유기관으로 지급하기 위해 중앙회로 대체시 - 기타지급수수료 XXX / 중앙회일시예치금 XXX ○ 중앙회처리시 - 일시예탁금 XXX / 행정정보이용가수금 XXX - 행정정보이용가수금 XXX / 보통예치금 XXX    ",
		/*69*/
		"⇨⇨⇨학습정리  1.　제출서류 및 유의사항 § 금고 신규이용 신청시 서류 - 공문서, 첨부서류(행정정보 공동이용 대상기관 　　　　지정/지정취소　신청서 1부, 행정정보공동이용을 위한 　　　　위임장 1부, 새마을금고 조직정보 제공동의서 1부) § 접근권한 신청서류 - 공문서, 첨부서류(내부품의 업무분장 문서 사본 및 업무분장표 1부, 접근권한 신청서 각 1부) 2.　가족에 의한 계좌 개설 시 행정정보 공동이용 방법 § 부모가 미성년 자녀 명의의 계좌를 개설하는 경우 - 부모가 법정대리인의 자격으로 사전 동의 후 “주민등록등본”열람(출력) § 가족이 성년인 자녀 또는 동일세대원(직계존비속에 한함) 명의의 계좌 개설시 “주민등록등본” 열람(출력)이 가능한 경우 - 정보주체인 성년 가족으로부터 대리권을 부여받아 정보주체인 본인을 대리하여 사전 동의한 경우 - 정보주체가 사전에 작성한 “사전동의서”를 가족이 　　　 가지고 창구를 방문한 경우 　　- 대리권을 부여 받지 않은 가족이 동일세대원 　　　(직계존비속에 한함)인 경우 창구를 방문한 동일세대원이 　　　사전 동의 후 그 동일세대원의 주민등록번호로 열람하는 　　　경우    ",
		/*70*/
		"⇨⇨⇨학습정리  3.　사전동의서 보관 및 편철방법 § 업무처리담당자는 매 영업일 마감시 사전동의서를 취합하여 “행정이용정보 열람내역 조회표”와 함께 금고의 내부통제책임자의 결재 득한 후 보관 § 사전동의서와 “행정이용정보열람내역 조회” 원본을 함께 편철 § 행정정보공동이용 중 고객의 요청이 있어 열람이 중지된 경우, 시스템의 오류로 열람이 중지된 경우, 고객의 폐기 요청이 있는 경우 - 출력물은 폐기하고 “행정정보공동이용 열람내역 폐기대장”에 기록, 관리 4.　유료정보 수수료에 관한 사항 § 주민등록등본 수수료(30원)은 기본적으로 면제(v) - 고객에게 징수할 경우 수수료면제에 V를 지우고 처리 - 30원이 전표처리(회계처리만) 됨 § 30원을 초과하는 금액을 고객으로부터 징수하는 것은 불가능    ",
		/*71*/
		"5 차시  개인정보보호 관련 법령 및 준수사항    1. 부적정 사례 2. 법규 준수사항    ",
		/*72*/
		"1. 부적정 사례  (1) 부적정사례 (가) 사전동의서 미징구 또는 요건을 갖추지 못한 경우 ○ 전자정부법 제42조(정보주체의 사전동의) 제1항 위반 ○ 부적절 이용사례  - 정보주체에게 사전동의를 받지 않고 행정정보 열람 - 사전동의서에 공동이용의 목적, 공동이용 대상 행정정보 및 이용범위, 공동이용 대상 이용기관의 명칭 미기재    (나) 안전행정부 승인 이용사무외 목적으로 행정정보 이용 ○ 승인 이용사무 - 예금 등 업무(계좌개설, 해지, 사고신고, 조건변경 등) - 가계자금대출(신용, 담보) - 기업자금대출(신용, 담보) - 신용조사 및 여신심사 - 연대보증 및 담보제공 - 공제(보험) 심사    ",
		/*73*/
		"○ 부적절 이용사례  - 전자금융 가입시 이용 불가 - 임원 또는 대의원 선거시 주소확인용 이용 불가 - 금고 채권 추심을 위하여 채무자 주소 확인용 이용 불가 - 공제가입 심사시 주민등록등본은 승인 정보 아니므로 이용 불가 - 통합단말기 이용사무와 다른 업무에 이용할 목적으로 열람 출력 불가    (다) 출력한 열람정보 복사사용 및 정보주체 교부 행위 ○ 전자정부법 제35조(금지행위) 제7호 위반 ○ 부적절 이용사례  - 동일인 명의의 계좌를 수개 개설시 복사 첨부 행위 - 사전동의서 이면에 복사하는 행위 - 출력된 행정정보 원본 또는 복사본을 정보주체에게 교부하는 행위    ",
		/*74*/
		"(라) 공동이용 열람대상자 및 열람외 대상자 개인정보 관리 미흡 ○ 개인정보법 제24조(고유식별정보의 처리 제한) 위반 ○ 부적절 사례  - 주민등록번호가 포함된 주민등록등본 등을 출력·보관 시 분실·도난·유출·변조 방지 등을 위한 안전성 확보조치 미흡(암호화, 시건장치 등) - 행정정보 열람대상자외 개인정보는 음영표시 등으로 삭제 처리(ex. 주민등록등본으로 가족관계 확인 시, 대상자외 주 민등록번호 등)    (마) 개인정보보호 및 보안 교육 미실시 ○ 행정정보공동이용지침(안행부예규 제100호) 제32조 제4항 위반 ○ 부적절 사례  - 개인정보보호 교육 관련 연간 계획 수립(내부결재) 후 주기적 교육 실시 - 신규 신청자 대상 업무방법 및 보안교육 철저 - 교육관련 사진 및 공문(내부결재) 형태로 교육실시 결과 보관    ",
		/*75*/
		"(바) 「행정정보공동이용 열람내역 폐기대장」 작성 누락 ○ 새마을금고 행정정보공동이용지침 제20조 제3항 위반 ○ 부적절 사례  - 행정정보공동이용 중 고객의 요청 등으로 중지사유가 발생 하여 열람중지 또는 출력물을 폐기했음에도「행정정보공동 이용 열람내역 폐기대장」에 기록·관리하지 않음    (사) 기타 부적정 이용사례 ○ 타인에게 행정전자서명 인증서(GPKI) 사용 및 대여 ○ 자리이동, 인사이동에 따른 단말기 반납 및 인증서 삭제 미이행 ○ e하나로민원시스템 특이이용패턴 검출(장기 미사용, 이용횟 수 과다열람 등)    2. 법규 준수사항  (1) 전자정부법 (가) 10년 이하 징역(제76조제1항) ○ 행정정보의 처리업무를 방해할 목적으로 행정정보를 위 조ㆍ변경ㆍ훼손하거나 말소하는 행위 ○ 5년 이하 징역 또는 5천만원 이하 벌금(제76조제2항제1 호·제2호) ○ 행정정보 공동이용을 위한 정보시스템을 정당한 이유 없 이 위조ㆍ변경ㆍ훼손하거나 이용하는 행위    ",
		/*76*/
		"○ 행정정보를 변경하거나 말소하는 방법이나 프로그램을 공개 ㆍ유포하는 행위 ○ 3년 이하 징역 또는 3천만원 이하 벌금(제76조제3항제 1~5호) ○ 공개하여서는 아니되는 행정정보를 정당한 이유없이 누 설하는 행위 ○ 행정정보를 권한 없이 처리하거나 권한 범위를 넘어서 처리하는 행위 ○ 행정정보를 권한 없이 다른 사람으로 하여금 이용하게 하는 행위 ○ 안전행정부장관의 공동이용 승인을 받은 기관이 승인받 지 아니한 방식으로 행정정보를 공동이용하거나 승인받 지 아니한 정보시스템 또는 저장장치에 행정정보의 내용 을 저장하는 행위 ○ 직무상 알게 된 비밀 누설 및 도용한 자    (나) 2년 이하 징역 또는 7백만원 이하 벌금(제76조제4항) ○ 거짓이나 그 밖의 부정한 방법으로 행정기관등으로부터 행정정보를 제공받거나 열람하는 행위    ",
		/*77*/
		"※ 사전동의 관련 과태료  위 반 행 위 (전자정부법 제78조제1항제1호) 1. 법 제42조제1항을 위반하여 정보주체에게 공동이용에 대한 사전동의를 받지 아니한 경우 2. 정보주체의 사전동의서는 받았 으나 법 제42조제1항에 따른 요 건을 갖추지 못 한 경우 1회 위반 400 만원 200 만원 과태료금액 2회 3회 위반 위반 이상 1,200 만원 600 만원 2,000 만원 1,000 만원    (2) 개인정보보호법 (가) 10년 이하 징역 또는 1억원 이하의 벌금(제70조) ○ 공공기관의 개인정보 처리업무를 방해할 목적으로 공공 기관에서 처리하고 있는 개인정보를 변경하거나 말소하 여 공공기관의 업무 수행의 중단·마비 등 심각한 지장을 초래한 자    (나) 5년 이하 징역 또는 5천만원 이하 벌금(제71조) ○ 정보주체의 동의를 받지 아니하고 개인정보를 제3자에 게 제공한 자 및 그 사정을 알고 개인정보를 제공받은 자 ○ 수집목적의 범위를 초과하여 개인정보를 이용하거나 제 3자에게 제공한 자 및 그 사정을 알면서도 영리 또는 부 정한 목적으로 개인정보를 제공받은 자 ○ 제23조을 위반하여 민감정보를 처리한 자 ○ 제24조제1항을 위반하여 고유식별정보를 처리한 자    ",
		/*78*/
		"○ 업무상 알게 된 개인정보를 누설하거나 권한 없이 다른 사람이 이용하도록 제공한 자 및 그 사정을 알면서도 영 리 또는 부정한 목적으로 개인정보를 제공받은 자 ○ 다른 사람의 개인정보를 훼손, 멸실, 변경, 위조 또는 유 출한 자    (다) 3년 이하 징역 또는 3천만원 이하 벌금(제72조제2호· 제3호) ○ 거짓이나 그 밖의 부정한 수단이나 방법으로 개인정보를 취득하거나 개인정보 처리에 관한 동의를 받는 행위를 한 자 및 그 사정을 알면서도 영리 또는 부정한 목적으로 개 인정보를 제공받은 자 ○ 직무상 알게 된 비밀을 누설하거나 직무상 목적 외에 이 용한 자    (라) 2년 이하 징역 또는 1천만원 이하 벌금(제73조) ○ 안전성 확보에 필요한 조치를 하지 아니하여 개인정보를 분실·도난·유출변조 또는 훼손당한 자 ○ 정정·삭제 등 필요한 조치를 하지 아니하고 개인정보를 계속 이용하거나 이를 제3자에게 제공한 자 ○ 개인정보의 처리를 정지하지 아니하고 계속 이용하거나 제3자에게 제공한 자    ",
		/*79*/
		"(3) 개별 법령 (가) 주민등록법 제37조(벌칙) ○ 3년 이하 징역 또는 1천만원 이하 벌금 ○ 주민등록증을 채무이행의 확보 등의 수단으로 제공한 자 또는 그 제공을 받은 자 등    (나) 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 71조(벌칙) ○ 5년 이하 징역 또는 5천만원 이하 벌금 ○ 이용자의 동의를 받지 아니하고 개인정보를 수집한 자 등    (다) 신용정보의 이용 및 보호에 관한 법률 제50조(벌칙) ○ 5년 이하의 징역 또는 5천만원 이하의 벌금 ○ 신용정보주체의 사전동의 위반 및 목적외 사용 등    ",
		/*80*/
		"행정정보공동이용서비스 자주하는 질문(FAQ)    Q1    이메일은 금고 푸르넷 메일 계정만 가능한가요?    ◉ 푸르넷 메일 계정만 가능 ◉ 근거 : 중앙회 정보보호팀-14(2012.1.10)호 ◉ 기존 일반메일 병행사용자는 임직원정보관리(010311)에서 푸르넷 메일주소로 변경요망    Q2    이용 및 접근권한 신청, 각종 서류제출 및 각종 승인요청은 어디로 합니까?    ◉ 모든 신청 및 승인 요청은 지역본부 경영지원팀에서 처리    Q3    출력된 정보를 복사해서 사용할 수 있나요?    ◉ 복사 절대 불가(열람이 원칙) ◉ 예외의 경우 ☞ 법령에 의해 출력이 필요한 경우만 보유기관에서 출력을 승인 ☞ 동일인이 여러 개의 계좌를 개설하더라도 실명확인 절차에 따라 처리 하되 복사본 첨부는 불가    ",
		/*81*/
		"Q4    자리를 이동한 경우 조치 방법?    ◉ 직원이 자리를 단순 이동한 경우 ☞ 이동 전 자리의 단말기 사용승인을 반려 또는 취소 ☞ 이동한 자리에서 새로이 통합단말기에서 단말기 사용신청 ☞ 지역본부 경영지원팀 담당자에게 승인을 요청(유선) 후 승인받아 사용 ◉ 인사이동으로 자리이동이 된 경우(업무분장까지 변경된 경우) ☞ 단말기 사용승인 반려 및 취소 ☞ 단말기 사용 및 접근(열람)권한을 신청하여 승인받은 후 사용 (최초 접근권한 신청시와 동일하게 처리 공문서 시행-업무분장내부 품의 문서 사본 및 접근권한 신청서를 첨부) ◉ 문서접수 및 승인처리 : 지역본부 경영지원팀    Q5    개인컴퓨터 사용관리를 등록해야 하는 경우는?    ➀ 신규 업무담당자인 경우 ➁ PC의 IP가 변경된 경우 ➂ IP는 그대로인데 PC자체를 변경한 경우(새PC로 교체) ➃ PC는 그대로인데 WINDOW를 다시 세팅한 경우(최근 빈번하게 발생) ◉ ➁➂➃의 경우 기존 단말기를 반납/요청취소하고 다시 등록!    Q6    컴퓨터 하드디스크에 저장되었던 인증서가 포맷 등의 이유로 폐기된 경우 인증서 발급은 어떻게 해야 하나요?    ◉ 재발급 신청 요망(신청화면 : 통합단말 010249) ◉ 신청전 확인사항 : [임직원정보관리(010311)]의 휴대전화번호, e-메일 주소    ",
		/*82*/
		"Q7    “이용사무접수번호”가 없는 경우에도 사전 동의서를 징구해야 하나 요?    ◉ 사전동의서는 “사전”에 징구하는 것으로 사전동의서 출력 후 고객으 로부터 행정정보 열람 동의를 반드시 득한 이후에 행정정보 열람을 시도 해야 함 ◉ 사전동의서가 출력되지 않아 없는 경우 이외에는 고객으로부터 동의를 받은 사전동의서는 “이용사무접수번호”가 없더라도 보관함이 원칙 ◉ 업무처리과정에서 전산의 문제로 열람이 정상적으로 완료되지 못하여 고 객이 사전동의서 폐기를 요청하는 경우, 폐기대장에 기록 후 사전동의서 를 폐기    Q8    주민등록등본과 같이 여러 번 열람을 시도하였으나, 마지막에 한번만 열람을 하게 된 경우에는 사전동의서를 한번만 징구해도 되나요?    ◉ 한 번의 사전 동의서만 징구    Q9    출자회원 가입시 동 서비스 이용이 가능 하나요?    ◉ 출자회원도 이용 가능 ◉ 출자금도「금융실명거래 및 비밀보장에 관한 법률」에서 규정하고 있 는 금융거래에 해당    Q10 e-하나로 민원서비스 인터넷 포털(바로접속)을 이용할 수 있나요? ◉ 이용 불가 ◉ 새마을금고는 전용브라우저 방식(통합단말로 연결)으로 접속하여 이용 가능    ",
		/*83*/
		"Q11    금고의 실정상 한사람이 여러 업무를 취급해야 하는 경우가 많습니 다. 접근권한 신청시 ‘전체 이용사무’를 체크해도 되나요?    ◉ 1인 전체사무 체크 불가 ◉ 근거 ☞「전자정부법」에 최소한의 접근권한을 부여하도록 규정 ☞ 1인에게 업무가 집중됨은 서비스를 금고가 이용할 만큼의 규모가 되 지 못한다는 방증으로, 행정기관에서 볼 때 개인정보 보호에 취약한 것으로 평가되어 이용에 제한이 있을 수 있음    Q12    내부통제책임자는 매일 일상정사업무(일일업무) 및 월간업무로 무 엇이 있습니까?    ◉ 일일업무 : 사전 동의서와 이용열람내역을 대사 ☞ 부정한 열람이나 출력이 없었는지를 확인하고 관리 ☞ 부정한 열람이 발견되면 즉시 문서로 지역본부에 보고 ◉ 월간업무 ☞ 행정정보공동이용 자체 실태점검 등록(매월 15일까지) ◉ 분기업무 ☞ 행정정보공동이용 교육을 실시(동일내용 반복실시 가능) ◉ 연간업무(연간1회 이상 실시) ☞ 개인정보보호 실태점검표 [행정정보공동이용 지침(별지 제9호)]를 점검    Q13 임원도 사용자등록해도 되나요?    ◉ 등록하지 않음    ",
		/*84*/
		"Q14    사전 동의서 상단의 사전동의 신청번호는 어떤 것을 기재해야 하나 요?    ◉ 행정이용정보열람내역조회(010244)에서 조회 후 해당 일련번호 기 입    Q15 사전동의서 및 관련서류의 편철은 어떻게 하나요?    ◉ 주민등록등본 출력시 열람용으로 출력, 해당 서류와 편철 보관 ◉ 보존기관 경과시 폐기대장에 내역을 기록하고 지침에 따라 폐기    Q16    전자금융 가입 및 카드발급시에 행정정보공동이용서비스를 이용할 수 있나요?    ◉ 이용불가 ◉ 이용가능한 경우 ☞ 가계자금대출(신용, 담보) ☞ 기업자금대출(신용, 담보) ☞ 신용조사 및 여신심사 ☞ 연대보증 및 담보제공 ☞ 예금 등 업무(계좌개설, 해지, 사고신고, 조건변경 등) ☞ 공제(보험)심사    Q17    가족의 계좌개설시 또는 계좌해지시 행정정보공동이용으로 주민등 록등본을 확인할 수 있나요?    ",
		/*85*/
		"※ 참고용임 / 추가 질의사항이 있는 경우, 반드시 중앙회 수신팀으로 문 의 □ 계좌개설시(가족에 의한 대리 개설인 경우) ▷ 통장 신규시 가족 범위 : 배우자, 직계존비속, 배우자의 부모 ▷ 대리인의 실명확인증표와 ‘가족관계 확인서류’만으로 계좌개설이 가능 ▷ 행정정보공동이용에 의하여 출력한 주민등록정보를 ‘가족관계 확인 서류’로 이용 가능 ▷ 근거 : 「금융실명거래거래 및 비밀보장에 관한 법률」 ▷ 행정정보공동이용서비스를 이용하여 주민등록등본 열람시 업무처  구분 부모가 미성년 자녀 명의 계좌개설시 (부모가 법정대리인 경우) 성년인 자녀 또는 동일세대원 명의 계좌 개설시 열람시 입력 주민등록번호 미성년 자녀 부모 성년인 자녀 또는 동일세대원 금고에 방문한 가족 열람 가능 여부 가능 생략 가능 가능 가능 가능 징구 필수 생략 가능 위임장 및 인감증명서 징구    □ 계좌해지시(가족에 의한 대리 해지인 경우) ▷ 계좌해지 관련 근거 : 「민법」 “채무변제”관련 사항 ▷ 계좌를 해지할 수 있는 경우 * 본인 또는 대리인(반드시 위임장과 인감증명서 지참 ) ▷ 행정정보공동이용서비스를 이용하여 주민등록등본 열람시 업무처리  구분 부모가 미성년 자녀 명의 계좌해지시 (부모가 법정대리인 경우) 열람시 입력 주민등록번호 미성년 자녀 부모 성년인 자녀 또는 동일세대원의 주민등록번호로 열람 금고 방문 가족의 주민등록번호로 열람 열람가능 여 부 가능 생략 가능 가능 위임장 및 인 증 서 구 감 명 징 비고 기본증명서 및 가족관계증 명서로 법정대리인 확인    성년인 자녀 또는 동일세대원 명의 계좌 해지시    가능 징구 필수 가능    계좌해지시 대리인의 경우 위임장 및 인감증명서가 필수적으로 있어야 하는 바, 구비서류가 없는 가족 의 행정정보열람은 무의미    ",
		/*86*/
		"Q18    행정전자서명인증서를 C:드라이브(자동으로 설치됨)에 다운받았는 데 실제로 쓸려니 인증서 내역에 안뜹니다. 어떻게 해야 하나요?    ◉ 인증서 발급시 저장 위치는 C:드라이브(하드디스크)에 직접 저장 ※ 기존 USB에 등록된 인증서를 바탕화면에 다운받은 경우, C:드라이브로 이동 후 이용 ◉ 인증서 USB 저장방법 (1) C:드라이브에 GPKI폴더 생성(하드디스크에 저장완료) (2) USB에 GPKI폴터 압축 저장 또는 인증센터 홈페이지에서 인증서관리창을 통해 USB로 복사(망분리 이후 금고PC에서 복사는 불가)    Q19 개명을 한 경우 행정전자서명인증서를 다시 신청해야 하나요?    ◉ 다시 “신규” 신청해야 함 ◉ 신청순서 (1) 통합단말010248에서 舊이름 “퇴사”처리 후, 新이름을 “신규” 로 등록 ※ “변경”대상이 아님 (2) 舊이름에 대해 행정정보센터에 유선으로 삭제를 요청해야 하기 때문 에, 반드시 중앙회 사업지원팀으로 전화 요망    ",
		/*87*/
		"1.　부적정 사례    ⇨⇨⇨학습정리  § 사전동의서 미징구 또는 요건을 갖추지 못한 경우 § 안전행정부 승인 이용사무외 목적으로 행정정보 이용 § 출력한 열람정보 복사사용 및 정보주체 교부 행위 § 공동이용 열람대상자 및 열람외 대상자 개인정보 관리 미흡 § 개인정보보호 및 보안 교육 미실시 § 「행정정보공동이용 열람내역 폐기대장」 작성 누락    2.　법규 준수사항 § 전자정부법 - 10년 이하 징역(제76조제1항) - 5년 이하 징역 또는 5천만원 이하 벌금 (제76조제2항제1호·제2호) - 3년 이하 징역 또는 3천만원 이하 벌금 (제76조제3항제1~5호) - 2년 이하 징역 또는 7백만원 이하 벌금 (제76조제4항) § 개인정보보호법 - 10년 이하 징역 또는 1억원 이하의 벌금(제70조) - 5년 이하 징역 또는 5천만원 이하 벌금(제71조) - 3년 이하 징역 또는 3천만원 이하 벌금 (제72조제2호·제3호) - 2년 이하 징역 또는 1천만원 이하 벌금(제73조)    ",
	],
};