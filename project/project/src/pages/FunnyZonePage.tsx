import React from 'react';
import { Share, Heart, MessageCircle, ExternalLink } from 'lucide-react';

interface MemeContract {
  id: string;
  title: string;
  description: string;
  content: string;
  likes: number;
  comments: number;
}

const FunnyZonePage = () => {
  const memeContracts: MemeContract[] = [
    {
      id: '1',
      title: 'Netflix Password Sharing Treaty',
      description: 'The ultimate agreement for password sharing etiquette',
      content: `NETFLIX PASSWORD SHARING TREATY

WHEREAS, Party A (the Account Holder) has graciously agreed to share their Netflix password with Party B (the Moocher);

NOW THEREFORE, the parties agree:

1. Party B shall NOT change the password under any circumstances
2. Party B shall NOT create more than 2 user profiles  
3. Party B shall NOT judge Party A's viewing history (yes, they watched all of Emily in Paris)
4. Party B agrees to occasionally ask "Are you still watching?" in real life as a courtesy
5. If Party A's account gets suspended due to too many devices, Party B owes them Starbucks for a week

Violation of this treaty results in immediate banishment from all streaming services.

Signed with popcorn-stained fingers,
The Streaming Squad`,
      likes: 1247,
      comments: 89,
    },
    {
      id: '2',
      title: 'TikTok Breakup Clause',
      description: 'Modern relationship exit strategy',
      content: `TIKTOK BREAKUP CLAUSE

In the unfortunate event of relationship termination, both parties agree to:

1. NO posting thirst traps for 30 days minimum
2. NO using shared inside jokes in captions
3. Mutual blocking on all For You pages (if technically possible)
4. Return of all ring lights and selfie equipment within 48 hours
5. Joint custody of couple TikTok account (@CuteCouple2024) with alternating posting privileges

PENALTY CLAUSE: Violation results in being tagged in embarrassing throwback videos

This agreement is binding in the court of public opinion and the comment section.

Witnessed by: Our mutual bestie who saw this coming`,
      likes: 2156,
      comments: 234,
    },
    {
      id: '3',
      title: 'Roommate Cleaning Agreement',
      description: 'Because passive-aggressive notes aren\'t legally binding',
      content: `ROOMMATE CLEANING AGREEMENT

The Great Dish Accord of 2025

ARTICLE I: Kitchen Law
- Dishes left in sink for >24 hours will be relocated to offender's bed
- "I'll do it later" translates to "I'll do it when you get so annoyed you do it yourself"
- Rotation of cleaning duties follows the ancient law of "Rock, Paper, Scissors"

ARTICLE II: Bathroom Treaty  
- Hair in the drain is considered biological warfare
- Toilet paper replacement is mandatory, not optional
- Mirror selfies must be followed by mirror cleaning

ARTICLE III: Living Room Legislation
- Couch fort construction requires 24-hour advance notice
- Netflix binge sessions grant territorial rights for snack placement
- Vacuum lines in carpet must be preserved for aesthetic purposes

Violation results in having to clean while listening to Baby Shark on repeat.

Signed in Lysol and desperation,
The Roommates Who've Seen Too Much`,
      likes: 892,
      comments: 156,
    },
  ];

  const handleShare = (contract: MemeContract) => {
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(contract.title)}`;
    window.open(redditUrl, '_blank');
  };

  const handleLike = (contractId: string) => {
    console.log('Liked contract:', contractId);
    // In real app, this would update the likes count
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Funny Legal Zone</h1>
        <p className="text-gray-600">Where legal meets LOL - Meme contracts that are hilariously binding</p>
      </div>

      <div className="space-y-8">
        {memeContracts.map((contract) => (
          <div key={contract.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{contract.title}</h2>
                  <p className="text-gray-600 text-sm">{contract.description}</p>
                </div>
                <button
                  onClick={() => handleShare(contract)}
                  className="flex items-center space-x-2 px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200"
                >
                  <Share className="h-4 w-4" />
                  <span>Share to Reddit</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                  {contract.content}
                </pre>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(contract.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <Heart className="h-5 w-5" />
                    <span>{contract.likes.toLocaleString()}</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MessageCircle className="h-5 w-5" />
                    <span>{contract.comments}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  Generated by AI Legal Buddy
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Got an idea for a meme contract?</h3>
          <p className="text-gray-600 mb-4">
            Use our AI assistant to generate your own hilarious legally-themed content!
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Create Meme Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunnyZonePage;