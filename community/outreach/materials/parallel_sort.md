---
layout: section
title: Parallel Sorting Game
summary: A game for teaching players the benefits of parallelism
banner: web_banners_07.jpg
---

The parallel sorting game is a simple, group activity to show why parallel computers are needed. It's very hands-on and does not require a computer or other technology to play. Players complete a sorting task in groups of various sizes, and see how the number of objects sorted changes with the size of group.

* Number of players: 2-4
* Ages: 7+
* Time required: 5-10 minutes

## Resources Required
* Something to sort (for example balls or beanbags in four different colours, you can make envelopes with different post codes, colourful sweets, decks of playing cards...)
* Containers to sort these objects into, plus one to hold the unsorted objects at the start of the game (colour-coded with the objects where possible)
* A timer
* Paper and pen to record the results for each round. For something more visual, [print this graph](sort-graph-paper.pdf) or draw something similar. Sticky dots can be used to mark scores, or a marker pen would also do

## Set-Up
* To start, all of the sorting objects are mixed together and placed into one container. The containers to be sorted into should be empty and labelled if needed to make it clear which category of object should be sorted into which container. Have a timer set to 30 seconds. This is how the game should be reset at the start of each round.
* If sorting with something like balls or beanbags, this activity can be made more fun by getting players to sort by under-arm throwing objects into the correct coloured buckets. Plenty space is required for this, and it helps to place the sorting containers in a row against a wall or similar to stop any objects that miss their target. The container of unsorted objects is placed facing the sorting containers however far away the players are to stand. This distance can be adjusted for the age of participants.
* If sorting something smaller like sweets or envelopes, then play sitting round a table, and make sure the sorting containers are placed in the centre where all players can reach them. The set-up may need to be modified so all players have their own set of unsorted objects, but they should still be able to share the containers they are sorting into.

## The Rules
* For the first round, one player sorts as many objects as they can on their own before the timer runs out. Count them up at the end and mark their score on the scoreboard.
* Other players can help out by being timekeeper, and by helping count objects sorted. If there is time, all players can have a shot at sorting solo, it's more fun the more involved they are, and will give more data-points for discussion at the end!
* Don't count objects sorted into the incorrect container.
* If playing the variant where players are throwing balls or beanbags, only throw one handed, and only one object at a time.
* The activity can be done either by seeing how many objects can be sorted in a fixed time, as described above, or timing how long it takes to sort the full set of objects and using time taken as the score. Which is used depends on personal preference, and possibly number of sorting objects available. If the number is small, a stopwatch might be better, if large, then a countdown timer will stop each round from taking too long.
* Once the score for one player is known, reset the game by mixing up all the sorted objects again and restarting the timer. Play again with two, three, and, finally four players, and make a note of the scores plus number of players at the end of each round.
* At the end, when all players have played, you should have a graph or table, comparing number of objects sorted for different sizes of teams.

## Discussion
* How does the number of objects sorted/time taken change when more people play? Why do you think that is?
* Are two players twice as good as one person on their own? If you have more players, are three people three times better/four people four times better? Why do you think that was?
* Imagine you had a very big team of ten or more people playing. How do you think they would manage? Why do you think this is? How could you change the rules to make it easier for a larger group to play?

## What does this have to do with supercomputers?
Supercomputers are used to do calculations that would take a normal computer a very long time to run. For example, supercomputers are used to create weather forecasts, which need to be calculated fast in order to get the results well in the advance of the dates being forecast. Supercomputers are faster because they are much bigger than regular computers - a laptop will have a single processor (where computer programs are executed), a computer like ARCHER2 can have thousands. The work required to solve calculations can then be shared between each processor, and greatly reducing the time taken to get the answer. The processors are able to work together on a problem by communicating over a network - which requires lots of cables! This is known as parallel computing.

If the team playing the sorting game is large for the size of the problem, then they might find it difficult to beat the score of a smaller team. For example, each player might have to wait their turn to pick up a sorting object, and this each individual sort at a slower rate than if they were on their own. Supercomputers are the same - more processors does not mean faster run time, if the calculation is too small, or not well designed for a large parallel system. That is why experts like the ARCHER2 CSE team are needed to help Scientists write code that will run well on a Supercomputer!

Hopefully when playing the parallel sorting game, participants find that that larger teams are able to sort faster than smaller teams and individuals. The sorting can be thought of as the calculation - sorting methods, or algorithms, are common in computing - and each player as a computer processor. By working together on the sort, they are working like a supercomputer, together on the same problem.
