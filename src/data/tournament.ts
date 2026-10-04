// ─────────────────────────────────────────────────────────────
// Indorama Ventures Open Golf Championship 2026 — data layer
// Real data extracted from pgtofindia.com (tournament 461).
// DP World PGTI · Kalhaar Blues & Greens GC, Ahmedabad · 12–15 Mar 2026
// ─────────────────────────────────────────────────────────────

export interface TournamentInfo {
  brand: string;
  name: string;
  dates: string;
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  country: string;
  purse: string;
  purseNote: string;
  status: string;
  statusDetail: string;
  format: string;
  fieldSize: number;
  entries: number;
  madeCut: number;
  cutRule: string;
  par: number;
  yardage: number;
  sanction: string;
  owgr: string;
  champion: string;
  winningScore: string;
}

export const tournament: TournamentInfo = {
  "brand": "GolfAI",
  "name": "Indorama Ventures Open Golf Championship 2026",
  "dates": "12 – 15 March 2026",
  "startDate": "12 March 2026",
  "endDate": "15 March 2026",
  "venue": "Kalhaar Blues & Greens Golf Club",
  "city": "Ahmedabad, Gujarat",
  "country": "India",
  "purse": "US$300,000",
  "purseNote": "₹2.76 crore purse · DP World PGTI Order of Merit event",
  "status": "Tournament Complete",
  "statusDetail": "Final Round · Sunday 15 March 2026",
  "format": "72-hole stroke play · four rounds of 18",
  "fieldSize": 143,
  "entries": 265,
  "madeCut": 62,
  "cutRule": "Top 60 professionals (+4 or better) and ties after 36 holes — 62 advanced",
  "par": 72,
  "yardage": 7425,
  "sanction": "Sanctioned by the DP World PGTI",
  "owgr": "DP World PGTI Order of Merit event",
  "champion": "Saptak Talwar",
  "winningScore": "-10"
};

export interface LeaderboardRow {
  pos: string;
  player: string;
  country: string;
  countryCode: string;
  flag: string;
  r1: number | null;
  r2: number | null;
  r3: number | null;
  r4: number | null;
  total: number | null;
  toPar: string;
  thru: string;
  status: 'F' | 'MC' | 'LIVE';
}

export const leaderboard: LeaderboardRow[] = [{"pos":"1","player":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","r1":68,"r2":71,"r3":69,"r4":70,"total":278,"toPar":"-10","thru":"F","status":"F"},{"pos":"2","player":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","r1":69,"r2":70,"r3":72,"r4":69,"total":280,"toPar":"-8","thru":"F","status":"F"},{"pos":"T3","player":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","r1":68,"r2":74,"r3":69,"r4":70,"total":281,"toPar":"-7","thru":"F","status":"F"},{"pos":"T3","player":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","r1":71,"r2":72,"r3":68,"r4":70,"total":281,"toPar":"-7","thru":"F","status":"F"},{"pos":"5","player":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","r1":69,"r2":70,"r3":71,"r4":72,"total":282,"toPar":"-6","thru":"F","status":"F"},{"pos":"T6","player":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","r1":69,"r2":69,"r3":70,"r4":75,"total":283,"toPar":"-5","thru":"F","status":"F"},{"pos":"T6","player":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","r1":67,"r2":70,"r3":74,"r4":72,"total":283,"toPar":"-5","thru":"F","status":"F"},{"pos":"T6","player":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","r1":69,"r2":73,"r3":70,"r4":71,"total":283,"toPar":"-5","thru":"F","status":"F"},{"pos":"T9","player":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","r1":68,"r2":73,"r3":69,"r4":74,"total":284,"toPar":"-4","thru":"F","status":"F"},{"pos":"T9","player":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","r1":71,"r2":73,"r3":68,"r4":72,"total":284,"toPar":"-4","thru":"F","status":"F"},{"pos":"T9","player":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","r1":70,"r2":74,"r3":71,"r4":69,"total":284,"toPar":"-4","thru":"F","status":"F"},{"pos":"T12","player":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":69,"r3":67,"r4":76,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T12","player":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":69,"r3":67,"r4":75,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T12","player":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","r1":68,"r2":69,"r3":76,"r4":72,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T12","player":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","r1":73,"r2":68,"r3":73,"r4":71,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T12","player":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","r1":75,"r2":70,"r3":70,"r4":70,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T12","player":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","r1":70,"r2":72,"r3":75,"r4":68,"total":285,"toPar":"-3","thru":"F","status":"F"},{"pos":"T18","player":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","r1":73,"r2":68,"r3":71,"r4":74,"total":286,"toPar":"-2","thru":"F","status":"F"},{"pos":"T18","player":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","r1":71,"r2":73,"r3":69,"r4":73,"total":286,"toPar":"-2","thru":"F","status":"F"},{"pos":"T18","player":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":71,"r3":69,"r4":73,"total":286,"toPar":"-2","thru":"F","status":"F"},{"pos":"T18","player":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","r1":73,"r2":74,"r3":69,"r4":70,"total":286,"toPar":"-2","thru":"F","status":"F"},{"pos":"T22","player":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","r1":71,"r2":72,"r3":70,"r4":74,"total":287,"toPar":"-1","thru":"F","status":"F"},{"pos":"T22","player":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":70,"r3":74,"r4":71,"total":287,"toPar":"-1","thru":"F","status":"F"},{"pos":"T24","player":"Manoj S","country":"India","countryCode":"IND","flag":"in","r1":71,"r2":69,"r3":71,"r4":77,"total":288,"toPar":"E","thru":"F","status":"F"},{"pos":"T24","player":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","r1":69,"r2":70,"r3":73,"r4":76,"total":288,"toPar":"E","thru":"F","status":"F"},{"pos":"T24","player":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":72,"r3":70,"r4":74,"total":288,"toPar":"E","thru":"F","status":"F"},{"pos":"T24","player":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","r1":74,"r2":73,"r3":71,"r4":70,"total":288,"toPar":"E","thru":"F","status":"F"},{"pos":"T28","player":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","r1":73,"r2":73,"r3":67,"r4":76,"total":289,"toPar":"1","thru":"F","status":"F"},{"pos":"T28","player":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":69,"r3":78,"r4":70,"total":289,"toPar":"1","thru":"F","status":"F"},{"pos":"T30","player":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","r1":66,"r2":74,"r3":76,"r4":74,"total":290,"toPar":"2","thru":"F","status":"F"},{"pos":"T30","player":"Manav Bais","country":"India","countryCode":"IND","flag":"in","r1":68,"r2":74,"r3":75,"r4":73,"total":290,"toPar":"2","thru":"F","status":"F"},{"pos":"T30","player":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","r1":70,"r2":76,"r3":71,"r4":73,"total":290,"toPar":"2","thru":"F","status":"F"},{"pos":"33","player":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","r1":78,"r2":70,"r3":73,"r4":70,"total":291,"toPar":"3","thru":"F","status":"F"},{"pos":"T34","player":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":72,"r3":70,"r4":76,"total":292,"toPar":"4","thru":"F","status":"F"},{"pos":"T34","player":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":74,"r3":75,"r4":71,"total":292,"toPar":"4","thru":"F","status":"F"},{"pos":"T36","player":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":72,"r3":69,"r4":80,"total":293,"toPar":"5","thru":"F","status":"F"},{"pos":"T36","player":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","r1":76,"r2":70,"r3":73,"r4":74,"total":293,"toPar":"5","thru":"F","status":"F"},{"pos":"T36","player":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","r1":76,"r2":71,"r3":75,"r4":71,"total":293,"toPar":"5","thru":"F","status":"F"},{"pos":"T36","player":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","r1":73,"r2":72,"r3":78,"r4":70,"total":293,"toPar":"5","thru":"F","status":"F"},{"pos":"40","player":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","r1":76,"r2":72,"r3":69,"r4":77,"total":294,"toPar":"6","thru":"F","status":"F"},{"pos":"T41","player":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":74,"r3":72,"r4":76,"total":295,"toPar":"7","thru":"F","status":"F"},{"pos":"T41","player":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","r1":75,"r2":71,"r3":77,"r4":72,"total":295,"toPar":"7","thru":"F","status":"F"},{"pos":"T43","player":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":75,"r3":72,"r4":77,"total":296,"toPar":"8","thru":"F","status":"F"},{"pos":"T43","player":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":72,"r3":76,"r4":76,"total":296,"toPar":"8","thru":"F","status":"F"},{"pos":"T43","player":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":72,"r3":76,"r4":75,"total":296,"toPar":"8","thru":"F","status":"F"},{"pos":"T46","player":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","r1":70,"r2":74,"r3":75,"r4":78,"total":297,"toPar":"9","thru":"F","status":"F"},{"pos":"T46","player":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":73,"r3":77,"r4":75,"total":297,"toPar":"9","thru":"F","status":"F"},{"pos":"T48","player":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":72,"r3":78,"r4":76,"total":298,"toPar":"10","thru":"F","status":"F"},{"pos":"T48","player":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":74,"r3":76,"r4":74,"total":298,"toPar":"10","thru":"F","status":"F"},{"pos":"T50","player":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":74,"r3":72,"r4":80,"total":299,"toPar":"11","thru":"F","status":"F"},{"pos":"T50","player":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":73,"r3":72,"r4":80,"total":299,"toPar":"11","thru":"F","status":"F"},{"pos":"T50","player":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":73,"r3":75,"r4":79,"total":299,"toPar":"11","thru":"F","status":"F"},{"pos":"T50","player":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","r1":72,"r2":74,"r3":76,"r4":77,"total":299,"toPar":"11","thru":"F","status":"F"},{"pos":"T50","player":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","r1":78,"r2":70,"r3":75,"r4":76,"total":299,"toPar":"11","thru":"F","status":"F"},{"pos":"T55","player":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","r1":75,"r2":70,"r3":76,"r4":79,"total":300,"toPar":"12","thru":"F","status":"F"},{"pos":"T55","player":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","r1":70,"r2":77,"r3":76,"r4":77,"total":300,"toPar":"12","thru":"F","status":"F"},{"pos":"T55","player":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","r1":73,"r2":75,"r3":76,"r4":76,"total":300,"toPar":"12","thru":"F","status":"F"},{"pos":"58","player":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","r1":70,"r2":76,"r3":79,"r4":76,"total":301,"toPar":"13","thru":"F","status":"F"},{"pos":"59","player":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","r1":81,"r2":67,"r3":78,"r4":78,"total":304,"toPar":"16","thru":"F","status":"F"},{"pos":"60","player":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":73,"r3":77,"r4":81,"total":305,"toPar":"17","thru":"F","status":"F"},{"pos":"61","player":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","r1":74,"r2":73,"r3":81,"r4":78,"total":306,"toPar":"18","thru":"F","status":"F"},{"pos":"62","player":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","r1":75,"r2":71,"r3":80,"r4":81,"total":307,"toPar":"19","thru":"F","status":"F"}];

export type RoundKey = 'Round 1' | 'Round 2' | 'Round 3' | 'Round 4';

export interface RoundStandingRow {
  pos: string;
  player: string;
  country: string;
  countryCode: string;
  flag: string;
  roundScore: number;
  cumTotal: number;
  toPar: string;
  thru: string;
}

export const roundStandings: Record<RoundKey, RoundStandingRow[]> = {"Round 1":[{"pos":"1","player":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","roundScore":66,"cumTotal":66,"toPar":"-6","thru":"Thru 1"},{"pos":"2","player":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","roundScore":67,"cumTotal":67,"toPar":"-5","thru":"Thru 1"},{"pos":"T3","player":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":68,"toPar":"-4","thru":"Thru 1"},{"pos":"T3","player":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":68,"toPar":"-4","thru":"Thru 1"},{"pos":"T3","player":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":68,"toPar":"-4","thru":"Thru 1"},{"pos":"T3","player":"Manav Bais","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":68,"toPar":"-4","thru":"Thru 1"},{"pos":"T3","player":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":68,"toPar":"-4","thru":"Thru 1"},{"pos":"T8","player":"Ajeetesh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Karan Verma","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T8","player":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":69,"cumTotal":69,"toPar":"-3","thru":"Thru 1"},{"pos":"T15","player":"Aditya Raj Kumar Chauhan","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T15","player":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","roundScore":70,"cumTotal":70,"toPar":"-2","thru":"Thru 1"},{"pos":"T22","player":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T22","player":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T22","player":"Manoj S","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T22","player":"Sydney Joseph Wemba","country":"Zambia","countryCode":"ZAM","flag":"zm","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T22","player":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T22","player":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":71,"toPar":"-1","thru":"Thru 1"},{"pos":"T28","player":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Jaash Parekh","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Mani Ram","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T28","player":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":72,"toPar":"E","thru":"Thru 1"},{"pos":"T41","player":"Badal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Divyansh Dubey","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Dominic Piccirillo","country":"United States","countryCode":"USA","flag":"us","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Sukhraj Singh Gill","country":"Canada","countryCode":"CAN","flag":"ca","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Sunit Chowrasia","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Vince Van Veen","country":"Netherlands","countryCode":"NED","flag":"nl","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T41","player":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":73,"toPar":"+1","thru":"Thru 1"},{"pos":"T58","player":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Brashwarpal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Harman Sachdeva","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Rohit Narwal","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Siddharth Semwal","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T58","player":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":74,"toPar":"+2","thru":"Thru 1"},{"pos":"T69","player":"Anant Singh Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Aniket Sawant","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Bikramjit Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Manish Thakran","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Mithil M G","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Mohd Azhar","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Pranav Mardikar","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Rajesh Kumar (p)","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Rohit Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T69","player":"Vinay Kumar Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":75,"toPar":"+3","thru":"Thru 1"},{"pos":"T83","player":"Anshul Patel","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Koichiro Ishika","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Mansukh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Rishi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Sukra Bahadur Rai","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Umed Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T83","player":"Vasu Sehgal","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":76,"toPar":"+4","thru":"Thru 1"},{"pos":"T93","player":"Akshay Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Arjunveer Shishir","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Ayaan Gupta","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Jaiveer","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Joshua Seale","country":"Uganda","countryCode":"UGA","flag":"ug","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Marvin Kibirige","country":"Uganda","countryCode":"UGA","flag":"ug","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Shaurya Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T93","player":"Wasim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":77,"toPar":"+5","thru":"Thru 1"},{"pos":"T101","player":"Amit Kumar (p)","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Declan Kenny","country":"United States","countryCode":"USA","flag":"us","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Dipankar Kaushal","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Krish Patel","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Mahir Rakhra","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Mukesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Sagar Raghuvanshi","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Shivendra Singh Sisodia","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T101","player":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":78,"cumTotal":78,"toPar":"+6","thru":"Thru 1"},{"pos":"T111","player":"Amrit Lal","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Arindam Sudan","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Md Muaj","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Pawan Verma","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Sanjeev Kumar (l)","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Shubham Jaglan","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T111","player":"Viraj Madappa","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":79,"toPar":"+7","thru":"Thru 1"},{"pos":"T118","player":"Aditya Bhandarkar","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Ajay Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Daniel Core","country":"Canada","countryCode":"CAN","flag":"ca","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Hemant Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Jujhar Singh","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Lakshya Nagar","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Shankar Das","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T118","player":"Vishav Pratap Singh Gill","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":80,"toPar":"+8","thru":"Thru 1"},{"pos":"T126","player":"Dilip M","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Mayur P Thakur","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Pankaj Maandiya","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Prakhar Asawa","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Pranav Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T126","player":"Ram Pal","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":81,"toPar":"+9","thru":"Thru 1"},{"pos":"T133","player":"Dhruv Bopanna","country":"India","countryCode":"IND","flag":"in","roundScore":82,"cumTotal":82,"toPar":"+10","thru":"Thru 1"},{"pos":"T133","player":"Samarpratap Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":82,"cumTotal":82,"toPar":"+10","thru":"Thru 1"},{"pos":"T135","player":"Arjun Puri","country":"India","countryCode":"IND","flag":"in","roundScore":83,"cumTotal":83,"toPar":"+11","thru":"Thru 1"},{"pos":"T135","player":"Deepak Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":83,"cumTotal":83,"toPar":"+11","thru":"Thru 1"},{"pos":"T135","player":"Devin Singh","country":"India","countryCode":"IND","flag":"in","roundScore":83,"cumTotal":83,"toPar":"+11","thru":"Thru 1"},{"pos":"T135","player":"Yash Chaudhary","country":"India","countryCode":"IND","flag":"in","roundScore":83,"cumTotal":83,"toPar":"+11","thru":"Thru 1"},{"pos":"139","player":"Victor Hans","country":"India","countryCode":"IND","flag":"in","roundScore":84,"cumTotal":84,"toPar":"+12","thru":"Thru 1"},{"pos":"140","player":"Souvik Nayak","country":"India","countryCode":"IND","flag":"in","roundScore":85,"cumTotal":85,"toPar":"+13","thru":"Thru 1"},{"pos":"T141","player":"Aditya Raj Singh Chahal","country":"India","countryCode":"IND","flag":"in","roundScore":86,"cumTotal":86,"toPar":"+14","thru":"Thru 1"},{"pos":"T141","player":"Jay Pandya","country":"India","countryCode":"IND","flag":"in","roundScore":86,"cumTotal":86,"toPar":"+14","thru":"Thru 1"},{"pos":"143","player":"Joysurjo Dey","country":"India","countryCode":"IND","flag":"in","roundScore":87,"cumTotal":87,"toPar":"+15","thru":"Thru 1"}],"Round 2":[{"pos":"1","player":"Sydney Joseph Wemba","country":"Zambia","countryCode":"ZAM","flag":"zm","roundScore":-1,"cumTotal":70,"toPar":"-74","thru":"Thru 2"},{"pos":"2","player":"Mani Ram","country":"India","countryCode":"IND","flag":"in","roundScore":0,"cumTotal":72,"toPar":"-72","thru":"Thru 2"},{"pos":"3","player":"Rajesh Kumar (p)","country":"India","countryCode":"IND","flag":"in","roundScore":3,"cumTotal":78,"toPar":"-66","thru":"Thru 2"},{"pos":"T4","player":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","roundScore":70,"cumTotal":137,"toPar":"-7","thru":"Thru 2"},{"pos":"T4","player":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":137,"toPar":"-7","thru":"Thru 2"},{"pos":"6","player":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":138,"toPar":"-6","thru":"Thru 2"},{"pos":"T7","player":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":139,"toPar":"-5","thru":"Thru 2"},{"pos":"T7","player":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","roundScore":70,"cumTotal":139,"toPar":"-5","thru":"Thru 2"},{"pos":"T7","player":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","roundScore":70,"cumTotal":139,"toPar":"-5","thru":"Thru 2"},{"pos":"T7","player":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","roundScore":70,"cumTotal":139,"toPar":"-5","thru":"Thru 2"},{"pos":"T11","player":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":140,"toPar":"-4","thru":"Thru 2"},{"pos":"T11","player":"Manoj S","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":140,"toPar":"-4","thru":"Thru 2"},{"pos":"T13","player":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":141,"toPar":"-3","thru":"Thru 2"},{"pos":"T13","player":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":141,"toPar":"-3","thru":"Thru 2"},{"pos":"T13","player":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":68,"cumTotal":141,"toPar":"-3","thru":"Thru 2"},{"pos":"T13","player":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":68,"cumTotal":141,"toPar":"-3","thru":"Thru 2"},{"pos":"T17","player":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T17","player":"Manav Bais","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T17","player":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":73,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T17","player":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T17","player":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T17","player":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":142,"toPar":"-2","thru":"Thru 2"},{"pos":"T23","player":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":143,"toPar":"-1","thru":"Thru 2"},{"pos":"T23","player":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":143,"toPar":"-1","thru":"Thru 2"},{"pos":"T23","player":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":143,"toPar":"-1","thru":"Thru 2"},{"pos":"T26","player":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","roundScore":74,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"T26","player":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":144,"toPar":"E","thru":"Thru 2"},{"pos":"35","player":"Jaiveer","country":"India","countryCode":"IND","flag":"in","roundScore":5,"cumTotal":82,"toPar":"-62","thru":"Thru 2"},{"pos":"T36","player":"Hemant Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":8,"cumTotal":88,"toPar":"-56","thru":"Thru 2"},{"pos":"T36","player":"Shankar Das","country":"India","countryCode":"IND","flag":"in","roundScore":8,"cumTotal":88,"toPar":"-56","thru":"Thru 2"},{"pos":"38","player":"Deepak Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":11,"cumTotal":94,"toPar":"-50","thru":"Thru 2"},{"pos":"39","player":"Aditya Raj Singh Chahal","country":"India","countryCode":"IND","flag":"in","roundScore":14,"cumTotal":100,"toPar":"-44","thru":"Thru 2"},{"pos":"T40","player":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T40","player":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T40","player":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T40","player":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","roundScore":72,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T40","player":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":70,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T40","player":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":145,"toPar":"+1","thru":"Thru 2"},{"pos":"T46","player":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","roundScore":73,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":71,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T46","player":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":146,"toPar":"+2","thru":"Thru 2"},{"pos":"T55","player":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","roundScore":74,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","roundScore":73,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T55","player":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":147,"toPar":"+3","thru":"Thru 2"},{"pos":"T65","player":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T65","player":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T65","player":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T65","player":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T65","player":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":70,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T65","player":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","roundScore":67,"cumTotal":148,"toPar":"+4","thru":"Thru 2"},{"pos":"T71","player":"Ajeetesh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Badal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":76,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Harman Sachdeva","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Siddharth Semwal","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Manish Thakran","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Mohd Azhar","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T71","player":"Shubham Jaglan","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":149,"toPar":"+5","thru":"Thru 2"},{"pos":"T78","player":"Jaash Parekh","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Sukhraj Singh Gill","country":"Canada","countryCode":"CAN","flag":"ca","roundScore":77,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Sunit Chowrasia","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Vince Van Veen","country":"Netherlands","countryCode":"NED","flag":"nl","roundScore":77,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Rohit Narwal","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Pranav Mardikar","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Rohit Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Umed Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Akshay Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T78","player":"Declan Kenny","country":"United States","countryCode":"USA","flag":"us","roundScore":72,"cumTotal":150,"toPar":"+6","thru":"Thru 2"},{"pos":"T88","player":"Aditya Raj Kumar Chauhan","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":151,"toPar":"+7","thru":"Thru 2"},{"pos":"T88","player":"Vinay Kumar Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":151,"toPar":"+7","thru":"Thru 2"},{"pos":"T88","player":"Marvin Kibirige","country":"Uganda","countryCode":"UGA","flag":"ug","roundScore":74,"cumTotal":151,"toPar":"+7","thru":"Thru 2"},{"pos":"T88","player":"Arindam Sudan","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":151,"toPar":"+7","thru":"Thru 2"},{"pos":"T92","player":"Divyansh Dubey","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":152,"toPar":"+8","thru":"Thru 2"},{"pos":"T92","player":"Vasu Sehgal","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":152,"toPar":"+8","thru":"Thru 2"},{"pos":"T92","player":"Arjunveer Shishir","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":152,"toPar":"+8","thru":"Thru 2"},{"pos":"T95","player":"Karan Verma","country":"India","countryCode":"IND","flag":"in","roundScore":84,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Dominic Piccirillo","country":"United States","countryCode":"USA","flag":"us","roundScore":80,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Bikramjit Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Mithil M G","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Joshua Seale","country":"Uganda","countryCode":"UGA","flag":"ug","roundScore":76,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Mahir Rakhra","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T95","player":"Amrit Lal","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":153,"toPar":"+9","thru":"Thru 2"},{"pos":"T102","player":"Anant Singh Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T102","player":"Anshul Patel","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T102","player":"Sukra Bahadur Rai","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":78,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T102","player":"Wasim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T102","player":"Dipankar Kaushal","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T102","player":"Sanjeev Kumar (l)","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":154,"toPar":"+10","thru":"Thru 2"},{"pos":"T108","player":"Brashwarpal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":155,"toPar":"+11","thru":"Thru 2"},{"pos":"T108","player":"Krish Patel","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":155,"toPar":"+11","thru":"Thru 2"},{"pos":"T108","player":"Sagar Raghuvanshi","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":155,"toPar":"+11","thru":"Thru 2"},{"pos":"T108","player":"Shivendra Singh Sisodia","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":155,"toPar":"+11","thru":"Thru 2"},{"pos":"T108","player":"Souvik Nayak","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":155,"toPar":"+11","thru":"Thru 2"},{"pos":"T113","player":"Koichiro Ishika","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":80,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Mansukh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Rishi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Ayaan Gupta","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Md Muaj","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":77,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Pawan Verma","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Ajay Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Lakshya Nagar","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T113","player":"Vishav Pratap Singh Gill","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":156,"toPar":"+12","thru":"Thru 2"},{"pos":"T122","player":"Mukesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":157,"toPar":"+13","thru":"Thru 2"},{"pos":"T122","player":"Viraj Madappa","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":157,"toPar":"+13","thru":"Thru 2"},{"pos":"T122","player":"Daniel Core","country":"Canada","countryCode":"CAN","flag":"ca","roundScore":77,"cumTotal":157,"toPar":"+13","thru":"Thru 2"},{"pos":"T122","player":"Pranav Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":157,"toPar":"+13","thru":"Thru 2"},{"pos":"126","player":"Shaurya Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":158,"toPar":"+14","thru":"Thru 2"},{"pos":"T127","player":"Aditya Bhandarkar","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":159,"toPar":"+15","thru":"Thru 2"},{"pos":"T127","player":"Prakhar Asawa","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":159,"toPar":"+15","thru":"Thru 2"},{"pos":"T127","player":"Dhruv Bopanna","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":159,"toPar":"+15","thru":"Thru 2"},{"pos":"T130","player":"Aniket Sawant","country":"India","countryCode":"IND","flag":"in","roundScore":85,"cumTotal":160,"toPar":"+16","thru":"Thru 2"},{"pos":"T130","player":"Jujhar Singh","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":160,"toPar":"+16","thru":"Thru 2"},{"pos":"T132","player":"Dilip M","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":161,"toPar":"+17","thru":"Thru 2"},{"pos":"T132","player":"Pankaj Maandiya","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":161,"toPar":"+17","thru":"Thru 2"},{"pos":"T132","player":"Devin Singh","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":161,"toPar":"+17","thru":"Thru 2"},{"pos":"135","player":"Victor Hans","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":162,"toPar":"+18","thru":"Thru 2"},{"pos":"136","player":"Arjun Puri","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":163,"toPar":"+19","thru":"Thru 2"},{"pos":"137","player":"Mayur P Thakur","country":"India","countryCode":"IND","flag":"in","roundScore":83,"cumTotal":164,"toPar":"+20","thru":"Thru 2"},{"pos":"T138","player":"Amit Kumar (p)","country":"India","countryCode":"IND","flag":"in","roundScore":88,"cumTotal":166,"toPar":"+22","thru":"Thru 2"},{"pos":"T138","player":"Samarpratap Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":84,"cumTotal":166,"toPar":"+22","thru":"Thru 2"},{"pos":"T140","player":"Ram Pal","country":"India","countryCode":"IND","flag":"in","roundScore":86,"cumTotal":167,"toPar":"+23","thru":"Thru 2"},{"pos":"T140","player":"Jay Pandya","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":167,"toPar":"+23","thru":"Thru 2"},{"pos":"142","player":"Yash Chaudhary","country":"India","countryCode":"IND","flag":"in","roundScore":88,"cumTotal":171,"toPar":"+27","thru":"Thru 2"},{"pos":"143","player":"Joysurjo Dey","country":"India","countryCode":"IND","flag":"in","roundScore":87,"cumTotal":174,"toPar":"+30","thru":"Thru 2"}],"Round 3":[{"pos":"T1","player":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":208,"toPar":"-8","thru":"Thru 3"},{"pos":"T1","player":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":208,"toPar":"-8","thru":"Thru 3"},{"pos":"3","player":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","roundScore":67,"cumTotal":209,"toPar":"-7","thru":"Thru 3"},{"pos":"T4","player":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","roundScore":71,"cumTotal":210,"toPar":"-6","thru":"Thru 3"},{"pos":"T4","player":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":210,"toPar":"-6","thru":"Thru 3"},{"pos":"T4","player":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","roundScore":67,"cumTotal":210,"toPar":"-6","thru":"Thru 3"},{"pos":"T7","player":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","roundScore":74,"cumTotal":211,"toPar":"-5","thru":"Thru 3"},{"pos":"T7","player":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","roundScore":72,"cumTotal":211,"toPar":"-5","thru":"Thru 3"},{"pos":"T7","player":"Manoj S","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":211,"toPar":"-5","thru":"Thru 3"},{"pos":"T7","player":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":211,"toPar":"-5","thru":"Thru 3"},{"pos":"T7","player":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":211,"toPar":"-5","thru":"Thru 3"},{"pos":"T12","player":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","roundScore":73,"cumTotal":212,"toPar":"-4","thru":"Thru 3"},{"pos":"T12","player":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":71,"cumTotal":212,"toPar":"-4","thru":"Thru 3"},{"pos":"T12","player":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":70,"cumTotal":212,"toPar":"-4","thru":"Thru 3"},{"pos":"T12","player":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":212,"toPar":"-4","thru":"Thru 3"},{"pos":"T16","player":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T16","player":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T16","player":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T16","player":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T16","player":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T16","player":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","roundScore":67,"cumTotal":213,"toPar":"-3","thru":"Thru 3"},{"pos":"T22","player":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":73,"cumTotal":214,"toPar":"-2","thru":"Thru 3"},{"pos":"T22","player":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":214,"toPar":"-2","thru":"Thru 3"},{"pos":"T24","player":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","roundScore":71,"cumTotal":215,"toPar":"-1","thru":"Thru 3"},{"pos":"T24","player":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":70,"cumTotal":215,"toPar":"-1","thru":"Thru 3"},{"pos":"T26","player":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":216,"toPar":"E","thru":"Thru 3"},{"pos":"T26","player":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":216,"toPar":"E","thru":"Thru 3"},{"pos":"T26","player":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":216,"toPar":"E","thru":"Thru 3"},{"pos":"T26","player":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","roundScore":69,"cumTotal":216,"toPar":"E","thru":"Thru 3"},{"pos":"T30","player":"Manav Bais","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":217,"toPar":"+1","thru":"Thru 3"},{"pos":"T30","player":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":217,"toPar":"+1","thru":"Thru 3"},{"pos":"T30","player":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":217,"toPar":"+1","thru":"Thru 3"},{"pos":"T30","player":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","roundScore":69,"cumTotal":217,"toPar":"+1","thru":"Thru 3"},{"pos":"34","player":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","roundScore":71,"cumTotal":218,"toPar":"+2","thru":"Thru 3"},{"pos":"T35","player":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T35","player":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":219,"toPar":"+3","thru":"Thru 3"},{"pos":"T42","player":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":220,"toPar":"+4","thru":"Thru 3"},{"pos":"T42","player":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":220,"toPar":"+4","thru":"Thru 3"},{"pos":"T44","player":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":221,"toPar":"+5","thru":"Thru 3"},{"pos":"T44","player":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":221,"toPar":"+5","thru":"Thru 3"},{"pos":"T44","player":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":221,"toPar":"+5","thru":"Thru 3"},{"pos":"T44","player":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":221,"toPar":"+5","thru":"Thru 3"},{"pos":"T48","player":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":222,"toPar":"+6","thru":"Thru 3"},{"pos":"T48","player":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":222,"toPar":"+6","thru":"Thru 3"},{"pos":"T48","player":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":222,"toPar":"+6","thru":"Thru 3"},{"pos":"T48","player":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":222,"toPar":"+6","thru":"Thru 3"},{"pos":"T52","player":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","roundScore":78,"cumTotal":223,"toPar":"+7","thru":"Thru 3"},{"pos":"T52","player":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":77,"cumTotal":223,"toPar":"+7","thru":"Thru 3"},{"pos":"T52","player":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":223,"toPar":"+7","thru":"Thru 3"},{"pos":"T52","player":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":75,"cumTotal":223,"toPar":"+7","thru":"Thru 3"},{"pos":"T56","player":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":224,"toPar":"+8","thru":"Thru 3"},{"pos":"T56","player":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":224,"toPar":"+8","thru":"Thru 3"},{"pos":"T56","player":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":224,"toPar":"+8","thru":"Thru 3"},{"pos":"59","player":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":225,"toPar":"+9","thru":"Thru 3"},{"pos":"T60","player":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":226,"toPar":"+10","thru":"Thru 3"},{"pos":"T60","player":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","roundScore":78,"cumTotal":226,"toPar":"+10","thru":"Thru 3"},{"pos":"62","player":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":228,"toPar":"+12","thru":"Thru 3"}],"Round 4":[{"pos":"1","player":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":278,"toPar":"-10","thru":"F"},{"pos":"2","player":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","roundScore":69,"cumTotal":280,"toPar":"-8","thru":"F"},{"pos":"T3","player":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":281,"toPar":"-7","thru":"F"},{"pos":"T3","player":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":281,"toPar":"-7","thru":"F"},{"pos":"5","player":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","roundScore":72,"cumTotal":282,"toPar":"-6","thru":"F"},{"pos":"T6","player":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":283,"toPar":"-5","thru":"F"},{"pos":"T6","player":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","roundScore":72,"cumTotal":283,"toPar":"-5","thru":"F"},{"pos":"T6","player":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","roundScore":71,"cumTotal":283,"toPar":"-5","thru":"F"},{"pos":"T9","player":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":284,"toPar":"-4","thru":"F"},{"pos":"T9","player":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":284,"toPar":"-4","thru":"F"},{"pos":"T9","player":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","roundScore":69,"cumTotal":284,"toPar":"-4","thru":"F"},{"pos":"T12","player":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T12","player":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T12","player":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":72,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T12","player":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":71,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T12","player":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","roundScore":70,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T12","player":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","roundScore":68,"cumTotal":285,"toPar":"-3","thru":"F"},{"pos":"T18","player":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":74,"cumTotal":286,"toPar":"-2","thru":"F"},{"pos":"T18","player":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":286,"toPar":"-2","thru":"F"},{"pos":"T18","player":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":286,"toPar":"-2","thru":"F"},{"pos":"T18","player":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","roundScore":70,"cumTotal":286,"toPar":"-2","thru":"F"},{"pos":"T22","player":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":287,"toPar":"-1","thru":"F"},{"pos":"T22","player":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":287,"toPar":"-1","thru":"F"},{"pos":"T24","player":"Manoj S","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":288,"toPar":"E","thru":"F"},{"pos":"T24","player":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","roundScore":76,"cumTotal":288,"toPar":"E","thru":"F"},{"pos":"T24","player":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":288,"toPar":"E","thru":"F"},{"pos":"T24","player":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","roundScore":70,"cumTotal":288,"toPar":"E","thru":"F"},{"pos":"T28","player":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","roundScore":76,"cumTotal":289,"toPar":"+1","thru":"F"},{"pos":"T28","player":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":289,"toPar":"+1","thru":"F"},{"pos":"T30","player":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":290,"toPar":"+2","thru":"F"},{"pos":"T30","player":"Manav Bais","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":290,"toPar":"+2","thru":"F"},{"pos":"T30","player":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","roundScore":73,"cumTotal":290,"toPar":"+2","thru":"F"},{"pos":"33","player":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","roundScore":70,"cumTotal":291,"toPar":"+3","thru":"F"},{"pos":"T34","player":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":292,"toPar":"+4","thru":"F"},{"pos":"T34","player":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":292,"toPar":"+4","thru":"F"},{"pos":"T36","player":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":293,"toPar":"+5","thru":"F"},{"pos":"T36","player":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":293,"toPar":"+5","thru":"F"},{"pos":"T36","player":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","roundScore":71,"cumTotal":293,"toPar":"+5","thru":"F"},{"pos":"T36","player":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","roundScore":70,"cumTotal":293,"toPar":"+5","thru":"F"},{"pos":"40","player":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":294,"toPar":"+6","thru":"F"},{"pos":"T41","player":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":295,"toPar":"+7","thru":"F"},{"pos":"T41","player":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","roundScore":72,"cumTotal":295,"toPar":"+7","thru":"F"},{"pos":"T43","player":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":296,"toPar":"+8","thru":"F"},{"pos":"T43","player":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":296,"toPar":"+8","thru":"F"},{"pos":"T43","player":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":296,"toPar":"+8","thru":"F"},{"pos":"T46","player":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":297,"toPar":"+9","thru":"F"},{"pos":"T46","player":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","roundScore":75,"cumTotal":297,"toPar":"+9","thru":"F"},{"pos":"T48","player":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":298,"toPar":"+10","thru":"F"},{"pos":"T48","player":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","roundScore":74,"cumTotal":298,"toPar":"+10","thru":"F"},{"pos":"T50","player":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":299,"toPar":"+11","thru":"F"},{"pos":"T50","player":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","roundScore":80,"cumTotal":299,"toPar":"+11","thru":"F"},{"pos":"T50","player":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":299,"toPar":"+11","thru":"F"},{"pos":"T50","player":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":299,"toPar":"+11","thru":"F"},{"pos":"T50","player":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","roundScore":76,"cumTotal":299,"toPar":"+11","thru":"F"},{"pos":"T55","player":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","roundScore":79,"cumTotal":300,"toPar":"+12","thru":"F"},{"pos":"T55","player":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","roundScore":77,"cumTotal":300,"toPar":"+12","thru":"F"},{"pos":"T55","player":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":300,"toPar":"+12","thru":"F"},{"pos":"58","player":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","roundScore":76,"cumTotal":301,"toPar":"+13","thru":"F"},{"pos":"59","player":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","roundScore":78,"cumTotal":304,"toPar":"+16","thru":"F"},{"pos":"60","player":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":305,"toPar":"+17","thru":"F"},{"pos":"61","player":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","roundScore":78,"cumTotal":306,"toPar":"+18","thru":"F"},{"pos":"62","player":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","roundScore":81,"cumTotal":307,"toPar":"+19","thru":"F"}]};

export interface ScorecardRow {
  player: string;
  holes: number[];
  out: number;
  in: number;
  roundTotal: number;
}

export const scorecards: Record<RoundKey, ScorecardRow[]> = {"Round 1":[{"player":"Rashid Khan","holes":[4,3,3,4,4,3,2,5,3,4,3,4,4,4,4,3,4,5],"out":31,"in":35,"roundTotal":66},{"player":"Jhared Hack","holes":[4,2,4,5,5,4,2,4,3,4,2,4,4,5,4,3,4,4],"out":33,"in":34,"roundTotal":67},{"player":"Arjun Prasad","holes":[4,4,4,3,4,3,3,6,4,3,3,5,4,4,4,3,3,4],"out":35,"in":33,"roundTotal":68},{"player":"Brijesh Kumar","holes":[4,2,5,5,4,4,3,5,4,4,2,4,4,5,3,3,4,3],"out":36,"in":32,"roundTotal":68},{"player":"Kartik Singh","holes":[4,3,4,4,3,4,2,5,5,3,2,4,3,5,4,3,5,5],"out":34,"in":34,"roundTotal":68},{"player":"Manav Bais","holes":[3,4,4,6,5,4,2,4,3,4,3,4,3,4,4,3,5,3],"out":35,"in":33,"roundTotal":68},{"player":"Saptak Talwar","holes":[4,3,5,4,4,4,3,4,3,4,3,4,3,5,4,3,4,4],"out":34,"in":34,"roundTotal":68},{"player":"Ajeetesh Sandhu","holes":[5,2,4,3,4,4,4,5,5,3,3,3,4,5,4,3,4,4],"out":36,"in":33,"roundTotal":69},{"player":"Christoph Bleier","holes":[3,3,4,4,4,4,3,4,5,4,4,4,3,4,4,3,4,5],"out":34,"in":35,"roundTotal":69},{"player":"Clement Sordet","holes":[3,3,4,3,4,3,3,5,5,3,3,5,4,5,4,3,5,4],"out":33,"in":36,"roundTotal":69},{"player":"Dhruv Sheoran","holes":[4,3,4,3,6,4,4,5,4,4,3,5,4,4,4,2,3,3],"out":37,"in":32,"roundTotal":69},{"player":"Karan Verma","holes":[3,2,4,3,3,4,4,5,6,3,3,5,4,4,4,3,5,4],"out":34,"in":35,"roundTotal":69},{"player":"Pierre Pineau","holes":[5,2,4,4,4,4,3,4,4,4,2,4,3,5,5,4,4,4],"out":34,"in":35,"roundTotal":69},{"player":"Subash Tamang","holes":[4,3,4,3,4,4,4,4,3,3,3,5,4,5,5,3,4,4],"out":33,"in":36,"roundTotal":69},{"player":"Aditya Raj Kumar Chauhan","holes":[4,2,4,4,4,5,4,4,4,4,3,5,4,4,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Akshay Neranjen","holes":[5,4,4,4,3,5,3,5,3,4,3,4,3,4,5,3,4,4],"out":36,"in":34,"roundTotal":70},{"player":"Amardeep Malik","holes":[5,3,4,4,4,3,3,5,4,4,3,4,4,5,4,3,5,3],"out":35,"in":35,"roundTotal":70},{"player":"Jairaj Singh Sandhu","holes":[4,3,4,4,4,4,3,4,7,4,3,4,4,4,4,3,4,3],"out":37,"in":33,"roundTotal":70},{"player":"Pritish Singh Karayat","holes":[4,2,4,4,5,3,3,6,4,3,3,4,4,6,5,3,4,3],"out":35,"in":35,"roundTotal":70},{"player":"Rohan Dhole Patil","holes":[4,2,4,4,4,4,2,5,4,4,4,5,4,4,4,4,4,4],"out":33,"in":37,"roundTotal":70},{"player":"Stepan Danek","holes":[4,2,4,5,5,4,3,5,4,4,3,4,4,4,4,2,6,3],"out":36,"in":34,"roundTotal":70},{"player":"Abhinav Lohan","holes":[3,3,4,5,4,4,3,5,4,4,3,4,5,5,4,3,4,4],"out":35,"in":36,"roundTotal":71},{"player":"Khalin H Joshi","holes":[4,3,4,3,5,4,4,5,4,3,4,3,4,6,4,4,3,4],"out":36,"in":35,"roundTotal":71},{"player":"Manoj S","holes":[4,4,4,4,4,4,3,4,5,3,3,4,6,4,5,3,3,4],"out":36,"in":35,"roundTotal":71},{"player":"Sydney Joseph Wemba","holes":[4,4,4,4,4,4,4,4,4,3,3,4,4,4,5,3,5,4],"out":36,"in":35,"roundTotal":71},{"player":"Veer Ahlawat","holes":[5,3,3,4,5,4,3,4,4,5,4,4,4,4,4,2,4,5],"out":35,"in":36,"roundTotal":71},{"player":"Vishesh Sharma","holes":[4,5,4,3,5,3,4,4,3,4,3,4,4,5,4,3,4,5],"out":35,"in":36,"roundTotal":71},{"player":"Angad Cheema","holes":[4,3,5,4,4,4,2,4,5,4,3,5,4,4,4,3,4,6],"out":35,"in":37,"roundTotal":72},{"player":"Arjun Sharma","holes":[4,3,4,5,4,4,3,5,4,3,3,5,4,5,4,4,4,4],"out":36,"in":36,"roundTotal":72},{"player":"Chandarjeet Yadav","holes":[4,4,4,3,5,4,4,5,4,4,2,4,4,7,4,3,4,3],"out":37,"in":35,"roundTotal":72},{"player":"Chikkarangappa S","holes":[4,4,5,4,5,4,3,4,4,5,2,5,4,5,4,3,4,3],"out":37,"in":35,"roundTotal":72},{"player":"Harsh Gangwar","holes":[4,3,4,4,3,4,4,4,4,4,3,5,4,6,5,3,4,4],"out":34,"in":38,"roundTotal":72},{"player":"Honey Baisoya","holes":[4,3,5,4,4,4,2,4,4,5,4,4,4,5,4,3,5,4],"out":34,"in":38,"roundTotal":72},{"player":"Jaash Parekh","holes":[4,3,4,4,5,5,2,5,4,4,3,4,4,5,4,3,4,5],"out":36,"in":36,"roundTotal":72},{"player":"Kshitij Naveed Kaul","holes":[4,3,6,3,4,4,3,4,4,5,2,4,5,4,4,3,5,5],"out":35,"in":37,"roundTotal":72},{"player":"Mani Ram","holes":[4,3,4,4,5,4,3,6,3,4,2,6,4,5,4,4,3,4],"out":36,"in":36,"roundTotal":72},{"player":"Mohammad Sanju","holes":[4,3,3,4,3,4,3,5,5,6,3,4,4,4,6,3,4,4],"out":34,"in":38,"roundTotal":72},{"player":"Shamim Khan","holes":[5,3,4,5,5,3,3,4,4,4,2,5,4,5,4,4,4,4],"out":36,"in":36,"roundTotal":72},{"player":"Shaurya Bhattacharya","holes":[4,2,4,4,4,4,3,4,4,6,3,4,4,4,5,4,6,3],"out":33,"in":39,"roundTotal":72},{"player":"Yuvraj Singh","holes":[4,4,4,4,5,4,3,4,4,4,3,4,4,5,6,2,4,4],"out":36,"in":36,"roundTotal":72},{"player":"Badal Hossain","holes":[4,3,4,4,5,4,3,6,4,3,2,4,5,5,6,3,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Bastien Amat","holes":[4,4,5,4,4,4,3,5,4,4,3,4,4,6,4,2,5,4],"out":37,"in":36,"roundTotal":73},{"player":"Bipin Mukhiya","holes":[5,3,4,4,4,4,3,4,4,4,3,7,4,5,3,3,4,5],"out":35,"in":38,"roundTotal":73},{"player":"Divyansh Dubey","holes":[5,3,4,5,4,4,3,5,4,4,3,4,4,4,5,4,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Divyanshu Bajaj","holes":[6,4,5,3,4,4,2,5,4,4,3,5,4,6,4,2,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Dominic Piccirillo","holes":[3,3,4,4,5,3,3,5,4,4,4,6,4,4,5,3,4,5],"out":34,"in":39,"roundTotal":73},{"player":"Jamal Hossain","holes":[5,4,6,4,4,4,2,4,4,4,3,4,4,5,4,4,5,3],"out":37,"in":36,"roundTotal":73},{"player":"Joshua Grenville-wood","holes":[3,4,5,3,3,4,3,5,5,5,2,5,4,5,5,4,4,4],"out":35,"in":38,"roundTotal":73},{"player":"Manjot Singh","holes":[5,3,4,4,4,4,3,4,5,4,4,5,3,5,4,3,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Manu Gandas","holes":[4,4,4,4,4,4,4,5,3,3,2,5,5,5,4,4,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Maxence Giboudot","holes":[4,3,4,5,5,4,3,5,5,4,3,5,4,4,4,3,4,4],"out":38,"in":35,"roundTotal":73},{"player":"Per Langfors","holes":[4,4,4,4,4,3,3,4,4,5,3,5,3,6,4,4,4,5],"out":34,"in":39,"roundTotal":73},{"player":"Sukhraj Singh Gill","holes":[4,3,4,4,7,5,3,5,4,4,2,6,4,5,4,2,4,3],"out":39,"in":34,"roundTotal":73},{"player":"Sunit Chowrasia","holes":[4,4,4,4,5,3,3,5,4,5,4,4,5,4,3,4,4,4],"out":36,"in":37,"roundTotal":73},{"player":"Tapendra Ghai","holes":[4,2,6,4,4,4,3,4,4,4,3,5,5,5,4,3,5,4],"out":35,"in":38,"roundTotal":73},{"player":"Vince Van Veen","holes":[4,3,5,4,4,4,2,6,4,4,4,5,4,6,4,2,4,4],"out":36,"in":37,"roundTotal":73},{"player":"Yuvraj Sandhu","holes":[3,4,4,3,5,4,3,3,5,6,3,4,6,6,4,2,5,3],"out":34,"in":39,"roundTotal":73},{"player":"Albert Boneta","holes":[4,3,4,4,7,6,3,4,4,4,3,6,4,3,4,3,4,4],"out":39,"in":35,"roundTotal":74},{"player":"Anshul Kabthiyal","holes":[4,3,4,4,5,5,3,5,5,4,2,3,3,6,6,4,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Aryaman Aditya Mohan","holes":[4,2,4,6,4,4,3,4,5,4,2,5,3,8,5,3,4,4],"out":36,"in":38,"roundTotal":74},{"player":"Brashwarpal Singh","holes":[4,3,4,5,5,5,2,4,3,4,4,4,4,5,5,4,5,4],"out":35,"in":39,"roundTotal":74},{"player":"Dhruv Suri","holes":[3,4,4,4,5,5,3,4,4,4,3,5,4,5,5,4,4,4],"out":36,"in":38,"roundTotal":74},{"player":"Harman Sachdeva","holes":[4,4,4,4,4,4,4,5,5,4,3,4,4,5,5,3,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Irfan Ali Mollah","holes":[4,2,5,4,5,4,3,5,4,4,3,6,4,5,6,3,3,4],"out":36,"in":38,"roundTotal":74},{"player":"Ravi Kumar","holes":[3,4,4,5,3,4,2,4,5,4,3,4,4,5,9,3,4,4],"out":34,"in":40,"roundTotal":74},{"player":"Rohit Narwal","holes":[4,4,5,4,4,4,3,4,4,4,3,4,4,4,6,4,5,4],"out":36,"in":38,"roundTotal":74},{"player":"Siddharth Semwal","holes":[4,3,4,4,4,5,2,4,4,5,5,4,5,5,4,3,5,4],"out":34,"in":40,"roundTotal":74},{"player":"Vikrant Chopra","holes":[4,4,4,5,5,4,3,5,4,4,2,4,4,5,4,3,5,5],"out":38,"in":36,"roundTotal":74},{"player":"Anant Singh Ahlawat","holes":[3,3,4,6,5,4,3,7,5,4,3,4,4,4,5,3,4,4],"out":40,"in":35,"roundTotal":75},{"player":"Aniket Sawant","holes":[4,3,3,4,4,4,2,5,5,5,3,4,5,7,4,3,6,4],"out":34,"in":41,"roundTotal":75},{"player":"Bikramjit Singh Sandhu","holes":[3,4,4,3,5,5,3,5,4,4,3,4,5,5,5,3,5,5],"out":36,"in":39,"roundTotal":75},{"player":"Christofer Rahm","holes":[4,5,5,4,4,4,4,6,4,4,2,4,4,4,5,3,5,4],"out":40,"in":35,"roundTotal":75},{"player":"Manish Thakran","holes":[3,3,4,6,3,4,2,5,5,4,3,4,4,5,6,2,5,7],"out":35,"in":40,"roundTotal":75},{"player":"Md Akbar Hossain","holes":[4,4,4,5,5,4,3,4,4,4,3,4,3,7,5,4,4,4],"out":37,"in":38,"roundTotal":75},{"player":"Mithil M G","holes":[4,4,4,4,6,3,3,5,4,5,3,5,4,5,5,3,4,4],"out":37,"in":38,"roundTotal":75},{"player":"Mohd Azhar","holes":[4,5,4,4,4,6,3,4,4,4,4,6,4,4,4,3,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Om Prakash Chouhan","holes":[4,3,6,4,4,4,3,5,5,4,3,5,5,5,4,3,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Pranav Mardikar","holes":[4,3,5,5,5,5,4,5,4,4,3,3,4,5,5,3,4,4],"out":40,"in":35,"roundTotal":75},{"player":"Rajesh Kumar (p)","holes":[4,3,4,5,4,4,3,5,4,4,2,6,4,6,4,4,5,4],"out":36,"in":39,"roundTotal":75},{"player":"Rajesh Kumar Gautam","holes":[5,3,5,4,5,4,3,5,3,4,3,4,6,4,5,4,4,4],"out":37,"in":38,"roundTotal":75},{"player":"Rohit Baisoya","holes":[4,3,4,4,5,4,3,4,5,4,3,5,5,5,4,3,5,5],"out":36,"in":39,"roundTotal":75},{"player":"Vinay Kumar Yadav","holes":[4,4,4,3,5,5,3,6,4,4,3,4,4,5,5,3,4,5],"out":38,"in":37,"roundTotal":75},{"player":"Anshul Patel","holes":[3,3,4,4,4,4,3,5,5,5,3,4,5,5,4,4,6,5],"out":35,"in":41,"roundTotal":76},{"player":"Himmat Singh Rai","holes":[4,3,4,4,7,5,3,7,4,4,3,3,4,7,4,3,3,4],"out":41,"in":35,"roundTotal":76},{"player":"Koichiro Ishika","holes":[5,4,6,3,5,4,2,6,4,4,3,4,4,5,5,3,4,5],"out":39,"in":37,"roundTotal":76},{"player":"Kushal Singh","holes":[4,3,4,4,5,5,3,5,4,4,3,4,4,5,4,3,7,5],"out":37,"in":39,"roundTotal":76},{"player":"Mansukh Sandhu","holes":[5,3,4,3,6,4,4,5,4,4,3,5,5,5,4,4,4,4],"out":38,"in":38,"roundTotal":76},{"player":"Mari Muthu R","holes":[4,3,4,5,6,4,4,5,5,4,3,4,6,5,4,2,3,5],"out":40,"in":36,"roundTotal":76},{"player":"Rishi Kumar","holes":[5,3,5,4,5,4,3,5,4,3,3,5,6,5,5,4,3,4],"out":38,"in":38,"roundTotal":76},{"player":"Sukra Bahadur Rai","holes":[5,4,4,5,4,4,4,4,5,5,2,5,4,4,4,4,5,4],"out":39,"in":37,"roundTotal":76},{"player":"Umed Kumar","holes":[3,3,4,6,5,3,4,5,3,6,3,5,4,5,5,4,3,5],"out":36,"in":40,"roundTotal":76},{"player":"Vasu Sehgal","holes":[4,4,7,4,5,3,3,5,4,4,3,5,4,4,4,3,5,5],"out":39,"in":37,"roundTotal":76},{"player":"Akshay Sharma","holes":[4,3,4,4,5,4,3,4,6,4,3,6,3,7,6,3,5,3],"out":37,"in":40,"roundTotal":77},{"player":"Arjunveer Shishir","holes":[5,3,3,4,6,5,3,5,3,5,4,5,4,5,5,3,5,4],"out":37,"in":40,"roundTotal":77},{"player":"Ayaan Gupta","holes":[4,2,6,3,3,4,2,5,6,5,2,8,4,6,5,3,4,5],"out":35,"in":42,"roundTotal":77},{"player":"Jaiveer","holes":[5,4,5,4,4,5,3,5,4,4,3,4,5,5,7,2,4,4],"out":39,"in":38,"roundTotal":77},{"player":"Joshua Seale","holes":[4,3,5,3,4,4,6,4,4,5,5,5,4,6,5,3,4,3],"out":37,"in":40,"roundTotal":77},{"player":"Marvin Kibirige","holes":[3,3,4,4,3,7,3,5,5,4,3,4,8,7,4,2,4,4],"out":37,"in":40,"roundTotal":77},{"player":"Shaurya Sharma","holes":[4,3,6,4,4,4,3,5,5,4,3,5,3,7,6,3,4,4],"out":38,"in":39,"roundTotal":77},{"player":"Wasim Khan","holes":[4,3,5,4,5,4,3,5,4,5,4,5,6,5,5,2,4,4],"out":37,"in":40,"roundTotal":77},{"player":"Amit Kumar (p)","holes":[4,4,4,5,4,5,3,6,4,4,3,5,4,5,5,5,4,4],"out":39,"in":39,"roundTotal":78},{"player":"Declan Kenny","holes":[4,3,4,5,4,4,3,7,4,5,4,4,4,5,6,2,5,5],"out":38,"in":40,"roundTotal":78},{"player":"Dipankar Kaushal","holes":[6,4,4,5,5,3,3,5,4,6,3,4,4,5,5,3,6,3],"out":39,"in":39,"roundTotal":78},{"player":"Gaurav Pratap Singh","holes":[4,4,6,6,4,5,3,6,5,3,3,5,4,4,4,4,4,4],"out":43,"in":35,"roundTotal":78},{"player":"Krish Patel","holes":[4,4,4,4,5,4,4,7,6,4,2,4,4,4,4,4,6,4],"out":42,"in":36,"roundTotal":78},{"player":"Mahir Rakhra","holes":[3,3,4,3,5,5,7,5,3,4,4,6,4,4,5,4,4,5],"out":38,"in":40,"roundTotal":78},{"player":"Mukesh Kumar","holes":[4,3,5,5,5,5,3,5,3,4,3,5,5,6,4,3,3,7],"out":38,"in":40,"roundTotal":78},{"player":"Sagar Raghuvanshi","holes":[5,3,4,4,5,4,3,5,5,4,3,5,5,7,5,2,5,4],"out":38,"in":40,"roundTotal":78},{"player":"Shivendra Singh Sisodia","holes":[4,4,4,5,4,4,3,5,4,5,3,6,4,7,4,4,4,4],"out":37,"in":41,"roundTotal":78},{"player":"Taiga Tanaka","holes":[5,4,4,4,5,5,2,5,6,4,4,4,4,5,5,3,4,5],"out":40,"in":38,"roundTotal":78},{"player":"Amrit Lal","holes":[5,2,4,5,6,4,4,5,4,5,2,4,4,5,6,4,5,5],"out":39,"in":40,"roundTotal":79},{"player":"Arindam Sudan","holes":[6,3,6,4,5,4,3,6,3,5,4,4,4,5,5,3,5,4],"out":40,"in":39,"roundTotal":79},{"player":"Md Muaj","holes":[7,3,4,3,5,4,3,4,8,5,3,5,3,4,5,3,6,4],"out":41,"in":38,"roundTotal":79},{"player":"Pawan Verma","holes":[5,6,4,4,4,4,4,7,4,4,4,5,3,4,4,3,5,5],"out":42,"in":37,"roundTotal":79},{"player":"Sanjeev Kumar (l)","holes":[4,4,5,4,5,3,3,5,5,4,3,5,6,6,4,4,5,4],"out":38,"in":41,"roundTotal":79},{"player":"Shubham Jaglan","holes":[4,3,4,4,4,4,3,5,6,4,3,4,10,4,6,3,3,5],"out":37,"in":42,"roundTotal":79},{"player":"Viraj Madappa","holes":[4,5,4,4,7,5,3,5,5,5,4,4,4,4,6,3,3,4],"out":42,"in":37,"roundTotal":79},{"player":"Aditya Bhandarkar","holes":[5,3,5,5,4,5,3,5,5,5,3,5,3,5,5,3,6,5],"out":40,"in":40,"roundTotal":80},{"player":"Ajay Baisoya","holes":[4,4,4,5,4,6,4,4,5,4,3,5,3,5,5,5,4,6],"out":40,"in":40,"roundTotal":80},{"player":"Daniel Core","holes":[5,3,4,4,7,3,2,6,5,4,3,5,5,7,4,3,5,5],"out":39,"in":41,"roundTotal":80},{"player":"Hemant Yadav","holes":[4,4,5,4,5,6,4,6,5,4,4,5,4,6,5,2,3,4],"out":43,"in":37,"roundTotal":80},{"player":"Jujhar Singh","holes":[3,4,4,4,3,6,3,7,4,4,3,5,4,6,6,3,5,6],"out":38,"in":42,"roundTotal":80},{"player":"Lakshya Nagar","holes":[4,3,4,4,5,4,4,6,4,4,3,6,4,5,6,3,5,6],"out":38,"in":42,"roundTotal":80},{"player":"Shankar Das","holes":[5,4,6,4,4,5,3,5,4,4,3,7,3,5,5,3,4,6],"out":40,"in":40,"roundTotal":80},{"player":"Vishav Pratap Singh Gill","holes":[3,3,4,5,4,4,3,5,6,4,4,5,4,8,4,3,6,5],"out":37,"in":43,"roundTotal":80},{"player":"Dilip M","holes":[4,3,5,4,6,5,3,6,6,5,4,5,4,5,4,3,5,4],"out":42,"in":39,"roundTotal":81},{"player":"Matthias Schwab","holes":[4,4,4,4,4,7,3,5,4,4,3,4,7,7,4,3,5,5],"out":39,"in":42,"roundTotal":81},{"player":"Mayur P Thakur","holes":[6,3,4,4,5,4,3,7,5,4,3,4,5,6,6,3,4,5],"out":41,"in":40,"roundTotal":81},{"player":"Pankaj Maandiya","holes":[5,4,4,5,5,6,3,6,4,4,3,5,4,5,6,3,4,5],"out":42,"in":39,"roundTotal":81},{"player":"Prakhar Asawa","holes":[4,4,6,5,4,5,3,6,5,4,3,6,4,5,5,4,4,4],"out":42,"in":39,"roundTotal":81},{"player":"Pranav Kaul","holes":[6,4,6,4,3,4,2,5,5,4,3,6,5,6,6,4,4,4],"out":39,"in":42,"roundTotal":81},{"player":"Ram Pal","holes":[5,3,4,4,6,4,6,5,4,4,2,7,8,5,4,2,4,4],"out":41,"in":40,"roundTotal":81},{"player":"Dhruv Bopanna","holes":[6,3,4,5,5,4,3,7,4,3,5,4,3,6,7,3,5,5],"out":41,"in":41,"roundTotal":82},{"player":"Samarpratap Singh Sandhu","holes":[4,3,5,4,7,4,4,4,5,4,4,5,3,7,6,3,5,5],"out":40,"in":42,"roundTotal":82},{"player":"Arjun Puri","holes":[5,3,5,5,7,4,3,5,5,5,3,4,7,5,5,3,5,4],"out":42,"in":41,"roundTotal":83},{"player":"Deepak Chouhan","holes":[6,3,4,4,5,4,4,5,5,5,3,5,6,8,5,2,5,4],"out":40,"in":43,"roundTotal":83},{"player":"Devin Singh","holes":[4,3,5,4,4,4,4,5,6,5,4,4,4,7,8,3,5,4],"out":39,"in":44,"roundTotal":83},{"player":"Yash Chaudhary","holes":[4,4,5,4,6,5,3,5,4,5,4,6,5,6,5,2,5,5],"out":40,"in":43,"roundTotal":83},{"player":"Victor Hans","holes":[4,3,6,5,5,5,3,5,7,4,3,5,4,5,7,4,5,4],"out":43,"in":41,"roundTotal":84},{"player":"Souvik Nayak","holes":[6,3,5,5,5,4,3,6,5,7,4,5,5,5,5,3,4,5],"out":42,"in":43,"roundTotal":85},{"player":"Aditya Raj Singh Chahal","holes":[4,4,8,4,5,4,5,4,7,5,4,6,4,6,5,4,3,4],"out":45,"in":41,"roundTotal":86},{"player":"Jay Pandya","holes":[4,4,6,4,4,4,5,6,3,5,3,4,5,9,6,4,6,4],"out":40,"in":46,"roundTotal":86},{"player":"Joysurjo Dey","holes":[4,5,6,5,5,6,5,5,4,4,5,5,6,5,6,3,4,4],"out":45,"in":42,"roundTotal":87}],"Round 2":[{"player":"Jhared Hack","holes":[5,3,4,4,4,3,3,5,4,4,3,6,4,4,4,2,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Brijesh Kumar","holes":[4,3,4,4,4,4,3,4,5,4,3,4,4,4,4,4,4,3],"out":35,"in":34,"roundTotal":69},{"player":"Dhruv Sheoran","holes":[5,2,5,4,5,4,2,4,4,3,4,4,3,5,4,3,4,4],"out":35,"in":34,"roundTotal":69},{"player":"Saptak Talwar","holes":[4,3,4,4,5,4,3,6,4,5,3,4,4,5,4,3,3,3],"out":37,"in":34,"roundTotal":71},{"player":"Christoph Bleier","holes":[4,3,4,3,4,4,4,4,5,4,3,4,5,4,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Clement Sordet","holes":[4,3,4,4,4,4,3,5,4,4,2,4,4,6,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Pierre Pineau","holes":[3,3,4,5,5,4,3,4,4,4,3,5,3,5,6,3,3,3],"out":35,"in":35,"roundTotal":70},{"player":"Rashid Khan","holes":[4,4,4,4,5,4,2,5,4,5,2,5,4,5,4,4,4,5],"out":36,"in":38,"roundTotal":74},{"player":"Manoj S","holes":[4,2,4,4,4,4,4,4,4,3,2,6,4,6,4,3,4,3],"out":34,"in":35,"roundTotal":69},{"player":"Arjun Prasad","holes":[5,3,4,4,4,5,3,5,4,5,2,4,4,6,4,3,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Kshitij Naveed Kaul","holes":[4,4,5,4,4,4,3,4,4,4,4,4,3,4,3,3,4,4],"out":36,"in":33,"roundTotal":69},{"player":"Jamal Hossain","holes":[4,3,4,4,5,5,3,5,3,4,3,4,3,4,3,3,4,4],"out":36,"in":32,"roundTotal":68},{"player":"Per Langfors","holes":[4,3,4,4,4,4,3,5,4,3,4,4,3,4,4,3,4,4],"out":35,"in":33,"roundTotal":68},{"player":"Kartik Singh","holes":[4,3,4,3,6,3,3,5,5,5,3,4,4,4,6,4,4,4],"out":36,"in":38,"roundTotal":74},{"player":"Manav Bais","holes":[4,3,4,5,6,4,3,5,4,4,3,5,4,4,5,3,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Subash Tamang","holes":[5,3,4,4,4,5,4,4,3,4,3,5,3,4,5,4,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Amardeep Malik","holes":[4,3,4,4,5,5,2,5,4,4,3,3,4,5,4,3,3,7],"out":36,"in":36,"roundTotal":72},{"player":"Honey Baisoya","holes":[4,4,4,4,5,3,3,4,4,4,3,4,4,5,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Manu Gandas","holes":[5,2,4,4,3,4,2,5,4,4,3,4,4,5,6,3,3,4],"out":33,"in":36,"roundTotal":69},{"player":"Abhinav Lohan","holes":[3,4,5,4,5,3,2,4,3,5,3,4,4,5,4,3,5,6],"out":33,"in":39,"roundTotal":72},{"player":"Veer Ahlawat","holes":[4,3,4,3,4,4,3,5,4,3,3,6,6,4,4,4,4,4],"out":34,"in":38,"roundTotal":72},{"player":"Aryaman Aditya Mohan","holes":[5,2,4,4,5,3,4,4,4,4,2,5,3,4,5,4,3,4],"out":35,"in":34,"roundTotal":69},{"player":"Sydney Joseph Wemba","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":-1},{"player":"Pritish Singh Karayat","holes":[3,4,4,5,4,5,3,4,4,4,2,5,4,4,5,5,5,4],"out":36,"in":38,"roundTotal":74},{"player":"Stepan Danek","holes":[4,3,5,3,5,4,3,4,4,4,2,5,4,5,5,5,4,5],"out":35,"in":39,"roundTotal":74},{"player":"Khalin H Joshi","holes":[4,3,4,4,5,4,4,4,4,5,3,4,5,5,4,3,4,4],"out":36,"in":37,"roundTotal":73},{"player":"Vishesh Sharma","holes":[4,3,3,4,4,4,4,5,4,4,2,5,4,6,5,3,5,4],"out":35,"in":38,"roundTotal":73},{"player":"Mohammad Sanju","holes":[4,3,4,4,5,4,3,5,3,4,3,4,3,7,4,3,4,5],"out":35,"in":37,"roundTotal":72},{"player":"Shamim Khan","holes":[3,4,4,4,5,4,3,4,4,5,3,5,3,5,4,4,4,4],"out":35,"in":37,"roundTotal":72},{"player":"Shaurya Bhattacharya","holes":[4,3,4,4,4,4,2,6,4,5,2,5,3,5,3,4,4,6],"out":35,"in":37,"roundTotal":72},{"player":"Yuvraj Singh","holes":[3,5,3,3,5,5,3,3,5,4,2,5,4,5,5,4,4,4],"out":35,"in":37,"roundTotal":72},{"player":"Yuvraj Sandhu","holes":[3,4,5,4,5,5,3,4,4,4,3,4,3,4,4,4,4,4],"out":37,"in":34,"roundTotal":71},{"player":"Mani Ram","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":0},{"player":"Chikkarangappa S","holes":[5,2,4,4,4,4,4,5,4,3,2,5,4,8,4,3,4,4],"out":36,"in":37,"roundTotal":73},{"player":"Harsh Gangwar","holes":[4,4,4,4,5,4,3,5,4,4,3,5,3,5,4,4,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Manjot Singh","holes":[4,2,4,4,4,4,4,5,4,4,3,5,4,5,5,4,3,4],"out":35,"in":37,"roundTotal":72},{"player":"Maxence Giboudot","holes":[5,4,3,4,5,3,3,4,4,5,4,5,5,4,3,3,3,5],"out":35,"in":37,"roundTotal":72},{"player":"Christofer Rahm","holes":[4,3,4,4,4,3,3,4,5,5,2,4,4,4,5,2,5,5],"out":34,"in":36,"roundTotal":70},{"player":"Om Prakash Chouhan","holes":[4,4,4,4,4,3,3,5,4,4,3,4,4,5,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Jairaj Singh Sandhu","holes":[5,3,4,3,5,5,3,4,4,5,3,5,5,7,4,3,4,4],"out":36,"in":40,"roundTotal":76},{"player":"Rohan Dhole Patil","holes":[4,4,4,4,4,5,3,8,4,5,3,5,4,4,4,3,4,4],"out":40,"in":36,"roundTotal":76},{"player":"Angad Cheema","holes":[3,4,5,6,5,4,3,4,4,4,3,5,4,5,4,3,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Arjun Sharma","holes":[4,3,5,4,4,7,2,5,4,5,3,4,4,5,4,4,4,3],"out":38,"in":36,"roundTotal":74},{"player":"Bastien Amat","holes":[6,3,4,4,4,5,3,5,4,5,2,5,4,4,5,3,3,4],"out":38,"in":35,"roundTotal":73},{"player":"Anshul Kabthiyal","holes":[4,3,4,3,5,4,3,3,5,4,4,5,4,5,4,3,5,4],"out":34,"in":38,"roundTotal":72},{"player":"Md Akbar Hossain","holes":[3,4,4,5,4,4,3,4,4,5,2,5,5,5,3,4,3,4],"out":35,"in":36,"roundTotal":71},{"player":"Rajesh Kumar Gautam","holes":[4,3,3,3,5,5,3,5,4,3,2,5,5,5,4,3,5,4],"out":35,"in":36,"roundTotal":71},{"player":"Himmat Singh Rai","holes":[4,3,3,4,5,4,3,4,6,3,3,3,4,6,4,4,3,4],"out":36,"in":34,"roundTotal":70},{"player":"Akshay Neranjen","holes":[5,3,5,4,4,4,3,5,4,6,3,5,4,5,4,4,4,5],"out":37,"in":40,"roundTotal":77},{"player":"Chandarjeet Yadav","holes":[4,4,4,4,5,3,4,5,5,3,4,5,4,5,4,4,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Divyanshu Bajaj","holes":[4,3,4,3,4,5,3,5,4,5,3,5,4,5,5,3,4,5],"out":35,"in":39,"roundTotal":74},{"player":"Joshua Grenville-wood","holes":[3,7,4,4,4,5,3,4,3,4,3,5,4,4,6,2,4,5],"out":37,"in":37,"roundTotal":74},{"player":"Tapendra Ghai","holes":[4,4,4,4,6,4,3,4,4,5,3,4,4,4,5,4,4,4],"out":37,"in":37,"roundTotal":74},{"player":"Albert Boneta","holes":[4,3,4,4,4,3,2,5,4,6,2,5,5,6,5,3,4,4],"out":33,"in":40,"roundTotal":73},{"player":"Dhruv Suri","holes":[4,2,4,4,4,4,3,5,6,3,4,5,5,4,4,3,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Ravi Kumar","holes":[3,4,4,4,4,4,5,5,4,4,3,5,4,5,4,3,4,4],"out":37,"in":36,"roundTotal":73},{"player":"Vikrant Chopra","holes":[5,3,4,4,5,4,3,6,4,4,2,5,4,4,5,3,4,4],"out":38,"in":35,"roundTotal":73},{"player":"Kushal Singh","holes":[4,4,5,4,4,4,3,4,4,6,3,5,3,5,4,2,4,3],"out":36,"in":35,"roundTotal":71},{"player":"Rajesh Kumar (p)","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":3},{"player":"Bipin Mukhiya","holes":[5,3,4,5,5,5,3,5,5,4,3,5,4,5,3,3,4,4],"out":40,"in":35,"roundTotal":75},{"player":"Irfan Ali Mollah","holes":[4,4,6,5,5,4,3,4,4,5,2,5,4,4,3,4,4,4],"out":39,"in":35,"roundTotal":74},{"player":"Mari Muthu R","holes":[4,3,3,4,5,4,3,5,4,4,3,4,4,4,5,4,4,5],"out":35,"in":37,"roundTotal":72},{"player":"Gaurav Pratap Singh","holes":[5,4,3,4,4,4,3,5,4,4,3,4,3,6,4,3,4,3],"out":36,"in":34,"roundTotal":70},{"player":"Taiga Tanaka","holes":[4,3,4,4,6,4,3,4,5,3,2,4,4,4,4,3,4,5],"out":37,"in":33,"roundTotal":70},{"player":"Matthias Schwab","holes":[3,3,3,5,4,4,3,4,4,4,2,5,5,4,4,3,3,4],"out":33,"in":34,"roundTotal":67},{"player":"Ajeetesh Sandhu","holes":[4,5,5,4,4,5,5,5,4,5,3,4,5,5,5,4,4,4],"out":41,"in":39,"roundTotal":80},{"player":"Badal Hossain","holes":[5,4,4,4,5,4,3,5,3,5,4,6,5,5,4,3,4,3],"out":37,"in":39,"roundTotal":76},{"player":"Harman Sachdeva","holes":[4,5,4,3,4,5,2,5,5,6,3,5,4,4,4,3,4,5],"out":37,"in":38,"roundTotal":75},{"player":"Siddharth Semwal","holes":[4,3,4,4,5,5,4,5,4,4,3,4,5,5,5,3,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Manish Thakran","holes":[4,3,4,4,4,5,4,4,6,4,2,5,4,6,4,3,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Mohd Azhar","holes":[3,2,4,4,5,4,3,5,4,6,4,4,4,5,6,3,4,4],"out":34,"in":40,"roundTotal":74},{"player":"Shubham Jaglan","holes":[4,3,4,4,3,4,3,5,4,4,2,4,6,5,4,3,4,4],"out":34,"in":36,"roundTotal":70},{"player":"Jaiveer","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":5},{"player":"Jaash Parekh","holes":[4,6,4,4,4,4,3,5,5,6,4,4,4,4,5,3,4,5],"out":39,"in":39,"roundTotal":78},{"player":"Sukhraj Singh Gill","holes":[5,3,4,4,4,5,3,6,3,5,3,4,4,6,7,3,5,3],"out":37,"in":40,"roundTotal":77},{"player":"Sunit Chowrasia","holes":[5,3,5,4,6,5,2,6,4,4,3,5,4,5,5,3,4,4],"out":40,"in":37,"roundTotal":77},{"player":"Vince Van Veen","holes":[6,3,4,4,5,4,5,4,5,5,2,5,4,4,4,4,6,3],"out":40,"in":37,"roundTotal":77},{"player":"Rohit Narwal","holes":[4,4,4,3,5,4,3,5,4,4,3,5,6,6,5,3,3,5],"out":36,"in":40,"roundTotal":76},{"player":"Pranav Mardikar","holes":[3,3,4,4,5,4,3,5,5,5,3,6,4,6,5,3,3,4],"out":36,"in":39,"roundTotal":75},{"player":"Rohit Baisoya","holes":[4,3,4,3,5,4,3,5,4,5,3,6,4,5,4,3,5,5],"out":35,"in":40,"roundTotal":75},{"player":"Umed Kumar","holes":[4,4,4,3,5,3,3,5,4,4,3,5,3,6,5,3,4,6],"out":35,"in":39,"roundTotal":74},{"player":"Akshay Sharma","holes":[5,3,4,4,5,4,3,5,5,5,2,6,2,5,5,3,4,3],"out":38,"in":35,"roundTotal":73},{"player":"Declan Kenny","holes":[4,4,4,4,5,4,2,4,4,4,3,4,5,5,4,4,3,5],"out":35,"in":37,"roundTotal":72},{"player":"Aditya Raj Kumar Chauhan","holes":[5,4,4,5,5,5,4,5,4,4,2,4,5,5,4,5,6,5],"out":41,"in":40,"roundTotal":81},{"player":"Vinay Kumar Yadav","holes":[5,4,4,4,4,5,3,4,3,4,3,6,4,5,5,4,4,5],"out":36,"in":40,"roundTotal":76},{"player":"Marvin Kibirige","holes":[5,3,4,3,4,4,4,4,4,4,4,5,5,5,5,2,4,5],"out":35,"in":39,"roundTotal":74},{"player":"Arindam Sudan","holes":[4,2,4,4,5,5,2,6,4,5,3,5,4,5,3,3,4,4],"out":36,"in":36,"roundTotal":72},{"player":"Divyansh Dubey","holes":[4,4,5,5,5,5,2,5,4,6,2,5,5,4,5,3,5,5],"out":39,"in":40,"roundTotal":79},{"player":"Vasu Sehgal","holes":[4,2,6,4,4,4,3,4,4,4,3,3,4,5,7,4,5,6],"out":35,"in":41,"roundTotal":76},{"player":"Arjunveer Shishir","holes":[4,3,4,4,5,5,3,5,4,7,2,5,3,5,5,3,4,4],"out":37,"in":38,"roundTotal":75},{"player":"Hemant Yadav","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":8},{"player":"Shankar Das","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":8},{"player":"Karan Verma","holes":[5,7,4,5,5,5,4,4,3,5,3,4,4,8,4,3,5,6],"out":42,"in":42,"roundTotal":84},{"player":"Dominic Piccirillo","holes":[3,3,4,5,5,4,4,6,4,5,4,6,3,7,4,3,4,6],"out":38,"in":42,"roundTotal":80},{"player":"Bikramjit Singh Sandhu","holes":[4,3,4,4,6,5,3,5,6,4,2,6,4,5,4,4,4,5],"out":40,"in":38,"roundTotal":78},{"player":"Mithil M G","holes":[4,3,4,4,6,5,3,4,4,5,3,4,4,5,5,5,5,5],"out":37,"in":41,"roundTotal":78},{"player":"Joshua Seale","holes":[5,3,5,4,4,4,3,6,4,5,3,6,4,4,4,5,3,4],"out":38,"in":38,"roundTotal":76},{"player":"Mahir Rakhra","holes":[4,5,4,4,6,5,3,4,4,4,3,5,4,5,4,3,4,4],"out":39,"in":36,"roundTotal":75},{"player":"Amrit Lal","holes":[4,3,4,5,4,4,3,5,4,4,3,6,4,5,5,3,5,3],"out":36,"in":38,"roundTotal":74},{"player":"Anant Singh Ahlawat","holes":[4,3,4,4,5,4,7,5,3,4,2,6,7,5,5,4,3,4],"out":39,"in":40,"roundTotal":79},{"player":"Anshul Patel","holes":[3,4,6,3,6,5,4,6,4,4,3,4,4,6,5,3,4,4],"out":41,"in":37,"roundTotal":78},{"player":"Sukra Bahadur Rai","holes":[5,3,5,4,5,4,3,4,4,6,4,5,5,5,5,4,3,4],"out":37,"in":41,"roundTotal":78},{"player":"Wasim Khan","holes":[4,4,4,4,4,5,3,5,4,4,3,4,6,6,6,3,4,4],"out":37,"in":40,"roundTotal":77},{"player":"Dipankar Kaushal","holes":[4,3,4,4,4,4,3,5,4,5,3,5,4,6,4,3,7,4],"out":35,"in":41,"roundTotal":76},{"player":"Sanjeev Kumar (l)","holes":[4,3,4,5,5,3,4,5,6,4,3,4,3,7,4,3,3,5],"out":39,"in":36,"roundTotal":75},{"player":"Brashwarpal Singh","holes":[4,3,4,4,5,4,4,5,4,4,3,5,4,6,8,5,5,4],"out":37,"in":44,"roundTotal":81},{"player":"Krish Patel","holes":[4,3,4,6,5,5,3,4,5,3,4,4,6,5,6,3,3,4],"out":39,"in":38,"roundTotal":77},{"player":"Sagar Raghuvanshi","holes":[4,4,4,5,6,4,4,5,4,5,3,5,4,6,4,3,4,3],"out":40,"in":37,"roundTotal":77},{"player":"Shivendra Singh Sisodia","holes":[4,3,4,5,5,4,4,5,4,3,3,5,4,4,8,4,4,4],"out":38,"in":39,"roundTotal":77},{"player":"Souvik Nayak","holes":[4,3,3,4,5,6,2,6,3,6,2,5,3,4,3,4,3,4],"out":36,"in":34,"roundTotal":70},{"player":"Deepak Chouhan","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":11},{"player":"Koichiro Ishika","holes":[4,3,5,3,6,5,4,6,4,4,3,6,6,4,4,3,5,5],"out":40,"in":40,"roundTotal":80},{"player":"Mansukh Sandhu","holes":[5,4,5,4,5,4,3,5,3,5,3,5,4,5,6,4,4,6],"out":38,"in":42,"roundTotal":80},{"player":"Rishi Kumar","holes":[5,4,4,4,6,4,3,6,4,4,3,5,6,5,5,3,4,5],"out":40,"in":40,"roundTotal":80},{"player":"Ayaan Gupta","holes":[4,3,4,5,5,4,3,5,5,4,2,5,6,7,4,3,5,5],"out":38,"in":41,"roundTotal":79},{"player":"Md Muaj","holes":[5,3,3,7,5,5,3,4,3,4,3,5,4,5,4,5,4,5],"out":38,"in":39,"roundTotal":77},{"player":"Pawan Verma","holes":[5,4,4,5,5,4,3,5,4,4,3,5,3,6,6,3,4,4],"out":39,"in":38,"roundTotal":77},{"player":"Ajay Baisoya","holes":[4,4,4,5,4,5,4,5,4,4,3,5,4,5,5,3,4,4],"out":39,"in":37,"roundTotal":76},{"player":"Lakshya Nagar","holes":[4,4,3,4,5,4,3,5,4,5,3,5,4,5,6,5,4,3],"out":36,"in":40,"roundTotal":76},{"player":"Vishav Pratap Singh Gill","holes":[5,4,4,5,5,4,3,4,4,5,3,4,4,5,4,4,4,5],"out":38,"in":38,"roundTotal":76},{"player":"Mukesh Kumar","holes":[4,4,4,5,4,5,2,4,5,4,3,6,4,6,4,4,5,6],"out":37,"in":42,"roundTotal":79},{"player":"Viraj Madappa","holes":[4,3,6,4,4,4,4,5,4,5,3,5,5,5,5,3,5,4],"out":38,"in":40,"roundTotal":78},{"player":"Daniel Core","holes":[4,3,4,5,4,4,5,5,4,4,3,6,6,5,4,3,4,4],"out":38,"in":39,"roundTotal":77},{"player":"Pranav Kaul","holes":[5,3,3,3,5,4,4,5,4,5,2,5,4,7,4,4,5,4],"out":36,"in":40,"roundTotal":76},{"player":"Shaurya Sharma","holes":[5,4,4,4,5,4,3,5,4,4,2,6,4,7,4,5,5,6],"out":38,"in":43,"roundTotal":81},{"player":"Aditya Raj Singh Chahal","holes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"out":0,"in":0,"roundTotal":14},{"player":"Aditya Bhandarkar","holes":[5,3,4,5,5,4,3,5,5,5,3,4,4,6,5,3,5,5],"out":39,"in":40,"roundTotal":79},{"player":"Prakhar Asawa","holes":[3,3,4,5,5,4,4,4,5,7,2,6,5,4,4,3,3,7],"out":37,"in":41,"roundTotal":78},{"player":"Dhruv Bopanna","holes":[6,6,3,4,6,3,2,5,4,4,3,6,4,5,4,3,4,5],"out":39,"in":38,"roundTotal":77},{"player":"Aniket Sawant","holes":[5,4,4,4,5,4,3,5,4,5,3,6,5,6,6,5,6,5],"out":38,"in":47,"roundTotal":85},{"player":"Jujhar Singh","holes":[4,4,4,4,4,5,4,7,4,4,3,5,5,4,5,3,5,6],"out":40,"in":40,"roundTotal":80},{"player":"Dilip M","holes":[5,5,4,4,6,6,3,6,4,4,3,5,4,6,4,3,4,4],"out":43,"in":37,"roundTotal":80},{"player":"Pankaj Maandiya","holes":[3,5,4,4,4,5,3,5,4,5,4,6,4,5,5,4,5,5],"out":37,"in":43,"roundTotal":80},{"player":"Devin Singh","holes":[4,3,5,6,4,4,5,4,4,4,4,5,3,5,5,4,5,4],"out":39,"in":39,"roundTotal":78},{"player":"Victor Hans","holes":[4,3,4,5,5,7,4,4,5,4,4,5,3,5,5,3,4,4],"out":41,"in":37,"roundTotal":78},{"player":"Arjun Puri","holes":[4,3,4,4,4,5,4,4,5,6,3,6,5,6,5,4,4,4],"out":37,"in":43,"roundTotal":80},{"player":"Mayur P Thakur","holes":[4,3,4,6,4,6,3,5,4,6,3,5,6,6,4,4,5,5],"out":39,"in":44,"roundTotal":83},{"player":"Amit Kumar (p)","holes":[6,3,4,4,4,5,3,7,5,5,4,5,5,5,4,6,5,8],"out":41,"in":47,"roundTotal":88},{"player":"Samarpratap Singh Sandhu","holes":[4,4,5,4,5,5,4,4,5,5,3,7,5,5,4,3,5,7],"out":40,"in":44,"roundTotal":84},{"player":"Ram Pal","holes":[6,4,4,4,10,5,4,4,4,5,3,5,7,5,5,3,4,4],"out":45,"in":41,"roundTotal":86},{"player":"Jay Pandya","holes":[3,4,4,4,5,4,4,5,4,4,4,5,3,5,8,4,4,7],"out":37,"in":44,"roundTotal":81},{"player":"Yash Chaudhary","holes":[5,4,6,5,6,5,3,7,5,5,3,6,5,6,5,3,4,5],"out":46,"in":42,"roundTotal":88},{"player":"Joysurjo Dey","holes":[5,5,5,5,7,4,3,5,5,4,3,5,5,5,7,4,4,6],"out":44,"in":43,"roundTotal":87}],"Round 3":[{"player":"Dhruv Sheoran","holes":[4,3,4,4,4,4,3,4,4,4,3,6,4,4,4,4,4,3],"out":34,"in":36,"roundTotal":70},{"player":"Saptak Talwar","holes":[4,3,4,3,5,4,3,4,4,4,3,4,4,5,4,3,4,4],"out":34,"in":35,"roundTotal":69},{"player":"Manu Gandas","holes":[4,3,4,4,4,4,3,4,3,3,3,4,3,4,4,4,4,5],"out":33,"in":34,"roundTotal":67},{"player":"Clement Sordet","holes":[4,3,3,3,4,4,3,5,4,5,3,4,4,5,6,3,4,4],"out":33,"in":38,"roundTotal":71},{"player":"Arjun Prasad","holes":[4,3,4,4,5,4,3,4,4,4,3,5,4,4,4,3,4,3],"out":35,"in":34,"roundTotal":69},{"player":"Aryaman Aditya Mohan","holes":[4,3,3,4,5,4,3,4,3,3,3,4,5,4,4,3,4,4],"out":33,"in":34,"roundTotal":67},{"player":"Jhared Hack","holes":[4,3,4,4,4,4,4,6,5,3,3,4,4,6,5,2,4,5],"out":38,"in":36,"roundTotal":74},{"player":"Christoph Bleier","holes":[4,4,5,3,4,4,3,4,4,3,3,5,7,5,4,3,3,4],"out":35,"in":37,"roundTotal":72},{"player":"Manoj S","holes":[3,3,3,3,4,4,3,5,4,4,3,5,5,4,5,4,4,5],"out":32,"in":39,"roundTotal":71},{"player":"Kartik Singh","holes":[4,5,3,4,4,4,2,4,4,4,3,4,4,4,4,3,4,5],"out":34,"in":35,"roundTotal":69},{"player":"Veer Ahlawat","holes":[4,2,4,4,5,4,2,4,4,5,3,3,5,4,4,2,4,5],"out":33,"in":35,"roundTotal":68},{"player":"Pierre Pineau","holes":[4,3,3,3,5,5,3,6,4,4,4,4,4,5,4,3,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Jamal Hossain","holes":[4,3,5,3,4,4,3,5,4,3,3,5,5,5,4,3,4,4],"out":35,"in":36,"roundTotal":71},{"player":"Subash Tamang","holes":[3,3,4,5,4,4,3,4,4,5,2,4,4,7,4,2,4,4],"out":34,"in":36,"roundTotal":70},{"player":"Vishesh Sharma","holes":[3,3,4,4,4,4,4,4,3,3,3,4,4,4,4,3,6,4],"out":33,"in":35,"roundTotal":68},{"player":"Brijesh Kumar","holes":[5,3,4,5,4,5,3,5,4,4,3,4,4,5,5,3,6,4],"out":38,"in":38,"roundTotal":76},{"player":"Abhinav Lohan","holes":[4,4,4,4,4,4,3,4,5,3,3,4,5,5,4,2,4,4],"out":36,"in":34,"roundTotal":70},{"player":"Khalin H Joshi","holes":[4,3,3,4,4,4,2,3,4,3,3,4,4,5,4,5,5,5],"out":31,"in":38,"roundTotal":69},{"player":"Yuvraj Singh","holes":[4,3,4,3,5,4,4,4,3,5,3,4,4,4,4,2,4,5],"out":34,"in":35,"roundTotal":69},{"player":"Yuvraj Sandhu","holes":[4,3,4,3,5,3,3,5,4,4,3,6,3,4,4,3,4,4],"out":34,"in":35,"roundTotal":69},{"player":"Bastien Amat","holes":[4,3,4,3,5,4,3,5,4,3,2,3,3,5,4,3,4,5],"out":35,"in":32,"roundTotal":67},{"player":"Per Langfors","holes":[4,3,3,6,5,4,3,5,4,4,2,4,7,5,4,3,4,3],"out":37,"in":36,"roundTotal":73},{"player":"Shaurya Bhattacharya","holes":[4,3,4,4,4,4,2,4,4,4,3,4,4,5,4,4,5,4],"out":33,"in":37,"roundTotal":70},{"player":"Stepan Danek","holes":[4,3,3,3,5,4,3,5,3,4,3,4,4,8,5,2,4,4],"out":33,"in":38,"roundTotal":71},{"player":"Christofer Rahm","holes":[4,3,4,4,5,4,4,4,5,3,3,5,4,5,5,2,3,3],"out":37,"in":33,"roundTotal":70},{"player":"Rashid Khan","holes":[4,3,5,5,4,6,2,5,7,3,3,5,4,5,4,3,4,4],"out":41,"in":35,"roundTotal":76},{"player":"Honey Baisoya","holes":[4,5,5,5,4,4,4,7,4,3,2,4,4,4,4,3,4,4],"out":42,"in":32,"roundTotal":74},{"player":"Anshul Kabthiyal","holes":[4,3,3,4,5,4,5,4,4,4,3,3,4,4,6,2,4,4],"out":36,"in":34,"roundTotal":70},{"player":"Joshua Grenville-wood","holes":[4,3,5,3,5,4,4,4,4,3,3,5,4,4,5,2,4,3],"out":36,"in":33,"roundTotal":69},{"player":"Manav Bais","holes":[5,4,4,5,4,4,2,5,5,3,3,4,7,4,4,3,4,5],"out":38,"in":37,"roundTotal":75},{"player":"Amardeep Malik","holes":[4,6,4,4,4,6,3,5,5,3,3,4,4,5,3,4,4,4],"out":41,"in":34,"roundTotal":75},{"player":"Jairaj Singh Sandhu","holes":[4,4,4,4,5,4,3,4,4,3,2,5,4,5,4,3,6,3],"out":36,"in":35,"roundTotal":71},{"player":"Mari Muthu R","holes":[3,3,4,4,4,4,4,6,3,3,3,4,4,4,5,3,4,4],"out":35,"in":34,"roundTotal":69},{"player":"Albert Boneta","holes":[4,4,5,4,4,4,3,5,4,5,3,3,3,5,4,4,4,3],"out":37,"in":34,"roundTotal":71},{"player":"Kshitij Naveed Kaul","holes":[4,4,6,4,5,4,2,4,4,4,3,4,4,5,6,3,6,6],"out":37,"in":41,"roundTotal":78},{"player":"Pritish Singh Karayat","holes":[5,3,4,4,5,5,3,6,4,3,4,4,3,6,4,4,4,4],"out":39,"in":36,"roundTotal":75},{"player":"Himmat Singh Rai","holes":[4,3,4,4,5,4,3,5,4,5,3,4,4,6,4,4,4,3],"out":36,"in":37,"roundTotal":73},{"player":"Chandarjeet Yadav","holes":[3,3,5,4,4,3,3,5,5,3,4,4,4,7,4,2,4,5],"out":35,"in":37,"roundTotal":72},{"player":"Divyanshu Bajaj","holes":[4,3,3,4,5,4,3,5,4,5,3,5,4,5,4,3,4,4],"out":35,"in":37,"roundTotal":72},{"player":"Tapendra Ghai","holes":[4,3,4,5,5,5,4,5,3,3,3,4,4,5,5,2,4,4],"out":38,"in":34,"roundTotal":72},{"player":"Ravi Kumar","holes":[4,3,4,4,4,4,3,4,5,4,3,5,4,4,6,3,4,4],"out":35,"in":37,"roundTotal":72},{"player":"Shamim Khan","holes":[5,3,5,5,5,5,3,5,4,4,2,6,5,5,4,3,4,3],"out":40,"in":36,"roundTotal":76},{"player":"Chikkarangappa S","holes":[5,3,4,4,4,5,3,4,4,4,3,6,4,5,4,3,6,4],"out":36,"in":39,"roundTotal":75},{"player":"Manjot Singh","holes":[4,3,5,4,6,5,3,4,4,3,3,5,4,5,4,4,6,4],"out":38,"in":38,"roundTotal":76},{"player":"Om Prakash Chouhan","holes":[5,3,4,4,4,5,4,5,6,4,3,4,5,5,5,2,4,4],"out":40,"in":36,"roundTotal":76},{"player":"Arjun Sharma","holes":[4,3,6,5,5,4,3,5,3,3,4,5,4,4,6,3,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Gaurav Pratap Singh","holes":[4,3,4,4,4,4,3,5,4,4,2,5,4,5,5,3,5,5],"out":35,"in":38,"roundTotal":73},{"player":"Mohammad Sanju","holes":[6,3,6,5,5,5,2,6,5,3,3,4,4,5,4,3,5,4],"out":43,"in":35,"roundTotal":78},{"player":"Harsh Gangwar","holes":[4,3,4,4,6,6,4,5,5,5,4,4,4,5,4,3,4,3],"out":41,"in":36,"roundTotal":77},{"player":"Angad Cheema","holes":[4,3,4,4,5,3,4,5,4,4,3,5,4,6,4,4,5,5],"out":36,"in":40,"roundTotal":76},{"player":"Kushal Singh","holes":[4,3,4,4,5,4,3,4,4,5,3,4,8,5,5,2,4,4],"out":35,"in":40,"roundTotal":75},{"player":"Maxence Giboudot","holes":[4,2,5,5,7,5,3,5,5,4,3,3,4,6,4,3,6,4],"out":41,"in":37,"roundTotal":78},{"player":"Md Akbar Hossain","holes":[3,3,4,4,5,4,3,5,6,4,3,6,4,6,5,3,4,5],"out":37,"in":40,"roundTotal":77},{"player":"Akshay Neranjen","holes":[4,4,4,5,5,4,3,5,5,4,3,3,4,5,6,4,4,4],"out":39,"in":37,"roundTotal":76},{"player":"Taiga Tanaka","holes":[5,3,3,5,5,5,4,5,4,3,3,4,5,5,5,3,4,4],"out":39,"in":36,"roundTotal":75},{"player":"Vikrant Chopra","holes":[5,3,4,4,4,4,4,6,5,4,3,4,4,6,4,4,4,5],"out":39,"in":38,"roundTotal":77},{"player":"Bipin Mukhiya","holes":[5,4,4,4,4,4,4,5,4,4,3,4,4,6,5,4,4,4],"out":38,"in":38,"roundTotal":76},{"player":"Irfan Ali Mollah","holes":[4,3,4,4,5,5,4,6,5,4,3,5,5,5,3,3,4,4],"out":40,"in":36,"roundTotal":76},{"player":"Rohan Dhole Patil","holes":[5,3,6,4,5,5,3,4,8,4,3,4,3,5,4,4,5,4],"out":43,"in":36,"roundTotal":79},{"player":"Rajesh Kumar Gautam","holes":[4,4,6,5,5,5,3,5,4,3,4,5,6,5,5,3,4,4],"out":41,"in":39,"roundTotal":80},{"player":"Matthias Schwab","holes":[4,4,4,5,5,4,4,4,5,4,3,4,6,5,5,3,5,4],"out":39,"in":39,"roundTotal":78},{"player":"Dhruv Suri","holes":[3,3,3,5,5,5,6,5,4,5,4,5,6,6,5,3,4,4],"out":39,"in":42,"roundTotal":81}],"Round 4":[{"player":"Saptak Talwar","holes":[4,3,4,4,4,4,3,4,5,4,3,5,4,4,4,3,4,4],"out":35,"in":35,"roundTotal":70},{"player":"Christoph Bleier","holes":[4,3,4,4,4,6,3,4,4,4,2,4,4,4,3,2,5,5],"out":36,"in":33,"roundTotal":69},{"player":"Kartik Singh","holes":[3,3,4,4,4,6,3,4,4,3,3,4,4,5,4,4,3,5],"out":35,"in":35,"roundTotal":70},{"player":"Veer Ahlawat","holes":[3,3,4,3,5,4,3,5,4,5,3,5,4,4,4,3,4,4],"out":34,"in":36,"roundTotal":70},{"player":"Clement Sordet","holes":[4,4,4,3,4,4,3,6,4,4,2,4,5,3,4,4,4,6],"out":36,"in":36,"roundTotal":72},{"player":"Dhruv Sheoran","holes":[3,3,4,4,4,5,4,5,4,5,3,6,4,5,4,4,4,4],"out":36,"in":39,"roundTotal":75},{"player":"Jhared Hack","holes":[4,3,6,4,6,3,2,5,4,4,2,5,4,5,5,3,4,3],"out":37,"in":35,"roundTotal":72},{"player":"Subash Tamang","holes":[5,3,3,5,5,4,3,5,4,4,3,5,3,5,4,3,4,3],"out":37,"in":34,"roundTotal":71},{"player":"Arjun Prasad","holes":[3,4,4,3,5,5,3,4,4,3,3,5,5,6,6,2,4,5],"out":35,"in":39,"roundTotal":74},{"player":"Vishesh Sharma","holes":[3,3,4,4,5,4,5,5,4,4,3,5,4,4,4,3,5,3],"out":37,"in":35,"roundTotal":72},{"player":"Stepan Danek","holes":[4,3,4,4,5,4,3,4,4,4,3,4,4,5,4,3,4,3],"out":35,"in":34,"roundTotal":69},{"player":"Manu Gandas","holes":[4,3,4,4,4,5,3,5,4,4,3,4,5,5,7,3,3,6],"out":36,"in":40,"roundTotal":76},{"player":"Aryaman Aditya Mohan","holes":[4,3,5,4,4,4,5,4,6,4,3,5,4,4,4,3,4,5],"out":39,"in":36,"roundTotal":75},{"player":"Brijesh Kumar","holes":[3,4,4,4,5,4,3,4,5,5,3,4,3,5,4,4,4,4],"out":36,"in":36,"roundTotal":72},{"player":"Per Langfors","holes":[4,4,3,3,4,5,3,5,4,4,3,4,4,5,6,3,3,4],"out":35,"in":36,"roundTotal":71},{"player":"Christofer Rahm","holes":[4,3,4,4,4,3,3,4,5,4,3,5,4,5,4,3,4,4],"out":34,"in":36,"roundTotal":70},{"player":"Amardeep Malik","holes":[4,3,4,4,4,4,2,4,5,3,2,5,4,5,4,3,5,3],"out":34,"in":34,"roundTotal":68},{"player":"Jamal Hossain","holes":[4,4,4,5,4,4,2,5,5,5,3,4,4,5,4,3,5,4],"out":37,"in":37,"roundTotal":74},{"player":"Khalin H Joshi","holes":[4,4,3,4,4,4,5,4,4,4,3,4,5,4,4,4,4,5],"out":36,"in":37,"roundTotal":73},{"player":"Yuvraj Sandhu","holes":[4,3,4,5,4,5,5,4,3,4,2,5,4,4,4,4,5,4],"out":37,"in":36,"roundTotal":73},{"player":"Joshua Grenville-wood","holes":[3,3,5,3,5,4,4,4,5,4,3,4,3,5,3,3,3,6],"out":36,"in":34,"roundTotal":70},{"player":"Abhinav Lohan","holes":[3,3,4,4,4,5,4,4,7,5,3,4,4,5,4,3,4,4],"out":38,"in":36,"roundTotal":74},{"player":"Honey Baisoya","holes":[4,3,4,4,5,5,3,4,4,3,4,4,4,4,4,3,4,5],"out":36,"in":35,"roundTotal":71},{"player":"Manoj S","holes":[4,3,4,4,5,4,5,4,5,4,3,5,5,5,4,3,4,6],"out":38,"in":39,"roundTotal":77},{"player":"Pierre Pineau","holes":[4,3,3,4,4,5,2,4,6,5,3,4,6,6,5,3,4,5],"out":35,"in":41,"roundTotal":76},{"player":"Shaurya Bhattacharya","holes":[5,4,4,4,5,4,2,4,4,4,3,5,4,4,4,3,5,6],"out":36,"in":38,"roundTotal":74},{"player":"Albert Boneta","holes":[4,3,4,4,5,5,3,4,4,4,3,4,3,5,4,3,4,4],"out":36,"in":34,"roundTotal":70},{"player":"Bastien Amat","holes":[3,3,4,4,4,4,4,5,4,4,4,5,8,4,4,3,5,4],"out":35,"in":41,"roundTotal":76},{"player":"Kshitij Naveed Kaul","holes":[4,3,4,3,4,4,7,4,4,4,3,4,4,5,3,3,3,4],"out":37,"in":33,"roundTotal":70},{"player":"Rashid Khan","holes":[4,4,4,5,5,4,2,5,3,4,4,4,3,6,5,3,4,5],"out":36,"in":38,"roundTotal":74},{"player":"Manav Bais","holes":[4,3,5,4,4,4,3,4,4,4,3,5,4,5,4,3,4,6],"out":35,"in":38,"roundTotal":73},{"player":"Jairaj Singh Sandhu","holes":[4,3,4,3,5,5,2,5,4,5,3,4,4,6,4,3,4,5],"out":35,"in":38,"roundTotal":73},{"player":"Gaurav Pratap Singh","holes":[4,3,4,4,5,4,3,4,5,4,2,5,4,4,4,3,4,4],"out":36,"in":34,"roundTotal":70},{"player":"Anshul Kabthiyal","holes":[4,3,4,4,5,3,3,6,4,4,3,4,6,6,5,3,4,5],"out":36,"in":40,"roundTotal":76},{"player":"Arjun Sharma","holes":[4,3,4,4,4,4,3,5,4,4,3,4,4,5,5,3,5,3],"out":35,"in":36,"roundTotal":71},{"player":"Yuvraj Singh","holes":[4,3,6,4,4,5,4,5,3,4,2,6,6,5,5,4,5,5],"out":38,"in":42,"roundTotal":80},{"player":"Himmat Singh Rai","holes":[4,4,4,5,4,4,7,5,3,4,3,4,4,4,4,3,4,4],"out":40,"in":34,"roundTotal":74},{"player":"Kushal Singh","holes":[3,3,4,4,5,5,3,5,4,4,3,4,4,5,4,3,5,3],"out":36,"in":35,"roundTotal":71},{"player":"Maxence Giboudot","holes":[3,2,3,4,5,4,3,5,5,3,3,4,5,4,5,4,4,4],"out":34,"in":36,"roundTotal":70},{"player":"Mari Muthu R","holes":[3,4,4,4,4,4,4,4,4,6,3,4,5,5,7,4,4,4],"out":35,"in":42,"roundTotal":77},{"player":"Divyanshu Bajaj","holes":[4,4,4,5,5,5,3,5,4,4,2,5,5,4,5,3,4,5],"out":39,"in":37,"roundTotal":76},{"player":"Md Akbar Hossain","holes":[4,3,4,4,5,3,4,4,4,4,3,5,5,4,4,4,4,4],"out":35,"in":37,"roundTotal":72},{"player":"Chandarjeet Yadav","holes":[5,3,4,4,5,4,4,5,5,4,3,5,4,5,5,3,5,4],"out":39,"in":38,"roundTotal":77},{"player":"Shamim Khan","holes":[4,3,5,4,4,4,3,5,4,5,3,4,4,5,5,3,5,6],"out":36,"in":40,"roundTotal":76},{"player":"Manjot Singh","holes":[4,4,5,4,4,5,3,4,5,4,3,5,3,6,5,3,4,4],"out":38,"in":37,"roundTotal":75},{"player":"Pritish Singh Karayat","holes":[4,5,3,4,5,4,3,5,6,5,3,4,6,5,4,3,4,5],"out":39,"in":39,"roundTotal":78},{"player":"Harsh Gangwar","holes":[5,3,4,4,4,5,4,4,3,3,3,5,3,5,9,3,5,3],"out":36,"in":39,"roundTotal":75},{"player":"Mohammad Sanju","holes":[4,3,4,4,5,5,3,4,6,3,3,5,4,6,4,3,4,6],"out":38,"in":38,"roundTotal":76},{"player":"Irfan Ali Mollah","holes":[5,4,4,3,5,5,3,5,6,3,4,4,3,5,4,3,4,4],"out":40,"in":34,"roundTotal":74},{"player":"Tapendra Ghai","holes":[5,4,5,5,4,4,3,6,4,5,5,4,4,5,5,3,4,5],"out":40,"in":40,"roundTotal":80},{"player":"Ravi Kumar","holes":[4,4,5,4,5,5,4,6,4,5,3,4,6,5,4,4,4,4],"out":41,"in":39,"roundTotal":80},{"player":"Chikkarangappa S","holes":[5,3,4,6,4,4,3,5,4,5,3,5,4,4,4,3,6,7],"out":38,"in":41,"roundTotal":79},{"player":"Angad Cheema","holes":[4,4,6,4,4,4,3,5,5,3,3,4,4,6,5,4,4,5],"out":39,"in":38,"roundTotal":77},{"player":"Taiga Tanaka","holes":[4,3,4,4,4,4,3,5,5,4,4,4,5,6,5,3,5,4],"out":36,"in":40,"roundTotal":76},{"player":"Om Prakash Chouhan","holes":[4,4,4,4,5,5,3,5,5,3,3,7,4,5,5,3,5,5],"out":39,"in":40,"roundTotal":79},{"player":"Akshay Neranjen","holes":[5,3,3,4,6,5,3,5,6,5,3,4,5,4,4,3,5,4],"out":40,"in":37,"roundTotal":77},{"player":"Bipin Mukhiya","holes":[4,4,4,4,5,3,5,4,4,5,2,5,4,6,4,4,4,5],"out":37,"in":39,"roundTotal":76},{"player":"Rohan Dhole Patil","holes":[4,4,6,4,4,4,3,6,4,3,3,4,4,5,4,4,4,6],"out":39,"in":37,"roundTotal":76},{"player":"Matthias Schwab","holes":[4,2,3,4,5,5,2,5,4,5,3,5,7,6,4,3,5,6],"out":34,"in":44,"roundTotal":78},{"player":"Vikrant Chopra","holes":[5,4,3,5,5,5,3,4,5,4,4,5,9,5,4,3,4,4],"out":39,"in":42,"roundTotal":81},{"player":"Dhruv Suri","holes":[4,3,3,5,5,6,4,5,4,5,3,5,4,7,5,3,4,3],"out":39,"in":39,"roundTotal":78},{"player":"Rajesh Kumar Gautam","holes":[5,4,5,4,5,4,5,5,5,4,3,5,4,5,4,3,4,7],"out":42,"in":39,"roundTotal":81}]};

export interface TeeTimeGroup {
  match: string;
  time: string;
  tee: string;
  players: { name: string; countryCode: string; flag: string }[];
}

export const teeTimes: Record<string, TeeTimeGroup[]> = {
  "Round 1 · Thu 12 Mar": [
    {
      "match": "1",
      "tee": "1",
      "time": "06:45",
      "players": [
        {
          "name": "Pankaj Maandiya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joysurjo Dey",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jaash Parekh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "2",
      "tee": "1",
      "time": "06:55",
      "players": [
        {
          "name": "Sunit Chowrasia",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jujhar Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dipankar Kaushal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "3",
      "tee": "1",
      "time": "07:05",
      "players": [
        {
          "name": "Krish Patel",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Daniel Core",
          "countryCode": "CAN",
          "flag": "ca"
        },
        {
          "name": "Arjun Puri",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "4",
      "tee": "1",
      "time": "07:15",
      "players": [
        {
          "name": "Kshitij Naveed Kaul",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Himmat Singh Rai",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mukesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "5",
      "tee": "1",
      "time": "07:25",
      "players": [
        {
          "name": "Ajeetesh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Om Prakash Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjun Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "6",
      "tee": "1",
      "time": "07:35",
      "players": [
        {
          "name": "Jamal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Sydney Joseph Wemba",
          "countryCode": "ZAM",
          "flag": "zm"
        },
        {
          "name": "Kushal Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "7",
      "tee": "1",
      "time": "07:45",
      "players": [
        {
          "name": "Chikkarangappa S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Maxence Giboudot",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Rohit Narwal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "8",
      "tee": "1",
      "time": "07:55",
      "players": [
        {
          "name": "Arjun Prasad",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bastien Amat",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Tapendra Ghai",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "9",
      "tee": "1",
      "time": "08:05",
      "players": [
        {
          "name": "Shamim Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Prakhar Asawa",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yuvraj Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "10",
      "tee": "1",
      "time": "08:15",
      "players": [
        {
          "name": "Vinay Kumar Yadav",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Brashwarpal Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aditya Bhandarkar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "11",
      "tee": "1",
      "time": "08:25",
      "players": [
        {
          "name": "Jaiveer",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Amit Kumar (p)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Ram Pal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "12",
      "tee": "1",
      "time": "08:35",
      "players": [
        {
          "name": "Aditya Raj Singh Chahal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Akshay Neranjen",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Koichiro Ishika",
          "countryCode": "JPN",
          "flag": "jp"
        }
      ]
    },
    {
      "match": "13",
      "tee": "1",
      "time": "11:30",
      "players": [
        {
          "name": "Declan Kenny",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Sanjeev Kumar (l)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pawan Verma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "14",
      "tee": "1",
      "time": "11:40",
      "players": [
        {
          "name": "Sagar Raghuvanshi",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vishav Pratap Singh Gill",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Siddharth Semwal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "15",
      "tee": "1",
      "time": "11:50",
      "players": [
        {
          "name": "Subash Tamang",
          "countryCode": "NEP",
          "flag": "np"
        },
        {
          "name": "Manoj S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vasu Sehgal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "16",
      "tee": "1",
      "time": "12:00",
      "players": [
        {
          "name": "Jairaj Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Sukra Bahadur Rai",
          "countryCode": "NEP",
          "flag": "np"
        },
        {
          "name": "Albert Boneta",
          "countryCode": "ESP",
          "flag": "es"
        }
      ]
    },
    {
      "match": "17",
      "tee": "1",
      "time": "12:10",
      "players": [
        {
          "name": "Khalin H Joshi",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Matthias Schwab",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Dhruv Suri",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "18",
      "tee": "1",
      "time": "12:20",
      "players": [
        {
          "name": "Jhared Hack",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Clement Sordet",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Gaurav Pratap Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "19",
      "tee": "1",
      "time": "12:30",
      "players": [
        {
          "name": "Manu Gandas",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pierre Pineau",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Akshay Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "20",
      "tee": "1",
      "time": "12:40",
      "players": [
        {
          "name": "Rohan Dhole Patil",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christoph Bleier",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Brijesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "21",
      "tee": "1",
      "time": "12:50",
      "players": [
        {
          "name": "Shaurya Sharma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rishi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Anant Singh Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "22",
      "tee": "1",
      "time": "13:00",
      "players": [
        {
          "name": "Ayaan Gupta",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Harsh Gangwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Irfan Ali Mollah",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "23",
      "tee": "1",
      "time": "13:10",
      "players": [
        {
          "name": "Arindam Sudan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yash Chaudhary",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Devin Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "24",
      "tee": "1",
      "time": "13:20",
      "players": [
        {
          "name": "Pranav Kaul",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Md Muaj",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Harman Sachdeva",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "25",
      "tee": "10",
      "time": "06:45",
      "players": [
        {
          "name": "Rajesh Kumar (p)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pritish Singh Karayat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mansukh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "26",
      "tee": "10",
      "time": "06:55",
      "players": [
        {
          "name": "Mithil M G",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Souvik Nayak",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bipin Mukhiya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "27",
      "tee": "10",
      "time": "07:05",
      "players": [
        {
          "name": "Mayur P Thakur",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manjot Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Md Akbar Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        }
      ]
    },
    {
      "match": "28",
      "tee": "10",
      "time": "07:15",
      "players": [
        {
          "name": "Amrit Lal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aniket Sawant",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjunveer Shishir",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "29",
      "tee": "10",
      "time": "07:25",
      "players": [
        {
          "name": "Abhinav Lohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rashid Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Per Langfors",
          "countryCode": "SWE",
          "flag": "se"
        }
      ]
    },
    {
      "match": "30",
      "tee": "10",
      "time": "07:35",
      "players": [
        {
          "name": "Shaurya Bhattacharya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Marvin Kibirige",
          "countryCode": "UGA",
          "flag": "ug"
        },
        {
          "name": "Vince Van Veen",
          "countryCode": "NED",
          "flag": "nl"
        }
      ]
    },
    {
      "match": "31",
      "tee": "10",
      "time": "07:45",
      "players": [
        {
          "name": "Yuvraj Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Honey Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joshua Grenville-wood",
          "countryCode": "UAE",
          "flag": "ae"
        }
      ]
    },
    {
      "match": "32",
      "tee": "10",
      "time": "07:55",
      "players": [
        {
          "name": "Karan Verma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rohit Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Chandarjeet Yadav",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "33",
      "tee": "10",
      "time": "08:05",
      "players": [
        {
          "name": "Anshul Patel",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Ravi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Wasim Khan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "34",
      "tee": "10",
      "time": "08:15",
      "players": [
        {
          "name": "Badal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Umed Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bikramjit Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "35",
      "tee": "10",
      "time": "08:25",
      "players": [
        {
          "name": "Anshul Kabthiyal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vikrant Chopra",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Taiga Tanaka",
          "countryCode": "JPN",
          "flag": "jp"
        }
      ]
    },
    {
      "match": "36",
      "tee": "10",
      "time": "08:35",
      "players": [
        {
          "name": "Shankar Das",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dilip M",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Samarpratap Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "37",
      "tee": "10",
      "time": "11:30",
      "players": [
        {
          "name": "Dominic Piccirillo",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Manish Thakran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "—",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "38",
      "tee": "10",
      "time": "11:40",
      "players": [
        {
          "name": "Deepak Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Lakshya Nagar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mahir Rakhra",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "39",
      "tee": "10",
      "time": "11:50",
      "players": [
        {
          "name": "Rajesh Kumar Gautam",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Victor Hans",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aditya Raj Kumar Chauhan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "40",
      "tee": "10",
      "time": "12:00",
      "players": [
        {
          "name": "Angad Cheema",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pranav Mardikar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christofer Rahm",
          "countryCode": "SWE",
          "flag": "se"
        }
      ]
    },
    {
      "match": "41",
      "tee": "10",
      "time": "12:10",
      "players": [
        {
          "name": "Veer Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dhruv Sheoran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Stepan Danek",
          "countryCode": "CZE",
          "flag": "cz"
        }
      ]
    },
    {
      "match": "42",
      "tee": "10",
      "time": "12:20",
      "players": [
        {
          "name": "Viraj Madappa",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mohd Azhar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joshua Seale",
          "countryCode": "UGA",
          "flag": "ug"
        }
      ]
    },
    {
      "match": "43",
      "tee": "10",
      "time": "12:30",
      "players": [
        {
          "name": "Amardeep Malik",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Saptak Talwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vishesh Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "44",
      "tee": "10",
      "time": "12:40",
      "players": [
        {
          "name": "Sukhraj Singh Gill",
          "countryCode": "CAN",
          "flag": "ca"
        },
        {
          "name": "Mari Muthu R",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manav Bais",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "45",
      "tee": "10",
      "time": "12:50",
      "players": [
        {
          "name": "Divyanshu Bajaj",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mani Ram",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dhruv Bopanna",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "46",
      "tee": "10",
      "time": "13:00",
      "players": [
        {
          "name": "Shubham Jaglan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Kartik Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Shivendra Singh Sisodia",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "47",
      "tee": "10",
      "time": "13:10",
      "players": [
        {
          "name": "Ajay Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aryaman Aditya Mohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jay Pandya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "48",
      "tee": "10",
      "time": "13:20",
      "players": [
        {
          "name": "Mohammad Sanju",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Divyansh Dubey",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Hemant Yadav",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    }
  ],
  "Round 2 · Fri 13 Mar": [
    {
      "match": "1",
      "tee": "1",
      "time": "06:45",
      "players": [
        {
          "name": "Dominic Piccirillo",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Manish Thakran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "—",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "2",
      "tee": "1",
      "time": "06:55",
      "players": [
        {
          "name": "Deepak Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Lakshya Nagar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mahir Rakhra",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "3",
      "tee": "1",
      "time": "07:05",
      "players": [
        {
          "name": "Rajesh Kumar Gautam",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Victor Hans",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aditya Raj Kumar Chauhan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "4",
      "tee": "1",
      "time": "07:15",
      "players": [
        {
          "name": "Angad Cheema",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pranav Mardikar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christofer Rahm",
          "countryCode": "SWE",
          "flag": "se"
        }
      ]
    },
    {
      "match": "5",
      "tee": "1",
      "time": "07:25",
      "players": [
        {
          "name": "Veer Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dhruv Sheoran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Stepan Danek",
          "countryCode": "CZE",
          "flag": "cz"
        }
      ]
    },
    {
      "match": "6",
      "tee": "1",
      "time": "07:35",
      "players": [
        {
          "name": "Viraj Madappa",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mohd Azhar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joshua Seale",
          "countryCode": "UGA",
          "flag": "ug"
        }
      ]
    },
    {
      "match": "7",
      "tee": "1",
      "time": "07:45",
      "players": [
        {
          "name": "Amardeep Malik",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Saptak Talwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vishesh Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "8",
      "tee": "1",
      "time": "07:55",
      "players": [
        {
          "name": "Sukhraj Singh Gill",
          "countryCode": "CAN",
          "flag": "ca"
        },
        {
          "name": "Mari Muthu R",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manav Bais",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "9",
      "tee": "1",
      "time": "08:05",
      "players": [
        {
          "name": "Divyanshu Bajaj",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mani Ram",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dhruv Bopanna",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "10",
      "tee": "1",
      "time": "08:15",
      "players": [
        {
          "name": "Shubham Jaglan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Kartik Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Shivendra Singh Sisodia",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "11",
      "tee": "1",
      "time": "08:25",
      "players": [
        {
          "name": "Ajay Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aryaman Aditya Mohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jay Pandya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "12",
      "tee": "1",
      "time": "08:35",
      "players": [
        {
          "name": "Mohammad Sanju",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Divyansh Dubey",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Hemant Yadav",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "13",
      "tee": "1",
      "time": "11:30",
      "players": [
        {
          "name": "Rajesh Kumar (p)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pritish Singh Karayat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mansukh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "14",
      "tee": "1",
      "time": "11:40",
      "players": [
        {
          "name": "Mithil M G",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Souvik Nayak",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bipin Mukhiya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "15",
      "tee": "1",
      "time": "11:50",
      "players": [
        {
          "name": "Mayur P Thakur",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manjot Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Md Akbar Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        }
      ]
    },
    {
      "match": "16",
      "tee": "1",
      "time": "12:00",
      "players": [
        {
          "name": "Amrit Lal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aniket Sawant",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjunveer Shishir",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "17",
      "tee": "1",
      "time": "12:10",
      "players": [
        {
          "name": "Abhinav Lohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rashid Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Per Langfors",
          "countryCode": "SWE",
          "flag": "se"
        }
      ]
    },
    {
      "match": "18",
      "tee": "1",
      "time": "12:20",
      "players": [
        {
          "name": "Shaurya Bhattacharya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Marvin Kibirige",
          "countryCode": "UGA",
          "flag": "ug"
        },
        {
          "name": "Vince Van Veen",
          "countryCode": "NED",
          "flag": "nl"
        }
      ]
    },
    {
      "match": "19",
      "tee": "1",
      "time": "12:30",
      "players": [
        {
          "name": "Yuvraj Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Honey Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joshua Grenville-wood",
          "countryCode": "UAE",
          "flag": "ae"
        }
      ]
    },
    {
      "match": "20",
      "tee": "1",
      "time": "12:40",
      "players": [
        {
          "name": "Karan Verma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rohit Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Chandarjeet Yadav",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "21",
      "tee": "1",
      "time": "12:50",
      "players": [
        {
          "name": "Anshul Patel",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Ravi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Wasim Khan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "22",
      "tee": "1",
      "time": "13:00",
      "players": [
        {
          "name": "Badal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Umed Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bikramjit Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "23",
      "tee": "1",
      "time": "13:10",
      "players": [
        {
          "name": "Anshul Kabthiyal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vikrant Chopra",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Taiga Tanaka",
          "countryCode": "JPN",
          "flag": "jp"
        }
      ]
    },
    {
      "match": "24",
      "tee": "1",
      "time": "13:20",
      "players": [
        {
          "name": "Shankar Das",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dilip M",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Samarpratap Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "25",
      "tee": "10",
      "time": "06:45",
      "players": [
        {
          "name": "Declan Kenny",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Sanjeev Kumar (l)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pawan Verma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "26",
      "tee": "10",
      "time": "06:55",
      "players": [
        {
          "name": "Sagar Raghuvanshi",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vishav Pratap Singh Gill",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Siddharth Semwal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "27",
      "tee": "10",
      "time": "07:05",
      "players": [
        {
          "name": "Subash Tamang",
          "countryCode": "NEP",
          "flag": "np"
        },
        {
          "name": "Manoj S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vasu Sehgal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "28",
      "tee": "10",
      "time": "07:15",
      "players": [
        {
          "name": "Jairaj Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Sukra Bahadur Rai",
          "countryCode": "NEP",
          "flag": "np"
        },
        {
          "name": "Albert Boneta",
          "countryCode": "ESP",
          "flag": "es"
        }
      ]
    },
    {
      "match": "29",
      "tee": "10",
      "time": "07:25",
      "players": [
        {
          "name": "Khalin H Joshi",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Matthias Schwab",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Dhruv Suri",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "30",
      "tee": "10",
      "time": "07:35",
      "players": [
        {
          "name": "Jhared Hack",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Clement Sordet",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Gaurav Pratap Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "31",
      "tee": "10",
      "time": "07:45",
      "players": [
        {
          "name": "Manu Gandas",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Pierre Pineau",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Akshay Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "32",
      "tee": "10",
      "time": "07:55",
      "players": [
        {
          "name": "Rohan Dhole Patil",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christoph Bleier",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Brijesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "33",
      "tee": "10",
      "time": "08:05",
      "players": [
        {
          "name": "Shaurya Sharma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rishi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Anant Singh Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "34",
      "tee": "10",
      "time": "08:15",
      "players": [
        {
          "name": "Ayaan Gupta",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Harsh Gangwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Irfan Ali Mollah",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "35",
      "tee": "10",
      "time": "08:25",
      "players": [
        {
          "name": "Arindam Sudan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yash Chaudhary",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Devin Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "36",
      "tee": "10",
      "time": "08:35",
      "players": [
        {
          "name": "Pranav Kaul",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Md Muaj",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Harman Sachdeva",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "37",
      "tee": "10",
      "time": "11:30",
      "players": [
        {
          "name": "Pankaj Maandiya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joysurjo Dey",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jaash Parekh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "38",
      "tee": "10",
      "time": "11:40",
      "players": [
        {
          "name": "Sunit Chowrasia",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jujhar Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dipankar Kaushal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "39",
      "tee": "10",
      "time": "11:50",
      "players": [
        {
          "name": "Krish Patel",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Daniel Core",
          "countryCode": "CAN",
          "flag": "ca"
        },
        {
          "name": "Arjun Puri",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "40",
      "tee": "10",
      "time": "12:00",
      "players": [
        {
          "name": "Kshitij Naveed Kaul",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Himmat Singh Rai",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mukesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "41",
      "tee": "10",
      "time": "12:10",
      "players": [
        {
          "name": "Ajeetesh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Om Prakash Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjun Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "42",
      "tee": "10",
      "time": "12:20",
      "players": [
        {
          "name": "Jamal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Sydney Joseph Wemba",
          "countryCode": "ZAM",
          "flag": "zm"
        },
        {
          "name": "Kushal Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "43",
      "tee": "10",
      "time": "12:30",
      "players": [
        {
          "name": "Chikkarangappa S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Maxence Giboudot",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Rohit Narwal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "44",
      "tee": "10",
      "time": "12:40",
      "players": [
        {
          "name": "Arjun Prasad",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bastien Amat",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Tapendra Ghai",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "45",
      "tee": "10",
      "time": "12:50",
      "players": [
        {
          "name": "Shamim Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Prakhar Asawa",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yuvraj Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "46",
      "tee": "10",
      "time": "13:00",
      "players": [
        {
          "name": "Vinay Kumar Yadav",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Brashwarpal Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aditya Bhandarkar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "47",
      "tee": "10",
      "time": "13:10",
      "players": [
        {
          "name": "Jaiveer",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Amit Kumar (p)",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Ram Pal",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "48",
      "tee": "10",
      "time": "13:20",
      "players": [
        {
          "name": "Aditya Raj Singh Chahal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Akshay Neranjen",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Koichiro Ishika",
          "countryCode": "JPN",
          "flag": "jp"
        }
      ]
    }
  ],
  "Round 3 · Sat 14 Mar": [
    {
      "match": "1",
      "tee": "1",
      "time": "07:00",
      "players": [
        {
          "name": "Harsh Gangwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christofer Rahm",
          "countryCode": "SWE",
          "flag": "se"
        },
        {
          "name": "Shamim Khan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "2",
      "tee": "1",
      "time": "07:10",
      "players": [
        {
          "name": "Yuvraj Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yuvraj Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Shaurya Bhattacharya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "3",
      "tee": "1",
      "time": "07:20",
      "players": [
        {
          "name": "Pritish Singh Karayat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mohammad Sanju",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vishesh Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "4",
      "tee": "1",
      "time": "07:30",
      "players": [
        {
          "name": "Khalin H Joshi",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Stepan Danek",
          "countryCode": "CZE",
          "flag": "cz"
        },
        {
          "name": "Abhinav Lohan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "5",
      "tee": "1",
      "time": "07:40",
      "players": [
        {
          "name": "Aryaman Aditya Mohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Veer Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Honey Baisoya",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "6",
      "tee": "1",
      "time": "07:50",
      "players": [
        {
          "name": "Kartik Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manav Bais",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manu Gandas",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "7",
      "tee": "1",
      "time": "08:00",
      "players": [
        {
          "name": "Amardeep Malik",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Subash Tamang",
          "countryCode": "NEP",
          "flag": "np"
        },
        {
          "name": "Arjun Prasad",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "8",
      "tee": "1",
      "time": "08:10",
      "players": [
        {
          "name": "Jamal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Per Langfors",
          "countryCode": "SWE",
          "flag": "se"
        },
        {
          "name": "Kshitij Naveed Kaul",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "9",
      "tee": "1",
      "time": "08:20",
      "players": [
        {
          "name": "Rashid Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manoj S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Christoph Bleier",
          "countryCode": "AUT",
          "flag": "at"
        }
      ]
    },
    {
      "match": "10",
      "tee": "1",
      "time": "08:30",
      "players": [
        {
          "name": "Pierre Pineau",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Saptak Talwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Clement Sordet",
          "countryCode": "FRA",
          "flag": "fr"
        }
      ]
    },
    {
      "match": "11",
      "tee": "1",
      "time": "08:40",
      "players": [
        {
          "name": "Dhruv Sheoran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Brijesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jhared Hack",
          "countryCode": "USA",
          "flag": "us"
        }
      ]
    },
    {
      "match": "12",
      "tee": "10",
      "time": "07:00",
      "players": [
        {
          "name": "Manjot Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Om Prakash Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "—",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "13",
      "tee": "10",
      "time": "07:10",
      "players": [
        {
          "name": "Chikkarangappa S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Maxence Giboudot",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Rajesh Kumar Gautam",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "14",
      "tee": "10",
      "time": "07:20",
      "players": [
        {
          "name": "Angad Cheema",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jairaj Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rohan Dhole Patil",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "15",
      "tee": "10",
      "time": "07:30",
      "players": [
        {
          "name": "Md Akbar Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Himmat Singh Rai",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjun Sharma",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "16",
      "tee": "10",
      "time": "07:40",
      "players": [
        {
          "name": "Bastien Amat",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Anshul Kabthiyal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Albert Boneta",
          "countryCode": "ESP",
          "flag": "es"
        }
      ]
    },
    {
      "match": "17",
      "tee": "10",
      "time": "07:50",
      "players": [
        {
          "name": "Dhruv Suri",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Divyanshu Bajaj",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Kushal Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "18",
      "tee": "10",
      "time": "08:00",
      "players": [
        {
          "name": "Joshua Grenville-wood",
          "countryCode": "UAE",
          "flag": "ae"
        },
        {
          "name": "Tapendra Ghai",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Chandarjeet Yadav",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "19",
      "tee": "10",
      "time": "08:10",
      "players": [
        {
          "name": "Ravi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Akshay Neranjen",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Vikrant Chopra",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "20",
      "tee": "10",
      "time": "08:20",
      "players": [
        {
          "name": "Matthias Schwab",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Gaurav Pratap Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mari Muthu R",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "21",
      "tee": "10",
      "time": "08:30",
      "players": [
        {
          "name": "Irfan Ali Mollah",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Bipin Mukhiya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Taiga Tanaka",
          "countryCode": "JPN",
          "flag": "jp"
        }
      ]
    }
  ],
  "Round 4 · Sun 15 Mar": [
    {
      "match": "1",
      "tee": "1",
      "time": "07:00",
      "players": [
        {
          "name": "Mari Muthu R",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Amardeep Malik",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manav Bais",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "2",
      "tee": "1",
      "time": "07:10",
      "players": [
        {
          "name": "Jairaj Singh Sandhu",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rashid Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Joshua Grenville-wood",
          "countryCode": "UAE",
          "flag": "ae"
        }
      ]
    },
    {
      "match": "3",
      "tee": "1",
      "time": "07:20",
      "players": [
        {
          "name": "Honey Baisoya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Anshul Kabthiyal",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Stepan Danek",
          "countryCode": "CZE",
          "flag": "cz"
        }
      ]
    },
    {
      "match": "4",
      "tee": "1",
      "time": "07:30",
      "players": [
        {
          "name": "Christofer Rahm",
          "countryCode": "SWE",
          "flag": "se"
        },
        {
          "name": "Shaurya Bhattacharya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Per Langfors",
          "countryCode": "SWE",
          "flag": "se"
        }
      ]
    },
    {
      "match": "5",
      "tee": "1",
      "time": "07:40",
      "players": [
        {
          "name": "Brijesh Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Abhinav Lohan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Khalin H Joshi",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "6",
      "tee": "1",
      "time": "07:50",
      "players": [
        {
          "name": "Bastien Amat",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Yuvraj Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Yuvraj Sandhu",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "7",
      "tee": "1",
      "time": "08:00",
      "players": [
        {
          "name": "Pierre Pineau",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Jamal Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        },
        {
          "name": "Subash Tamang",
          "countryCode": "NEP",
          "flag": "np"
        }
      ]
    },
    {
      "match": "8",
      "tee": "1",
      "time": "08:10",
      "players": [
        {
          "name": "Vishesh Sharma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Jhared Hack",
          "countryCode": "USA",
          "flag": "us"
        },
        {
          "name": "Christoph Bleier",
          "countryCode": "AUT",
          "flag": "at"
        }
      ]
    },
    {
      "match": "9",
      "tee": "1",
      "time": "08:20",
      "players": [
        {
          "name": "Manoj S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Kartik Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Veer Ahlawat",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "10",
      "tee": "1",
      "time": "08:30",
      "players": [
        {
          "name": "Clement Sordet",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Arjun Prasad",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Aryaman Aditya Mohan",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "11",
      "tee": "1",
      "time": "08:40",
      "players": [
        {
          "name": "Manu Gandas",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Dhruv Sheoran",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Saptak Talwar",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "12",
      "tee": "10",
      "time": "07:00",
      "players": [
        {
          "name": "Albert Boneta",
          "countryCode": "ESP",
          "flag": "es"
        },
        {
          "name": "Himmat Singh Rai",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "—",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "13",
      "tee": "10",
      "time": "07:10",
      "players": [
        {
          "name": "Pritish Singh Karayat",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Divyanshu Bajaj",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Tapendra Ghai",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "14",
      "tee": "10",
      "time": "07:20",
      "players": [
        {
          "name": "Chandarjeet Yadav",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Ravi Kumar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Kshitij Naveed Kaul",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "15",
      "tee": "10",
      "time": "07:30",
      "players": [
        {
          "name": "Shamim Khan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Chikkarangappa S",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Manjot Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "16",
      "tee": "10",
      "time": "07:40",
      "players": [
        {
          "name": "Om Prakash Chouhan",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Arjun Sharma",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Gaurav Pratap Singh",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "17",
      "tee": "10",
      "time": "07:50",
      "players": [
        {
          "name": "Harsh Gangwar",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Angad Cheema",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Mohammad Sanju",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "18",
      "tee": "10",
      "time": "08:00",
      "players": [
        {
          "name": "Kushal Singh",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Maxence Giboudot",
          "countryCode": "FRA",
          "flag": "fr"
        },
        {
          "name": "Md Akbar Hossain",
          "countryCode": "BAN",
          "flag": "bd"
        }
      ]
    },
    {
      "match": "19",
      "tee": "10",
      "time": "08:10",
      "players": [
        {
          "name": "Akshay Neranjen",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Taiga Tanaka",
          "countryCode": "JPN",
          "flag": "jp"
        },
        {
          "name": "Vikrant Chopra",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "20",
      "tee": "10",
      "time": "08:20",
      "players": [
        {
          "name": "Bipin Mukhiya",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Irfan Ali Mollah",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Rohan Dhole Patil",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    },
    {
      "match": "21",
      "tee": "10",
      "time": "08:30",
      "players": [
        {
          "name": "Rajesh Kumar Gautam",
          "countryCode": "IND",
          "flag": "in"
        },
        {
          "name": "Matthias Schwab",
          "countryCode": "AUT",
          "flag": "at"
        },
        {
          "name": "Dhruv Suri",
          "countryCode": "IND",
          "flag": "in"
        }
      ]
    }
  ]
};

export interface FieldPlayer {
  seed: number;
  name: string;
  country: string;
  countryCode: string;
  flag: string;
  category: string;
}

export const field: FieldPlayer[] = [{"seed":1,"name":"Yuvraj Sandhu","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit Champions"},{"seed":2,"name":"Veer Ahlawat","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit Champions"},{"seed":3,"name":"Om Prakash Chouhan","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit Champions"},{"seed":4,"name":"Manu Gandas","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit Champions"},{"seed":5,"name":"Shaurya Bhattacharya","country":"India","countryCode":"IND","flag":"in","category":"PGTI Multiple Tournament Winners"},{"seed":6,"name":"Angad Cheema","country":"India","countryCode":"IND","flag":"in","category":"PGTI Multiple Tournament Winners"},{"seed":7,"name":"Honey Baisoya","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":8,"name":"Jhared Hack","country":"United States","countryCode":"USA","flag":"us","category":"PGTI Tournament Winners"},{"seed":9,"name":"Arjun Prasad","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":10,"name":"Jamal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","category":"PGTI Tournament Winners"},{"seed":11,"name":"Kshitij Naveed Kaul","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":12,"name":"Tapendra Ghai","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":13,"name":"Saptak Talwar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":14,"name":"Ajeetesh Sandhu","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":15,"name":"Shankar Das","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":16,"name":"Dhruv Sheoran","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":17,"name":"Abhinav Lohan","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":18,"name":"Daniel Core","country":"Canada","countryCode":"CAN","flag":"ca","category":"Tournament Sponsor"},{"seed":19,"name":"Devin Singh","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":20,"name":"Bikramjit Singh Sandhu","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":21,"name":"Lakshya Nagar","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":22,"name":"Dipankar Kaushal","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":23,"name":"Sunit Chowrasia","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":24,"name":"Aditya Raj Kumar Chauhan","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":25,"name":"Arjun Puri","country":"India","countryCode":"IND","flag":"in","category":"Tournament Sponsor"},{"seed":26,"name":"Christoph Bleier","country":"Austria","countryCode":"AUT","flag":"at","category":"Hotel Planner Tour"},{"seed":27,"name":"Vince Van Veen","country":"Netherlands","countryCode":"NED","flag":"nl","category":"Hotel Planner Tour"},{"seed":28,"name":"Pierre Pineau","country":"France","countryCode":"FRA","flag":"fr","category":"Hotel Planner Tour"},{"seed":29,"name":"Maxence Giboudot","country":"France","countryCode":"FRA","flag":"fr","category":"Hotel Planner Tour"},{"seed":30,"name":"Matthias Schwab","country":"Austria","countryCode":"AUT","flag":"at","category":"Hotel Planner Tour"},{"seed":31,"name":"Bastien Amat","country":"France","countryCode":"FRA","flag":"fr","category":"Hotel Planner Tour"},{"seed":32,"name":"Christofer Rahm","country":"Sweden","countryCode":"SWE","flag":"se","category":"Hotel Planner Tour"},{"seed":33,"name":"Per Langfors","country":"Sweden","countryCode":"SWE","flag":"se","category":"Hotel Planner Tour"},{"seed":34,"name":"Albert Boneta","country":"Spain","countryCode":"ESP","flag":"es","category":"Hotel Planner Tour"},{"seed":35,"name":"Clement Sordet","country":"France","countryCode":"FRA","flag":"fr","category":"Hotel Planner Tour"},{"seed":36,"name":"Joshua Grenville-wood","country":"United Arab Emirates","countryCode":"UAE","flag":"ae","category":"Hotel Planner Tour"},{"seed":37,"name":"Mahir Rakhra","country":"India","countryCode":"IND","flag":"in","category":"Event Qualifiers"},{"seed":38,"name":"Krish Patel","country":"India","countryCode":"IND","flag":"in","category":"Event Qualifiers"},{"seed":39,"name":"Khalin H Joshi","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":40,"name":"Akshay Sharma","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":41,"name":"Amardeep Malik","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":42,"name":"Manoj S","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":43,"name":"Jairaj Singh Sandhu","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":44,"name":"Gaurav Pratap Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":45,"name":"Mohd Azhar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":46,"name":"Anshul Kabthiyal","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":47,"name":"Badal Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","category":"PGTI Order of Merit"},{"seed":48,"name":"Rohan Dhole Patil","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":49,"name":"Rashid Khan","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":50,"name":"Shamim Khan","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":51,"name":"Subash Tamang","country":"Nepal","countryCode":"NEP","flag":"np","category":"PGTI Order of Merit"},{"seed":52,"name":"Viraj Madappa","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":53,"name":"Arjun Sharma","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":54,"name":"Ravi Kumar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":55,"name":"Yuvraj Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":56,"name":"Mari Muthu R","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":57,"name":"Kushal Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":58,"name":"Vishesh Sharma","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":59,"name":"Sanjeev Kumar (l)","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":60,"name":"Stepan Danek","country":"Czech Republic","countryCode":"CZE","flag":"cz","category":"PGTI Order of Merit"},{"seed":61,"name":"Manjot Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":62,"name":"Aryaman Aditya Mohan","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":63,"name":"Divyanshu Bajaj","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":64,"name":"Chandarjeet Yadav","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":65,"name":"Mohammad Sanju","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":66,"name":"Harsh Gangwar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":67,"name":"Md Akbar Hossain","country":"Bangladesh","countryCode":"BAN","flag":"bd","category":"PGTI Order of Merit"},{"seed":68,"name":"Mani Ram","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":69,"name":"Shivendra Singh Sisodia","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":70,"name":"Pranav Mardikar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":71,"name":"Manish Thakran","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":72,"name":"Anant Singh Ahlawat","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":73,"name":"Vasu Sehgal","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":74,"name":"Prakhar Asawa","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":75,"name":"Brashwarpal Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":76,"name":"Joshua Seale","country":"Uganda","countryCode":"UGA","flag":"ug","category":"PGTI Order of Merit"},{"seed":77,"name":"Chikkarangappa S","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":78,"name":"Brijesh Kumar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":79,"name":"Umed Kumar","country":"India","countryCode":"IND","flag":"in","category":"PGTI Order of Merit"},{"seed":80,"name":"Mukesh Kumar","country":"India","countryCode":"IND","flag":"in","category":"Life Time Exemption"},{"seed":81,"name":"Shubham Jaglan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":82,"name":"Ajay Baisoya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":83,"name":"Pritish Singh Karayat","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":84,"name":"Sydney Joseph Wemba","country":"Zambia","countryCode":"ZAM","flag":"zm","category":"Qualifying School"},{"seed":85,"name":"Pankaj Maandiya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":86,"name":"Kartik Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":87,"name":"Jujhar Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":88,"name":"Dilip M","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":89,"name":"Karan Verma","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":90,"name":"Rohit Baisoya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":91,"name":"Marvin Kibirige","country":"Uganda","countryCode":"UGA","flag":"ug","category":"Qualifying School"},{"seed":92,"name":"Rajesh Kumar Gautam","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":93,"name":"Dhruv Suri","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":94,"name":"Dhruv Bopanna","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":95,"name":"Koichiro Ishika","country":"Japan","countryCode":"JPN","flag":"jp","category":"Qualifying School"},{"seed":96,"name":"Taiga Tanaka","country":"Japan","countryCode":"JPN","flag":"jp","category":"Qualifying School"},{"seed":97,"name":"Shaurya Sharma","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":98,"name":"Vikrant Chopra","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":99,"name":"Ram Pal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":100,"name":"Akshay Neranjen","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":101,"name":"Victor Hans","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":102,"name":"Bipin Mukhiya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":103,"name":"Mithil M G","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":104,"name":"Harman Sachdeva","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":105,"name":"Himmat Singh Rai","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":106,"name":"Arjunveer Shishir","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":107,"name":"Mayur P Thakur","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":108,"name":"Pranav Kaul","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":109,"name":"Irfan Ali Mollah","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":110,"name":"Declan Kenny","country":"United States","countryCode":"USA","flag":"us","category":"Qualifying School"},{"seed":111,"name":"Aditya Raj Singh Chahal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":112,"name":"Vinay Kumar Yadav","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":113,"name":"Jaash Parekh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":114,"name":"Aditya Bhandarkar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":115,"name":"Rohit Narwal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":116,"name":"Amrit Lal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":117,"name":"Sukra Bahadur Rai","country":"Nepal","countryCode":"NEP","flag":"np","category":"Qualifying School"},{"seed":118,"name":"Jaiveer","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":119,"name":"Vishav Pratap Singh Gill","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":120,"name":"Md Muaj","country":"Bangladesh","countryCode":"BAN","flag":"bd","category":"Qualifying School"},{"seed":121,"name":"Dominic Piccirillo","country":"United States","countryCode":"USA","flag":"us","category":"Qualifying School"},{"seed":122,"name":"Arindam Sudan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":123,"name":"Divyansh Dubey","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":124,"name":"Anshul Patel","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":125,"name":"Sagar Raghuvanshi","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":126,"name":"Wasim Khan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":127,"name":"Manav Bais","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":128,"name":"Ayaan Gupta","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":129,"name":"Deepak Chouhan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":130,"name":"Siddharth Semwal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":131,"name":"Souvik Nayak","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":132,"name":"Aniket Sawant","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":133,"name":"Rishi Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":134,"name":"Hemant Yadav","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":135,"name":"Pawan Verma","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":136,"name":"Amit Kumar (p)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":137,"name":"Rajesh Kumar (p)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":138,"name":"Yash Chaudhary","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":139,"name":"Joysurjo Dey","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":140,"name":"Sukhraj Singh Gill","country":"Canada","countryCode":"CAN","flag":"ca","category":"Qualifying School"},{"seed":141,"name":"Samarpratap Singh Sandhu","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":142,"name":"Mansukh Sandhu","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":143,"name":"Jay Pandya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":144,"name":"N Thangaraja","country":"Sri Lanka","countryCode":"SRI","flag":"lk","category":"PGTI Multiple Tournament Winners"},{"seed":145,"name":"Karan Pratap Singh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Multiple Tournament Winners"},{"seed":146,"name":"Varun Parikh","country":"India","countryCode":"IND","flag":"in","category":"PGTI Tournament Winners"},{"seed":147,"name":"Tiger Christensen","country":"Germany","countryCode":"GER","flag":"de","category":"Hotel Planner Tour"},{"seed":148,"name":"Daan Huizing","country":"Netherlands","countryCode":"NED","flag":"nl","category":"Hotel Planner Tour"},{"seed":149,"name":"Michele Ortolani","country":"Italy","countryCode":"ITA","flag":"it","category":"PGTI Order of Merit"},{"seed":150,"name":"Mithun Perera","country":"Sri Lanka","countryCode":"SRI","flag":"lk","category":"Medical Exemptions"},{"seed":151,"name":"Yash Majmudar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":152,"name":"Koichiro Sato","country":"United States","countryCode":"USA","flag":"us","category":"Qualifying School"},{"seed":153,"name":"Sawai Hamendra Singh Bhati","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":154,"name":"Aaron Rockey","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":155,"name":"Suraj Joshi","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":156,"name":"Raja B R","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":157,"name":"K Prabagaran","country":"Sri Lanka","countryCode":"SRI","flag":"lk","category":"Qualifying School"},{"seed":158,"name":"Pawan Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":159,"name":"Gurki Shergill","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":160,"name":"Sudipta Das","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":161,"name":"Akram Ali Mollah","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":162,"name":"Ishaan Chawhan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":163,"name":"Mukeem Ali","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":164,"name":"Saurav Rathi","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":165,"name":"Raunil Kukar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":166,"name":"Vipin Raghuvanshi","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":167,"name":"Divesh Rana","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":168,"name":"Manoviraj Shekhawat","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":169,"name":"Sanjay Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":170,"name":"Sumeet Choudhary","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":171,"name":"Baljeet Singh Kahlon","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":172,"name":"Karan Vasudeva","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":173,"name":"Raju Ali Mollah","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":174,"name":"P Rajkumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":175,"name":"Tutul Ali","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":176,"name":"Snlg Varam Raju","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":177,"name":"Imran Ali Mollah","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":178,"name":"Santosh Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":179,"name":"Suresh C","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":180,"name":"Shubham Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":181,"name":"Ayush Kinha","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":182,"name":"Tinku Badliya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":183,"name":"Feroz Ali Mollah","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":184,"name":"Md Nawab","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":185,"name":"Sakshity Purendre (a)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":186,"name":"Sunny Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":187,"name":"Sumit Kotwal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":188,"name":"Ajay","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":189,"name":"Abhishek Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":190,"name":"Sachin Chauhan (n)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":191,"name":"Akshay Damale","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":192,"name":"Kumar R","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":193,"name":"Anant Digvijay Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":194,"name":"Abhishek Kuharr","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":195,"name":"Priyanshu Vats","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":196,"name":"Bishwam Ghosh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":197,"name":"Vikram Rana","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":198,"name":"Anurag Neog","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":199,"name":"Kurush Heerjee","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":200,"name":"Dilroop Singh Kairon","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":201,"name":"Rohit Boken","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":202,"name":"Krishna Verma","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":203,"name":"Prashant Dhumal","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":204,"name":"Deepak S Patole","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":205,"name":"Chetan Baisoya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":206,"name":"Ankit Mohindra","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":207,"name":"Gurbaaz P S Mann","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":208,"name":"Mohd Wazir","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":209,"name":"Pratim Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":210,"name":"Madesh Krishna","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":211,"name":"Nikhil Sharma","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":212,"name":"P Prabhu","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":213,"name":"Brijesh Kumar (l)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":214,"name":"Ashwani Thakur","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":215,"name":"Kps Sekhon","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":216,"name":"Amir Khan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":217,"name":"Varun Sahay","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":218,"name":"C Arul","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":219,"name":"Darshan Singh (a)","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":220,"name":"Sukhvir Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":221,"name":"Jatinder Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":222,"name":"Sameer M Shaikh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":223,"name":"Manoj Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":224,"name":"Kunal Chellani","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":225,"name":"Himanshu Nagar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":226,"name":"Venkkat Gautham","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":227,"name":"Daksh Shokeen","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":228,"name":"Senthil Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":229,"name":"C Illayaraja","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":230,"name":"Adityaa Garg","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":231,"name":"Jai Thakker","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":232,"name":"Sonu Kumar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":233,"name":"Jeeshan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":234,"name":"Sachin Chouhan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":235,"name":"Pintu Haldar","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":236,"name":"Umang Bashista","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":237,"name":"Bhanu Pratap Singh","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":238,"name":"Abhimanyu Dhara","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":239,"name":"Arun Baisoya","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":240,"name":"Brajendra Gupta","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":241,"name":"Shiv Swarup Lumba","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":242,"name":"Chand Babu","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":243,"name":"S John Royan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":244,"name":"S Prasanth","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":245,"name":"Shreyas Yadav","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":246,"name":"Abdul Raheem K H","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":247,"name":"Lokesh Lakshman","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":248,"name":"L Selvadurai","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":249,"name":"S Manjunath","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":250,"name":"Chaksh Bains","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":251,"name":"Rupinder Singh Gill","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":252,"name":"Shiraz Monga","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":253,"name":"Santosha Kp","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":254,"name":"Shankar K","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":255,"name":"Rohan Vats","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":256,"name":"Nitesh Patel","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":257,"name":"Ravi Kanugula","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":258,"name":"Bhanu Prakash","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":259,"name":"Quadeer Khan","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":260,"name":"Mahinder Singh Khati","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":261,"name":"Kumar M","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":262,"name":"Ankit Padhi","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":263,"name":"R Manjunath","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":264,"name":"Upendra Upadhyay","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"},{"seed":265,"name":"Karanbir Singh Lall","country":"India","countryCode":"IND","flag":"in","category":"Qualifying School"}];

export interface ResultRow {
  pos: string;
  player: string;
  countryCode: string;
  flag: string;
  rounds: string;
  total: number;
  toPar: string;
  earnings: string;
}

export const results: ResultRow[] = [
  {
    "pos": "1",
    "player": "Saptak Talwar",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "68 · 71 · 69 · 70",
    "total": 278,
    "toPar": "-10",
    "earnings": "₹43,20,000"
  },
  {
    "pos": "2",
    "player": "Christoph Bleier",
    "countryCode": "AUT",
    "flag": "at",
    "rounds": "69 · 70 · 72 · 69",
    "total": 280,
    "toPar": "-8",
    "earnings": "₹29,70,000"
  },
  {
    "pos": "T3",
    "player": "Kartik Singh",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "68 · 74 · 69 · 70",
    "total": 281,
    "toPar": "-7",
    "earnings": "₹17,55,000"
  },
  {
    "pos": "T3",
    "player": "Veer Ahlawat",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "71 · 72 · 68 · 70",
    "total": 281,
    "toPar": "-7",
    "earnings": "₹17,55,000"
  },
  {
    "pos": "5",
    "player": "Clement Sordet",
    "countryCode": "FRA",
    "flag": "fr",
    "rounds": "69 · 70 · 71 · 72",
    "total": 282,
    "toPar": "-6",
    "earnings": "₹13,50,000"
  },
  {
    "pos": "T6",
    "player": "Dhruv Sheoran",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "69 · 69 · 70 · 75",
    "total": 283,
    "toPar": "-5",
    "earnings": "₹9,00,000"
  },
  {
    "pos": "T6",
    "player": "Jhared Hack",
    "countryCode": "USA",
    "flag": "us",
    "rounds": "67 · 70 · 74 · 72",
    "total": 283,
    "toPar": "-5",
    "earnings": "₹9,00,000"
  },
  {
    "pos": "T6",
    "player": "Subash Tamang",
    "countryCode": "NEP",
    "flag": "np",
    "rounds": "69 · 73 · 70 · 71",
    "total": 283,
    "toPar": "-5",
    "earnings": "₹9,00,000"
  },
  {
    "pos": "T9",
    "player": "Arjun Prasad",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "68 · 73 · 69 · 74",
    "total": 284,
    "toPar": "-4",
    "earnings": "₹5,94,000"
  },
  {
    "pos": "T9",
    "player": "Vishesh Sharma",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "71 · 73 · 68 · 72",
    "total": 284,
    "toPar": "-4",
    "earnings": "₹5,94,000"
  },
  {
    "pos": "T9",
    "player": "Stepan Danek",
    "countryCode": "CZE",
    "flag": "cz",
    "rounds": "70 · 74 · 71 · 69",
    "total": 284,
    "toPar": "-4",
    "earnings": "₹5,94,000"
  },
  {
    "pos": "T12",
    "player": "Manu Gandas",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "73 · 69 · 67 · 76",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T12",
    "player": "Aryaman Aditya Mohan",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "74 · 69 · 67 · 75",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T12",
    "player": "Brijesh Kumar",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "68 · 69 · 76 · 72",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T12",
    "player": "Per Langfors",
    "countryCode": "SWE",
    "flag": "se",
    "rounds": "73 · 68 · 73 · 71",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T12",
    "player": "Christofer Rahm",
    "countryCode": "SWE",
    "flag": "se",
    "rounds": "75 · 70 · 70 · 70",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T12",
    "player": "Amardeep Malik",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "70 · 72 · 75 · 68",
    "total": 285,
    "toPar": "-3",
    "earnings": "₹4,45,500"
  },
  {
    "pos": "T18",
    "player": "Jamal Hossain",
    "countryCode": "BAN",
    "flag": "bd",
    "rounds": "73 · 68 · 71 · 74",
    "total": 286,
    "toPar": "-2",
    "earnings": "₹3,13,875"
  },
  {
    "pos": "T18",
    "player": "Khalin H Joshi",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "71 · 73 · 69 · 73",
    "total": 286,
    "toPar": "-2",
    "earnings": "₹3,13,875"
  },
  {
    "pos": "T18",
    "player": "Yuvraj Sandhu",
    "countryCode": "IND",
    "flag": "in",
    "rounds": "73 · 71 · 69 · 73",
    "total": 286,
    "toPar": "-2",
    "earnings": "₹3,13,875"
  }
];

export interface PrizeEntry {
  pos: string;
  amount: string;
  amountValue: number;
  players: string[];
  toPar?: string;
}

export const prizes: PrizeEntry[] = [
  {
    "pos": "1",
    "amount": "₹43,20,000",
    "amountValue": 4320000,
    "players": [
      "Saptak Talwar"
    ],
    "toPar": "-10"
  },
  {
    "pos": "2",
    "amount": "₹29,70,000",
    "amountValue": 2970000,
    "players": [
      "Christoph Bleier"
    ],
    "toPar": "-8"
  },
  {
    "pos": "3",
    "amount": "₹17,55,000",
    "amountValue": 1755000,
    "players": [
      "Veer Ahlawat",
      "Kartik Singh"
    ],
    "toPar": "-7"
  },
  {
    "pos": "5",
    "amount": "₹13,50,000",
    "amountValue": 1350000,
    "players": [
      "Clement Sordet"
    ],
    "toPar": "-6"
  },
  {
    "pos": "6",
    "amount": "₹9,00,000",
    "amountValue": 900000,
    "players": [
      "Dhruv Sheoran",
      "Subash Tamang",
      "Jhared Hack"
    ],
    "toPar": "-5"
  },
  {
    "pos": "9",
    "amount": "₹5,94,000",
    "amountValue": 594000,
    "players": [
      "Arjun Prasad",
      "Vishesh Sharma",
      "Stepan Danek"
    ],
    "toPar": "-4"
  },
  {
    "pos": "12",
    "amount": "₹4,45,500",
    "amountValue": 445500,
    "players": [
      "Amardeep Malik",
      "Manu Gandas",
      "Brijesh Kumar",
      "Aryaman Aditya Mohan",
      "Per Langfors",
      "Christofer Rahm"
    ],
    "toPar": "-3"
  },
  {
    "pos": "18",
    "amount": "₹3,13,875",
    "amountValue": 313875,
    "players": [
      "Khalin H Joshi",
      "Yuvraj Sandhu",
      "Jamal Hossain",
      "Joshua Grenville-wood"
    ],
    "toPar": "-2"
  },
  {
    "pos": "22",
    "amount": "₹2,61,900",
    "amountValue": 261900,
    "players": [
      "Abhinav Lohan",
      "Honey Baisoya"
    ],
    "toPar": "-1"
  },
  {
    "pos": "24",
    "amount": "₹2,45,700",
    "amountValue": 245700,
    "players": [
      "Shaurya Bhattacharya",
      "Pierre Pineau",
      "Manoj S",
      "Albert Boneta"
    ],
    "toPar": "0"
  },
  {
    "pos": "28",
    "amount": "₹2,29,500",
    "amountValue": 229500,
    "players": [
      "Kshitij Naveed Kaul",
      "Bastien Amat"
    ],
    "toPar": "1"
  },
  {
    "pos": "30",
    "amount": "₹2,16,000",
    "amountValue": 216000,
    "players": [
      "Rashid Khan",
      "Jairaj Singh Sandhu",
      "Manav Bais"
    ],
    "toPar": "2"
  },
  {
    "pos": "33",
    "amount": "₹2,05,200",
    "amountValue": 205200,
    "players": [
      "Gaurav Pratap Singh"
    ],
    "toPar": "3"
  },
  {
    "pos": "34",
    "amount": "₹1,97,100",
    "amountValue": 197100,
    "players": [
      "Arjun Sharma",
      "Anshul Kabthiyal"
    ],
    "toPar": "4"
  },
  {
    "pos": "36",
    "amount": "₹1,80,900",
    "amountValue": 180900,
    "players": [
      "Himmat Singh Rai",
      "Kushal Singh",
      "Yuvraj Singh",
      "Maxence Giboudot"
    ],
    "toPar": "5"
  },
  {
    "pos": "40",
    "amount": "₹1,67,400",
    "amountValue": 167400,
    "players": [
      "Mari Muthu R"
    ],
    "toPar": "6"
  },
  {
    "pos": "41",
    "amount": "₹1,59,300",
    "amountValue": 159300,
    "players": [
      "Divyanshu Bajaj",
      "Md Akbar Hossain"
    ],
    "toPar": "7"
  },
  {
    "pos": "43",
    "amount": "₹1,45,800",
    "amountValue": 145800,
    "players": [
      "Shamim Khan",
      "Chandarjeet Yadav",
      "Manjot Singh"
    ],
    "toPar": "8"
  },
  {
    "pos": "46",
    "amount": "₹1,32,300",
    "amountValue": 132300,
    "players": [
      "Harsh Gangwar",
      "Pritish Singh Karayat"
    ],
    "toPar": "9"
  },
  {
    "pos": "48",
    "amount": "₹1,21,500",
    "amountValue": 121500,
    "players": [
      "Mohammad Sanju",
      "Irfan Ali Mollah"
    ],
    "toPar": "10"
  },
  {
    "pos": "50",
    "amount": "₹1,05,840",
    "amountValue": 105840,
    "players": [
      "Angad Cheema",
      "Chikkarangappa S",
      "Ravi Kumar",
      "Tapendra Ghai",
      "Taiga Tanaka"
    ],
    "toPar": "11"
  },
  {
    "pos": "55",
    "amount": "₹94,500",
    "amountValue": 94500,
    "players": [
      "Om Prakash Chouhan",
      "Akshay Neranjen",
      "Bipin Mukhiya"
    ],
    "toPar": "12"
  },
  {
    "pos": "58",
    "amount": "₹89,100",
    "amountValue": 89100,
    "players": [
      "Rohan Dhole Patil"
    ],
    "toPar": "13"
  },
  {
    "pos": "59",
    "amount": "₹86,400",
    "amountValue": 86400,
    "players": [
      "Matthias Schwab"
    ],
    "toPar": "16"
  },
  {
    "pos": "60",
    "amount": "₹83,700",
    "amountValue": 83700,
    "players": [
      "Vikrant Chopra"
    ],
    "toPar": "17"
  },
  {
    "pos": "61",
    "amount": "₹81,000",
    "amountValue": 81000,
    "players": [
      "Dhruv Suri"
    ],
    "toPar": "18"
  },
  {
    "pos": "62",
    "amount": "₹78,300",
    "amountValue": 78300,
    "players": [
      "Rajesh Kumar Gautam"
    ],
    "toPar": "19"
  },
  {
    "pos": "—",
    "amount": "₹9,000",
    "amountValue": 9000,
    "players": [
      "Shankar Das",
      "Ajeetesh Sandhu"
    ],
    "toPar": ""
  },
  {
    "pos": "—",
    "amount": "₹7,920",
    "amountValue": 7920,
    "players": [
      "Vince Van Veen"
    ],
    "toPar": ""
  }
];

export interface GalleryItem {
  src: string;
  alt: string;
  category: string[];
  tall?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    "src": "/images/gallery/gallery-01.jpg",
    "alt": "Yuvraj Sandhu speaks ahead of his first DP World PGTI start of the season",
    "category": [
      "Press Conference"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-02.jpg",
    "alt": "Matthias Schwab leads the strong foreign contingent at Kalhaar Blues & Greens",
    "category": [
      "Press Conference"
    ],
    "tall": true
  },
  {
    "src": "/images/gallery/gallery-03.jpg",
    "alt": "PGTI CEO Amandeep Johl thanks Indorama Ventures for their continued support",
    "category": [
      "Press Conference"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-04.jpg",
    "alt": "Stuart Kelly of Indorama Ventures addresses the media in Ahmedabad",
    "category": [
      "Press Conference"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-05.jpg",
    "alt": "Veer Ahlawat, Matthias Schwab, Yuvraj Sandhu and PGTI officials at the press conference",
    "category": [
      "Press Conference"
    ],
    "tall": true
  },
  {
    "src": "/images/gallery/gallery-06.jpg",
    "alt": "Jhared Hack was placed second on Day 1 after carding a 67",
    "category": [
      "Round 1"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-07.jpg",
    "alt": "Rashid Khan shot a six-under 66 to take the first-round lead",
    "category": [
      "Round 1"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-08.jpg",
    "alt": "Jhared Hack returned a 70 in Round 2 to climb into the joint lead",
    "category": [
      "Round 2"
    ],
    "tall": true
  },
  {
    "src": "/images/gallery/gallery-09.jpg",
    "alt": "Brijesh Kumar carded a 69 in Round 2 to grab a share of the lead",
    "category": [
      "Round 2"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-10.jpg",
    "alt": "Manu Gandas fired the third day's lowest score of 67 to move into third place",
    "category": [
      "Round 3"
    ],
    "tall": false
  },
  {
    "src": "/images/gallery/gallery-11.jpg",
    "alt": "The media turned out in large numbers for the press conference in Ahmedabad",
    "category": [
      "Press Conference"
    ],
    "tall": true
  },
  {
    "src": "/images/gallery/gallery-12.jpg",
    "alt": "Veer Ahlawat spoke about the high level of competition at the event",
    "category": [
      "Press Conference"
    ],
    "tall": false
  }
];

export interface NewsItem {
  date: string;
  location: string;
  title: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    "date": "15 Mar 2026",
    "location": "Ahmedabad",
    "title": "Saptak Talwar secures victory at Indorama Ventures Open 2026 courtesy his solid final round of 70; moves into lead in DP World PGTI Order of Merit",
    "image": "/images/news/news-1.jpg"
  },
  {
    "date": "14 Mar 2026",
    "location": "Ahmedabad",
    "title": "Saptak Talwar and Dhruv Sheoran share the top spot after round three of Indorama Ventures Open 2026",
    "image": "/images/news/news-2.jpg"
  },
  {
    "date": "13 Mar 2026",
    "location": "Ahmedabad",
    "title": "Brijesh Kumar and Jhared Hack hold joint lead on day two of Indorama Ventures Open 2026",
    "image": "/images/news/news-3.jpg"
  },
  {
    "date": "12 Mar 2026",
    "location": "Ahmedabad",
    "title": "Rashid Khan shoots six-under 66 for opening round lead at Indorama Ventures Open Golf Championship 2026",
    "image": "/images/news/news-4.jpg"
  },
  {
    "date": "10 Mar 2026",
    "location": "Ahmedabad",
    "title": "Indorama Ventures Open Golf Championship returns for second edition",
    "image": "/images/news/news-5.jpg"
  }
];

export interface CourseCard {
  frontPar: number;
  backPar: number;
  par: number[];
  yards: number[];
  si: number[];
  totalYards: number;
  totalPar: number;
}

export const courseCard: CourseCard = {
  "frontPar": 36,
  "backPar": 36,
  "par": [
    4,
    3,
    4,
    4,
    5,
    4,
    3,
    5,
    4,
    4,
    3,
    5,
    4,
    5,
    4,
    3,
    4,
    4
  ],
  "yards": [
    423,
    218,
    435,
    412,
    544,
    525,
    174,
    592,
    441,
    437,
    155,
    527,
    399,
    619,
    451,
    203,
    449,
    421
  ],
  "si": [
    7,
    17,
    5,
    9,
    15,
    1,
    11,
    13,
    3,
    6,
    18,
    16,
    10,
    12,
    2,
    8,
    14,
    4
  ],
  "totalYards": 7425,
  "totalPar": 72
};

export const champion = {
  "name": "Saptak Talwar",
  "country": "India",
  "countryCode": "IND",
  "flag": "in",
  "photo": "/images/champion.jpg",
  "score": "-10",
  "total": 278,
  "rounds": [
    68,
    71,
    69,
    70
  ],
  "earnings": "₹43,20,000"
};

export const countryStats = [
  {
    "country": "India",
    "count": 230,
    "flag": "in"
  },
  {
    "country": "United States",
    "count": 4,
    "flag": "us"
  },
  {
    "country": "Bangladesh",
    "count": 4,
    "flag": "bd"
  },
  {
    "country": "France",
    "count": 4,
    "flag": "fr"
  },
  {
    "country": "Sri Lanka",
    "count": 3,
    "flag": "lk"
  },
  {
    "country": "Canada",
    "count": 2,
    "flag": "ca"
  },
  {
    "country": "Austria",
    "count": 2,
    "flag": "at"
  },
  {
    "country": "Netherlands",
    "count": 2,
    "flag": "nl"
  },
  {
    "country": "Sweden",
    "count": 2,
    "flag": "se"
  },
  {
    "country": "Nepal",
    "count": 2,
    "flag": "np"
  },
  {
    "country": "Uganda",
    "count": 2,
    "flag": "ug"
  },
  {
    "country": "Japan",
    "count": 2,
    "flag": "jp"
  },
  {
    "country": "Spain",
    "count": 1,
    "flag": "es"
  },
  {
    "country": "United Arab Emirates",
    "count": 1,
    "flag": "ae"
  },
  {
    "country": "Czech Republic",
    "count": 1,
    "flag": "cz"
  },
  {
    "country": "Zambia",
    "count": 1,
    "flag": "zm"
  },
  {
    "country": "Germany",
    "count": 1,
    "flag": "de"
  },
  {
    "country": "Italy",
    "count": 1,
    "flag": "it"
  }
];

export const facts = {
  "winner": "Saptak Talwar",
  "winningScore": "-10",
  "winningTotal": 278,
  "playersPlayed": 143,
  "entries": 265,
  "madeCut": 62,
  "cutLine": "+4",
  "topPrize": "₹43,20,000"
};

export interface VenueInfo {
  name: string;
  location: string;
  description: string[];
  stats: { label: string; value: string }[];
}

export const venue: VenueInfo = {
  "name": "Kalhaar Blues & Greens Golf Club",
  "location": "Ahmedabad, Gujarat, India",
  "description": [
    "Set on the quiet outskirts of Ahmedabad, Kalhaar Blues & Greens is one of India's most distinctive championship layouts — a course where water shadows the majority of the holes and the evening wind turns pars into small victories.",
    "The championship card reads 7,425 yards from the back tees at par 72, with the 619-yard 15th the longest examination and the 174-yard 7th its shortest — and sharpest — test. The closing stretch, played alongside the lake system that gives the club its name, decided the 2026 championship in Saptak Talwar's favour."
  ],
  "stats": [
    {
      "label": "Par",
      "value": "72"
    },
    {
      "label": "Yardage",
      "value": "7,425 yds"
    },
    {
      "label": "Holes",
      "value": "18"
    },
    {
      "label": "Out / In",
      "value": "36 · 36"
    },
    {
      "label": "Longest hole",
      "value": "619 yds · H15"
    },
    {
      "label": "Shortest hole",
      "value": "174 yds · H7"
    },
    {
      "label": "Stroke Index 1",
      "value": "Hole 6"
    }
  ]
};

export interface PartnerLogo {
  src: string;
  alt: string;
  compact?: boolean;
  /** "tour" = tour partner · "partner" = partner only, as published on
   *  pgtofindia.com/tour-partners. */
  tier?: "tour" | "partner";
  /** Official partner category. */
  category?: string;
  /** Official website. */
  url?: string;
  /** One-paragraph profile from the tour's partner description. */
  blurb?: string;
  /** Longer feature copy (title partner only). */
  profile?: string[];
}

// Order and categorization follow the official tour page
// (pgtofindia.com/tour-partners): seven tour partners, then the two
// partners of the championship (media) only.
export const partners: PartnerLogo[] = [
  {
    src: "/images/partners/partner-05.png", alt: "DP World", compact: true, tier: "tour",
    category: "Tour Partner", url: "https://www.dpworld.com/en",
    blurb: "Reshaping the future of global trade to improve lives everywhere — operating across six continents with over 125,000 employees, combining global infrastructure and local expertise to deliver seamless supply chain solutions.",
    profile: [
      "DP World is reshaping the future of global trade to improve lives everywhere. Operating across six continents with a team of over 125,000 employees, we combine global infrastructure and local expertise to deliver seamless supply chain solutions. From Ports and Terminals to Marine Services, Logistics and Technology, we leverage innovation to create better ways to trade, minimizing disruptions from the factory floor to the customer's door.",
      "Our global sports partnerships in Golf, Cricket, Formula 1 and Sailing showcase our leadership in supply chain transformation. From delivering SailGP to supporting the ICC T20 Cricket World Cup and The Ryder Cup, DP World simplifies logistics, drives performance and changes what's possible.",
    ],
  },
  {
    src: "/images/partners/partner-04.webp", alt: "Amul", compact: true, tier: "tour",
    category: "Tour Partner", url: "https://amul.com/index.php",
    blurb: "India's largest food brand and the eighth-largest dairy company globally — the household name that helped India emerge as the world's largest milk producer, playing a pivotal role in enhancing the tour's brand presence nationwide.",
  },
  {
    src: "/images/partners/partner-03.png", alt: "Axis Bank", compact: true, tier: "tour",
    category: "Tour Partner", url: "https://www.axis.bank.in/",
    blurb: "One of the largest private sector banks in India, offering the entire spectrum of financial services to large and mid-corporates, SMEs, agriculture and retail businesses across more than 6,100 domestic branches.",
  },
  {
    src: "/images/partners/partner-02.webp", alt: "HCL", compact: true, tier: "tour",
    category: "Tour Partner", url: "https://hcl.com/",
    blurb: "Founded in 1976 as one of India's original IT garage start-ups and a pioneer of modern computing — today a presence across technology, healthcare and talent management solutions generating annual revenues of over US$14.8 billion.",
  },
  {
    src: "/images/partners/partner-01.png", alt: "Enerlyte", compact: true, tier: "tour",
    category: "Hydration Partner", url: "https://www.amrutanjan.com/food-beverage.html",
    blurb: "A hydration and wellness brand from Amrutanjan Healthcare, a trusted Indian company with a legacy spanning over 130 years — keeping golfers refreshed, focused and ready to perform at their best on and off the course.",
  },
  {
    src: "/images/partners/partner-09.jpg", alt: "Air India Maharaja Club", tier: "tour",
    category: "Tour Partner", url: "https://www.airindia.com/in/en/maharaja-club.html",
    blurb: "Spearheading a new era of Indian aviation — a story that began in 1932 when JRD Tata piloted the airline's inaugural flight. Today the group operates over 300 aircraft across five continents, committed to being a world-class global airline with an Indian heart.",
  },
  {
    src: "/images/partners/partner-08.png", alt: "Kalyani", tier: "tour",
    category: "Tour Partner", url: "https://www.bharatforge.com/",
    blurb: "Bharat Forge, part of the USD 3.5 billion Kalyani Group, is a global leader in high-performance components across sectors such as automotive, railways, defence, aerospace, marine and oil & gas.",
  },
  {
    src: "/images/partners/partner-07.png", alt: "GolfPlus Monthly", compact: true, tier: "partner",
    category: "Media Partner", url: "https://www.golfplusmonthly.com/",
    blurb: "India's dedicated golf monthly — the game's stories, in print and online.",
  },
  {
    src: "/images/partners/partner-06.png", alt: "Golf Design India", tier: "partner",
    category: "Media Partner", url: "https://golfdesignindia.com/",
    blurb: "The definitive voice of golf course design and development in India.",
  },
];

export const headerPartners: PartnerLogo[] = [
  { src: "/images/partners/partner-04.webp", alt: "Amul", compact: true },
  { src: "/images/partners/partner-02.webp", alt: "HCL", compact: true },
  { src: "/images/partners/partner-01.png", alt: "Enerlyte", compact: true },
];

// The 7 sponsor marks used in the header ticker (clear at small size, original aspect preserved)
export const tickerPartners: PartnerLogo[] = [
  { src: "/images/partners/partner-02.webp", alt: "HCL", compact: true },
  { src: "/images/partners/partner-03.png", alt: "Axis Bank", compact: true },
  { src: "/images/partners/partner-04.webp", alt: "Amul", compact: true },
  { src: "/images/partners/partner-06.png", alt: "Golf Design India" },
  { src: "/images/partners/partner-07.png", alt: "GolfPlus Monthly", compact: true },
  { src: "/images/partners/partner-08.png", alt: "Kalyani" },
  { src: "/images/partners/partner-09.jpg", alt: "Air India Maharaja Club" },
];
