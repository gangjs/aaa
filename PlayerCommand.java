package client.messages.commands;

//import client.MapleInventory;
//import client.MapleInventoryType;
import client.MapleClient;
import client.MapleStat;
import client.PlayerStats;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConstants.PlayerGMRank;
import handling.world.World;
import scripting.NPCScriptManager;
import server.MapleItemInformationProvider;
import server.Randomizer;
import server.maps.MapleMap;
import tools.MaplePacketCreator;
import tools.StringUtil;

/**
 *
 * @author Emilyx3
 */
public class PlayerCommand {
    
    // 아래 지우면 작동안됨
    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.NORMAL;
    }

    public static class fpr extends 렉 {
        
    }
    
    public static class 렉 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(MaplePacketCreator.enableActions());
            c.getPlayer().dropMessage(5, "무반응 현상을 해제했습니다.");
            return 1;
        }
    }
    
    public static class 힘 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            int str = Integer.parseInt(splitted[1]);
            final PlayerStats stat = c.getPlayer().getStat();

            if (stat.getStr() + str > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < str || c.getPlayer().getRemainingAp() < 0 || str < 0) {
                c.getPlayer().dropMessage(5, "오류가 발생했습니다.");
            } else {
                stat.setStr(stat.getStr() + str);
                c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - str));
                c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
                c.getPlayer().updateSingleStat(MapleStat.STR, stat.getStr());
            }
            return 1;
        }
    }
    
    
    public static class 인트 extends PlayerCommand.인 {}
    public static class 인 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            int int_ = Integer.parseInt(splitted[1]);
            final PlayerStats stat = c.getPlayer().getStat();

            if (stat.getInt() + int_ > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < int_ || c.getPlayer().getRemainingAp() < 0 || int_ < 0) {
                c.getPlayer().dropMessage(5, "오류가 발생했습니다.");
            } else {
                stat.setInt(stat.getInt() + int_);
                c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - int_));
                c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
                c.getPlayer().updateSingleStat(MapleStat.INT, stat.getInt());
            }
            return 1;
        }
    }
    
    public static class 덱스 extends PlayerCommand.덱 {}
    public static class 덱 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            int dex = Integer.parseInt(splitted[1]);
            final PlayerStats stat = c.getPlayer().getStat();

            if (stat.getDex() + dex > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < dex || c.getPlayer().getRemainingAp() < 0 || dex < 0) {
                c.getPlayer().dropMessage(5, "오류가 발생했습니다.");
            } else {
                stat.setDex(stat.getDex() + dex);
                c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - dex));
                c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
                c.getPlayer().updateSingleStat(MapleStat.DEX, stat.getDex());
            }
            return 1;
        }
    }
    
    public static class 럭 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            int luk = Integer.parseInt(splitted[1]);
            final PlayerStats stat = c.getPlayer().getStat();

            if (stat.getLuk() + luk > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < luk || c.getPlayer().getRemainingAp() < 0 || luk < 0) {
                c.getPlayer().dropMessage(5, "오류가 발생했습니다.");
            } else {
                stat.setLuk(stat.getLuk() + luk);
                c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - luk));
                c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
                c.getPlayer().updateSingleStat(MapleStat.LUK, stat.getLuk());
            }
            return 1;
        }
    }
    public static class 명령어 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(6, "@렉 - 무반응 현상을 해제 합니다.");
//            c.getPlayer().dropMessage(6, "@동접 - 동시접속자를 확인합니다.");
            c.getPlayer().dropMessage(6, "@힘, 덱, 인, 럭 <숫자> : 숫자만큼 AP를 소비하여 스텟을 올립니다.");
            c.getPlayer().dropMessage(6, "@드랍 : 아이템 드랍 정보를 확인합니다. @드롭");
            c.getPlayer().dropMessage(6, "@주사위 : 1~100까지 랜덤숫자를 뽑습니다. 아이템 분배 시 사용");     
            return 1;
        }
    }
    
    public static class 드롭 extends 드랍 {
        
    }

    public static class 드랍 extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 1104104);
            return 1;
        }
    }
    
    
    public static class 주사위 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().DiceCooltime <= 0) {
                int random = ((int) (Math.random() * 99) + 1);
                MapleMap map = c.getPlayer().getMap();
                map.broadcastMessage(MaplePacketCreator.serverNotice(6, " [주사위] " + c.getPlayer().getName() + " 님의 주사위결과 : " + random + ""));
                c.getPlayer().DiceCooltime = 10;
            } else {
                c.getPlayer().dropMessage(5, "주사위 쿨타임 : " + c.getPlayer().DiceCooltime);
            }
            return 1;
        }
    }
    /*
    public static class 동접 extends CommandExecute {

        public int execute(MapleClient c, String[] splitted) {
            java.util.Map<Integer, Integer> connected = World.getConnected_Dummy();
            StringBuilder conStr = new StringBuilder("접속중인 유저 수: ");
            boolean first = true;
            for (int i : connected.keySet()) {
                if (!first) {
                    conStr.append(", ");
                } else {
                    first = false;
                }
                if (i == 0) {
                    conStr.append("접속: ");
                    conStr.append(connected.get(i));
                } else {
                    conStr.append("채널");
                    conStr.append(i);
                    conStr.append(": ");
                        conStr.append(connected.get(i));
                }
            }
            c.getPlayer().dropMessage(6, conStr.toString());
            return 1;
        }
    }
    */
}