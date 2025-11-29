public void sell(MapleClient c, MapleInventoryType type, byte slot, short quantity) {


        Item item = c.getPlayer().getInventory(type).getItem(slot);
        if (item == null) {
            return;
        }

        if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
            quantity = item.getQuantity();
        }
      /*  if (quantity < 0 || quantity == 0 || quantity == 0xFFFF || quantity > 32767) {
            AutobanManager.getInstance().addPoints(c, 1000, 0, "Selling " + quantity + " " + item.getItemId() + " (" + type.name() + "/" + slot + ")");
            return;
        } */
        if (quantity == 0xFFFF) {
          //  quantity = 1;
        }
        short iQuant = item.getQuantity();
        if (iQuant == 0xFFFF) {
            iQuant = 1;
        }
        final MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        if (ii.cantSell(item.getItemId()) || GameConstants.isPet(item.getItemId())) {
            return;
        }
        
        // 반지 판매 금지
        int[] blockedRings = {1112402, 1112403, 1112404, 1112406};
        for (int rid : blockedRings) {
            if (item.getItemId() == rid) {
                c.getPlayer().dropMessage(1, "이 아이템은 판매할 수 없습니다.");
                return;
            }
        }
        
        if (quantity <= iQuant && iQuant > 0) {
            MapleInventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
            double price;
            if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
                price = ii.getWholePrice(item.getItemId()) / (double) ii.getSlotMax(item.getItemId());
            } else {
                price = ii.getPrice(item.getItemId());
            }
            final int recvMesos = (int) Math.max(Math.ceil(price * quantity), 0);
            if (price != -1.0 && recvMesos > 0) {
                if (recvMesos > 2147483647) {
                    return;
                }
                c.getPlayer().gainMeso(recvMesos, false);
                DBLogger.getInstance().logItem(LogType.Item.Sell, c.getPlayer().getId(), c.getPlayer().getName(), item.getItemId(), quantity, ii.getName(item.getItemId()), recvMesos, "Shop : " + this.getNpcId() + " (ShopID : " + getId() + ")");
            }
            c.getSession().write(MaplePacketCreator.confirmShopTransaction((byte) 0x8));
        }
    }
