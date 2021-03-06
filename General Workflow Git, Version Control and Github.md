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
