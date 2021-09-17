const DUMMY_DATA = [
  {
    title:
      "All the code I wrote can be found on my github page.",
  },
  {
    title:
      "I learned Java outside of school when I was in high school. I solved some CCC questions from Waterloo in Java.",
  },
  {
    title: "Created minigames in Java and C without user interface.",
  },
  {
    title:
      "Created a few minigames in Python with user interface. Used pygame and arcade to complete the games.",
  },
  {
    title:
      "Learned how to make a website using React. Familiar with HTML, CSS, and Javascript.",
  },
  {
    title: "Currently learning SQL, Excel, Linux, C++, and Spring boot",
  },
  {
    title: "Developed good communication skills through the Business Administration program. I am capable of working with many different people in a productive manner. It also improved my public speaking skills, I am able to present my ideas to a large crowd.",
  },
];

function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default ExperiencePage;
