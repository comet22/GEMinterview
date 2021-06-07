# GEMinterview

Problem: Design a quiz-taking system as a full-stack web application.  The quiz must be able to handle at least one question.  The questions must be multiple choice and can only have one correct answer each.  The users results should be shown at the end of the quiz.

Solution: The solution chosen stores questions in a database using a single table.  This table is loaded into a php file, which is then converted into a javascript array.  All questions have four possible answers and one correct answer.  The quiz starts with a screen describing the goal of the quiz.  Once the quiz has been started, the javascript controls which questions are shown, and determines how many points the user receives.

Design Choices and Trade-offs:  There were several important design choices that influenced the construction of this site.  Most importantly, the site does not use any libraries or web frameworks.  This was not a deliberate design choice, the inclusion of a library or web framework simply would have taken too long for the scope of this project.  If there was more time, the react library probably would have been used to make the html code cleaner.  In addition, react could have been used to make the amount of questions more flexible, since right now there has to be four answers for each question.  Because of this, only one table was used in the database.  If react was implemented, there would likely be two tables, one for questions and one for answers, but this was not necessary because the flexability of being able to have as many answers as necessary in the database would not have helped since more than four answers could not be used user side.  Next, the ids of the buttons in the main php file are 0, 1, 2, and 3.  This allows us to check which answer is correct very quickly.  In a larger application this probably would not have been done, since these ids are very vague.  However, in this small scale application, it was decided that removing a for loop was worth it.  Finally, questions are stored in a database with underscores instead of spaces.  This is necessary because the response string is split using the spaces in the response, so the spaces in the questions would have ruined this approach.  It might be smart to find a more elegant solution in the long run.  Some features that might be included if there were more time would include some styling to make the site work well on phones, the possiblity to choose between multiple different types of quizzes, and more styling to make the page look nicer in general.  A password for the database would also be important in an actual project.

Getting a copy to run locally: I used xampp to run the site locally.  If you choose this approach to run a copy of this site locally, you will need to download xampp.  Then find the xampp folder in your computer, open it, and open the folder called htdocs.  Download the files into a folder, let us call it GEMinterview for the purposes of this explaination, in the htdocs folder.  The open the xampp control panel.  Start mysql and click admin.  Create a user and a database.  If you don't want to change code at all, call the user 22ruiz, the database 22ruiz, and do not add a password.  Otherwise change those respective values in getquestions.php (hostname first, then user, then password, and finally database name).  Create a table called questions with columns named question varchar(255), answer0 varchar(255), answer1 varchar(255), answer2 varchar(255), answer3 varchar(255), and correct int.  When inputting values into the database, make sure that any spaces in the questions submitted are replaced by underscores.  Answers should not include spaces either.  The correct int should refer to which answer is correct (0, 1, 2, or 3).  

Test Database:
create table questions (
    id serial primary key,
    question varchar(255),
    answer0 varchar(255),
    answer1 varchar(255),
    answer2 varchar(255),
    answer3 varchar(255),
    correct int
);

insert into questions (question, answer0, answer1, answer2, answer3, correct) values ("Which_type_is_weak_to_fire?", "fire", "water", "grass", "fairy", 2), ("Which_of_these_is_NOT_a_Pokemon?", "Draconaught", "Froakie", "Mawhile", "Glalie", 0), ("What_legendary_is_on_the_box_art_for_Pokemon_Diamond?", "Dialga", "Palkia", "Giratina", "Arceus", 0), ("How_many_regions_are_there?", "5", "6", "7", "8", 3);

Link: 64.227.14.7