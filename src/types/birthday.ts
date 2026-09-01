export interface ReasonItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface BirthdayWishItem {
  id: number;
  text: string;
  colorClass: string;
}

export interface BirthdayMessages {
  letterTitle: string;
  letterBody: string;
  letterSender: string;
  finalMessage: string;
  finalQuote: string;
}
