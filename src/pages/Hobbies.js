const DUMMY_DATA = [
  {
    title: "I am interested in software development. I like to code some minigames during my free time.",
  },
  {
    title: "I play League of Legends during my spare time with friends. The game allowed me to have fun with my friends during quarantine, and it teaches me how to work with my teammates. My teamwork skills has strengthened, and I am capable of working with new people.",
  },
  {
    title: "I like to play badminton, ping pong, and basketball. I also jump rope and swim. These sports activities help me relax after a long day of work.",
  },
];

function HobbiesPage() {
  return (
    <section>
      <h1>Hobbies</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default HobbiesPage;
