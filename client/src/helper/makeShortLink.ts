import axios from "axios";

export const makeShortLink = async (longUrl: string) => {
  const { data } = await axios(
    "https://api.shrtco.de/v2/shorten?url=" + longUrl
  );

  return data.result.full_short_link;
};
