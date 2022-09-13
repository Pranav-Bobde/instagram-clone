import { useEffect, useState } from "react";
// import faker from "faker";
import Story from "../components/Story" 
import { faker } from '@faker-js/faker'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
  useEffect(() => {
    const s = []
    for(let i=0; i<20; i++){
        s.push(createRandomUser())
    }
    setSuggestions(s)
    
    console.log(suggestions)
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
