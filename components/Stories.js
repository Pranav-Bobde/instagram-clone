import { useEffect, useState } from "react";
// import faker from "faker";
import Story from "../components/Story" 
import { faker } from '@faker-js/faker'
import { useSession } from "next-auth/react";

export function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    company: {
      name: faker.company.name()
    }
  };
}

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession()

  useEffect(() => {
    const s = []
    for(let i=0; i<20; i++){
        s.push(createRandomUser())
    }
    setSuggestions(s)
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {
        session && (<Story img={session.user.image} username={session.user.username}/>)
      }
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
