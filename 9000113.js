//load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(java.lang);
importPackage(Packages.client.inventory);

var time, Year, Month, Day, Today, Hour, Minute, NowTime;
var selpo, selcash;
var potion = [	
    2000000, 2000001, 2000002, 2000003, 2000006, 2000004, 2000005, 2022000, 2022003, 
    2001001, 2001002, 2000007, 2000008, 2000009, 2000010, 2000011, 2020012, 
    2001000, 2010000, 2010002, 2010003, 2010001, 2010004, 2020001, 2010005, 2020000, 2020002, 
    2020003, 2020004, 2020005, 2020006, 2020007, 2020008, 2020009, 2020010, 2020016, 2020011, 
	2050000, 2050001, 2050002, 2050003, 2050004, 2120000, 2260000, // 상태이상회복, 펫먹이
	2002004, 2002006, 2002002, 2002007, 2022024, 2022025, 2022089, 2022153,// 버프류
	2330000, 2330001, 2330002, 2330003, 2330004, 2330005, // 불릿
	2070000, 2070001, 2070002, 2070003, 2070004, 2070008, 2070009, 2070010, 2070011, // 표창
	2040803, 2040804, 2040805, // 장공
//	2040800, 2040801, 2040802, 2040823, 2040824, 2040825, // 장민, 장체
	2040300, 2040301, 2040302, // 귀지
//	2040316, 2040317, 2040318, 2040319, 2040321, 2040323, // 귀민, 귀행
    4010000, 4010001, 4010004, 4010003, 4010005, 4010002, 4010006, 4010007, // 광석 원석
	4020000, 4020001, 4020002, 4020003, 4020004, 4020005, 4020006, 4020007, // 보석 원석
	4011000, 4011001, 4011002, 4011005, 4011003, 4011004, 4011006, 4011008, // 가공 광석
	4021000, 4021001, 4021002, 4021004, 4021003, 4021005, 4021007, 4021006, 4021008, // 가공 보석
	4004004, 4004000, 4004002, 4004001, 4004003,  // 크리스탈 원석
//	4011007, 4021009, 4000244, 4000245, 4020009, 4180003, // 별돌, 달돌, 드영, 드비, 시조, 아쿠아리움 에그
	
	/*
	2020014, 2020015, 2020013, // 이슬, 순록의 우유	
	2022070, // 운영자의 축하 
	5121008, // 생일 축하해 캐시탭
	
	
	3010007, 3010063, 3010067, 3010132, 3010009, 3010154, 3010186, 3010644, 3010205, 3010207, 
	3010288, 3010298, 3010374, 3010421, 3010429, 3010430, 3010435, 3010436, 3010438, 3010439, 
	3010440, 3010447, 3010448, 3010450, 3010455, 3010465, 3010674, 3010682, 3010066, 3010018,
	3010690, 3010134, 3010065, 3010064, 3010434, 3010113, 3010114, 3010129, 3010131, 
	3010055, 3010021, 3010049, 3010402, 3010403, 3010404, 3010433, 3010437, 3010442, 
	3010600, 3010601, 3010611, 3010612, 3010643, 3010406, 3010130,// 의자
	*/
	];
var chair = [	
	3010007, 3010063, 3010067, 3010132, 3010009, 3010154, 3010186, 3010644, 3010205, 3010207, 
	3010288, 3010298, 3010374, 3010421, 3010429, 3010430, 3010435, 3010436, 3010438, 3010439, 
	3010440, 3010447, 3010448, 3010450, 3010455, 3010682, 3010066, 3010018, 3010690, 
	3010134, 3010065, 3010064, 3010434, 3010113, 3010114, 3010129, 3010131, 3010055, 3010021,
	3010049, 3010674, 3010402, 3010403, 3010404, 3010433, 3010437, 3010442, 3010600, 3010601,
	3010611, 3010612, 3010643, 3010406, 3010130,  // 의자 54개
	];
	
// 뽑기목록 다음줄 건너띄기	
var enter = 
	[
    2000009, 2000011, 2002006, 2002007, 2022025, 2022070, 2022153, 2070013,
    2040804, 2040800, 2040802, 2040824, 2040300, 2040302, 2040317, 2040319, 2040323,
    3010063, 3010065, 3010066, 3010114, 3010131, 3010132, 3010191, 3010205, 3010288, 
	3010374, 3010402, 3010404, 3010429, 3010434, 3010435, 3010437, 3010438, 3010440, 
	3010448, 3010455, 3010514, 3010600, 3010611, 3010636, 3010643, 3010130, 3010690,
    4004002, 4004003, 4010005, 4020001, 4020003, 4020005, 4020007,
	];
   
var noenter = [2050002, 2010000, 2010004, 2020002, 4011001, 4011004, 4021001];
function UpdateTime() { //매 status 마다 시간 동기화
	time = System.currentTimeMillis();
	NowTime = new java.text.SimpleDateFormat("YYYY년 M월 d일 HH시 m분 s초").format(time);
	Year = new java.text.SimpleDateFormat("YYYY").format(time);
	Month = new java.text.SimpleDateFormat("MM").format(time);
	Day = new java.text.SimpleDateFormat("dd").format(time);
	Hour = new java.text.SimpleDateFormat("HH").format(time);
	Minute = new java.text.SimpleDateFormat("mm").format(time);
	Today = Integer.parseInt(Year + "" + Month + "" + Day);
}
var exppen = 0;
var droppen = 0;
var exppenm = 0;
var droppenm = 0;
var slotsel = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == 1) {	
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0 && mode == 1) {
		var message = "#i4180001# #b#e피그미 에그#n#k 교환 상점입니다."; // 
		/*var itmeArray = [5130000, 5040000, 5041000, 5050000];
		var Extra = [["x10 [3개]"], ["x25 [2개]"], ["x10 [2개]"], ["[2개]"]];
		for (var i = 0; i < itmeArray.length; i++) {
			message += "\r\n#L" + i + "##i" + itmeArray[i] + ":# #b#t" + itmeArray[i] + "##k " + Extra[i] + "";
		}*/
		message += "\r\n#L998##r피그미 에그란?";
		message += "\r\n#L997##r피그미 에그 교환";
		message += "\r\n#L19##r무료 의자 받기";
		message += "\r\n#L999##b랜덤 아이템 뽑기#r";
//		message += "\r\n#L9992##b랜덤 뽑기#r(오르비스)";
//		message += "\r\n#L9991##b랜덤 뽑기#r(메소)";
//		message += "\r\n#L9999##b랜덤 캐시 교환(오르비스)";
		message += "\r\n#L123456##b경험치 정령의 펜던트 교환#r";
//		message += "\r\n#L123458##b경험치 정령의 펜던트 교환#r(오르비스)";
		message += "\r\n#L123457##b드롭 정령의 펜던트 교환#r";
//		message += "\r\n#L123459##b드롭 정령의 펜던트 교환#r(오르비스)";
		message += "\r\n#L18##b인벤토리 확장 (48~96칸)";
		message += "\r\n#L20##b랜덤 의자 뽑기";
		
		cm.sendSimple(message);
	} else if (status == 1 && mode == 1) {
		if (selection == 123456) { // 아쿠아 에그 경험치 정펜
			exppen = 1;
			var pen1 = "#e[경험치 정령의 펜던트 교환]#n\r\n#i1122017##z1122017# (#b경험치 1.2배 #r#e5일#n#k)\r\n\r\n#b#e#i4180003##z4180003# 25개가 필요합니다.#n#k\r\n\r\n 정말 교환하시겠습니까?";
			cm.sendYesNo(pen1);
		}
		if (selection == 123457) { // 아쿠아 에그 드롭 정펜
			droppen = 1;
			var pen1 = "#e[드롭 정령의 펜던트 교환]#n\r\n#i1122271##z1122271# (#b드롭율 1.2배 #r#e5일#n#k)\r\n\r\n#b#e#i4180003##z4180003# 25개가 필요합니다.#n#k\r\n\r\n 정말 교환하시겠습니까?";
			cm.sendYesNo(pen1);
		}
		if (selection == 123458) { // 오르비스 에그 경험치 정펜
			exppenm = 1;
			var pen1 = "#e[경험치 정령의 펜던트 교환]#n\r\n#i1122017##z1122017# (#b경험치 1.2배 #r#e5일#n#k)\r\n\r\n#b#e#i4180002##z4180002# 25개가 필요합니다.#n#k\r\n\r\n 정말 교환하시겠습니까?";
			cm.sendYesNo(pen1);
		}
		if (selection == 123459) { // 오르비스 에그 드롭 정펜
			droppenm = 1;
			var pen1 = "#e[드롭 정령의 펜던트 교환]#n\r\n#i1122271##z1122271# (#b드롭율 1.2배 #r#e5일#n#k)\r\n\r\n#b#e#i4180002##z4180002# 25개가 필요합니다.#n#k\r\n\r\n 정말 교환하시겠습니까?";
			cm.sendYesNo(pen1);
		}
		if (selection == 999) {
			var count = 0;
			selpo = selection;
			var asktoyou = "#e#i4180003# #b#t4180003# 1개가 필요합니다.#n#k\r\n\r\n";
			asktoyou += "#e아이템 뽑기 목록#n (전체 상품 확률 동일)\r\n";
			asktoyou += "포션(100개) / 주문서(1개) / 기타(n개)#n \r\n\r\n";
			for (var i = 0; i < potion.length; i++) {
				asktoyou += "   #i" + potion[i] + ":# #b#t" + potion[i] + "##k";
				if(noenter.indexOf(potion[i]) == -1) {
					count++;
				}					
				if (count % 3 == 0){ 
					asktoyou += "\r\n";
					count = 0;
				}	
				if (enter.indexOf(potion[i]) !== -1) {
					asktoyou += "\r\n";
					count = 0;
				}
			}
			cm.sendYesNo(asktoyou);
		} else if (selection == 997) {
			selpo = selection;
			var askegg = "";
			/*
			askegg += "교환할 수량을 선택해주세요.\r\n\r\n";
			askegg += "#L555555##i4180001##k#z4180001#  20개  ->  #i4180003##b#z4180003# 1개\r\n\r\n";
			askegg += "#L555556##i4180001##k#z4180001# 100개  ->  #i4180003##b#z4180003# 5개\r\n\r\n";
			askegg += "#L555557##i4180001##k#z4180001# 200개  ->  #i4180003##b#z4180003# 10개\r\n\r\n";
			askegg += "#L555558##i4180001##k#z4180001# 500개  ->  #i4180003##b#z4180003# 25개\r\n\r\n";
			*/
			askegg = "#e[피그미 에그 교환]#n\r\n";
			askegg += "#i4180003##z4180003# #k1개#k\r\n\r\n#e#i4180001##b#t4180001# 20개가 필요합니다.#k\r\n\r\n#n";
			//askegg += "#i4180001##t4180001# 20개  ->  #b#i4180003##z4180003# 1개#k\r\n\r\n";
			
			askegg += "정말 교환하시겠습니까?";
			cm.sendYesNo(askegg);
			
		} else if (selection == 998) {
			var message = "#b#e피그미 에그#k#n는 #b뽑기를 통해 각종 주문서 및 물약 등 여러 \r\n아이템을 획득#k하거나 #b정령의 펜던트 교환#k이 가능합니다.\r\n\r\n";
			message += "#i4180001##b#z4180001# - 루디브리엄 #e(교환 가능)#n#k \r\n1. 1% 확률로 모든 몬스터에게서 드랍 \r\n2. 자유시장 입구에서 의자에 앉아있으면 20분마다 1개 획득\r\n\r\n";
			message += "#i4180003##b#z4180003# - 아쿠아리움 #e#r(교환 불가)#n#k \r\n1. 루디브리엄 에그 20개로 교환 \r\n2. 단풍잎 상점에서 구매\r\n\r\n";
//			message += "#i4180002##b 오르비스#k : 단풍잎으로 교환할 수 있는 피그미 에그\r\n\r\n";		
			cm.sendOk(message);
			cm.dispose();
		} else if (selection == 9991) {
			var count = 0;
			selpo = selection;
			var asktoyou = "#b500만 메소#k가 필요합니다.\r\n\r\n"
			asktoyou += "#e아이템 뽑기 목록#n (전체 상품 확률 동일)\r\n";
			asktoyou += "포션(100개) / 주문서(1개) / 기타(n개)#n \r\n\r\n";
			for (var i = 0; i < potion.length; i++) {
				asktoyou += "   #i" + potion[i] + ":# #b#t" + potion[i] + "##k";
				if(noenter.indexOf(potion[i]) == -1) {
					count++;
				}					
				if (count % 3 == 0){ 
					asktoyou += "\r\n";
					count = 0;
				}	
				if (enter.indexOf(potion[i]) !== -1) {
					asktoyou += "\r\n";
					count = 0;
				}
			}
			cm.sendYesNo(asktoyou);
		} else if (selection == 9992) {
			var count = 0;
			selpo = selection;
			var asktoyou = "#i4180002# #b#t4180002##k 1개가 필요합니다.\r\n\r\n";
			asktoyou += "#e아이템 뽑기 목록#n (전체 상품 확률 동일)\r\n";
			asktoyou += "포션(100개) / 주문서(1개) / 기타(n개)#n \r\n\r\n";
			for (var i = 0; i < potion.length; i++) {
				asktoyou += "   #i" + potion[i] + ":# #b#t" + potion[i] + "##k";
				if(noenter.indexOf(potion[i]) == -1) {
					count++;
				}					
				if (count % 3 == 0){ 
					asktoyou += "\r\n";
					count = 0;
				}	
				if (enter.indexOf(potion[i]) !== -1) {
					asktoyou += "\r\n";
					count = 0;
				}
			}
			cm.sendYesNo(asktoyou);
		} else if (selection == 9999) {
			selcash = selection;
			var asktocash = " 랜덤으로 캐쉬를 획득합니다.~ \r\n#i4180003# #b#t4180003##k 1개가 필요합니다.\r\n300~4000사이 캐쉬를 얻으실수있습니다.\r\n"; // 
			asktocash += '#r 정말로 돌리시겠습니까?'
			cm.sendYesNo(asktocash);
		} else if (selection == 18) {
//			var message = "#e[인벤토리 확장 48~96]#n\r\n\r\n#e#r단풍잎 상점의 인벤토리 확장은 캐시샵 확장없이 \r\n단번에 96칸으로 확장 가능한 점 참고해주세요!#n#k\r\n#r캐시샵에서 48칸까지 확장 이후 이용 가능합니다.\r\n#b4칸 확장마다 #i4180003##z4180003# 2개#k가 필요합니다.\r\n#b확장할 인벤토리를 선택해주세요.\r\n\r\n";
			var message = "#e[인벤토리 확장 (48칸~96칸)]#n\r\n\r\n선택한 인벤토리를 #e#b4칸 확장#k#n합니다. (48~96칸)\r\n#r캐시샵에서 48칸까지 확장 이후 구매 가능합니다.\r\n\r\n#b#e#i4180003##z4180003# 2개가 필요합니다.#n\r\n\r\n#k확장할 인벤토리를 선택해주세요.\r\n\r\n";			
			message += "#L101##e#b장비 슬롯\r\n";
			message += "#L102##b소비 슬롯\r\n";
			message += "#L103##b기타 슬롯\r\n";
			cm.sendSimple(message);
		} else if (selection == 19) {
			if (cm.haveItem(3010000, 1)) {
				cm.sendOk("이미 릴렉스 체어가 존재합니다.\r\n\r\n자유시장 입구에서 의자에 앉아있으면 \r\n피그미 에그를 획득할 수 있습니다.");
				cm.dispose();
				return;
			} else {
				cm.gainItem(3010000, 1);
				cm.sendOk("#i3010000##t3010000# 지급 완료!\r\n\r\n자유시장 입구에서 의자에 앉아있으면 \r\n피그미 에그를 획득할 수 있습니다.");
				cm.dispose();
				return;
			}
		} if (selection == 20) {
			var count = 0;
			selpo = selection;
			var asktoyou = "#e#i4180003# #b#t4180003# 1개가 필요합니다.#n#k\r\n\r\n";
			asktoyou += "의자 뽑기 목록 (전체 상품 확률 동일)\r\n";
			for (var i = 0; i < chair.length; i++) {
				asktoyou += "   #i" + chair[i] + ":# #b#t" + chair[i] + "##k";
				if(noenter.indexOf(chair[i]) == -1) {
					count++;
				}					
				if (count % 3 == 0){ 
					asktoyou += "\r\n";
					count = 0;
				}	
				if (enter.indexOf(chair[i]) !== -1) {
					asktoyou += "\r\n";
					count = 0;
				}
			}
			cm.sendYesNo(asktoyou);
		} else {
			var itemSet = [5130000, 5040000, 5041000, 5050000];
			var itemQSet = [10, 25, 10, 1];
			var matSet = [[4180003], [4180003], [4180003], [4180003]];
			var matQtySet = [[3], [2], [2], [2]];
			item = itemSet[selection];
			mats = matSet[selection];
			matQty = matQtySet[selection];
			itemQ = itemQSet[selection];
			cm.sendYesNo("#i" + item + "##b #t" + item + "##k " + itemQ + "개로 교환하겠나?");
		}

	} else if (status == 2 && mode == 1) {
		if (exppen == 1) { // 경험치 정펜
			if (cm.canHold(1122017, 1) && cm.haveItem(4180003, 25)) {
				cm.gainItem(4180003, -25);
				cm.gainItemPeriod(1122017, 1, 5);
				cm.sendOk("#i1122017##b#t1122017# 구매 완료!");
				cm.dispose();
				return;
			} else {
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}
		}
		if (droppen == 1) { // 드롭 정펜
			if (cm.canHold(1122271, 1) && cm.haveItem(4180003, 25)) {
				cm.gainItem(4180003, -25);
				cm.gainItemPeriod(1122271, 1, 5);
				cm.sendOk("#i1122271##b#t1122271# 구매 완료!");
				cm.dispose();
				return;
			} else {
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}
		}
		if (exppenm == 1) { // 경험치 정펜 오르비스
			if (cm.canHold(1122017, 1) && cm.haveItem(4180002, 25)) {
				cm.gainItem(4180002, -25);
				cm.gainItemPeriod(1122017, 1, 5);
				cm.sendOk("#i1122017##b#t1122017# 구매 완료!");
				cm.dispose();
				return;
			} else {
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}
		}
		if (droppenm == 1) { // 드롭 정펜 오르비스
			if (cm.canHold(1122271, 1) && cm.haveItem(4180002, 25)) {
				cm.gainItem(4180002, -25);
				cm.gainItemPeriod(1122271, 1, 5);
				cm.sendOk("#i1122271##b#t1122271# 구매 완료!");
				cm.dispose();
				return;
			} else {
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}
		}
		
		if (selpo == 997) { // 피그미 에그 교환 리뉴얼
			if (cm.haveItem(4180001, 20) && cm.canHold(4180003, 1)) {
				cm.gainItem(4180001, -20);
				cm.gainItem(4180003, 1);
		//		FileoutputUtil.log(FileoutputUtil.지급로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 지급한 아이템 : 피그미 에그 교환(아쿠아리움 피그미에그 1개)");
				cm.sendYesNo("#b#e#i4180003##z4180003##k#n 교환 완료!\r\n\r\n더 교환하시겠습니까?");
				status--;
			} else {
				cm.sendOk("루디브리엄 에그 혹은 인벤토리가 부족합니다");
				cm.dispose();
				return;
			}
		}	
		
		if (selection == 555555) { // 피그미 에그 교환
			var asksco = "";
			if (cm.haveItem(4180001, 20) && cm.canHold(4180003, 1)) {
				cm.gainItem(4180001, -20);
				cm.gainItem(4180003, 1);
				asksco += "피그미 에그를 교환했습니다!";
			} else {
				asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
			}
			cm.sendOk(asksco);
			cm.dispose();
			return;
		}	
		
		if (selection == 555556) { // 피그미 에그 교환
			var asksco = "";
			if (cm.haveItem(4180001, 100) && cm.canHold(4180003, 5)) {
				cm.gainItem(4180001, -100);
				cm.gainItem(4180003, 5);
				asksco += "피그미 에그를 교환했습니다!";
			} else {
				asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
			}
			cm.sendOk(asksco);
			cm.dispose();
			return;
		}
		
		if (selection == 555557) { // 피그미 에그 교환
			var asksco = "";
			if (cm.haveItem(4180001, 200) && cm.canHold(4180003, 10)) {
				cm.gainItem(4180001, -200);
				cm.gainItem(4180003, 10);
				asksco += "피그미 에그를 교환했습니다!";
			} else {
				asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
			}
			cm.sendOk(asksco);
			cm.dispose();
			return;
		}
		
		if (selection == 555558) { // 피그미 에그 교환
			var asksco = "";
			if (cm.haveItem(4180001, 500) && cm.canHold(4180003, 25)) {
				cm.gainItem(4180001, 500);
				cm.gainItem(4180003, 25);
				asksco += "피그미 에그를 교환했습니다!";
			} else {
				asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
			}
			cm.sendOk(asksco);
			cm.dispose();
			return;
		}
		
		if (selection == 101) {
//			if (cm.getInventory(1).getSlotLimit() >= 48 && cm.getInventory(1).getSlotLimit() <= 88 && cm.haveItem(4180003, 1) && cm.getPlayer().getMeso() >= 2000000) {
			if (cm.getInventory(1).getSlotLimit() >= 48 && cm.getInventory(1).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
				//cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(1).getSlotLimit() + " ]#n\r\n" + "인벤토리를 정말 늘리시겠습니까?");
				cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(1).getSlotLimit() + " ]#n\r\n" + "#e#b#i4180003##z4180003# 2개가 필요합니다.#n#k\r\n\r\n인벤토리를 4칸 확장하시겠습니까?");
				slotsel = 1;
			} else if (cm.getInventory(1).getSlotLimit() > 92 && cm.getInventory(1).getSlotLimit() < 124) {
				cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(1).getSlotLimit() == 124) {
				cm.sendOk("이미 인벤토리를 최대 슬롯(124칸)까지 확장했습니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(1).getSlotLimit() < 48) {
				cm.sendOk("인벤토리 확장 조건을 만족하지 않습니다. \r\n먼저 캐시샵에서 인벤토리를 확장해 주세요.");
				cm.dispose();
				return;
			} else {
				cm.sendOk("피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}		
		}	
		if (selection == 102) {
//			if (cm.getInventory(2).getSlotLimit() >= 48 && cm.getInventory(2).getSlotLimit() <= 88&& cm.haveItem(4180003, 1) && cm.getPlayer().getMeso() >= 2000000) {
			if (cm.getInventory(2).getSlotLimit() >= 48 && cm.getInventory(2).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
				//cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(2).getSlotLimit() + " ]#n\r\n" + "인벤토리를 정말 늘리시겠습니까?");
				cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(2).getSlotLimit() + " ]#n\r\n" + "#e#b#i4180003##z4180003# 2개가 필요합니다.#n#k\r\n\r\n인벤토리를 4칸 확장하시겠습니까?");
				slotsel = 2;
			} else if (cm.getInventory(2).getSlotLimit() > 92 && cm.getInventory(2).getSlotLimit() < 124) {
				cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(2).getSlotLimit() == 124) {
				cm.sendOk("이미 인벤토리를 최대 슬롯(124칸)까지 확장했습니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(2).getSlotLimit() < 48) {
				cm.sendOk("인벤토리 확장 조건을 만족하지 않습니다. \r\n먼저 캐시샵에서 인벤토리를 확장해 주세요.");
				cm.dispose();
				return;
			} else {
				cm.sendOk("피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}		
		}	
		if (selection == 103) {	
//			if (cm.getInventory(4).getSlotLimit() >= 48 && cm.getInventory(4).getSlotLimit() <= 88&& cm.haveItem(4180003, 1) && cm.getPlayer().getMeso() >= 2000000) {
			if (cm.getInventory(4).getSlotLimit() >= 48 && cm.getInventory(4).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
				//cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(4).getSlotLimit() + " ]#n\r\n" + "인벤토리를 정말 늘리시겠습니까?");
				cm.sendYesNo("[ 현재 칸수 : " + cm.getInventory(4).getSlotLimit() + " ]#n\r\n" + "#e#b#i4180003##z4180003# 2개가 필요합니다.#n#k\r\n\r\n인벤토리를 4칸 확장하시겠습니까?");
				slotsel = 3;
			} else if (cm.getInventory(4).getSlotLimit() > 92 && cm.getInventory(4).getSlotLimit() < 124) {
				cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(4).getSlotLimit() == 124) {
				cm.sendOk("이미 인벤토리를 최대 슬롯(124칸)까지 확장했습니다.");
				cm.dispose();
				return;
			} else if (cm.getInventory(4).getSlotLimit() < 48) {
				cm.sendOk("인벤토리 확장 조건을 만족하지 않습니다. \r\n먼저 캐시샵에서 인벤토리를 확장해 주세요.");
				cm.dispose();
				return;
			} else {
				cm.sendOk("피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}		
		}		
		if (selpo == 999) { // 아쿠아 에그 뽑기
			var potionss = Math.floor(Math.random() * potion.length);
			if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() >= 1 && cm.canHold(potion[potionss], 75) && potion[potionss] != 1122017 && potion[potionss] != 1122271) {
				if (cm.haveItem(4180003, 1)) {
					cm.gainItem(4180003, -1);
					if (potion[potionss] == 5121008 || potion[potionss] == 2022153) { // 생일축하해 뿌리기, 버프
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 2040000 && potion[potionss] <= 2049999) { // 주문서
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4011000 && potion[potionss] <= 4011008) { // 광물
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4021000 && potion[potionss] <= 4021009) { // 보석 별의돌 달의돌
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4010000 && potion[potionss] <= 4010007) { // 광물 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 4020000 && potion[potionss] <= 4020008) { // 보석 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] == 4000244 || potion[potionss] == 4000245) { // 드영 드비
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4004000 && potion[potionss] <= 4004004) { // 크리스탈 원석
						cm.gainItem(potion[potionss], 3);
					} else if (potion[potionss] == 4180003) { // 아쿠아 에그
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 2022070) { // 운영자 축하
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 4020009) { // 시간 조각
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 3010000 && potion[potionss] <= 3010999) { // 의자
						cm.gainItem(potion[potionss], 1);
					} else {
						cm.gainItem(potion[potionss], 100);
					}
					cm.sendYesNo("#i" + potion[potionss] + ":# #b#t" + potion[potionss] + "##k 이(가) 나왔습니다.\r\n\r\n 다시 뽑으시겠습니까?");
					if (potion[potionss] == 5121008) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(뿌리기) 를 획득하였습니다.");
					}
					else if (potion[potionss] == 2022153) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(버프) 를 획득하였습니다.");
					}
					else if ((potion[potionss] >= 2040000 && potion[potionss] <= 2049999)) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 를 획득하였습니다.");
					}
					else {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 을(를) 획득하였습니다.");
					}
					/*
					cm.dispose();
					return;
					*/
					status--;
				} else {
					//WriteLog();
					cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}
			} else {
				//WriteLog();
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}

		} if (selpo == 9992) { // 5121008 2022153 오르비스 피그미에그
			var potionss = Math.floor(Math.random() * potion.length);
			if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() >= 1 && cm.canHold(potion[potionss]) &&
				potion[potionss] != 1122017 && potion[potionss] != 1122271) {
				if (cm.haveItem(4180002, 1)) {
					cm.gainItem(4180002, -1);
					if (potion[potionss] == 5121008 || potion[potionss] == 2022153) { // 생일축하해 뿌리기, 버프
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 2040000 && potion[potionss] <= 2049999) { // 주문서
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4011000 && potion[potionss] <= 4011008) { // 광물
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4021000 && potion[potionss] <= 4021009) { // 보석 별의돌 달의돌
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4010000 && potion[potionss] <= 4010007) { // 광물 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 4020000 && potion[potionss] <= 4020008) { // 보석 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] == 4000244 || potion[potionss] == 4000245) { // 드영 드비
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4004000 && potion[potionss] <= 4004004) { // 크리스탈 원석
						cm.gainItem(potion[potionss], 3);
					} else if (potion[potionss] == 4180003) { // 아쿠아 에그
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 2022070) { // 운영자 축하
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 4020009) { // 시간 조각
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 3010000 && potion[potionss] <= 3010999) { // 의자
						cm.gainItem(potion[potionss], 1);
					} else {
						cm.gainItem(potion[potionss], 100);
					}
					cm.sendYesNo("#i" + potion[potionss] + ":# #b#t" + potion[potionss] + "##k 이(가) 나왔습니다.\r\n\r\n 다시 뽑으시겠습니까?");
					if (potion[potionss] == 5121008) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(뿌리기) 을(를) 획득하였습니다.");
					}
					else if (potion[potionss] == 2022153) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(버프) 을(를) 획득하였습니다.");
					}
					else if ((potion[potionss] >= 2040000 && potion[potionss] <= 2049999)) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 를 획득하였습니다.");
					}
					else {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 을(를) 획득하였습니다.");
					}
					/*
					cm.dispose();
					return;
					*/
					status--;
				} else {
					//WriteLog();
					cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}
			} else {
				//WriteLog();
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}

		} if (selpo == 20) { // 의자 뽑기
			var potionss = Math.floor(Math.random() * chair.length);
			if (cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() >= 1) {
				if (cm.haveItem(4180003, 1)) {
					cm.gainItem(4180003, -1);						
					cm.gainItem(chair[potionss], 1);

					cm.sendYesNo("#i" + chair[potionss] + ":# #b#t" + chair[potionss] + "##k 이(가) 나왔습니다.\r\n\r\n 다시 뽑으시겠습니까?");
					cm.worldMessage(2, "[의자뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(chair[potionss]) + " 을(를) 획득하였습니다.");
					/*
					cm.dispose();
					return;
					*/
					status--;
				} else {
					//WriteLog();
					cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}
			} else {
				//WriteLog();
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}

		} if (selpo == 9991) { // 5121008 2022153  메소 뽑기
			var potionss = Math.floor(Math.random() * potion.length);
			if (cm.canHold(potion[potionss], 75) && potion[potionss] != 1122017 && potion[potionss] != 1122271 &&
				cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.CASH).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() >= 1 &&
				cm.getPlayer().getInventory(MapleInventoryType.SETUP).getNumFreeSlot() >= 1) {
				if (cm.getPlayer().getMeso() >= 5000000) {
					cm.gainMeso(-5000000);
					if (potion[potionss] == 5121008 || potion[potionss] == 2022153) { // 생일축하해 뿌리기, 버프
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 2040000 && potion[potionss] <= 2049999) { // 주문서
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4011000 && potion[potionss] <= 4011008) { // 광물
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4021000 && potion[potionss] <= 4021009) { // 보석 별의돌 달의돌
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4010000 && potion[potionss] <= 4010007) { // 광물 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] >= 4020000 && potion[potionss] <= 4020008) { // 보석 원석
						cm.gainItem(potion[potionss], 5);
					} else if (potion[potionss] == 4000244 || potion[potionss] == 4000245) { // 드영 드비
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 4004000 && potion[potionss] <= 4004004) { // 크리스탈 원석
						cm.gainItem(potion[potionss], 3);
					} else if (potion[potionss] == 4180003) { // 아쿠아 에그
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 2022070) { // 운영자 축하
						cm.gainItem(potion[potionss], 2);
					} else if (potion[potionss] == 4020009) { // 시간 조각
						cm.gainItem(potion[potionss], 1);
					} else if (potion[potionss] >= 3010000 && potion[potionss] <= 3010999) { // 의자
						cm.gainItem(potion[potionss], 1);
					} else {
						cm.gainItem(potion[potionss], 100);
					}
					cm.sendYesNo("#i" + potion[potionss] + ":# #b#t" + potion[potionss] + "##k 이(가) 나왔습니다.\r\n\r\n 다시 뽑으시겠습니까?");
					if (potion[potionss] == 5121008) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(뿌리기) 을(를) 획득하였습니다.");
					}
					else if (potion[potionss] == 2022153) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + "(버프) 을(를) 획득하였습니다.");
					}
					else if ((potion[potionss] >= 2040000 && potion[potionss] <= 2049999)) {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 를 획득하였습니다.");
					}
					else {
						cm.worldMessage(2, "[랜덤뽑기] : " + cm.getPlayer().getName() + "님이 " + MapleItemInformationProvider.getInstance().getName(potion[potionss]) + " 을(를) 획득하였습니다.");
					}
					/*
					cm.dispose();
					return;
					*/
					status--;
				} else {
					//WriteLog()
					cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}
			} else {
				//WriteLog();
				cm.sendOk("인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.");
				cm.dispose();
				return;
			}

		} else if (selcash == 9999) {
			var cashrand = Math.floor((Math.random() * (4000 - 300)) + 300);
			if (cashrand >= 3500) {
				cashrand = Math.floor((Math.random() * (4000 - 300)) + 300);
			}
			/*if(cashrand>=3000){
				cashrand = Math.floor((Math.random() * (5000-1000)) + 1000);
			}*/

			if (cm.haveItem(4180003, 1)) {
				cm.gainItem(4180003, -1);
				cm.sendOk(cashrand + " 가 나왔습니다");
				cm.worldMessage(2, "[랜덤캐쉬] : " + cm.getPlayer().getName() + "님이 " + cashrand + " 만큼 캐쉬를 획득하였습니다.");
				cm.gainNX(cashrand);
				cm.dispose();
			} else {
				cm.sendOk("피그미 에그가 부족합니다.");
				cm.dispose();
			}
		}
		/*
		else {
			var pass = false;
			if (!cm.canHold(item)) {
				cm.sendOk("인벤토리에 빈 공간이 제대로 있는지 확인해주게.");
				cm.dispose();
				return;
			} else {
				for (var i = 0; i < mats.length; i++) {
					if (!cm.haveItem(mats[i], matQty[i])) {
						pass = true;
					}
				}
			}
			if (pass == true) {
				cm.sendOk("피그미 에그가 제대로 있는지 확인해주게.");
				cm.dispose();
				return;
			} else {
				for (var i = 0; i < mats.length; i++) {
					cm.gainItem(mats[i], -matQty[i]);
				}
				cm.gainItem(item, 1 * itemQ);
				WriteLog();
				cm.sendOk("여기 #i" + item + ":# #b#t" + item + "##k " + itemQ + "개 라네.");
			}
			cm.dispose();
		}
		*/
	} else if(status == 3) {
			if (slotsel == 1) {
				if (cm.getInventory(1).getSlotLimit() >= 48 && cm.getInventory(1).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
					cm.gainItem(4180003, -2);
	//				cm.gainMeso(-2000000);
					cm.getInventory(1).addSlot(4);
					cm.sendYesNo("장비 슬롯이 " + cm.getInventory(1).getSlotLimit() + "칸으로 확장되었습니다!\r\n#r채널이동 혹은 재접속 해주세요!#k\r\n\r\n더 확장하시겠습니까?");
					status--;
				} else if (cm.getInventory(1).getSlotLimit() > 92) {
					cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
					cm.dispose();
					return;
				} else {
					cm.sendOk("피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}	
			} else if (slotsel == 2) {
				if (cm.getInventory(2).getSlotLimit() >= 48 && cm.getInventory(2).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
					cm.gainItem(4180003, -2);
	//				cm.gainMeso(-2000000);
					cm.getInventory(2).addSlot(4);
					cm.sendYesNo("소비 슬롯이 " + cm.getInventory(2).getSlotLimit() + "칸으로 확장되었습니다!\r\n#r채널이동 혹은 재접속 해주세요!#k\r\n\r\n더 확장하시겠습니까?");
					status--;
				} else if (cm.getInventory(2).getSlotLimit() > 92) {
					cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
					cm.dispose();
					return;
				} else {
					cm.sendOk("피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}		
			} else if (slotsel == 3) {
				if (cm.getInventory(4).getSlotLimit() >= 48 && cm.getInventory(4).getSlotLimit() <= 92 && cm.haveItem(4180003, 2)) {
					cm.gainItem(4180003, -2);
	//				cm.gainMeso(-2000000);
					cm.getInventory(4).addSlot(4);
					cm.sendYesNo("기타 슬롯이 " + cm.getInventory(4).getSlotLimit() + "칸으로 확장되었습니다!\r\n#r채널이동 혹은 재접속 해주세요!#k\r\n\r\n더 확장하시겠습니까?");
					status--;
				} else if (cm.getInventory(4).getSlotLimit() > 92) {
					cm.sendOk("피그미 에그로 인벤토리를 더 이상 확장할 수 없습니다. \r\n단풍잎 상점에서 추가 확장 가능합니다.");
					cm.dispose();
					return;
				} else {
					cm.sendOk("피그미 에그가 부족합니다.");
					cm.dispose();
					return;
				}		
			} 
			
			if(selpo == 999){
				cm.sendYesNo("다시 뽑으시겠습니까?");
			}	
	}
}

/*
function WriteLog() {
	UpdateTime();
	fFile1 = new java.io.File("로그/버그이용/" + cm.getPlayer().getName() + ".txt");
	if (!fFile1.exists()) {
		fFile1.createNewFile();
	}
	out1 = new java.io.BufferedWriter(new java.io.OutputStreamWriter(new java.io.FileOutputStream("로그/버그이용/" + cm.getPlayer().getName() + ".txt", true)));
	//out1 = new java.io.FileOutputStream("로그/황단로그/" + cm.getPlayer().getName() + ".txt", true);
	var text = "유저명 : " + cm.getPlayer().getName() + "\r\n" + "시간 : " + NowTime + "\r\n" + "9000113인벤홀드악용 \r\n\r\n";
	out1.write(text.toString());
	out1.close();
}
*/
