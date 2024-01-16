export type BetItemBaseType = {
  amount: number;
};

export type BetItemConstantType = {
  type: 'ROCK' | 'PAPER' | 'SCISSORS';
  value: 1 | 2 | 3;
};

export type BetItemConstantsType = {
  betType_ROCK: BetItemConstantType;
  betType_PAPER: BetItemConstantType;
  betType_SCISSORS: BetItemConstantType;
};

export type BetItemRockType = BetItemBaseType & {
  data: BetItemConstantsType['betType_ROCK'];
};

export type BetItemPaperType = BetItemBaseType & {
  data: BetItemConstantsType['betType_PAPER'];
};

export type BetItemScissorsType = BetItemBaseType & {
  data: BetItemConstantsType['betType_SCISSORS'];
};

export type BetItemUnionType =
  | BetItemRockType
  | BetItemPaperType
  | BetItemScissorsType;

export type BetsType = {
  ROCK: BetItemRockType;
  PAPER: BetItemPaperType;
  SCISSORS: BetItemScissorsType;
};
