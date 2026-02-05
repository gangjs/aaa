var status = -1;
var enter = "\r\n";
var range = 0;
var grade = 0;

importPackage(Packages.handling.channel.handler);
importPackage(Packages.constants);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.server);
importPackage(Packages.server.maps);
importPackage(Packages.tools);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
        status--;
    }
    if (mode == 1) {
        // cm.dispose();
        status++;
    }
    switch (status) {
        case 0:
            var message = "#i1112404##e#b 반지#k#n를 강화하거나 반지에 대한 설명을 볼 수 있습니다.";
//			message += "#r#e반지를 버릴 경우 강화 복구 불가능하니 주의해주세요.\r\n보스의 반지는 잃어버릴 시 재강화가 불가능합니다.#n\r\n\r\n";            
            message += "#b#L2#퀘스트의 반지 설명 보기#l      ";
			message += "#b#L8#퀘스트의 반지 강화#l\r\n";
            message += "#b#L3#사냥꾼의 반지 설명 보기#l      ";
			message += "#b#L9#사냥꾼의 반지 강화#l\r\n";
			message += "#b#L1#초보자의 반지 설명 보기#l      ";
			message += "#b#L11#초보자의 반지 강화#l\r\n";		
			message += "#b#L4#보스의 반지 설명 보기#l         ";
			message += "#b#L7#보스의 반지 강화#l\r\n";				
			message += "#r#L6##z1112406# 받기(Lv.70)#l      "; // 보스의 반지			
			message += "#r#L10#등록된 몬스터 확인#l\r\n";
//			message += "#r#L5#퀘스트,사냥꾼,초보자 반지 다시받기\r\n";
			
			
            cm.sendSimple(message);
            //cm.dispose();
            break;
        case 1:
			sel = selection;
            switch (selection) {
                case 1:
					var message = "";
					message += "#e[초보자의 반지 설명]#n\r\n\r\n";
                    message += "#e#b#i1112404##t1112404##n#k는 #e#r#i4001126#단풍잎 상점#k#n에서 #e#b1단계부터\r\n4단계#n#k까지 강화할 수 있어요. \r\n\r\n자세한 내용은 #r자유시장의 단풍잎 상점#k을 확인해주세요!\r\n\r\n\r\n";

                    cm.sendSimple(message);
                    status = -1;
                    break;
                case 2:
                    var message = "";
                    message += "#e[퀘스트의 반지 설명]#n\r\n\r\n";
                    message += "퀘스트의 반지는 #b#e완료한 퀘스트 횟수#n#k에 따라 강화할 수 있어요. ";
                    message += "#b빅토리아 아일랜드(초보자 마을)의 퀘스트는 제외#k되며 반복 퀘스트의 경우 1회만 카운트 됩니다.\r\n\r\n";
					 message += "#r#e최종 강화(20단계)#n#k를 위해서는 #e#b650개의 퀘스트를 완료#n#k해야 합니다. #r#e모든 퀘스트 완료를 목표#n#k로 해주세요!\r\n\r\n\r\n";

                    cm.sendSimple(message);
                    status = -1;
                    break;
                case 3:
                    var message = "";
                    message += "#e[사냥꾼의 반지 설명]#n\r\n\r\n";
                    message += "#e몬스터를 처치#n하면 #b#e일반 몬스터#n는 #e0.8#n%(금·토요일 #e1%#n), #r#e보스 몬스터#n는 #e10% 확률#n#k로 주문서 성공 이펙트와 함께 #b몬스터#k가 등록됩니다. ";
                    message += "#b대화 선택지#k에서 #r등록된 몬스터 확인#k이 가능합니다.";
					message += "\r\n또한 #b#i2022338##e#z2022338##n#k이 있다면 원하는 #b일반 몬스터#k를 등록할 수 있어요. #e#b#t2022338##n#k은 0.05% 확률로 몬스터에게 드랍됩니다. ";				
                    message += "#r#e최종 강화(20단계)#n#k를 위해서는 일반 몬스터, 보스 몬스터 상관없이 #e#b330마리를 등록#n#k해야 합니다.\r\n\r\n";

                    cm.sendSimple(message);
                    status = -1;
                    break;
				case 4:
					var message = "";
                    message += "#e[보스의 반지 설명]#n\r\n\r\n";
					message += "보스의 반지는 #b#e레벨 달성, 보스 몬스터 등록, 보스 증표#n#k로 강화할 수 있어요. ";
                    message += "#r보스 몬스터#k를 처치하면 #r#e10% 확률#n#k로 주문서 성공 이펙트와 함께 보스 몬스터가 등록됩니다.";
					
                    message += "\r\n#r#e보스 몬스터는 #b#i2022338##e#z2022338##n#k을 사용할 수 없고 ";
					message += "보스의 반지를 강화할 수 있는 몬스터는 #r일부 보스 몬스터#k만 해당됩니다.\r\n\r\n";

                    cm.sendSimple(message);
                    status = -1;
					break;
				case 5:
					if (cm.haveItem(1112402, 1) && cm.haveItem(1112403, 1) && cm.haveItem(1112404, 1)) {
						cm.sendOk("이미 장비 인벤토리에 존재합니다.");
					} else {				
						if (!cm.haveItem(1112402, 1)) {
							cm.gainItem(1112402, 1);
						} 	
						if (!cm.haveItem(1112403, 1)) {
							cm.gainItem(1112403, 1);
						}
						if (!cm.haveItem(1112404, 1)) {
							cm.gainItem(1112404, 1);		
						}	
						cm.sendOk("반지 지급 완료!\r\n지급되지 않았다면 착용 중인지 확인해주세요!");
					}
                    cm.dispose();
                    return;
					break;
				case 6:
					if (cm.haveItem(1112406, 1)) {
						cm.sendOk("이미 보스의 반지를 지급 받았습니다.");
					} else {
						if (cm.getPlayer().getLevel() >= 70) {
							cm.gainItem(1112406, 1);
							// cm.sendOk("보스의 반지 지급 완료!\r\n재강화는 불가능하므로 절대 잃어버리지 마세요!");
							cm.sendOk("보스의 반지 지급 완료!\r\n지급되지 않았다면 착용 중인지 확인해주세요!");
						} else {
							cm.sendOk("70레벨 이후에 수령 가능합니다.");
						}
					}
                    cm.dispose();
                    return;
					break;
				case 7:
					cm.dispose();
                    cm.openNpc(1101007);
                    break;
				case 8:
					if (getcompleteQuest() >= 1) {
						getListquest();
						//cm.sendSimple(getcompleteQuest()+"개발중 개발중아직 퀘스트를 클리어하신게 없습니다.(메이플 아일랜드 제외)");
						//status = -1;
					} else {
						cm.sendOk("클리어한 퀘스트가 없습니다. \r\n빅토리아 아일랜드(초보자 마을) 퀘스트는 제외됩니다.");
					}
					return;
					break;		
				case 9:
					if (cm.getPlayer().getallQuestCustomData() >= 1) {
						getList();
					} else {
						cm.sendOk("등록한 몬스터가 존재하지 않습니다.");
					}
					return;
					break;				
				case 11:
					message = "";
					message += "초보자의 반지는 #b자유시장의 #r단풍잎 상점#k에서 강화할 수 \r\n있습니다.";		
					cm.sendOk(message);
                    cm.dispose();
                    return;
					// cm.openNpc(9000019);	        				
                    break;
				case 10:
					cm.getClient().getSession().write(Packages.tools.MaplePacketCreator.enableActions());
					if (cm.getPlayerStat("LVL") < 10 && cm.getJob() == 0) {
						cm.getPlayer().dropMessage(5, "레벨 10 미만의 초보자는 사용할 수 없습니다.");
						cm.dispose();
						return;
					}
					var message = "";
					message += "#e#i2022338#[몬스터 등록]#n" + enter + enter;
					message += "등록된 몬스터를 확인하실 수 있습니다.#b" + enter + enter;
					message += "#L1#등록된 몬스터 확인" + enter;
					message += "#r#L2#미등록 몬스터 확인" + enter;
					message += "#b#L3#등록된 몬스터 갯수 확인#l" + enter + enter + enter;
			//		message += "#k#i1112402##e[반지 강화]#n#b" + enter;
			//		message += "#L4#사냥꾼의 반지 / 퀘스트의 반지 강화#n" + enter + enter;
					cm.sendSimple(message);
                    break;		
				
            }
            break;
			
		case 2:
			if (sel == 10) {
				if (selection == 1) {
				range = 13;
				showmobid();
				} else if (selection == 2) {
					range = 23;
					NotCompleteQuest();
				} else if (selection == 3) {
					cm.sendSimple("몬스터 #r#e" + cm.getPlayer().getallQuestCustomData() + "#n#k마리를 등록했습니다.#n");
					status = -1;
				}			
			}else if (sel == 9) {
				itemcode = 1112403;	// 사냥꾼의 반지
				item = Inv.getItem(selection);
				var r = "몬스터를 #e#r" + cm.getPlayer().getallQuestCustomData() + "#k#n 마리 등록했습니다.#n" + enter;
				r += "#i" + itemcode + "##r #e#t" + itemcode + "# "
				if (cm.getPlayer().getallQuestCustomData() >= 1 && cm.getPlayer().getallQuestCustomData() < 3) { // 1단계
					r += "1단계\r\n\r\n#e#b올스텟 +1\r\n명중률,회피율 +1\r\nHP,MP +10" + enter;
					grade = 1;
				} else if (cm.getPlayer().getallQuestCustomData() >= 3 && cm.getPlayer().getallQuestCustomData() < 6) { // 2단계
					r += "2단계\r\n\r\n#e#b올스텟 +1\r\n명중률,회피율 +1\r\nHP,MP +20" + enter;
					grade = 2;
				} else if (cm.getPlayer().getallQuestCustomData() >= 6 && cm.getPlayer().getallQuestCustomData() < 10) { // 3단계
					r += "3단계\r\n\r\n#e#b올스텟 +1\r\n명중률,회피율 +1\r\nHP,MP +30" + enter;
					grade = 3;
				} else if (cm.getPlayer().getallQuestCustomData() >= 10 && cm.getPlayer().getallQuestCustomData() < 15) { // 4단계
					r += "4단계\r\n\r\n#e#b올스텟 +1\r\n명중률,회피율 +1\r\nHP,MP +40" + enter;
					grade = 4;
				} else if (cm.getPlayer().getallQuestCustomData() >= 15 && cm.getPlayer().getallQuestCustomData() < 25) { // 5단계
					r += "5단계\r\n\r\n#e#b올스텟 +2\r\n명중률,회피율 +2\r\nHP,MP +50" + enter;
					grade = 5;
				} else if (cm.getPlayer().getallQuestCustomData() >= 25 && cm.getPlayer().getallQuestCustomData() < 35) { // 6단계
					r += "6단계\r\n\r\n#e#b올스텟 +2\r\n명중률,회피율 +2\r\nHP,MP +60" + enter;
					grade = 6;
				} else if (cm.getPlayer().getallQuestCustomData() >= 35 && cm.getPlayer().getallQuestCustomData() < 45) { // 7단계
					r += "7단계\r\n\r\n#e#b올스텟 +2\r\n명중률,회피율 +2\r\nHP,MP +70" + enter;
					grade = 7;
				} else if (cm.getPlayer().getallQuestCustomData() >= 45 && cm.getPlayer().getallQuestCustomData() < 55) { // 8단계
					r += "8단계\r\n\r\n#e#b올스텟 +2\r\n명중률,회피율 +2\r\nHP,MP +80" + enter;
					grade = 8;
				} else if (cm.getPlayer().getallQuestCustomData() >= 55 && cm.getPlayer().getallQuestCustomData() < 65) { // 9단계
					r += "9단계\r\n\r\n#e#b올스텟 +2\r\n명중률,회피율 +2\r\nHP,MP +90" + enter;
					grade = 9;
				} else if (cm.getPlayer().getallQuestCustomData() >= 65 && cm.getPlayer().getallQuestCustomData() < 80) { // 10단계
					r += "10단계\r\n\r\n#e#b올스텟 +3\r\n명중률,회피율 +3\r\nHP,MP +100\r\n공격력,마력 +1" + enter;
					grade = 10;
				} else if (cm.getPlayer().getallQuestCustomData() >= 80 && cm.getPlayer().getallQuestCustomData() < 100) { // 11단계
					r += "11단계\r\n\r\n#e#b올스텟 +3\r\n명중률,회피율 +3\r\nHP,MP +110\r\n공격력,마력 +1" + enter;
					grade = 11;
				} else if (cm.getPlayer().getallQuestCustomData() >= 100 && cm.getPlayer().getallQuestCustomData() < 120) { // 12단계
					r += "12단계\r\n\r\n#e#b올스텟 +3\r\n명중률,회피율 +3\r\nHP,MP +120\r\n공격력,마력 +1" + enter;
					grade = 12;
				} else if (cm.getPlayer().getallQuestCustomData() >= 120 && cm.getPlayer().getallQuestCustomData() < 140) { // 13단계
					r += "13단계\r\n\r\n#e#b올스텟 +3\r\n명중률,회피율 +3\r\nHP,MP +130\r\n공격력,마력 +1" + enter;
					grade = 13;
				} else if (cm.getPlayer().getallQuestCustomData() >= 140 && cm.getPlayer().getallQuestCustomData() < 160) { // 14단계
					r += "14단계\r\n\r\n#e#b올스텟 +3\r\n명중률,회피율 +3\r\nHP,MP +140\r\n공격력,마력 +1" + enter;
					grade = 14;
				} else if (cm.getPlayer().getallQuestCustomData() >= 160 && cm.getPlayer().getallQuestCustomData() < 180) { // 15단계
					r += "15단계\r\n\r\n#e#b올스텟 +4\r\n명중률,회피율 +4\r\nHP,MP +150\r\n공격력,마력 +1" + enter;
					grade = 15;
				} else if (cm.getPlayer().getallQuestCustomData() >= 180 && cm.getPlayer().getallQuestCustomData() < 200) { // 16단계
					r += "16단계\r\n\r\n#e#b올스텟 +4\r\n명중률,회피율 +4\r\nHP,MP +160\r\n공격력,마력 +1" + enter;
					grade = 16;
				} else if (cm.getPlayer().getallQuestCustomData() >= 200 && cm.getPlayer().getallQuestCustomData() < 230) { // 17단계
					r += "17단계\r\n\r\n#e#b올스텟 +4\r\n명중률,회피율 +4\r\nHP,MP +170\r\n공격력,마력 +1" + enter;
					grade = 17;
				} else if (cm.getPlayer().getallQuestCustomData() >= 230 && cm.getPlayer().getallQuestCustomData() < 280) { // 18단계
					r += "18단계\r\n\r\n#e#b올스텟 +4\r\n명중률,회피율 +4\r\nHP,MP +180\r\n공격력,마력 +1" + enter;
					grade = 18;
				} else if (cm.getPlayer().getallQuestCustomData() >= 280 && cm.getPlayer().getallQuestCustomData() < 330) { // 19단계
					r += "19단계\r\n\r\n#e#b올스텟 +4\r\n명중률,회피율 +4\r\nHP,MP +190\r\n공격력,마력 +1" + enter;
					grade = 19;
				} else if (cm.getPlayer().getallQuestCustomData() >= 330 && cm.getPlayer().getallQuestCustomData() < 999) { // 20단계
					if (item.getHp() == 200) {							
						cm.sendOk("이미 최종 강화 단계입니다.");
						cm.dispose();
					}			
					r += "20단계 (최종단계)\r\n\r\n#e#b올스텟 +5\r\n명중률,회피율 +5\r\nHP,MP +200\r\n공격력,마력 +2" + enter;		
					grade = 20;					
				}
				r += "\r\n#n#k강화하시겠습니까?"
				cm.sendYesNo(r);
			} else if (sel == 8) {
				itemcode = 1112402;	//퀘스트의 반지
				item = Inv.getItem(selection);
				var rr = "퀘스트를 #e#r" + getcompleteQuest() + "#k#n 개 클리어했습니다.#n" + enter;
				rr += "#i" + itemcode + "##r #e#t" + itemcode + "# "
				if (getcompleteQuest() >= 1 && getcompleteQuest() < 5) { // 1단계
					rr += "1단계\r\n\r\n#e#b이동속도,점프력 +1\r\n명중률,회피율 +1\r\nHP,MP +10" + enter;
					grade = 1;
				} else if (getcompleteQuest() >= 5 && getcompleteQuest() < 15) { // 2단계
					rr += "2단계\r\n\r\n#e#b이동속도,점프력 +1\r\n명중률,회피율 +1\r\nHP,MP +20" + enter;
					grade = 2;
				} else if (getcompleteQuest() >= 15 && getcompleteQuest() < 30) { // 3단계
					rr += "3단계\r\n\r\n#e#b이동속도,점프력 +1\r\n명중률,회피율 +1\r\nHP,MP +30" + enter;
					grade = 3;
				} else if (getcompleteQuest() >= 30 && getcompleteQuest() < 50) { // 4단계				
					rr += "4단계\r\n\r\n#e#b이동속도,점프력 +1\r\n명중률,회피율 +1\r\nHP,MP +40" + enter;
					grade = 4;
				} else if (getcompleteQuest() >= 50 && getcompleteQuest() < 75) { // 5단계				
					rr += "5단계\r\n\r\n#e#b이동속도,점프력 +2\r\n명중률,회피율 +2\r\nHP,MP +50" + enter;
					grade = 5;
				} else if (getcompleteQuest() >= 75 && getcompleteQuest() < 100) { // 6단계			
					rr += "6단계\r\n\r\n#e#b이동속도,점프력 +2\r\n명중률,회피율 +2\r\nHP,MP +60" + enter;
					grade = 6;
				} else if (getcompleteQuest() >= 100 && getcompleteQuest() < 130) { // 7단계
					rr += "7단계\r\n\r\n#e#b이동속도,점프력 +2\r\n명중률,회피율 +2\r\nHP,MP +70" + enter;
					grade = 7;
				} else if (getcompleteQuest() >= 130 && getcompleteQuest() < 150) { // 8단계
					rr += "8단계\r\n\r\n#e#b이동속도,점프력 +2\r\n명중률,회피율 +2\r\nHP,MP +80" + enter;
					grade = 8;
				} else if (getcompleteQuest() >= 150 && getcompleteQuest() < 199) { // 9단계
					rr += "9단계\r\n\r\n#e#b이동속도,점프력 +2\r\n명중률,회피율 +2\r\nHP,MP +90" + enter;
					grade = 9;
				} else if (getcompleteQuest() >= 200 && getcompleteQuest() < 240) { // 10단계
					rr += "10단계\r\n\r\n#e#b이동속도,점프력 +3\r\n명중률,회피율 +3\r\nHP,MP +100\r\n공격력,마력 +1" + enter;
					grade = 10;
				} else if (getcompleteQuest() >= 240 && getcompleteQuest() < 265) { // 11단계
					rr += "11단계\r\n\r\n#e#b이동속도,점프력 +3\r\n명중률,회피율 +3\r\nHP,MP +110\r\n공격력,마력 +1" + enter;
					grade = 11;
				} else if (getcompleteQuest() >= 265 && getcompleteQuest() < 300) { // 12단계
					rr += "12단계\r\n\r\n#e#b이동속도,점프력 +3\r\n명중률,회피율 +3\r\nHP,MP +120\r\n공격력,마력 +1" + enter;
					grade = 12;
				} else if (getcompleteQuest() >= 300 && getcompleteQuest() < 340) { // 13단계
					rr += "13단계\r\n\r\n#e#b이동속도,점프력 +3\r\n명중률,회피율 +3\r\nHP,MP +130\r\n공격력,마력 +1" + enter;
					grade = 13;
				} else if (getcompleteQuest() >= 340 && getcompleteQuest() < 380) { // 14단계
					rr += "14단계\r\n\r\n#e#b이동속도,점프력 +3\r\n명중률,회피율 +3\r\nHP,MP +140\r\n공격력,마력 +1" + enter;
					grade = 14;
				} else if (getcompleteQuest() >= 380 && getcompleteQuest() < 440) { // 15단계
					rr += "15단계\r\n\r\n#e#b이동속도,점프력 +4\r\n명중률,회피율 +4\r\nHP,MP +150\r\n공격력,마력 +1" + enter;
					grade = 15;
				} else if (getcompleteQuest() >= 440 && getcompleteQuest() < 480) { // 16단계
					rr += "16단계\r\n\r\n#e#b이동속도,점프력 +4\r\n명중률,회피율 +4\r\nHP,MP +160\r\n공격력,마력 +1" + enter;
					grade = 16;
				} else if (getcompleteQuest() >= 480 && getcompleteQuest() < 540) { // 17단계
					rr += "17단계\r\n\r\n#e#b이동속도,점프력 +4\r\n명중률,회피율 +4\r\nHP,MP +170\r\n공격력,마력 +1" + enter;
					grade = 17;
				} else if (getcompleteQuest() >= 540 && getcompleteQuest() < 600) { // 18단계
					rr += "18단계\r\n\r\n#e#b이동속도,점프력 +4\r\n명중률,회피율 +4\r\nHP,MP +180\r\n공격력,마력 +1" + enter;
					grade = 18;
				} else if (getcompleteQuest() >= 600 && getcompleteQuest() < 650) { // 19단계
					rr += "19단계\r\n\r\n#e#b이동속도,점프력 +4\r\n명중률,회피율 +4\r\nHP,MP +190\r\n공격력,마력 +1" + enter;
					grade = 19;
				} else if (getcompleteQuest() >= 650 && getcompleteQuest() < 9999) { // 20단계
					if (item.getHp() == 200) {							
						cm.sendOk("이미 최종 강화 단계입니다.");
						cm.dispose();
					}							
					rr += "20단계 (최종단계)\r\n\r\n#e#b이동속도,점프력 +5\r\n명중률,회피율 +5\r\nHP,MP +200\r\n공격력,마력 +2" + enter;
					grade = 20;
				}
				rr += "\r\n#n#k강화하시겠습니까?"
				cm.sendYesNo(rr);
			}
			break;
		case 3:
			if (sel == 9) {
				if (cm.getPlayer().getallQuestCustomData() >= 1 && cm.getPlayer().getallQuestCustomData() < 3) {
					item.setStr(1);
					item.setDex(1);
					item.setInt(1);
					item.setLuk(1);
					item.setHp(10);
					item.setMp(10);	
					item.setAcc(1);
					item.setAvoid(1);													
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					// FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 3 && cm.getPlayer().getallQuestCustomData() < 6) {
					item.setStr(1);
					item.setDex(1);
					item.setInt(1);
					item.setLuk(1);
					item.setHp(20);
					item.setMp(20);	
					item.setAcc(1);
					item.setAvoid(1);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 6 && cm.getPlayer().getallQuestCustomData() < 10) {
					item.setStr(1);
					item.setDex(1);
					item.setInt(1);
					item.setLuk(1);
					item.setHp(30);
					item.setMp(30);	
					item.setAcc(1);
					item.setAvoid(1);	
					//	FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 10 && cm.getPlayer().getallQuestCustomData() < 15) {
					item.setStr(1);
					item.setDex(1);
					item.setInt(1);
					item.setLuk(1);
					item.setHp(40);
					item.setMp(40);	
					item.setAcc(1);
					item.setAvoid(1);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 15 && cm.getPlayer().getallQuestCustomData() < 25) {
					item.setStr(2);
					item.setDex(2);
					item.setInt(2);
					item.setLuk(2);
					item.setHp(50);
					item.setMp(50);	
					item.setAcc(2);
					item.setAvoid(2);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 25 && cm.getPlayer().getallQuestCustomData() < 35) {
					item.setStr(2);
					item.setDex(2);
					item.setInt(2);
					item.setLuk(2);
					item.setHp(60);
					item.setMp(60);	
					item.setAcc(2);
					item.setAvoid(2);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 35 && cm.getPlayer().getallQuestCustomData() < 45) {
					item.setStr(2);
					item.setDex(2);
					item.setInt(2);
					item.setLuk(2);
					item.setHp(70);
					item.setMp(70);	
					item.setAcc(2);
					item.setAvoid(2);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 45 && cm.getPlayer().getallQuestCustomData() < 55) {
					item.setStr(2);
					item.setDex(2);
					item.setInt(2);
					item.setLuk(2);
					item.setHp(80);
					item.setMp(80);	
					item.setAcc(2);
					item.setAvoid(2);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 55 && cm.getPlayer().getallQuestCustomData() < 65) {
					item.setStr(2);
					item.setDex(2);
					item.setInt(2);
					item.setLuk(2);
					item.setHp(90);
					item.setMp(90);	
					item.setAcc(2);
					item.setAvoid(2);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 65 && cm.getPlayer().getallQuestCustomData() < 80) {
					item.setStr(3);
					item.setDex(3);
					item.setInt(3);
					item.setLuk(3);
					item.setHp(100);
					item.setMp(100);	
					item.setAcc(3);
					item.setAvoid(3);	
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 80 && cm.getPlayer().getallQuestCustomData() < 100) {
					item.setStr(3);
					item.setDex(3);
					item.setInt(3);
					item.setLuk(3);
					item.setHp(110);
					item.setMp(110);	
					item.setAcc(3);
					item.setAvoid(3);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 100 && cm.getPlayer().getallQuestCustomData() < 120) {
					item.setStr(3);
					item.setDex(3);
					item.setInt(3);
					item.setLuk(3);
					item.setHp(120);
					item.setMp(120);	
					item.setAcc(3);
					item.setAvoid(3);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 120 && cm.getPlayer().getallQuestCustomData() < 140) {
					item.setStr(3);
					item.setDex(3);
					item.setInt(3);
					item.setLuk(3);
					item.setHp(130);
					item.setMp(130);	
					item.setAcc(3);
					item.setAvoid(3);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 140 && cm.getPlayer().getallQuestCustomData() < 160) {
					item.setStr(3);
					item.setDex(3);
					item.setInt(3);
					item.setLuk(3);
					item.setHp(140);
					item.setMp(140);	
					item.setAcc(3);
					item.setAvoid(3);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 160 && cm.getPlayer().getallQuestCustomData() < 180) {
					item.setStr(4);
					item.setDex(4);
					item.setInt(4);
					item.setLuk(4);
					item.setHp(150);
					item.setMp(150);	
					item.setAcc(4);
					item.setAvoid(4);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 180 && cm.getPlayer().getallQuestCustomData() < 200) {
					item.setStr(4);
					item.setDex(4);
					item.setInt(4);
					item.setLuk(4);
					item.setHp(160);
					item.setMp(160);	
					item.setAcc(4);
					item.setAvoid(4);	
					item.setWatk(1);
					item.setMatk(1);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 200 && cm.getPlayer().getallQuestCustomData() < 230) {
					item.setStr(4);
					item.setDex(4);
					item.setInt(4);
					item.setLuk(4);
					item.setHp(170);
					item.setMp(170);	
					item.setAcc(4);
					item.setAvoid(4);	
					item.setWatk(1);
					item.setMatk(1);	
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 230 && cm.getPlayer().getallQuestCustomData() < 280) {
					item.setStr(4);
					item.setDex(4);
					item.setInt(4);
					item.setLuk(4);
					item.setHp(180);
					item.setMp(180);	
					item.setAcc(4);
					item.setAvoid(4);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 280 && cm.getPlayer().getallQuestCustomData() < 330) {
					item.setStr(4);
					item.setDex(4);
					item.setInt(4);
					item.setLuk(4);
					item.setHp(190);
					item.setMp(190);	
					item.setAcc(4);
					item.setAvoid(4);		
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (cm.getPlayer().getallQuestCustomData() >= 330 && cm.getPlayer().getallQuestCustomData() < 999) {
					item.setStr(5);
					item.setDex(5);
					item.setInt(5);
					item.setLuk(5);
					item.setHp(200);
					item.setMp(200);	
					item.setAcc(5);
					item.setAvoid(5);		
					item.setWatk(2);
					item.setMatk(2);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				}
			} else if (sel == 8) {
				if (getcompleteQuest() >= 1 && getcompleteQuest() < 5) {
					item.setSpeed(1);
					item.setJump(1);
					item.setAcc(1);
					item.setAvoid(1);
					item.setHp(10);
					item.setMp(10);					
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 5 && getcompleteQuest() < 15) {
					item.setSpeed(1);
					item.setJump(1);
					item.setAcc(1);
					item.setAvoid(1);
					item.setHp(20);
					item.setMp(20);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 15 && getcompleteQuest() < 30) {
					item.setSpeed(1);
					item.setJump(1);
					item.setAcc(1);
					item.setAvoid(1);
					item.setHp(30);
					item.setMp(30);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 30 && getcompleteQuest() < 50) {
					item.setSpeed(1);
					item.setJump(1);
					item.setAcc(1);
					item.setAvoid(1);
					item.setHp(40);
					item.setMp(40);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 50 && getcompleteQuest() < 75) {
					item.setSpeed(2);
					item.setJump(2);
					item.setAcc(2);
					item.setAvoid(2);
					item.setHp(50);
					item.setMp(50);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 75 && getcompleteQuest() < 100) {
					item.setSpeed(2);
					item.setJump(2);
					item.setAcc(2);
					item.setAvoid(2);
					item.setHp(60);
					item.setMp(60);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 100 && getcompleteQuest() < 130) {
					item.setSpeed(2);
					item.setJump(2);
					item.setAcc(2);
					item.setAvoid(2);
					item.setHp(70);
					item.setMp(70);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 130 && getcompleteQuest() < 150) {
					item.setSpeed(2);
					item.setJump(2);
					item.setAcc(2);
					item.setAvoid(2);
					item.setHp(80);
					item.setMp(80);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 150 && getcompleteQuest() < 200) {
					item.setSpeed(2);
					item.setJump(2);
					item.setAcc(2);
					item.setAvoid(2);
					item.setHp(90);
					item.setMp(90);		
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 200 && getcompleteQuest() < 240) {
					item.setSpeed(3);
					item.setJump(3);
					item.setAcc(3);
					item.setAvoid(3);
					item.setHp(100);
					item.setMp(100);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 240 && getcompleteQuest() < 265) {
					item.setSpeed(3);
					item.setJump(3);
					item.setAcc(3);
					item.setAvoid(3);
					item.setHp(110);
					item.setMp(110);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 265 && getcompleteQuest() < 300) {
					item.setSpeed(3);
					item.setJump(3);
					item.setAcc(3);
					item.setAvoid(3);
					item.setHp(120);
					item.setMp(120);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 300 && getcompleteQuest() < 340) {
					item.setSpeed(3);
					item.setJump(3);
					item.setAcc(3);
					item.setAvoid(3);
					item.setHp(130);
					item.setMp(130);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 340 && getcompleteQuest() < 380) {
					item.setSpeed(3);
					item.setJump(3);
					item.setAcc(3);
					item.setAvoid(3);
					item.setHp(140);
					item.setMp(140);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 380 && getcompleteQuest() < 440) {
					item.setSpeed(4);
					item.setJump(4);
					item.setAcc(4);
					item.setAvoid(4);
					item.setHp(150);
					item.setMp(150);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 440 && getcompleteQuest() < 480) {
					item.setSpeed(4);
					item.setJump(4);
					item.setAcc(4);
					item.setAvoid(4);
					item.setHp(160);
					item.setMp(160);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 480 && getcompleteQuest() < 540) {
					item.setSpeed(4);
					item.setJump(4);
					item.setAcc(4);
					item.setAvoid(4);
					item.setHp(170);
					item.setMp(170);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 540 && getcompleteQuest() < 600) {
					item.setSpeed(4);
					item.setJump(4);
					item.setAcc(4);
					item.setAvoid(4);
					item.setHp(180);
					item.setMp(180);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 600 && getcompleteQuest() < 650) {
					item.setSpeed(4);
					item.setJump(4);
					item.setAcc(4);
					item.setAvoid(4);
					item.setHp(190);
					item.setMp(190);
					item.setWatk(1);
					item.setMatk(1);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				} else if (getcompleteQuest() >= 650 && getcompleteQuest() < 9999) { // 20단계
					item.setSpeed(5);
					item.setJump(5);
					item.setAcc(5);
					item.setAvoid(5);
					item.setHp(200);
					item.setMp(200);
					item.setWatk(2);
					item.setMatk(2);
					//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+getcompleteQuest());
					cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
					cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
					cm.dispose();
				}
			}
			break;
    }

}


function getList() {
	Inv = cm.getInventory(1);
	checkInv = false;
	var message = "#e#b#z1112403##n#k를 선택해주세요.\r\n\r\n";
	for (i = 0; i < Inv.getSlotLimit(); i++) {
		if (Inv.getItem(i) == null) {
			continue;
		}
		if (Inv.getItem(i).getItemId() != 1112403) {
			continue;
		}
		checkInv = true;
		message += "#L" + i + "##i" + Inv.getItem(i).getItemId() + ":# #b#t" + Inv.getItem(i).getItemId() + "##k\r\n";
	}
	if (!checkInv) {
		cm.sendOk("#b사냥꾼의 반지#k를 장착 해제해주세요.");
		cm.dispose();
	}
	cm.sendSimple(message);
}

function getListquest() {
	Inv = cm.getInventory(1);
	checkInv = false;
	var message = "#e#b#z1112402##n#k를 선택해주세요.\r\n\r\n";
	for (i = 0; i < Inv.getSlotLimit(); i++) {
		if (Inv.getItem(i) == null) {
			continue;
		}
		if (Inv.getItem(i).getItemId() != 1112402) {
			continue;
		}
		checkInv = true;
		message += "#L" + i + "##i" + Inv.getItem(i).getItemId() + ":# #b#t" + Inv.getItem(i).getItemId() + "##k\r\n";
	}
	if (!checkInv) {
		cm.sendOk("#b퀘스트의 반지#k를 장착 해제해주세요.");
		cm.dispose();
	}
	cm.sendSimple(message);
}

function getcompleteQuest() {
	var con = null;
	var ps = null;
	var rs = null;
	var resultCount = 0;
	try {
		con = DatabaseConnection.getConnection();
		ps = con.prepareStatement("SELECT * FROM queststatus WHERE status = ? AND characterid = ?");

		ps.setInt(1, 2);
		ps.setInt(2, cm.getPlayer().getId());
		rs = ps.executeQuery();
		while (rs.next()) {
			if (rs.getInt("quest") >= 1999) {
				resultCount++;
			}
		}
		rs.close();
		ps.close();
		con.close();
		return resultCount;
	} catch (e) {
		cm.sendOk("오류가 발생하였습니다.\r\n\r\n" + e);
		cm.dispose();
		return;
	} finally {
		if (rs != null) {
			rs.close();
		}
		if (ps != null) {
			ps.close();
		}
		if (con != null) {
			ps.close();
		}
	}
}

function showmobid() {
	var con = null;
	var ps = null;
	var rs = null;
	var say = "";
	var show = false;
	try {
		con = DatabaseConnection.getConnection();
		ps = con.prepareStatement("SELECT quest FROM queststatus where customData like '%등록%' AND characterid = ?");
		ps.setInt(1, cm.getPlayer().getId());
		rs = ps.executeQuery();
		while (rs.next()) {
			if (range == 10) {
				if (rs.getInt("quest") >= 100100 && rs.getInt("quest") <= 2300100) {
					show = true;
					say += "#L" + rs.getInt("quest") + "##o" + rs.getInt("quest") + "# \r\n";
				}
			} else if (range == 11) {
				if (rs.getInt("quest") >= 3000000 && rs.getInt("quest") <= 5400000) {
					show = true;
					say += "#L" + rs.getInt("quest") + "##o" + rs.getInt("quest") + "# \r\n";
				}
			} else if (range == 12) {
				if (rs.getInt("quest") >= 6000000 && rs.getInt("quest") <= 9999999) {
					show = true;
					say += "#L" + rs.getInt("quest") + "##o" + rs.getInt("quest") + "# \r\n";
				}
			} else if (range == 13) {
				if (rs.getInt("quest") >= 100100 && rs.getInt("quest") <= 9999999) {
					show = true;
					say += "#L" + rs.getInt("quest") + "##o" + rs.getInt("quest") + "# \r\n";
				}
			}
		}
		rs.close();
		ps.close();
		con.close();
		if (show == true) {
			cm.sendSimple(say);
			status = -1;
		} else {
			cm.sendSimple("등록된 몬스터가 존재하지 않습니다.");
			status = -1;
		}
	} catch (e) {
		cm.sendOk("오류가 발생하였습니다.\r\n\r\n" + e);
		cm.dispose();
		return;
	} finally {
		if (rs != null) {
			rs.close();
		}
		if (ps != null) {
			ps.close();
		}
		if (con != null) {
			ps.close();
		}
	}
}

function NotCompleteQuest() {
	var con = null;
	var ps1 = null;
	var rs1 = null;
	var ps2 = null;
	var rs2 = null;
	var say = "";
	var show = false;
	try {
		con = DatabaseConnection.getConnection();
		ps1 = con.prepareStatement("SELECT * FROM `mobname` ORDER BY `id` ASC");
		rs1 = ps1.executeQuery();
		while (rs1.next()) {
			ps2 = con.prepareStatement("SELECT * FROM `queststatus` WHERE `quest` = ? AND `characterid` = ? AND `customdata` LIKE '%등록%'");
			ps2.setInt(1, rs1.getInt("id"));
			ps2.setInt(2, cm.getPlayer().getId());
			rs2 = ps2.executeQuery();
			if (!rs2.next()) {
				if (range == 20) {
					if (rs1.getInt("id") >= 100100 && rs1.getInt("id") <= 2300100) {
						show = true;
						say += "#L" + rs1.getInt("id") + "##o" + rs1.getInt("id") + "#\r\n";
					}
				} else if (range == 21) {
					if (rs1.getInt("id") >= 3000000 && rs1.getInt("id") <= 5400000) {
						show = true;
						say += "#L" + rs1.getInt("id") + "##o" + rs1.getInt("id") + "#\r\n";
					}
				} else if (range == 22) {
					if (rs1.getInt("id") >= 6000000 && rs1.getInt("id") <= 9999999) {
						show = true;
						say += "#L" + rs1.getInt("id") + "##o" + rs1.getInt("id") + "#\r\n";
					}
				} else if (range == 23) {
					if (rs1.getInt("id") >= 100100 && rs1.getInt("id") <= 9999999) {
						show = true;
						say += "#L" + rs1.getInt("id") + "##o" + rs1.getInt("id") + "#\r\n";
					}
				}
			}
			rs2.close();
			ps2.close();
		}
		rs1.close();
		ps1.close();
		if (show == true) {
			cm.sendSimple(say);
			status = -1;
		} else {
			cm.sendSimple("모든 몬스터를 등록했습니다. 축하합니다!");
			status = -1;
			return;
		}
	} catch (e) {
		cm.sendOk("오류가 발생하였습니다.\r\n\r\n" + e);
		cm.dispose();
		return;
	} finally {
		if (rs2 != null) {
			rs2.close();
		}
		if (ps2 != null) {
			ps2.close();
		}
		if (rs1 != null) {
			rs1.close();
		}
		if (ps1 != null) {
			ps1.close();
		}
		if (con != null) {
			con.close();
		}
	}
}