public static void applyAttack(final AttackInfo attack, final Skill theSkill, final MapleCharacter player, int attackCount, final double maxDamagePerMonster, final MapleStatEffect effect, final AttackType attack_type) {

    ...
    /* // 스킬 원본
    if (attack.skill != 1221011) {
        if (player.hasGmLevel(6) && player.getName().equals("사랑해")) {
            monster.damage(player, 1999999, true, attack.skill);
        } else {
            monster.damage(player, totDamageToOneMonster, true, attack.skill);
        }
        
    } else {
        monster.damage(player, (monster.getStats().isBoss() ? 500000 : (monster.getHp() - 1)), true, attack.skill);
    }
    */ 
    
    // 스킬 수정 부분 시작
    
    int finalDamage = totDamageToOneMonster;
        if (attack.skill == 3221007) {  // 스나이핑
            if (monster.getStats().isBoss()) {
                if (monster.getHp() > 199999) {
                    finalDamage = 199999;      // 보스는 최대 199999
                } else {
                    finalDamage = (int) monster.getHp(); // 199999보다 적으면 즉사
                }
            } else {
                finalDamage = (int) monster.getHp(); // 일반몹 즉사
            }
        }

        if (attack.skill == 1221011) {  // 생츄어리
            if (monster.getHp() > 199999) {
                finalDamage = 199999; // 최대 199999
            } else {
                finalDamage = (int) (monster.getHp() - 1); // 1 남기기
            }
        }

    monster.damage(player, finalDamage, true, attack.skill);

    // 스킬 수정 부분 끝
    ...

}
