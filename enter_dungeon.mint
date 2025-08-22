...
// 3인 입장조건 제거

if (_item.GetClassId() == 73002)	//타르라크의 로켓
{
  
  // if (_party.GetSize() == 3) // 3인 입장조건 제거
  // { // 3인 입장조건 제거
    if (leader.HaveKeyword(`g1_03`))
    {
      if (leader.IsMainStreamPlayablePlayer(1))
      {
        if(IsNoPaladinHere(_party,_reply) && IsNoPetHere(_party,_reply) && IsNoPetSummonerHere(_party,_reply))
        {
          // G1 타르라크/마리/루에리의 첫 번째RP 던전
          _dungeon = `G1RP_05_TirCho_Alby_Dungeon`;
          return true;
        }
        else return false;
      }
      else
      {
        _reply = ["event.enter_dungeon.5"];
        return false;
      }
    }
    else
    {
      _reply = ["event.enter_dungeon.6"];
      return false;
    }
  // } // 3인 입장조건 제거
  else
  {
    _reply = ["event.enter_dungeon.7"];
    return false;
  }
} else

...
