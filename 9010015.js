var status = -1;
var enter = "\r\n";
var range = 0;
var grade = 0;
var hpmp = 0;
var allstat = 0;
var atkmatk = 0;
var speedjump = 0;


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
					message += "\r\n또한 #b#i2022338##e#z2022338##n#k이 있다면 원하는 #b일반 몬스터#k를 등록할 수 있어요. #e#b#t2022338##n#k은 모든 몬스터에게서 드랍됩니다. ";				
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
						cm.sendOk("클리어한 퀘스트가 없습니다. \r\메이플 아일랜드(초보자 마을) 퀘스트는 제외됩니다.");
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
				r += "#i" + itemcode + "##b #t" + itemcode + "# "
				
				calcMonsterGrade();
				calcRing("monster");
				
				r += "#r#e" + grade + "단계";
				
				 if (grade == 20)
					r += " (최종단계)";

				r += "\r\n#e#b";

				if (allstat > 0)
					r += "#k올스텟 #b+" + allstat + "\r\n";

				if (hpmp > 0)
					r += "#kHP,MP #b+" + hpmp + "\r\n";

				if (atkmatk > 0)
					r += "#k공격력,마력 #b+" + atkmatk + "\r\n";
				
				r += enter;
				r += "#n#k강화하시겠습니까?";

				cm.sendYesNo(r);
				
			} else if (sel == 8) {
				itemcode = 1112402;	//퀘스트의 반지
				item = Inv.getItem(selection);
				var rr = "퀘스트를 #e#r" + getcompleteQuest() + "#k#n 개 클리어했습니다.#n" + enter;
				rr += "#i" + itemcode + "##b #t" + itemcode + "# "
				
				calcMonsterGrade();
				calcRing("quest");
				
				rr += "#r#e" + grade + "단계";
				
				 if (grade == 20)
					rr += " (최종단계)";

				rr += "\r\n#e#b";

				if (speedjump > 0)
					rr += "#k이동속도,점프력 #b+" + speedjump + "\r\n";

				if (hpmp > 0)
					rr += "#kHP,MP #b+" + hpmp + "\r\n";

				if (atkmatk > 0)
					rr += "#k공격력,마력 #b+" + atkmatk + "\r\n";
				
				rr += enter;
				rr += "#n#k강화하시겠습니까?";

				cm.sendYesNo(rr);
			}
			break;
		case 3:
			if (sel == 9) {	// 사냥꾼의 반지
				calcMonsterGrade();
				calcRing("monster");
	
				item.setStr(allstat);
				item.setDex(allstat);
				item.setInt(allstat);
				item.setLuk(allstat);

				item.setHp(hpmp);
				item.setMp(hpmp);

				item.setWatk(atkmatk);
				item.setMatk(atkmatk);
				cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
				//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());					
				cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
				cm.dispose();		
			} else if (sel == 8) {
				calcQuestGrade();
				calcRing("quest");
	
				item.setSpeed(speedjump);
				item.setJump(speedjump);

				item.setHp(hpmp);
				item.setMp(hpmp);

				item.setWatk(atkmatk);
				item.setMatk(atkmatk);
				cm.getPlayer().forceReAddItem(item, Packages.client.inventory.MapleInventoryType.EQUIP);
				//FileoutputUtil.dbLog("ring/" + "huntring.txt", "캐릭터ID : " + cm.getPlayer().getId() + " / 닉네임 : " + cm.getPlayer().getName() + " / 내용 : " + item + " /"+cm.getPlayer().getallQuestCustomData());					
				cm.sendOk("#r#e" + grade + "단계#n#k로 강화되었습니다!");
				cm.dispose();				
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

function calcRing(ring) {

    hpmp = 0;
    allstat = 0;
    atkmatk = 0;
    speedjump = 0;

    if (grade <= 0) return;

	if (grade >= 1)
        hpmp += Math.min(grade, 5) * 10;
    if (grade > 5)
        hpmp += Math.min(grade - 5, 5) * 20;
    if (grade > 10)
        hpmp += Math.min(grade - 10, 5) * 30;
    if (grade > 15)
        hpmp += Math.min(grade - 15, 5) * 40;
	
    if (grade >= 10) atkmatk = 1;
    if (grade == 20) atkmatk = 2;
   
    if (ring == "monster") {	// 사냥꾼 반지
        if (grade <= 4) allstat = 1;
        else if (grade <= 9) allstat = 2;
        else if (grade <= 14) allstat = 3;
        else if (grade <= 19) allstat = 4;
        else allstat = 5;
    } else if (ring == "quest") {	// 퀘스트 반지
        if (grade <= 4) speedjump = 1;
        else if (grade <= 9) speedjump = 2;
        else if (grade <= 14) speedjump = 3;
        else if (grade <= 19) speedjump = 4;
        else speedjump = 5;
    }

 
}


function calcMonsterGrade() {

    var count = cm.getPlayer().getallQuestCustomData();
    grade = 0;

    if (count >= 1 && count < 3) grade = 1;
    else if (count < 6) grade = 2;
    else if (count < 10) grade = 3;
    else if (count < 15) grade = 4;
    else if (count < 25) grade = 5;
    else if (count < 35) grade = 6;
    else if (count < 45) grade = 7;
    else if (count < 55) grade = 8;
    else if (count < 65) grade = 9;
    else if (count < 80) grade = 10;
    else if (count < 100) grade = 11;
    else if (count < 120) grade = 12;
    else if (count < 140) grade = 13;
    else if (count < 160) grade = 14;
    else if (count < 180) grade = 15;
    else if (count < 200) grade = 16;
    else if (count < 230) grade = 17;
    else if (count < 280) grade = 18;
    else if (count < 330) grade = 19;
    else if (count >= 330) grade = 20;
}

function calcQuestGrade() {
    var quest = getcompleteQuest();

    if (quest >= 650) grade = 20;
    else if (quest >= 600) grade = 19;
    else if (quest >= 540) grade = 18;
    else if (quest >= 480) grade = 17;
    else if (quest >= 420) grade = 16;
    else if (quest >= 360) grade = 15;
    else if (quest >= 300) grade = 14;
    else if (quest >= 250) grade = 13;
    else if (quest >= 200) grade = 12;
    else if (quest >= 150) grade = 11;
    else if (quest >= 120) grade = 10;
    else if (quest >= 100) grade = 9;
    else if (quest >= 80) grade = 8;
    else if (quest >= 60) grade = 7;
    else if (quest >= 50) grade = 6;
    else if (quest >= 40) grade = 5;
    else if (quest >= 30) grade = 4;
    else if (quest >= 20) grade = 3;
    else if (quest >= 10) grade = 2;
    else if (quest >= 1) grade = 1;
    else grade = 0;
}
