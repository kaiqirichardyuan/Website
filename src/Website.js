import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import me from "./images/photos_1.png";
import badminton from "./images/badminton.jpg";

import IntroductionPage from "./pages/Introduction";
import HobbiesPage from "./pages/Hobbies";
import ExperiencePage from "./pages/Experience";
import MainNavigation from "./components/layout/MainNagivation";

function Website() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <IntroductionPage />
          <div class="container">
            <img src={me} alt="this is me" class="image" />
            <div class="overlay">
              <div class="text">Hello World!</div>
            </div>
          </div>
        </Route>
        <Route path="/new-meetup">
          <ExperiencePage />
          <h1>Learning about buttons in React</h1>
          <Todo text="Button Test" />
          <Todo text="Learn Button" />
        </Route>
        <Route path="/favorites">
          <HobbiesPage />
          <div class="container">
            <img src={badminton} alt="badminton" class="image" />
            <div class="overlay">
              <div class="text">Playing Badminton</div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Website;
