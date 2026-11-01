/* A first, complete beginner course for every topic in the catalog.
   Each lesson has a plain-language explanation, a runnable or readable example,
   and a small task. Nothing depends on an account or paid service. */
window.OPENLEARN_CURRICULUM = {
  'Python': [
    ['Say hello','Python is a popular language for small scripts, websites, data, and much more. The print function shows a result. Text goes inside quotes.','print("Hello, world!")','Change the message and run it again.'],
    ['Save a value','A variable gives a value a name. Use it again whenever you need it. Python works out the value type for you.','name = "Sam"\nprint("Hi, " + name)','Make a variable for a place you would like to visit, then print a sentence with it.'],
    ['Make a choice','An if statement runs code only when a condition is true. Indentation marks which lines belong together.','temperature = 18\nif temperature > 20:\n    print("Warm day")\nelse:\n    print("Bring a layer")','Change the temperature and see which message appears. Add an elif for a cold day.'],
    ['Repeat a task','A for loop runs its indented code once for each item. A list stores several values in order.','colors = ["blue", "gold", "plum"]\nfor color in colors:\n    print(color)','Add one more color. Then print each color in a sentence.'],
    ['Make a tiny quiz','Functions package steps under a name. Call the function when you want those steps to run. This mini project combines input, a function, and a choice.','def greet(person):\n    return "Welcome, " + person\n\nname = input("Your name: ")\nprint(greet(name))','Build a two-question quiz. Store an answer, compare it with the right answer, and print a kind response either way.']
  ],
  'Java': [
    ['Your first class','Java programs are organized into classes. The main method is where a simple program begins.','class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello!");\n  }\n}','Change the text inside the quotes. Keep the punctuation around it.'],
    ['Give data a type','Java asks you to name the kind of value a variable will hold. String is text, int is a whole number, and boolean is true or false.','String name = "Mina";\nint lessons = 3;\nSystem.out.println(name + " has " + lessons);','Add a boolean called ready and print it.'],
    ['Choose what happens','An if and else lets your program make a decision. Use == to compare two primitive values.','int score = 82;\nif (score >= 60) {\n  System.out.println("You passed");\n} else {\n  System.out.println("Try again");\n}','Try three different scores. Add a message for a score above 90.'],
    ['Loop through numbers','A for loop repeats a block. The counter starts at 1, continues while the condition is true, and changes after each turn.','for (int day = 1; day <= 5; day++) {\n  System.out.println("Day " + day);\n}','Count down from five to one. What should the loop condition say?'],
    ['Make a useful method','Methods give a reusable action a name. Parameters are its inputs, and a return value is its result.','static int doubleIt(int number) {\n  return number * 2;\n}\n// call: doubleIt(4)','Write a method that converts minutes to seconds. Then call it with 3.']
  ],
  'C': [
    ['A small C program','C programs begin execution in main. Include a library to use its functions. printf writes formatted text.',' #include <stdio.h>\nint main(void) {\n  printf("Hello!\\n");\n  return 0;\n}','Change the message. Keep the backslash-n so the next prompt starts on a new line.'],
    ['Values and types','C variables have a type. int stores whole numbers, double stores decimal numbers, and char stores one character.','int lives = 3;\ndouble price = 4.50;\nchar grade = \'A\';\nprintf("%d %.2f %c", lives, price, grade);','Add an int for your age. Which format marker prints an int?'],
    ['Read a decision','if and else choose a path. Use == to compare values. A single = assigns a value instead.','int age = 16;\nif (age >= 18) {\n  puts("Adult");\n} else {\n  puts("Not yet");\n}','Change the age and add a third message for people under 13.'],
    ['Repeat with a loop','A for loop has a start, a condition, and an update. Each part helps control how many times it repeats.','for (int i = 1; i <= 5; i++) {\n  printf("%d\\n", i);\n}','Print the even numbers from 2 through 10.'],
    ['Use a function','Functions let you name a job and reuse it. Put a declaration before main or define the function above main.','int square(int n) {\n  return n * n;\n}\n// square(4) gives 16','Write a function that adds two integers. Call it and print its result.']
  ],
  'C++': [
    ['Print a message','C++ can use streams to send output to the terminal. The insertion operator << sends each piece in order. C+ is sometimes written informally, but C++ is the standard name.',' #include <iostream>\nint main() {\n  std::cout << "Hello!\\n";\n}','Add a second output line with your own message.'],
    ['Store and name values','Use auto when the value makes its type clear, or write the type directly. A string holds text.','#include <string>\nstd::string name = "Lee";\nint steps = 4;\nstd::cout << name << ": " << steps;','Make a variable for a book title and print it with the number of pages.'],
    ['Make a decision','An if statement checks a condition. Curly braces group the statements for each outcome.','int points = 7;\nif (points >= 10) {\n  std::cout << "Level up";\n} else {\n  std::cout << "Keep going";\n}','Add a third outcome for exactly 10 points.'],
    ['Keep a list','A vector is a growable list. A range-based for loop visits each item without managing an index.','#include <vector>\nstd::vector<int> scores{3, 5, 8};\nfor (int score : scores) {\n  std::cout << score << "\\n";\n}','Add a score and calculate the total in a second loop.'],
    ['Create a small function','A function can accept inputs and return a result. Give its return type and parameter types.','int add(int a, int b) {\n  return a + b;\n}\n// add(2, 3) gives 5','Write a function that returns the larger of two numbers.']
  ],
  'C#': [
    ['Write to the console','Console.WriteLine displays a line. In a C# app, statements go inside a method or a top-level program.','Console.WriteLine("Hello, world!");','Change the message and add another line below it.'],
    ['Name a value','A variable stores a value under a name. C# can infer the type with var, or you can write it explicitly.','string name = "Jo";\nint cups = 2;\nConsole.WriteLine($"{name} has {cups} cups.");','Add a decimal value for the price of one cup and include it in the message.'],
    ['Branch with if','Use if and else to choose which code runs. The condition inside parentheses must be true or false.','int hour = 9;\nif (hour < 12) {\n  Console.WriteLine("Good morning");\n} else {\n  Console.WriteLine("Hello there");\n}','Add an evening greeting when hour is 18 or later.'],
    ['Work with a list','A List can hold several values. A foreach loop runs once for each item.','var snacks = new List<string> { "pear", "toast" };\nforeach (var snack in snacks) {\n  Console.WriteLine(snack);\n}','Add another snack and print a numbered list.'],
    ['Make a method','Methods name a reusable task. This one accepts a name and returns a greeting.','static string Greet(string name) {\n  return $"Welcome, {name}!";\n}','Write a method that takes a price and a quantity and returns the total.']
  ],
  'HTML': [
    ['Give content structure','HTML uses elements to describe content. Most elements have an opening tag and a closing tag.','<h1>My little corner</h1>\n<p>A page starts with an idea.</p>','Add a second-level heading and a paragraph about something you enjoy.'],
    ['Build a full page','A document has a doctype, a head for page details, and a body for visible content.','<!doctype html>\n<html lang="en">\n<head><meta charset="utf-8"><title>My page</title></head>\n<body><h1>Hello!</h1></body>\n</html>','Add a description in the head and a paragraph in the body.'],
    ['Link and list','Links use the a element and an href destination. Lists group related items.','<a href="https://example.com">Visit a site</a>\n<ul><li>Plan</li><li>Make</li><li>Share</li></ul>','Create a list of three things you want to learn. Add a link to a useful resource.'],
    ['Add an image carefully','Images need alternative text so people using a screen reader understand what the image shows.','<img src="garden.jpg" alt="Yellow flowers beside a path">','Choose an image and write alt text that tells what matters in it.'],
    ['Make a semantic page','Semantic elements explain a page layout. They help browsers, search tools, and people understand each part.','<header>...</header>\n<main><article><h2>My story</h2></article></main>\n<footer>Made with care</footer>','Build a one-page profile with a header, main section, article, and footer. Give it a clear heading order.']
  ],
  'CSS': [
    ['Select and style','A CSS rule has a selector and declarations. A declaration pairs a property with a value.','h1 {\n  color: seagreen;\n  font-size: 2rem;\n}','Change the heading color and size. Add a background color to the page.'],
    ['Use classes','A class lets you style a group of elements. In CSS, its selector starts with a dot.','<p class="note">A small reminder</p>\n.note { color: #51406f; font-weight: 600; }','Add a class to two paragraphs and give them the same style.'],
    ['Make space','Padding adds room inside an element. Margin adds room outside it. A border sits between them.','.card {\n  padding: 1rem;\n  margin: 1rem 0;\n  border: 1px solid #ddd;\n}','Style a card with a border, rounded corners, and comfortable spacing.'],
    ['Lay out a row','Flexbox helps align items in one direction. Gap adds space between children without extra margins.','nav {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}','Make a small navigation row with three links. Let it wrap on narrow screens.'],
    ['Make it responsive','A media query applies styles only when a condition, such as a minimum screen width, is met.','.cards { display: grid; grid-template-columns: 1fr; }\n@media (min-width: 700px) {\n  .cards { grid-template-columns: repeat(3, 1fr); }\n}','Build a responsive set of three cards. Keep them in one column on a phone.']
  ],
  'JavaScript': [
    ['Show a result','JavaScript can run in a browser or other environments. console.log is a handy way to see a value while learning.','console.log("Hello, world!");','Print your name and one thing you hope to build.'],
    ['Store and combine values','Use const for a value you will not reassign and let for one that may change. Template strings can include values.','const name = "Ari";\nlet points = 0;\nconsole.log(`${name} has ${points} points`);','Increase points by one and print the new message.'],
    ['Choose a path','if and else let your program react to a condition. The condition is checked each time the code runs.','const raining = false;\nif (raining) {\n  console.log("Take an umbrella");\n} else {\n  console.log("Enjoy the walk");\n}','Use a number comparison to show a different message for a score of 10 or more.'],
    ['Work with lists and functions','An array stores a sequence. A function names steps you can call again.','const names = ["Kai", "Noor"];\nfunction welcome(name) { return `Hi, ${name}!`; }\nnames.forEach(name => console.log(welcome(name)));','Add another name. Write a function that returns the number of names in the list.'],
    ['Respond to a click','The DOM is the browser’s object model of your page. JavaScript can listen for events and update it.','const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  document.querySelector("h1").textContent = "You did it!";\n});','Make a button that adds one to a counter each time it is clicked.']
  ],
  'SQL': [
    ['Choose the rows','A table stores related rows and columns. SELECT names columns; FROM names the table.','SELECT name, city\nFROM learners;','Choose two columns from a table you invent, such as books or recipes.'],
    ['Filter results','WHERE keeps only rows that match a condition. Text values use single quotes.','SELECT title\nFROM books\nWHERE pages > 200;','Find books by one author. Add a second condition with AND.'],
    ['Sort and limit','ORDER BY sorts results. LIMIT asks for only the first few rows in many databases.','SELECT title, rating\nFROM books\nORDER BY rating DESC\nLIMIT 5;','Show the three newest entries from a table that has a created_at column.'],
    ['Summarize data','COUNT, SUM, and AVG summarize groups of rows. GROUP BY makes one result for each group.','SELECT category, COUNT(*)\nFROM books\nGROUP BY category;','Count how many items are in each category in your imagined table.'],
    ['Connect two tables','A join combines rows that share a related value. Use clear table names to show where columns come from.','SELECT learners.name, courses.title\nFROM learners\nJOIN courses ON learners.course_id = courses.id;','Sketch two related tables, then write a join that shows a learner and their course.']
  ],
  'Regex': [
    ['Find exact text','A regular expression, or regex, describes a text pattern. Plain letters match those same letters.','/cat/','Try patterns for a word in a sentence. Does cat also match in concatenate?'],
    ['Match a set','Character sets match one character from a group. A range like a-z is shorthand for lowercase letters.','/[aeiou]/','Find every vowel in a short word. Then make a set for digits.'],
    ['Match a quantity','Quantifiers say how many times a pattern can appear. + means one or more, and * means zero or more.','/go+!/','Compare go!, goo!, and g!. Which ones match?'],
    ['Set boundaries','Anchors match a position, not a character. ^ means the start and $ means the end of the text.','/^hello$/','Make a pattern that only matches a line containing a five-digit code.'],
    ['Check a simple form','Groups let you combine pieces. Escaping a dot matches a literal period. Real validation may need more than regex.','/^([a-z]+)@([a-z]+)\\.com$/i','Try the pattern against a few simple email examples. Note where this beginner pattern falls short.']
  ],
  'Git & GitHub': [
    ['See what changed','Git tracks changes to files in a project. A repository is the folder and its saved history.','git status\ngit diff','Create a text file, change one line, then inspect the difference.'],
    ['Save a snapshot','Stage the changes you want to include, then create a commit with a short message.','git add notes.txt\ngit commit -m "Add first notes"','Make a second edit and save it as a separate commit.'],
    ['Try a branch','A branch gives you a place to work on an idea without changing the main line of work.','git switch -c try-a-new-idea','Create a branch, edit a file, and commit the change there.'],
    ['Bring work together','Merging combines a branch into the branch you are on. Git may ask you to resolve conflicting edits.','git switch main\ngit merge try-a-new-idea','Draw or write down what each command does before running it in a practice repository.'],
    ['Share on GitHub','GitHub hosts Git repositories and adds tools for collaboration. A remote connects your local project to its hosted copy.','git remote add origin <repository-url>\ngit push -u origin main','Create a small README explaining your project. Review it before you share the repository.']
  ],
  'Command line': [
    ['Know where you are','A terminal accepts commands as text. pwd prints the folder you are currently in.','pwd','Run pwd and compare the result with the folder you see in your file manager.'],
    ['Look around','List files with ls on macOS or Linux, or dir in Windows Command Prompt.','ls\n# Windows PowerShell also accepts: Get-ChildItem','List the files in a folder you know. Find one file by its name.'],
    ['Move between folders','cd changes your current folder. .. means the folder above this one.','cd projects\ncd ..','Move into a folder, check where you are, then return to the previous folder.'],
    ['Create and inspect files','Commands can create folders, print text, and show file contents. Exact commands can vary by system.','mkdir practice\n# create a file in an editor\ncat notes.txt','Make a practice folder and a short notes file. Use the file manager if a command differs on your system.'],
    ['Run a project safely','A project’s README should explain how to start it. Read commands before running them, especially commands copied from the internet.','python hello.py\n# or, for a web page, open index.html in a browser','Make a folder with a README and one tiny program. Write down how to run it on your computer.']
  ],
  'JSON & APIs': [
    ['Read JSON','JSON represents data with objects, arrays, strings, numbers, booleans, and null. Property names use double quotes.','{\n  "name": "Ari",\n  "learning": true\n}','Add a number property called lessons and an array property called topics.'],
    ['Use arrays and objects','An array holds an ordered list. An object groups values under named properties.','{\n  "topics": ["HTML", "CSS"],\n  "progress": { "done": 2, "total": 5 }\n}','Add a third topic. Add a boolean called finished.'],
    ['Understand an API request','An API lets one program ask another program for information or an action. A URL identifies the resource.','GET /api/books\nAccept: application/json','Describe a URL for a list of recipes and another URL for one recipe.'],
    ['Read the response','A response includes a status code and often a body. A 200 status usually means success; a 404 means the resource was not found.','{ "status": 200, "body": { "count": 3 } }','Write down what you would show a user for success, missing data, and a server error.'],
    ['Plan a tiny API','Good API design uses clear resource names and predictable responses. Keep private keys and personal data protected.','GET /api/notes\nPOST /api/notes\nGET /api/notes/42','Design three routes for a reading list. Decide what data each route returns.']
  ],
  'Accessibility': [
    ['Start with meaning','Semantic HTML gives controls and content their intended meaning. Use a button for an action and a link to go somewhere.','<button type="button">Open menu</button>','Look at a page you made. Are clickable items links or buttons for the right reason?'],
    ['Label controls','Forms need labels that stay connected to their fields. Placeholder text alone is not a reliable label.','<label for="email">Email address</label>\n<input id="email" type="email">','Add a label and an input for a person’s favorite language.'],
    ['Use a keyboard','People may use a keyboard instead of a mouse. Keep controls reachable and make the focus visible.','button:focus-visible {\n  outline: 3px solid seagreen;\n  outline-offset: 2px;\n}','Tab through your page. Can you see which control has focus at every step?'],
    ['Write useful alternatives','Alt text describes the purpose of an image. Decorative images can use empty alt text so they do not add noise.','<img src="map.png" alt="Map showing the library entrance">','Write alt text for an image that conveys information. Then decide whether a decorative image needs any.'],
    ['Check contrast and motion','Text needs enough contrast against its background. Respect reduced-motion settings and avoid relying on color alone.','@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { scroll-behavior: auto; animation-duration: .01ms; }\n}','Review a page in grayscale. Can you still tell errors from success? Check text contrast and remove unnecessary motion.']
  ],
  'Debugging': [
    ['Reproduce the problem','A bug is easier to understand when you can make it happen on purpose. Note the steps and what you expected to see.','// Expected: total is 6\n// Actual: total is 5','Describe a small problem you have seen in an app. Write the steps that reproduce it.'],
    ['Read the error','Error messages often point to a file, line, or kind of problem. Read from the first useful clue instead of guessing.','console.log("current value:", total);','Add a log just before a result looks wrong. What value do you expect there?'],
    ['Check one thing at a time','Change one small thing, run the program again, and see what changed. This keeps guesses from piling up.','const price = 4;\nconst count = 3;\nconsole.log(price * count);','If the total is wrong, inspect the inputs first. Test one input at a time.'],
    ['Use a minimal example','A small example removes distractions. If the issue remains, you have a clearer clue.','function add(a, b) { return a + b; }\nconsole.log(add(2, 3));','Reduce a confusing program to the fewest lines that still show the problem.'],
    ['Fix and prevent','Once you find the cause, make a small fix and try the same steps again. Add a test or note so the bug is less likely to return.','// Check both a normal case and an edge case\nconsole.assert(add(2, 3) === 5);','Write down the cause, your fix, and one check that confirms it works.']
  ]
};
