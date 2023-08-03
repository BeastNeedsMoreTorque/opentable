import { useState } from 'react';

type PartyData = {
    party_name: string;
  votes_pct: number;
  seats_pct: number;
};

const GallagherIndexCalculator = () => {
  const [partyData, setPartyData] = useState<PartyData[]>([]);

  const handleInputChange = (index: number, field: keyof PartyData, value: string | number) => {
    const newPartyData = [...partyData];
    newPartyData[index][field] = value as any;
    setPartyData(newPartyData);
  };

  const calculateGallagherIndex = () => {
    let sum = 0;
    for (const party of partyData) {
      sum += Math.pow(party.votes_pct - party.seats_pct, 2);
    }
    return Math.sqrt(sum / 2);
  };

  return (
    <div className='bg-grey-200'>
      {partyData.map((party, index) => (
        <div key={index}>
            <input
                type='text'
                value={party.party_name}
                onChange={(e) => handleInputChange(index, 'party_name', e.target.value)}
            />
          <input
            type="number"
            value={party.votes_pct}
            onChange={(e) => handleInputChange(index, 'votes_pct', Number(e.target.value))}
          />
          <input
            type="number"
            value={party.seats_pct}
            onChange={(e) => handleInputChange(index, 'seats_pct', Number(e.target.value))}
          />
        </div>
      ))}
      <div className='mb-6'>
      <button className='bg-orange-700 px-4 text-white rounded p-3' onClick={() => setPartyData([...partyData, { votes_pct: 0, seats_pct: 0 }])}>
        Add Party
      </button>
      </div>
      <div className='mb-6'>
      <button className='bg-green-400 px-4 text-white rounded p-2' onClick={() => console.log(calculateGallagherIndex())}>
        Calculate Gallagher Index
      </button>
      </div>
    </div>
  );
};

export default GallagherIndexCalculator;
