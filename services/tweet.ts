import { TweetCreateInput } from '@prisma/client';

export const createTweet = async (tweet: TweetCreateInput) => {
  const httpResponse = await fetch('api/tweets', {
    method: 'POST',
    body: JSON.stringify(tweet),
  });

  const response = await httpResponse.json();
  return response;
};

export const fetchAllTweets = () => { };
