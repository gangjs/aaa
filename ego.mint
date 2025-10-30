int	iNewDesire	= 0;

							if(cEgoItem.GetEgoLevel(0) == 50
							   && cEgoItem.GetEgoLevel(1) == 50
							   && cEgoItem.GetEgoLevel(2) == 50
							   && cEgoItem.GetEgoLevel(3) == 50
							   && cEgoItem.GetEgoLevel(4) == 50
							   && cEgoItem.GetEgoLevel(5) == 50)
							{
								iNewDesire = 0;
							} else {
								if(ItemPrice<999)
								{
									iNewDesire	= CurrentDesire-1;
								}
								else if(ItemPrice>=1000 && ItemPrice<2000)
								{
									iNewDesire	= CurrentDesire-2;
								}
								else if(ItemPrice>=2000 && ItemPrice<3000)
								{
									iNewDesire	= CurrentDesire-3;
								}
								else if(ItemPrice>=3000 && ItemPrice<4000)
								{
									iNewDesire	= CurrentDesire-4;
								}
								else if(ItemPrice>=4000)
								{
									iNewDesire	= CurrentDesire-5;
								}
							}
							
							// 이 함수는 지식욕에 따라 변경된 능력치를 클라이언트에 동기화하는 기능까지 제공한다.
							// 따라서 꼭 필요한 상황이 아니면 최대한 적게 호출하도록 해야한다. hiyjs/2011.11.10
							cEgoItem.SetEgoDesire(iNewDesire);

							player.DestroyItem(cItem);
							return;
