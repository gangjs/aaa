var status = -1;

var sel = -1;

var riding = 0;


var starter = 0;
var middle = 0;
var high = 0;
var plague = 0;
var lv110 = 0;
var lv120 = 0;
var huntingP = 0;

var egg = 0;
var expbooster = 0;
var boosterpass = 0;
var candle = 0;

var sc30 = 0;
var sc60 = 0;
var sc70 = 0;

var sendegg = 0;
var sendleaf = 0;
var chuseok = 0;
var vreceiver = "";
var vitems = "";

var slotsel = 0;

var enter = "\r\n";
importPackage(Packages.handling.channel.handler);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.database);
importPackage(Packages.server);
importPackage(Packages.server.maps);
importPackage(Packages.tools);

var weapon = [2043001, 2044001, 2043101, 2044101, 2043201, 2044201, 2044301, 2044401, 2043801, 2043701, 2044601, 2044501, 2044701, 2043301, 2044801];
var weapon70 = [2043004, 2044004, 2043104, 2044104, 2043204, 2044204, 2044304, 2044404, 2043804, 2043704, 2044604, 2044504, 2044704, 2043304, 2044803];
var weapon30 = [2043005, 2044005, 2043105, 2044105, 2043205, 2044205, 2044305, 2044405, 2043805, 2043705, 2044605, 2044505, 2044705, 2043305, 2044804];
// var scroll60 = [2040418, 2040317, 2040516, 2040513, 2040305, 2040025, 2041013, 2041016, 2041022, 2041019, 2040804];
var scroll70 = [2043004, 2044004, 2043104, 2044104, 2043204, 2044204, 2044304, 2044404, 2043804, 2043704, 2044604, 2044504, 2044704, 2043304, 2044803, 2040810, 2040808, 2040812, 2040508, 2040520, 2040518, 2040406, 2040604, 2040306, 2040304, 2040714, 2040712, 2040716, 2040012, 2040008, 2040010, 2041034, 2041036, 2041040, 2041038, 2040906, 2040904];
var scroll30 = [2043005, 2044005, 2043105, 2044105, 2043205, 2044205, 2044305, 2044405, 2043805, 2043705, 2044605, 2044505, 2044705, 2043305, 2044804, 2040811, 2040809, 2040813, 2040509, 2040521, 2040519, 2040407, 2040605, 2040307, 2040305, 2040715, 2040713, 2040717, 2040013, 2040009, 2040011, 2041035, 2041037, 2041041, 2041039, 2040907, 2040905];
var checkweapon = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 1) {
        // cm.dispose();
        status++;
    } else {
		cm.dispose();
        return;
	}	

    switch (status) {
        case 0:// 스테이터스 시작
//          var donatemessage = "#i4001126##e#t4001126# 상점#n\r\n#b";
//			donatemessage += "#L1000##r캐시 -> 단풍잎 교환#l#k\r\n"; 
			var donatemessage = "";	
			donatemessage += "#i4001126##e[단풍잎 상점]#n\r\n#b";
			donatemessage += "#L777#단풍잎 획득 방법#l           ";
			donatemessage += "#L1001#라이딩 패키지#l\r\n";
			
			donatemessage += "#L1013#몬스터 등록 패키지#l        ";
			donatemessage += "#L603070#주문서 패키지#l\r\n";
//			donatemessage += "#L1004#인벤토리 확장 I (~96칸)#l  ";
			donatemessage += "#L1010#LV110 장비 패키지#l         ";
			donatemessage += "#L1020#LV120 장비 패키지#l\r\n";		
			donatemessage += "#L1005#경험치/드롭 촛불#l          ";
			donatemessage += "#L1007#인벤토리 확장 (96-120칸)#l\r\n\r\n\r\n";
			
			//donatemessage += "#L1012#부스터(월간)";
//			donatemessage += "#L1008#피그미 에그(오르비스)#l\r\n\r\n#k";
			donatemessage += "#k#i1112404##e[초보자의 반지 강화]#n\r\n#b";
			donatemessage += "#L1002#1단계#l    ";
			donatemessage += "#L1003#2단계#l    ";
			donatemessage += "#L1006#3단계#l    ";
			donatemessage += "#L1009#4단계#l\r\n\r\n#k";
			if (cm.getPlayer().hasGmLevel(6)) {
				donatemessage += "#l#r#e[지엠전용]#n#k\r\n";
				donatemessage += "#L1501##r아이템 제작하기#k\r\n"
                donatemessage += "#L5555##r홍보에그전송#k\r\n";
				donatemessage += "#L55550##r단풍전송#k\r\n";
				donatemessage += "#L555500##r명절홍보에그전송#k\r\n";
            }
			
			
			cm.sendSimple(donatemessage);
			break;
        case 1:
            /*스테이터스 2*/
            /*스테이터스 2*/
            /*스테이터스 2*/
            /*스테이터스 2*/

            switch (selection) {
                case 555555:
                    var asksco = "";
                    if (cm.haveItem(4170005, 18) && cm.canHold(4170007, 1)) {
                        cm.gainItem(4170005, -18);
                        cm.gainItem(4170007, 1);
                        asksco += "교환완료";
                    } else {
                        asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
                    }
                    cm.sendSimple(asksco);
                    cm.dispose();
                    break;
                case 555556:
                    var asksco = "";
                    if (cm.haveItem(4170005, 90) && cm.canHold(4170007, 5)) {
                        cm.gainItem(4170005, -90);
                        cm.gainItem(4170007, 5);
                        asksco += "교환완료";
                    } else {
                        asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
                    }
                    cm.sendSimple(asksco);
                    cm.dispose();
                    break;
                case 5555577:
                    var asksco = "";
                    if (cm.haveItem(4170004, 1) && cm.canHold(4170007, 1)) {
                        cm.gainItem(4170004, -1);
                        cm.gainItem(4170007, 1);
                        asksco += "교환완료";
                    } else {
                        asksco += "인벤토리 빈 공간이 없거나 피그미 에그가 부족합니다.";
                    }
                    cm.sendSimple(asksco);
                    cm.dispose();
                    break;
                case 603070:
                    var asksco = "#e[주문서 패키지]#n\r\n";
					asksco += "#i2040811##i2040810# #b(30% or 70%) 선택한 주문서 #k3개#b(장공,귀지 #k2개#b)#k\r\n"
					asksco += "#r#i4001126##e#t4001126# 2개가 필요합니다.#n#k\r\n\r\n구매하실 주문서를 선택해주세요.#b\r\n\r\n";
                   // asksco += "#L606060#60퍼 주문서(단풍2개)\r\n";
				    asksco += "#e#L303030##b30% 주문서#k\r\n";
                    asksco += "#L707070##b70% 주문서#k\r\n";                
                    cm.sendSimple(asksco);
                    break;
                case 1013:
                    huntingP = 1;
                    var ht = "#e[몬스터 등록 포션]#n (사냥꾼의 반지 강화)\r\n";
                    ht += "#i" + 2022338 + ":# #b#t" + 2022338 + "##k 3개\r\n";
                    ht += "#i" + 2000005 + ":# #b#t" + 2000005 + "##k 100개\r\n";
                    ht += "#i" + 4170007 + ":# #b#t" + 4170007 + "##k 2개\r\n\r\n";
					ht += "#r#i4001126##e#t4001126# 1개가 필요합니다.#n#k\r\n\r\n구매하시겠습니까?\r\n";
                    cm.sendYesNo(ht);
                    break;
				case 1000:	
					var chat = "#e캐시는 캐시상점에서 메소로 교환#n 가능합니다.\r\n";
					chat += "#e#b단풍잎 1개는 20,000원 후원#n#k으로 구매 가능합니다.";
					chat += "#k\r\n#L50001##b#e400,000 캐시#n -> #i4001126##e#t4001126# 1개#n";
					chat += "#k\r\n#L50002##b#e2,000,000 캐시#n -> #i4001126##e#t4001126# 5개#n";
					chat += "#k\r\n#L50003##b#e10,000,000 캐시#n -> #i4001126##e#t4001126# 25개#n";	
					cm.sendSimple(chat);					
					break;
                case 1001:
					riding = 1;
					cm.sendYesNo("#e[라이딩 패키지]\r\n#n#b#i1902003# #z1902003##k#n (레벨제한10)\r\n#b#i1912000# #z1912000#\r\n#s1004# #q1004#\r\n\r\n#i4001126##r#e#t4001126# 2개가 필요합니다.#n\r\n\r\n#k라이딩 스킬을 배웠다면 구매하실 수 없습니다.\r\n구매하시겠습니까?");
                    break;
                case 1010:
                    lv110 = 1;
                    var startermessage = "#e[Lv.110 장비 제작 재료 패키지]#n\r\n";
                   
                    //startermessage += "#i" + 2022070 + ":# #b#t" + 2022070 + "##k 5개\r\n";
                    startermessage += "#i" + 4000245 + ":# #b#t" + 4000245 + "##k 10개\r\n";
                    startermessage += "#i" + 4000244 + ":# #b#t" + 4000244 + "##k 10개\r\n";
                    startermessage += "#i" + 2000005 + ":# #b#t" + 2000005 + "##k 100개\r\n";
                    /*startermessage += "#i" + 2040013 + ":# #b#t" + 2040013 + "##k 1개\r\n";
                    startermessage += "#i" + 2040012 + ":# #b#t" + 2040012 + "##k 1개\r\n";
                    startermessage += "#i" + 2040810 + ":# #b#t" + 2040810 + "##k 1개\r\n";//1122271
                    startermessage += "#i" + 2040811 + ":# #b#t" + 2040811 + "##k 1개#n\r\n";*/
					startermessage += "#i2044705##b(30% or 70%) 선택 무기 공격력/마력 주문서 #k 2개\r\n\r\n";
					startermessage += "#r#e#i4001126##e#t4001126# 3개가 필요합니다.#n#k 주문서를 선택해주세요.\r\n\r\n";
                    startermessage += "#e#b#L1750#무기 주문서 30%";
                    startermessage += "#L1751#무기 주문서 70%\r\n";
                    cm.sendSimple(startermessage);
                    break;
				case 1020:
                    lv120 = 1;
                    var startermessage = "#e[Lv.120 장비 제작 재료 패키지]#n\r\n";
                    
                    //startermessage += "#i" + 2022070 + ":# #b#t" + 2022070 + "##k 5개\r\n";
                    startermessage += "#i" + 4020009 + ":# #b#t" + 4020009 + "##k 20개\r\n";
                    //startermessage += "#i" + 2000004 + ":# #b#t" + 2000004 + "##k 100개\r\n";
                    startermessage += "#i" + 2000005 + ":# #b#t" + 2000005 + "##k 100개\r\n";
                    /*startermessage += "#i" + 2040013 + ":# #b#t" + 2040013 + "##k 1개\r\n";
                    startermessage += "#i" + 2040012 + ":# #b#t" + 2040012 + "##k 1개\r\n";
                    startermessage += "#i" + 2040810 + ":# #b#t" + 2040810 + "##k 1개\r\n";//1122271
                    startermessage += "#i" + 2040811 + ":# #b#t" + 2040811 + "##k 1개#n\r\n";*/
					startermessage += "#i2044705##b(30% or 70%) 선택 무기 공격력/마력 주문서 #k 2개\r\n\r\n";
					startermessage += "#r#e#i4001126##e#t4001126# 3개가 필요합니다.#n#k 주문서를 선택해주세요.\r\n\r\n";
                    startermessage += "#e#b#L1750#무기 주문서 30%";
                    startermessage += "#L1751#무기 주문서 70%\r\n";
                    cm.sendSimple(startermessage);
                    break;	
                case 1002:
                    starter = 1;
                    var startermessage = "";
					startermessage += "#e[초보자의 반지 1단계 강화]#n\r\n";                   
                    startermessage += "#i2044701##b선택 무기 공격력/마력 주문서 60%#k 2개\r\n";
                    startermessage += "#i" + 1112404 + ":# #b#t" + 1112404 + "##k 강화#n\r\n";
                    startermessage += "#e       올스텟 #b+1 => 2\r\n";
                    startermessage += "#k       이동속도,점프력 #b+3 => 4\r\n";
                    startermessage += "#k       HP,MP #b+0 => 100\r\n";
                    startermessage += "#k       명중률,회피율 #b+0 => 5\r\n";
					startermessage += "\r\n#r#e#i4001126##e#t4001126# 2개가 필요합니다.#n#k\r\n\r\n";
					startermessage += "구매하시겠습니까?";
                    cm.sendYesNo(startermessage);
                    break;
                case 1003:
                    middle = 1;
                    var startermessage = "";
					startermessage += "#e[초보자의 반지 2단계 강화]  #r(1단계 강화 필요)#n#k\r\n";
                    startermessage += "#i2044704##b선택 무기 공격력/마력 주문서 70%#k 2개\r\n";
                    startermessage += "#i" + 1112404 + ":# #b#t" + 1112404 + "##k 강화#n\r\n";
                    startermessage += "#e       올스텟 #b+2 => 3\r\n";
                    startermessage += "#k       이동속도,점프력 #b+4 => 6\r\n";
                    startermessage += "#k       HP,MP #b+100 => 200\r\n";
                    startermessage += "#k       명중률,회피율 #b+5 => 10\r\n";
					startermessage += "\r\n#r#e#i4001126##e#t4001126# 2개가 필요합니다.#n#k\r\n\r\n";
					startermessage += "구매하시겠습니까?";
                    cm.sendYesNo(startermessage);
                    break;
                case 1006:
                    high = 1;
                    var startermessage = "";
					startermessage += "#e[초보자의 반지 3단계 강화]  #r(2단계 강화 필요)#n#k\r\n";
                    startermessage += "#i2044705##b선택 무기 공격력/마력 주문서 30%#k 2개\r\n";
                    startermessage += "#i" + 1112404 + ":# #b#t" + 1112404 + "##k 강화#n\r\n";
                    startermessage += "#e       올스텟 #b+3 => 4\r\n";
                    startermessage += "#k       이동속도,점프력 #b+6 => 8\r\n";
                    startermessage += "#k       HP,MP #b+200 => 300\r\n";
                    startermessage += "#k       명중률,회피율 #b+10 => 15\r\n";
					startermessage += "#k       공격력,마력 #b+0 => 1\r\n";
					startermessage += "#r#e#i4001126##e#t4001126# 2개가 필요합니다.#n#k\r\n\r\n";
					startermessage += "구매하시겠습니까?";
                    cm.sendYesNo(startermessage);
                    break;
                case 1009:
                    plague = 1;
                    var startermessage = "";					
					startermessage += "#e[초보자의 반지 4단계 강화]  #r(3단계 강화 필요)#n#k\r\n";
                    startermessage += "#i2044705##b선택 무기 공격력/마력 주문서 30%#k 2개\r\n";
                    startermessage += "#i" + 1112404 + ":# #b#t" + 1112404 + "##k 강화#n\r\n";
                    startermessage += "#e       올스텟 #b+4 => 5\r\n";
                    startermessage += "#k       이동속도,점프력 #b+8 => 10\r\n";
                    startermessage += "#k       HP,MP #b+300 => 500\r\n";
                    startermessage += "#k       명중률,회피율 #b+15 => 20\r\n";
					startermessage += "#k       공격력,마력 #b+1 => 2\r\n";
					startermessage += "#r#e#i4001126##e#t4001126# 2개가 필요합니다.#n#k\r\n\r\n";
					startermessage += "구매하시겠습니까?";
                    cm.sendYesNo(startermessage);
                    break;
                case 1004:
                    var message = "#e[인벤토리 확장 I (~96칸)]#n\r\n\r\n";
					message += "선택한 인벤토리를 #e96칸#n으로 확장합니다.\r\n#b캐시샵 인벤토리 확장을 하지 않아도 구매 가능합니다.\r\n\r\n";
                    message += "#r#e#i4001126##r#t4001126# 2개가 필요합니다.#n#k\r\n\r\n확장하실 인벤토리를 선택해주세요.\r\n\r\n";
					message += "#e#L6900##b장비 슬롯\r\n";
                    message += "#L6901##b소비 슬롯\r\n";
                    message += "#L6902##b기타 슬롯\r\n";
                    cm.sendSimple(message);
                    break;
                case 1007:
                    var message = "#e[인벤토리 확장 (96칸-120칸)]#n\r\n\r\n";
					message += "선택한 인벤토리를 #e96칸에서 120칸#n으로 확장합니다.\r\n#b피그미 에그 상점의 인벤토리 확장 후 구매 가능합니다.\r\n\r\n";
                    message += "#r#e#i4001126##r#t4001126# 2개가 필요합니다.#n#k\r\n\r\n확장하실 인벤토리를 선택해주세요.\r\n\r\n";
					message += "#e#L6910##b장비 슬롯\r\n";
                    message += "#L6911##b소비 슬롯\r\n";
                    message += "#L6912##b기타 슬롯\r\n";
                    cm.sendSimple(message);
                    break;
                case 1005:
                    expbooster = 1;
                    var message = "#e촛불 보유 시 경험치나 드랍률을 추가로 획득합니다.\r\n구매하실 촛불을 선택해주세요.#k\r\n\r\n";
                    message += "#e#k#i3999999##z3999999##n\r\n";
					message += "#L7000##b경험치 1.1배 촛불 #e2일#n #r#e(단풍잎 1개)#n\r\n";
					message += "#L7001##b경험치 1.1배 촛불 #e5일#n #r#e(단풍잎 2개)#n#l\r\n\r\n"; 
					message += "#e#k#i3994086##z3994086##n\r\n";   
					message += "#L7002##b드랍률 1.2배 촛불 #e2일#n #r#e(단풍잎 1개)#n\r\n";
                    message += "#L7003##b드랍률 1.2배 촛불 #e5일#n #r#e(단풍잎 2개)#n#l\r\n\r\n";
                    cm.sendSimple(message);
                    break;
                case 1008:
                    egg = 1;
                    var message = "#e[피그미 에그]#n\r\n";
					message += "#b#i4170006#피그미 에그(오르비스) #k8개#k\r\n\r\n#e#i4001126##r#t4001126# 1개가 필요합니다.#k\r\n\r\n#n";
					message += "구매 하시겠습니까?";
                    cm.sendYesNo(message);
                    break;
                case 1012:
                    boosterpass = 1;
                    var message = "#e#r선택시 바로 구매해지니 신중히 눌러주세요#k\r\n지니고 있으면 경험치 / 드롭이 추가되는 월간부스터들 입니다(30일)\r\n#n";
                    //say += "#L" + rs.getInt("itemid") + "##i" + rs.getInt("itemid") + "##z" + rs.getInt("itemid") + "# #b(아이템코드 : " + rs.getInt("itemid") + ")#k#l\r\n";
                    message += "#L69740##i3994086##z3994086# 단풍하나\r\n";
                    message += "#L69741##i3994086##z3994087# 단풍두개\r\n";
                    message += "#L69742##i3994086##z3994088# 단풍세개\r\n";
                    cm.sendSimple(message);
                    break;
				case 60:
					cm.dispose();
                    cm.openNpc(9900001);
					break;
				case 100:
					cm.dispose();
                    cm.openNpc(2080000);
					break;	
				case 110:
					cm.dispose();
                    cm.openNpc(9900005);
					break;
				case 120:
					cm.dispose();
                    cm.openNpc(2082004);
					break;	
				case 5555: /* 지엠 */
                    if (cm.getPlayer().hasGmLevel(6)) {
                        sendegg = 1;
                        cm.sendGetText("#v4170007##b #z4170007##k 전송하시겠어요?\r\n" + "#b받는 사람의 닉네임을 적어주세요.\r\n#k");
                    } else {
                        cm.sendOk("즐거운 메이플스토리 되세요.");
                        cm.dispose();
                    }
                    break;
				case 1501: /* 지엠 */
                    if (cm.getPlayer().hasGmLevel(6)) {
                        cm.dispose();
                        cm.openNpc(1101005);
                    } else {
                        cm.sendOk("즐거운 메이플스토리 되세요.");
                        cm.dispose();
                    }
                    break;	
				case 55550: /* 지엠 */
                    if (cm.getPlayer().hasGmLevel(6)) {
                        sendleaf = 1;
                        cm.sendGetText("#v4001126##b #z4001126##k 전송하시겠어요?\r\n" + "#b받는사람의 닉네임을 적어주세요.\r\n#k");
                    } else {
                        cm.sendOk("즐거운 메이플스토리 되세요.");
                        cm.dispose();
                    }
                    break;
				case 555500: /* 지엠 */
                    if (cm.getPlayer().hasGmLevel(6)) {
                        chuseok = 1;
                        cm.sendGetText("#v4170004##b #z4170004##k 전송하시겠어요?\r\n" + "#b받는사람의 닉네임을 적어주세요.\r\n#k");
                    } else {
                        cm.sendOk("즐거운 메이플스토리 되세요.");
                        cm.dispose();
                    }
                    break;
				case 777: /* 단풍잎 */
					var message = "";
					//message += "#i4001126##r#e#z4001126##n#k은 캐시상점에서 20,000 캐시로 교환 가능합니다.\r\n#fUI/CashShop.img/CashItem/0# #b#e캐시#n#k는 캐시상점에서 #i4031138#메소로 교환 가능합니다.\r\n";				
					message += "#i4001126##r#e#z4001126##n#k은 20,000 후원으로 구매 가능합니다.\r\n\r\n#fUI/CashShop.img/CashItem/0# #b#e캐시#n#k는 캐시상점에서 교환 가능합니다.\r\n";	
					cm.sendOk(message);
					cm.dispose();                   
                    break;	
            }
            break;
        case 2:
            /*스테이터스 3*/
            /*스테이터스 3*/
            /*스테이터스 3*/
            /*스테이터스 3*/	
/*			
			if (sendegg == 1) {
                status++;
                break;
            }
            if (sendleaf == 1) {
                status++;
                break;
            }
            if (chuseok == 1) {
                status++;
                break;
            }
*/			
            if (selection == 606060) {
                sc60 = 1;
                var askweapon = "#r#e원하는 주문서를 선택해주세요#k#n\r\n\r\n";
                for (var i = 0; i < scroll60.length; i++) {
                    askweapon += "#L" + scroll60[i] + "##i" + scroll60[i] + ":# #b#t" + scroll60[i] + "##k\r\n";
                }
                cm.sendSimple(askweapon);
            } else if (selection == 707070) {
                sc70 = 1;
                var askweapon = "#r#e원하는 주문서를 선택해주세요#k#n\r\n\r\n";
                for (var i = 0; i < scroll70.length; i++) {
                    askweapon += "#L" + scroll70[i] + "##b#z" + scroll70[i] + "##k\r\n";
                }
                cm.sendSimple(askweapon);
            } else if (selection == 303030) {
                sc30 = 1;
                var askweapon = "#r#e원하는 주문서를 선택해주세요#k#n\r\n\r\n";
                for (var i = 0; i < scroll30.length; i++) {
                    askweapon += "#L" + scroll30[i] + "##b#z" + scroll30[i] + "##k\r\n";
                }
                cm.sendSimple(askweapon);
            } else if (selection == 50001) {
				if (cm.getPlayer().getCSPoints(1) >= 400000) {
					cm.sendOk ("#e#b400,000 캐시#k를 #i4001126##e#b#t4001126# 1개#k로 교환하였습니다!#n");
					cm.gainNX (-400000);
					cm.gainItem (4001126, 1);
				} else {
					cm.sendOk ("캐시가 부족합니다!");
				}
				cm.dispose();
				return;
			} else if (selection == 50002) {
				if (cm.getPlayer().getCSPoints(1) >= 2000000) {
					cm.sendOk ("#e#b2,000,000 캐시#k를 #i4001126##e#b#t4001126# 5개#k로 교환하였습니다!#n");
					cm.gainNX (-2000000);
					cm.gainItem (4001126, 5);
				} else {
					cm.sendOk ("캐시가 부족합니다!");
				}
				cm.dispose();
				return;
			} else if (selection == 50003) {
				if (cm.getPlayer().getCSPoints(1) >= 10000000) {
					cm.sendOk ("#e#b10,000,000 캐시#k를 #i4001126##e#b#t4001126# 25개#k로 교환하였습니다!#n");
					cm.gainNX (-10000000);
					cm.gainItem (4001126, 25);
				} else {
					cm.sendOk ("캐시가 부족합니다!");
				}
				cm.dispose();
				return;		
			} else if (huntingP == 1) {
                if (cm.haveItem(4001126, 1) && cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() >= 2 && cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() >= 1) {
                    cm.gainItem(4001126, -1);
                    cm.gainItem(2022338, 3);
                    cm.gainItem(2000005, 100);
                    cm.gainItem(4170007, 2);
                    cm.sendYesNo("#i2022338##b#t2022338# 패키지 #k구매 완료!\r\n\r\n더 구매하시겠습니까?");
                    status--;
                } else {
                    cm.sendOk("단풍잎 혹은 인벤토리가 부족합니다.");
                    cm.dispose();
                }
            } else if (sendegg == 1) {
                vreceiver = cm.getText();
                cm.sendGetText("보내실 갯수를 적어주세요.");
            } else if (sendleaf == 1) {
                vreceiver = cm.getText();
                cm.sendGetText("보내실 갯수를 적어주세요.");
            } else if (chuseok == 1) {
                vreceiver = cm.getText();
                cm.sendGetText("보내실 갯수를 적어주세요.");
            } else if (boosterpass == 1) {
                switch (selection) {
                    case 69740:
                        if (!cm.haveItem(3994086)) {
                            if (cm.haveItem(4001126, 1)) {
                                cm.gainItem(4001126, -1);
                                cm.gainItemPeriod(3994086, 1, 30);
                                cm.sendOk("30일상품 구매 완료!");
                                cm.dispose();
                            } else {
                                cm.sendOk("단풍잎이 부족합니다.");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("이미 존재하는 아이템입니다.");
                            cm.dispose();
                        }
                        break;
                    case 69741:
                        if (!cm.haveItem(3994087)) {
                            if (cm.haveItem(4001126, 2)) {
                                cm.gainItem(4001126, -2);
                                cm.gainItemPeriod(3994087, 1, 30);
                                cm.sendOk("30일상품 구매 완료!");
                                cm.dispose();
                            } else {
                                cm.sendOk("단풍잎이 부족합니다.");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("이미 존재하는 아이템입니다.");
                            cm.dispose();
                        }
                        break;
                    case 69742:
                        if (!cm.haveItem(3994088)) {
                            if (cm.haveItem(4001126, 3)) {
                                cm.gainItem(4001126, -3);
                                cm.gainItemPeriod(3994088, 1, 30);
                                cm.sendOk("30일상품 구매 완료!");
                                cm.dispose();
                            } else {
                                cm.sendOk("단풍잎이 부족합니다.");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("이미 존재하는 아이템입니다.");
                            cm.dispose();
                        }
                        break;
                }
            } else if (egg == 1) {
                if (cm.haveItem(4001126, 1) && cm.canHold(4170006, 8)) {
                    cm.gainItem(4001126, -1);
                    cm.gainItem(4170006, 8);
                    cm.sendYesNo("#b#e#i4170006##z4170006##k#n 8개 구매 완료!\r\n\r\n더 구매하시겠습니까?");
                    status--;
                } else {
                    cm.sendOk("단풍잎 혹은 인벤토리가 부족합니다");
                    cm.dispose();
                }
            } else if (expbooster == 1) {
				 switch (selection) {
					 case 7000 :
						candle = 1;
						var message = "선택한 아이템이 #i" + 3999999 + "# #b#z" + 3999999 + "# [2일]#k \r\n맞습니까?";
						cm.sendYesNo(message);
						break;
					 case 7001 :
						candle = 2;
						var message = "선택한 아이템이 #i" + 3999999 + "# #b#z" + 3999999 + "# [5일]#k \r\n맞습니까?";
						cm.sendYesNo(message);
						break;
					 case 7002 :
						candle = 3;
						var message = "선택한 아이템이 #i" + 3994086 + "# #b#z" + 3994086 + "# [2일]#k \r\n맞습니까?";
						cm.sendYesNo(message);
						break;
					 case 7003 :
						candle = 4;
						var message = "선택한 아이템이 #i" + 3994086 + "# #b#z" + 3994086 + "# [5일]#k \r\n맞습니까?";
						cm.sendYesNo(message);
						break; 
				 }	 
				
            } else if (riding == 1) {
                if (cm.haveItem(4001126, 2) && cm.getPlayer().getSkillLevel(1004) == 0) {
                    cm.gainItem(4001126, -2);
                    cm.gainItem(1912000, 1);
					cm.gainItem(1902003, 1);
                    cm.teachSkill(1004, 1);
                    cm.sendOk("라이딩 패키지 구매 완료!");
                    cm.dispose();
                } else {
					cm.sendOk("단풍잎이 부족하거나 이미 라이딩 스킬을 배웠습니다.");
                    cm.dispose();
				}	
            } else if (selection == 6900){
				slotsel = selection;
				cm.sendYesNo("#e#b장비 슬롯을 96칸#n#k으로 확장하시겠습니까?");
			} else if (selection == 6901){
				slotsel = selection;
				cm.sendYesNo("#e#b소비 슬롯을 96칸#n#k으로 확장하시겠습니까?");
			} else if (selection == 6902){
				slotsel = selection;
				cm.sendYesNo("#e#b기타 슬롯을 96칸#n#k으로 확장하시겠습니까?");
			} else if (selection == 6910){
				slotsel = selection;
				cm.sendYesNo("#e#b장비 슬롯을 120칸#n#k으로 확장하시겠습니까?");
			} else if (selection == 6911){
				slotsel = selection;
				cm.sendYesNo("#e#b소비 슬롯을 120칸#n#k으로 확장하시겠습니까?");
			} else if (selection == 6912){
				slotsel = selection;
				cm.sendYesNo("#e#b기타 슬롯을 120칸#n#k으로 확장하시겠습니까?");
			}	
			
			else if (lv110 == 1) { // 110 장비
                if (cm.haveItem(4001126, 3)) {
                    if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() <= 1 || cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() <= 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else if (selection == 1750) {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon30.length; i++) {
                            askweapon += "#L" + weapon30[i] + "##i" + weapon30[i] + ":# #b#t" + weapon30[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    } else if (selection == 1751) {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon70.length; i++) {
                            askweapon += "#L" + weapon70[i] + "##i" + weapon70[i] + ":# #b#t" + weapon70[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    } else {
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
            } else if (lv120 == 1) { // 120 장비
                if (cm.haveItem(4001126, 3)) {
                    if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < 1 || cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() <= 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else if (selection == 1750) {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon30.length; i++) {
                            askweapon += "#L" + weapon30[i] + "##i" + weapon30[i] + ":# #b#t" + weapon30[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    } else if (selection == 1751) {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon70.length; i++) {
                            askweapon += "#L" + weapon70[i] + "##i" + weapon70[i] + ":# #b#t" + weapon70[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    } else {
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
			} else if (starter == 1) { // 초보자 반지 1단계
                if (cm.haveItem(4001126, 2)) {
                    if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon.length; i++) {
                            askweapon += "#L" + weapon[i] + "##i" + weapon[i] + ":# #b#t" + weapon[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
            } else if (middle == 1) { // 초보자 반지 2단계
                if (cm.haveItem(4001126, 4)) { 
                    if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon70.length; i++) {
                            askweapon += "#L" + weapon70[i] + "##i" + weapon70[i] + ":# #b#t" + weapon70[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
            } else if (high == 1) { // 초보자 반지 3단계
                if (cm.haveItem(4001126, 4)) {
                     if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon30.length; i++) {
                            askweapon += "#L" + weapon30[i] + "##i" + weapon30[i] + ":# #b#t" + weapon30[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
            } else if (plague == 1) { // 초보자 반지 4단계
                if (cm.haveItem(4001126, 4)) {
                    if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                        cm.sendOk("인벤토리가 부족합니다.");
                        cm.dispose();
                    } else {
                        var askweapon = "#r#e원하는 무기 주문서를 선택해주세요#k#n\r\n\r\n";
                        for (var i = 0; i < weapon30.length; i++) {
                            askweapon += "#L" + weapon30[i] + "##i" + weapon30[i] + ":# #b#t" + weapon30[i] + "##k\r\n";
                        }
                        cm.sendSimple(askweapon);
                    }
                } else {
                    cm.sendOk("단풍잎이 부족합니다.");
                    cm.dispose();
                }
            } 
            break;
        case 3:
            /*스테이터스 4*/
            /*스테이터스 4*/
            /*스테이터스 4*/
            /*스테이터스 4*/
            if (sendegg == 1) {
                vitems = cm.getText().split(":");
                cm.sendYesNo("#v4170007##b #z4170007##k\r\n#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 정말로 전송 하시겠습니까?");
            } else if (sendleaf == 1) {
                vitems = cm.getText().split(":");
                cm.sendYesNo("#v4001126##b #z4001126##k\r\n#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 정말로 전송 하시겠습니까?");
            } else if (chuseok == 1) {
                vitems = cm.getText().split(":");
                cm.sendYesNo("#v4170004##b #z4170004##k\r\n#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 정말로 전송 하시겠습니까?");
            } else if (starter == 1) {
                checkweapon = selection;
                getList();
            } else if (middle == 1) {
                checkweapon = selection;
                getList();
            } else if (high == 1) {
                checkweapon = selection;
                getList();
            } else if (plague == 1) {
                checkweapon = selection;
                getList();
            } else if (lv110 == 1) {
                checkweapon = selection;
                cm.sendYesNo("#e선택하신 주문서가 \r\n#i" + checkweapon + ":# #b#t" + checkweapon + "##k 가 맞습니까?");
            } else if (lv120 == 1) {
                checkweapon = selection;
                cm.sendYesNo("#e선택하신 주문서가 \r\n#i" + checkweapon + ":# #b#t" + checkweapon + "##k 가 맞습니까?");
            }else if (sc60 == 1) {
                checkweapon = selection;
                cm.sendYesNo("#e선택하신 주문서가 \r\n#i" + checkweapon + ":# #b#t" + checkweapon + "##k 가 맞습니까?");
            } else if (sc70 == 1) {
                checkweapon = selection;
                cm.sendYesNo("#e선택하신 주문서가 \r\n#i" + checkweapon + ":# #b#t" + checkweapon + "##k 가 맞습니까?");
            } else if (sc30 == 1) {
                checkweapon = selection;
                cm.sendYesNo("#e선택하신 주문서가 \r\n#i" + checkweapon + ":# #b#t" + checkweapon + "##k 가 맞습니까?");
            } else if (expbooster == 1){
				if(candle == 1 || candle == 2) {	
					if (cm.haveItem(3999999)) {
						cm.sendOk("이미 경험치 촛불이 존재합니다.");
					} else {
						switch (candle) {
							case 1 :
								if (cm.haveItem(4001126, 1)) {
									cm.gainItem(4001126, -1);
									cm.gainItemPeriod(3999999, 1, 2);
									cm.sendOk("#i" + 3999999 + "# #b#z" + 3999999 + "# [2일] 구매 완료!");
								} else {
									cm.sendOk("단풍잎이 부족합니다.");
								}
								break;
							case 2 :
								if (cm.haveItem(4001126, 2)) {
									cm.gainItem(4001126, -1);
									cm.gainItemPeriod(3999999, 1, 5);
									cm.sendOk("#i" + 3999999 + "# #b#z" + 3999999 + "# [5일] 구매 완료!");
								} else {
									cm.sendOk("단풍잎이 부족합니다.");
								}
								break;	
						}						
					}
				} else if (candle == 3 || candle == 4 ) {
					if (cm.haveItem(3994086)) {
						cm.sendOk("이미 드롭 촛불이 존재합니다.");
					} else {
						switch (candle) {
							case 3 :
								if (cm.haveItem(4001126, 1)) {
									cm.gainItem(4001126, -1);
									cm.gainItemPeriod(3994086, 1, 2);
									cm.sendOk("#i" + 3994086 + "# #b#z" + 3994086 + "# [2일] 구매 완료!");
								} else {
									cm.sendOk("단풍잎이 부족합니다.");
								}
								break;
							case 4 :
								if (cm.haveItem(4001126, 2)) {
									cm.gainItem(4001126, -1);
									cm.gainItemPeriod(3994086, 1, 5);
									cm.sendOk("#i" + 3994086 + "# #b#z" + 3994086 + "# [5일] 구매 완료!");
								} else {
									cm.sendOk("단풍잎이 부족합니다.");
								}
								break;	
						}						
					}
				} 				
				cm.dispose();
				return;			
			} else if (slotsel == 6900 || slotsel == 6901 || slotsel == 6902 || slotsel == 6910 || slotsel == 6911 || slotsel == 6912) {
                switch (slotsel) {
                    case 6900: //장비
                        if (cm.getInventory(1).getSlotLimit() >= 96) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2)) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(1).setSlotLimit(96);
                            cm.sendOk("장비 슬롯 96칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족합니다.");
                            cm.dispose();
                            break;
                        }
                    case 6901: //소비
                        if (cm.getInventory(2).getSlotLimit() >= 96) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2)) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(2).setSlotLimit(96);
                            cm.sendOk("소비 슬롯 96칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족합니다.");
                            cm.dispose();
                            break;
                        }
                    case 6902: //기타
                        if (cm.getInventory(4).getSlotLimit() >= 96) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2)) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(4).setSlotLimit(96);
                            cm.sendOk("기타 슬롯 96칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족합니다.");
                            cm.dispose();
                            break;
                        }
                    case 6910: //장비
                        if (cm.getInventory(1).getSlotLimit() >= 120) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2) && cm.getInventory(1).getSlotLimit() == 96) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(1).setSlotLimit(120);
                            cm.sendOk("장비 슬롯 120칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족하거나 인벤토리가 96칸이 아닙니다.");
                            cm.dispose();
                            break;
                        }
                    case 6911: //소비
                        if (cm.getInventory(2).getSlotLimit() >= 120) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2) && cm.getInventory(2).getSlotLimit() == 96) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(2).setSlotLimit(120);
                            cm.sendOk("소비 슬롯 120칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족하거나 인벤토리가 96칸이 아닙니다.");
                            cm.dispose();
                            break;
                        }
                    case 6912: //기타
                        if (cm.getInventory(4).getSlotLimit() >= 120) {
                            cm.sendOk("이미 확장 완료되었습니다.");
                            cm.dispose();
                            break;
                        } else if (cm.haveItem(4001126, 2) && cm.getInventory(4).getSlotLimit() == 96) {
                            cm.gainItem(4001126, -2);
                            cm.getInventory(4).setSlotLimit(120);
                            cm.sendOk("기타 슬롯 120칸 확장 완료!\r\n#r#e채널이동 혹은 재접속 해주세요!");
                            cm.dispose();
                            break;
                        } else {
                            cm.sendOk("단풍잎이 부족하거나 인벤토리가 96칸이 아닙니다.");
                            cm.dispose();
                            break;
                        }
                    default:
                        cm.dispose();
                        break;
                }

            } 
            break;
        case 4:
            /*스테이터스 5*/
            /*스테이터스 5*/
            /*스테이터스 5*/
            /*스테이터스 5*/
            if (sc60 == 1) {
                if (cm.haveItem(4001126, 2) && cm.canHold(checkweapon, 5)) {
                    cm.gainItem(4001126, -2);
                    if (checkweapon == 2040804) {
                        cm.gainItem(checkweapon, 4);
                    } else {
                        cm.gainItem(checkweapon, 5);
                    }
                    cm.sendYesNo("#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k 구매 완료!\r\n\r\n#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k를 더 구매하시겠습니까?");
					status--;
                } else {
                    cm.sendOk("단풍잎 혹은 인벤토리가 부족합니다");
                    cm.dispose();
                }
            } else if (sc70 == 1) {
                if (cm.haveItem(4001126, 2) && cm.canHold(checkweapon, 3)) {
                    cm.gainItem(4001126, -2);
                    if (checkweapon == 2040810 || checkweapon == 2040304) {
                        cm.gainItem(checkweapon, 2);
                    } else {
                        cm.gainItem(checkweapon, 3);
                    }
                    cm.sendYesNo("#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k 구매 완료!\r\n\r\n#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k를 더 구매하시겠습니까?");
					status--;
                } else {
                    cm.sendOk("단풍잎 혹은 인벤토리가 부족합니다");
                    cm.dispose();
                }
            } else if (sc30 == 1) {
                if (cm.haveItem(4001126, 2) && cm.canHold(checkweapon, 3)) {
                    cm.gainItem(4001126, -2);
                    if (checkweapon == 2040811 || checkweapon == 2040305) {
                        cm.gainItem(checkweapon, 2);
                    } else {
                        cm.gainItem(checkweapon, 3);
                    }
                    cm.sendYesNo("#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k 구매 완료!\r\n\r\n#b#e#i"+ checkweapon + "##z" + checkweapon + "##n#k를 더 구매하시겠습니까?");
					status--;
                } else {
                    cm.sendOk("단풍잎 혹은 인벤토리가 부족합니다");
                    cm.dispose();
                }
            } else if (sendegg == 1) {
                vitems = cm.getText().split(":");
                var cid = Packages.client.MapleCharacterUtil.getIdByName(vreceiver);
                var channel = Packages.handling.world.World.Find.findChannel(vreceiver);

                if (channel >= 0) {
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.sendDuey(28, null, null));
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.serverNotice(5, "아이템이 지급되었습니다. NPC 택배원 <듀이> 에게서 아이템을 수령하세요!"));
                }
                Packages.handling.channel.handler.DueyHandler.addNewItemToDb(/*5121060*/4170007, vitems[0], cid, vreceiver, "홍보보상", channel >= 0);
                cm.sendOk("#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 전송하였습니다.");
                cm.dispose();
                return;
            } else if (sendleaf == 1) {
                vitems = cm.getText().split(":");
                var cid = Packages.client.MapleCharacterUtil.getIdByName(vreceiver);
                var channel = Packages.handling.world.World.Find.findChannel(vreceiver);

                if (channel >= 0) {
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.sendDuey(28, null, null));
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.serverNotice(5, "아이템이 지급되었습니다. NPC 택배원 <듀이> 에게서 아이템을 수령하세요!"));
                }
                Packages.handling.channel.handler.DueyHandler.addNewItemToDb(/*5121060*/4001126, vitems[0], cid, vreceiver, "홍보보상", channel >= 0);
                cm.sendOk("#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 전송하였습니다.");
                cm.dispose();
                return;
            } else if (chuseok == 1) {
                vitems = cm.getText().split(":");
                var cid = Packages.client.MapleCharacterUtil.getIdByName(vreceiver);
                var channel = Packages.handling.world.World.Find.findChannel(vreceiver);

                if (channel >= 0) {
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.sendDuey(28, null, null));
                    Packages.handling.world.World.Broadcast.sendPacket(cid, Packages.tools.MaplePacketCreator.serverNotice(5, "아이템이 지급되었습니다. NPC 택배원 <듀이> 에게서 아이템을 수령하세요!"));
                }
                Packages.handling.channel.handler.DueyHandler.addNewItemToDb(/*5121060*/4170004, vitems[0], cid, vreceiver, "홍보보상", channel >= 0);
                cm.sendOk("#r" + vreceiver + "#k님에게#b " + vitems[0] + "개#k를 전송하였습니다.");
                cm.dispose();
                return;
            } else if (starter == 1) { // 초보자 반지 1단계
                itemcode = 1112404;
                item = Inv.getItem(selection);
                if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 2)) {
                        if (item.getSpeed() < 4) {
                            cm.gainItem(4001126, -2);
                            cm.gainItem(checkweapon, 2);
                            item.setSpeed(4);
                            item.setJump(4);
                            item.setStr(2);
                            item.setDex(2);
                            item.setInt(2);
                            item.setLuk(2);
                            item.setHp(100);
                            item.setMp(100);
                            item.setAvoid(5);
                            item.setAcc(5);
                            cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
                            FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                            cm.sendOk("초보자의 반지 1단계 강화 완료!");
                            cm.dispose();
                        } else {
                            cm.sendOk("이미 강화가 완료되었습니다.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } else if (lv110 == 1) { // 110 장비
                if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() <= 1 || cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() <= 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 3)) {
                        cm.gainItem(4001126, -3);
                        //cm.gainItem(2022070, 5);
                        cm.gainItem(4000245, 10);
                        cm.gainItem(4000244, 10);
                        //cm.gainItem(2000004, 100);
                        cm.gainItem(2000005, 100);
                        /* cm.gainItem(2040013, 1);
                         cm.gainItem(2040012, 1);
                         cm.gainItem(2040811, 1);
                         cm.gainItem(2040810, 1);*/
                        cm.gainItem(checkweapon, 2);
                        FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                        cm.sendYesNo("#b#eLv.110 패키지#n#k 구매 완료!\r\n\r\n선택하신 #b#e#i" + checkweapon + "##z" + checkweapon + "##n#k로\r\n\r\n#b#eLv.110 패키지#n#k를 더 구매하시겠습니까?");
                        status--;
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } else if (lv120 == 1) { // 120장비
                if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot() < 1 || cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() <= 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 3)) {
                        cm.gainItem(4001126, -3);
                        //cm.gainItem(2022070, 5);
                        cm.gainItem(4020009, 20);
                        //cm.gainItem(2000004, 100);
                        cm.gainItem(2000005, 100);
                        /* cm.gainItem(2040013, 1);
                         cm.gainItem(2040012, 1);
                         cm.gainItem(2040811, 1);
                         cm.gainItem(2040810, 1);*/
                        cm.gainItem(checkweapon, 2);
                        FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                        cm.sendYesNo("#b#eLv.120 패키지#n#k 구매 완료!\r\n\r\n선택하신 #b#e#i" + checkweapon + "##z" + checkweapon + "##n#k로\r\n\r\n#b#eLv.120 패키지#n#k를 더 구매하시겠습니까?");
                        status--;
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } else if (middle == 1) { // 초보자 반지 2단계
                itemcode = 1112404;
                item = Inv.getItem(selection);
				if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 2)) {
                        if (item.getSpeed() == 4) {
                            cm.gainItem(4001126, -2);
                            cm.gainItem(checkweapon, 2);
                            item.setSpeed(6);
                            item.setJump(6);
                            item.setStr(3);
                            item.setDex(3);
                            item.setInt(3);
                            item.setLuk(3);
                            item.setHp(200);
                            item.setMp(200);
                            item.setAvoid(10);
                            item.setAcc(10);
                            cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
                            FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                            cm.sendOk("초보자의 반지 2단계 강화 완료!");
                            cm.dispose();
                        } else {
                            cm.sendOk("이미 강화했거나 1단계 강화를 하지 않았습니다.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } else if (high == 1) { // 초보자 반지 3단계
                itemcode = 1112404;
                item = Inv.getItem(selection);
                if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 2)) {
                        if (item.getSpeed() == 6) {
                            cm.gainItem(4001126, -2);
                            cm.gainItem(checkweapon, 2);
                            item.setSpeed(8);
                            item.setJump(8);
                            item.setStr(4);
                            item.setDex(4);
                            item.setInt(4);
                            item.setLuk(4);
                            item.setHp(300);
                            item.setMp(300);
                            item.setAvoid(15);
                            item.setAcc(15);
                            item.setWatk(1);
                            item.setMatk(1);
                            cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
                            FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                            cm.sendOk("초보자의 반지 3단계 강화 완료!");
                            cm.dispose();
                        } else {
                            cm.sendOk("이미 강화했거나 2단계 강화를 하지 않았습니다.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } else if (plague == 1) { // 초보자 반지 4단계
                itemcode = 1112404;
                item = Inv.getItem(selection);
                if (cm.getPlayer().getInventory(MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.sendOk("인벤토리가 부족합니다.");
                    cm.dispose();
                } else {
                    if (cm.haveItem(4001126, 2)) {
                        if (item.getSpeed() == 8) {
                            cm.gainItem(4001126, -2);
                            cm.gainItem(checkweapon, 2);
                            item.setSpeed(10);
                            item.setJump(10);
                            item.setStr(5);
                            item.setDex(5);
                            item.setInt(5);
                            item.setLuk(5);
                            item.setHp(500);
                            item.setMp(500);
							item.setAvoid(20);
                            item.setAcc(20);
                            item.setWatk(2);
                            item.setMatk(2);
                            cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
                            FileoutputUtil.log(FileoutputUtil.채팅로그, "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName());
                            cm.sendOk("초보자의 반지 4단계 강화 완료!");
                            cm.dispose();
                        } else {
                            cm.sendOk("이미 강화했거나 3단계 강화를 하지 않았습니다.");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("단풍잎이 부족합니다.");
                        cm.dispose();
                    }
                }
            } 
            break;
    }
}

function getList() {
    Inv = cm.getInventory(1);
    checkInv = false;
    var message = "초보자의 반지 아이템을 선택해주세요.\r\n#r아이템은 반드시 인벤토리에 있어야합니다.\r\n";
    for (i = 0; i < Inv.getSlotLimit(); i++) {
        if (Inv.getItem(i) == null) {
            continue;
        }
        if (Inv.getItem(i).getItemId() != 1112404) {
            continue;
        }
        checkInv = true;
        message += "#L" + i + "##i" + Inv.getItem(i).getItemId() + ":# #b#t" + Inv.getItem(i).getItemId() + "##k\r\n";
    }
    if (!checkInv) {
        cm.sendOk("#i1112404##e#b#z1112404##k#n를 장착 해제해주세요.");
        cm.dispose();
    }
    checkaskring = 1;
    //status =2;
    cm.sendSimple(message);
    //status =3;
}