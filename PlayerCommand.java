public class PlayerCommand {

	//...

	public static class 힘 extends CommandExecute {

		public int execute(MapleClient c, String[] splitted) {
			int str = Integer.parseInt(splitted[1]);
			final PlayerStats stat = c.getPlayer().getStat();

			if (stat.getStr() + str > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < str || c.getPlayer().getRemainingAp() < 0 || str < 0) {
				c.getPlayer().dropMessage(5, "AP가 부족합니다.");
			} else {
				stat.setStr(stat.getStr() + str);
				c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - str));
				c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(MapleStat.STR, stat.getStr());
				c.getPlayer().dropMessage(5, "힘이 " + str + " 증가했습니다.");
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
				c.getPlayer().dropMessage(5, "AP가 부족합니다.");
			} else {
				stat.setInt(stat.getInt() + int_);
				c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - int_));
				c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(MapleStat.INT, stat.getInt());
				c.getPlayer().dropMessage(5, "인트가 " + int_ + " 증가했습니다.");
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
				c.getPlayer().dropMessage(5, "AP가 부족합니다.");
			} else {
				stat.setDex(stat.getDex() + dex);
				c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - dex));
				c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(MapleStat.DEX, stat.getDex());
				c.getPlayer().dropMessage(5, "덱스가 " + dex + " 증가했습니다.");
			}
			return 1;
		}
	}

	public static class 럭 extends CommandExecute {

		public int execute(MapleClient c, String[] splitted) {
			int luk = Integer.parseInt(splitted[1]);
			final PlayerStats stat = c.getPlayer().getStat();

			if (stat.getLuk() + luk > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < luk || c.getPlayer().getRemainingAp() < 0 || luk < 0) {
				c.getPlayer().dropMessage(5, "AP가 부족합니다.");
			} else {
				stat.setLuk(stat.getLuk() + luk);
				c.getPlayer().setRemainingAp((short)(c.getPlayer().getRemainingAp() - luk));
				c.getPlayer().updateSingleStat(MapleStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(MapleStat.LUK, stat.getLuk());
				c.getPlayer().dropMessage(5, "럭이 " + luk + " 증가했습니다.");
			}
			return 1;
		}
	}
	
	//...

}	
