export interface PageviewPayload {
  // An identifier of a web visitor (not necessarily with Blinkist account). Stored in a cookie
  fingerprint: string;

  // An identifier of a Blinkist account. Stored in our production database
  user_id: string | null;

  // What page a web visitor was on
  url: string;

  // A URL of the previous page
  referrer_url: string | null;

  // A pageview timestamp
  created_at: string;
}

export interface SignupEventPayload {
  // Event name
  name: string;

  // An identifier of a web visitor (not necessarily with Blinkist account). Stored in a cookie
  fingerprint: string;

  // An identifier of a Blinkist account. Stored in our production database
  user_id: string;

  // An event timestamp
  created_at: string;
}
