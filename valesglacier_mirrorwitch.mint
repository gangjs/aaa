if (_this.Get(`state`) == `wendigo`)
		{
		
			// 얼음기둥 조건 삭제 수정본
			if (_killer.IsValid())
			{
				// 거울 마녀 등장 루틴
				MirrorWitch_Appear(_this, _killer);
				_this.Set(`state`, `mirrorwitch`);
				_this.Set(`state2`, `wendigo_dead`);

				return;
			}
			// 수정본 끝	
			// 원본
			/*
			// 자이언트가 얼음 고드름 들고 죽였을 경우
			if (_killer.IsValid() && _killer.IsGiant())
			{
				int activepocket = 10;
				if (_killer.GetActiveWeaponSet() == 2)
				{
					activepocket = 11;
				}

				if (_killer.GetItemListInPocket(activepocket).GetSize()!=0 &&
					((item)_killer.GetItemListInPocket(activepocket).GetValue(0)).GetClassId() == 40189 &&	// 얼음 기둥
					(_skillid == 0 || _skillid == 20002 || _skillid == 20003 || _skillid == 22001))			// 평타, 스매시, 카운터, 윈드밀
				{
					// 거울 마녀 등장 루틴
					MirrorWitch_Appear(_this, _killer);
					_this.Set(`state`, `mirrorwitch`);
					_this.Set(`state2`, `wendigo_dead`);

					return;
				}
			}
			*/
			// 원본 끝
