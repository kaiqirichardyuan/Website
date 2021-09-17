const DUMMY_DATA = [
  {
    title: "Hello, my name is Kai Qi (Richard) Yuan, and I am a second year student studying Business Administration and Computer Science at Wilfrid Laurier University and University of Waterloo.",
  },
  {
    title: "I am currently looking for an internship for Winter 2022. Have a passion for software development.",
  },
  {
    title: "Thank you for visiting my website.",
  },
];

function IntroductionPage() {
  return (
    <section>
      <h1>Introduction</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default IntroductionPage;
