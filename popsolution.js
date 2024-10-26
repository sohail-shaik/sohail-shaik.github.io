//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

// Game of Thrones Questions
question[1] = "What is the family motto of House Stark?";
choice1[1] = "Fire and Blood";
choice1[2] = "Ours is the Fury";
choice1[3] = "Winter is Coming";
choice1[4] = "Hear Me Roar";

question[2] = "What is the name of Jon Snow's direwolf?";
choice2[1] = "Shaggydog";
choice2[2] = "Ghost";
choice2[3] = "Nymeria";
choice2[4] = "Summer";

question[3] = "How did Hodor get his name?";
choice3[1] = "It's a nickname he chose for himself.";
choice3[2] = "It's short for 'Hold the door,' a phrase he repeated due to a traumatic event.";
choice3[3] = "It's a family tradition in House Stark.";
choice3[4] = "He was given the name by Bran Stark during a vision.";

question[4] = "Who is known as the 'Mother of Dragons'?";
choice4[1] = "Cersei Lannister";
choice4[2] = "Sansa Stark";
choice4[3] = "Arya Stark";
choice4[4] = "Daenerys Targaryen";

question[5] = "What is Arya Starks signature weapon?";
choice5[1] = "A sword called 'Needle'";
choice5[2] = "A bow and arrow";
choice5[3] = "A spear";
choice5[4] = "A dagger";

question[6] = "What is the capital of the Seven Kingdoms?";
choice6[1] = "Winterfell";
choice6[2] = "King's Landing";
choice6[3] = "The Eyrie";
choice6[4] = "Riverrun";

question[7] = "Who is Tyrion Lannister's father?";
choice7[1] = "Ned Stark";
choice7[2] = "Tywin Lannister";
choice7[3] = "Robert Baratheon";
choice7[4] = "Jaime Lannister";

question[8] = "What does Daenerys say to make her dragons breathe fire?";
choice8[1] = "Inferno!";
choice8[2] = "Ignite!";
choice8[3] = "Dracarys!";
choice8[4] = "Fire!";

question[9] = "Who famously said 'I drink and I know things'?";
choice9[1] = "Jon Snow";
choice9[2] = "Cersei Lannister";
choice9[3] = "Tyrion Lannister";
choice9[4] = "Bronn";

question[10] = "Who sits on the Iron Throne at the end of the series? [!! Spoiler Aler !!]";
choice10[1] = "Daenerys Targaryen";
choice10[2] = "Bran Stark";
choice10[3] = "Jon Snow";
choice10[4] = "Sansa Stark";

// Solutions
solution[1] = "c";
solution[2] = "b";
solution[3] = "b";
solution[4] = "d";
solution[5] = "a";
solution[6] = "b";
solution[7] = "b";
solution[8] = "c";
solution[9] = "c";
solution[10]= "b";

