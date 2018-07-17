# Let´s get started
We, Violeta and Diana Vilé, are involved in the [Rails Girls Summer of Code scholarship](https://railsgirlssummerofcode.org/) as the DV Team since 2nd of July. We met each other in November 2017 during  the [Udacity Front-end Web Developer (FEND) Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001), for which we both received a full Google scholarship. This article shares our __experiences and learnings of pair coding during the Rails Girls Summer of Code scholarship__ (july 2th- september 30th 2018). 

## EXPERIENCE: How to do pair programming in remote

Pure excitement, is what we felt [when we got accepted](https://twitter.com/LSGorg/status/998830730405990400) for the Rails Girls Summer of Code scholarship. We couldn´t wait to start pair coding on the Open Source project ["Living Style Guide"](https://livingstyleguide.org/) together. We felt very privileged to be part of the Rails Girls Summer of Code community. Knowing it would become a busy summer, it didn´t long to realize we needed to prepare ourselves.

#### Getting ready
Even before the Rails Girls Summer of Code experience started, life have been hectic, combining both a full-time job and complete opposite workschedules. Yet we managed to meet each other once or twice a week. 
In the days before the official start: 

1) We both attended a [Scrum Workshop](https://twitter.com/artnerdnet/status/1012799490456158209) giving by our Coach @cristina_verdi.
![Scrum Workshop](https://github.com/dianavile/RgSocDVTeam/blob/master/img/Scrum_Workshop.png)
2) We met for a strategy session to [Plan and Research for @RailsGirlsSoC](https://twitter.com/artnerdnet/status/1012799490456158209) 

#### First day
The first day, we prepared ourselves reading the [@RailsGirlsSoC guidelines](https://twitter.com/artnerdnet/status/1010835368051138560), looked into the Code and attended the official [@RailsGirlsSoC Kick-Off event]()

#### Struggling to find a way 
Shortly afterwards, we realized one thing: starting to code and do pair programming in remote isn´t easy:

- We didn´t understand the code. Not even a tiny bit. We realized we needed to learn a lot.
- We [struggled to focus after a long working day](https://twitter.com/artnerdnet/status/1015567892081979393)
- Our work schedules were completely the opposite. We needed to find a way to work together.
- We realized we both had a different learning style. While @V moves quickly forward, Diana needed more time to stick with the basics.

#### Pair programming
We decided to let our coaches be the bridge between our tight schedules and different learning styles. While, Violeta´s attended her [first tech conference](https://twitter.com/artnerdnet/status/1015883042462818305), Diana tried to stick with the basics learning Git, Version Control and Github (see here learnings below). While Diana is still catching up with Violeta´s speed, luckily we could communicate openly about it. Pair programming, especially almost fully remote, is hard, but even then still you can [Enjoy working even Friday night](https://twitter.com/artnerdnet/status/1017905655422881793).

### Lessons Learned 
- PREPARATION IS KEY
- CODING = COMMUNICATION
- PAIR PROGRAMMING CODING IS HARD, BUT REWARDING

## LEARNINGS: How to work in REMOTE (Git, Version Control and Github)
### LEARNING 1: KNOW YOUR BASICS
As junior front-end web developers, creating good coding habits, while learning an enormous amount of best coding practices in a small period of time, is challenging. To become a professional coder in a relative short period of time, however, you need to take quality of coding and best practices in documentation very seriously. This article learns you step-by-step __how to work in REMOTE with Git, Version Control and Github, as a professional software engineer__. 

## LEARNING GIT
It seems easy to learn a few commands to tell the computer what you want it to do. Yet, computers, unlike humans, need very specific and short commands to understand you. The commands seem so ´straigh-forward´ that you might not pay too much attention to it. Yet, taking your time to __practice and learn the GIT commands by heart is key__.

- Work on local computer from user inside dev folder:
`name@computername computersystem ~/dev (development)`
- To show list of content in folder, use `$ ls`.
- To change directory to subfolder, use `$ cd name subfolder`
- To move to a folder above: `$ cd ..`
- To clone a repository `$ git clone https://github.com/author/repository.git`
- To change directory to new repository `$ cd name repository`
-  To install new dependency packages: `$ npm install`
- __NOTE__: npm notice create a lockfile as package-lock.json. This create a `node.js file`, in which all dependencies -as stated in JSON file- are stored. The file need to be committed.

## GENERAL WORKFLOW in GIT, VERSION CONTROL AND GITHUB(STEP-BY-STEP):
__IN TERMINAL- EDITOR:__

#### Step 1: Create new branch from the parent branch: 
- `git checkout -b feature/description`
- __NOTE__: Be sure to always create a new child branch from the parent branche

#### Step 2: Check if you are in the _parent branch: 
- `git branch` 
- __NOTE__: `*name` of the parent branch (by default `master`) changes according to function.

#### Step 3: Push new local branch to remote repository. 
- `git push --set-upstream origin child/folder`

#### Step 4: Make changes in your work in local code editor. Save changes in local file.

#### Step 5: Add changes on local (that will be committed):
- `git add .` (all changes) OR `git add filename` (specific change).

#### Step 6: Make a commit (snapshot - picture of current state of code): 
- `git commit -m "explain change"`
- Switch between branches: `git checkout master` (parent branch) OR `git checkout feature/branchename` (child branch)
- Check changes made: `git branch`

#### Step 7:Push local changes to remote repository: 
- `git push --set-upstream origin child/folder`
- __NOTE__: To be able to push local changes to a remote repository, you need `collaborator access`to the repository. 
- The owner of the repository can setup this collaborartion access to you, by inviting you by e-mail, to it´s respository. 
- You need to accept it, before you can start to push the changes. 

__IN GITHUB:__

#### Step 8: Open a pull request in Github 
#### Step 9: Assign pull request to Code Author
#### Step 10: Await Code review to be accepted/declined
Await until Code Reviewer -responsable developer controls to make changes to master- accepts/declines pull request.

__IN TERMINAL- EDITOR:__ (After pull request is excepted:)

## TO PUSH CHANGE FROM LOCAL TO REMOTE:
#### Step 11: Change to master branch 
- `git checkout master`

#### Step 12: Update changes in local editor with Remote repository 
1) __Switch to a new branch:__ 
- `git checkout -b newbranch/name`
- Check branch status:  `git status`

2) __Stage changes to commit:__
- Update what will be committed: `git add <file>...` 
- OR discard changes in working directory `git checkout -- <file>...`  

3) __Add changes before commit locally__: 
- `git add`
- `git add <file>...`(=one change) 
- OR  `git add .` (=all changes).

4) __Make a commit (snapshot):__
- Commit changes: `git commit -a`
- Check status of branch (to see if changes are added):  `git status`
- Unstage (unmake changes): `git reset HEAD <file>...`
- Add description of message for commit to be changed:  `git commit -m "description"`

5) __Push change to Remote repository:__ 
- `git push --set-upstream origin ÙRL`

## TO PULL CHANGES FROM REMOTE TO LOCAL:
#### Step 13: Add remote changes to local repository 
- `git pull`

1) __Switch to a new branch:__ 
- `git checkout -b branchname`

2) __Make a commit (snapshot) with message on branch:__ 
- `git commit -m "description of change"`

3) __Stage changes to commit:__ 
- `git add .`

4) __Check branches:__
- Switch to branch 'master': `git checkout master`
- Check if branch is up-to-date- with 'origin/master': `git branch`

5) __Switch between branches:__
- Switch to branch 'feature/basic-info': `git checkout branchname`
- Switch to branch 'master':  `git checkout master`
- Switch back to branch 'feature/basic-info': `git checkout branchname`

6) __Push change to Remote repository:__  
- `git push --set-upstream origin feature/basic-info`

## TERMINAL in CODE EDITOR

#### Step 14: Delete local branch
_After pull request acceptance, update and clean-up branches in local:_

- Change to "master" branche: `git checkout master`
- Add remote changes to local repository: `git pull` 
- Delete local branch `cd ..` & ` cd .\repository\`
- Switch to branch 'master': `git checkout master`
- Delete branch: `git branch -d feature/basic-info`
- Update changes with Git pull: `git pull`
- Switch to new branch: `git checkout -b`
- Check branch status:  `git status`
__Staging: changes to add or discard__
- Add changes to add (to update what will be committed: `git add <file>...`
- Discard changes in working directory:  `git checkout -- <file>...`
- Save changes locally with `git add.` or `git commit -a`
- Check branch status:  `git status`
- Unstage: `git reset HEAD <file>...`
- Commit changes `git commit -m "add instructions to run app"`
- Push changes `git push --set-upstream origin feature/how-to-run-instructions`
- Switch to branch 'master': `git checkout master`
- Pull changes from remote to local `git pull`
- Push from local to remote `git push`

This is the general workflow in GIT, VERSION CONTROL AND GITHUB(STEP-BY-STEP). 
