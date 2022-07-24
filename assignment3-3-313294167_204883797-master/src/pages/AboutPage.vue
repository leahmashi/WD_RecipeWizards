<template>
  <div id="aboutPage">
    <div class="container">
      <br><br><br><br>
      <h1 class="title">Recipe Wizard</h1>
      <h3> Ever wanted a magical place to keep your recipes? </h3> 
      <p>
        RecipeWizard allows you to save your favorite recipes &#11088; and <br>
        share your family 👨‍👩‍👧‍👦 and personal 🧙‍♂️ recipes with other users. 
      </p>
      <br>
      <h3> Who are we? </h3>
      <p>
        We came from a far away land to bring you the magical world of recipe wizard. <br>
        As a witch and wizard we love to cook up all kinds of spells and enchantments. <br>
        In our muggle lives we are Software and Information Systems Engineering students, <br>
        who make different websites and games as part of our web development class. <br>
      </p>
      <br>
      <h4> Here's a little taste of our previous projects: </h4>
      <p>
        &#x2728; Covid-19 hit pretty hard forcing people for social distancing, therefore <br>
        our first project was to create a website for someone we care about. <br>
        A link to the website: <a href="https://web-development-environments-2022.github.io/assignment1-204883797"> assignment1 </a> 
        <br><br>
        &#x2728; A Pacman game with special features such as: <br>
        - a moving character &#128007; that give you extra points <br>
        - a clock &#128337; that gives you extra time <br>
        - a snail &#128012; that makes the ghosts move slower <br>
        A link to the website: <a href="https://web-development-environments-2022.github.io/assignment2-204883797_313294167/"> assignment2 </a> <br>
      <p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  align-items: center;
  align-content: center;
  min-height: 92vh;
  display: flex;
	flex-direction: column;
}

p {
  text-align: left;
}

#aboutPage {
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("../assets/background.jpg");
	background-color: seagreen;
	background-size: cover;
  font-weight: 770;
  margin-top: 0;
  min-height: 92vh;
  display: flex;
	flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>