export interface Person {
  imageURL?: string;
  name: string;
  occupation: string;
}

export interface Quote {
  id: number;
  date?: Date;
  message: string;
  person: Person;
}

// Redux
export interface ReduxStateQuote {
  quotes: Quote[];
}

export interface ReduxState {
  quote: ReduxStateQuote;
}
