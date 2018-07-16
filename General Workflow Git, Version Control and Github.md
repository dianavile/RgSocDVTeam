# Let´s get started
We, Violeta Risueño and Diana Vilé, are involved in the Rails Girls Summer of Code scholarship as the DV Team since 2nd of July. We met each other in November 2017 during  the Udacity Front-end Web Developer (FEND) Nanodegree, for which we both received a full Google scholarship. This article shares our experiences and learnings of pair coding during the Rails Girls Summer of Code scholarship(july 2th- september 30th 2018). 

## LEARNINGS: How to work in REMOTE (Git, Version Control and Github)
### LEARNING 1: KNOW YOUR BASICS
As junior front-end web developers, creating good coding habits, while learning an enormous amount of best coding practices in a small period of time, is challenging.
To become a professional coder in a relative short period of time, however, you need to take quality of coding and best practices in documentation very seriously. This article learns you step-by-step __how to work in REMOTE with Git, Version Control and Github, as a professional software engineer__. 

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

## GENERAL WORKFLOW (STEP-BY-STEP):
__IN TERMINAL- EDITOR:__

1) Create new branch from the parent branch 
2) Check if you are in the parent branch 
3) Push new local branch to remote repository
4) Work on changes
5) Add changes on local (that will be committed)
6) Make a commit (snapshot - picture of current state of code)
7) Push the changes (push local changes to remote repository)

__IN GITHUB:__

8) Open pull request in Github
9) Assign pull request to Code Author
10) Await Code review (responsable developer controls to make changes to master)
11) After pull request is excepted

__IN TERMINAL- EDITOR:__

12) Change to master branch with `git checkout master`
13) Add remote changes to local repository with `git pull`
14) Delete local branch


## TERMINAL in CODE EDITOR
- Open Terminal in Local Code Editor

### Step 1: Create new branch from the parent branch 
- __NOTE__: Be sure to always create a new child branch from the parent branche
- Switch to a new branch: `git checkout -b feature/description`
- `PS C:\Users\name\folder\repository> git checkout -b feature/basic-info`

### Step 2: Check if you are in the parent branch: 
 `git branch`
- __NOTE__: `*name` of the parent branch (by default `master`) changes according to function.

### Step 3: Push new local branch to remote repository & Work on Local Changes
__Make changes:__
- Make changes in your work in local code editor. Save changes in local file.
- 
### Step 4-5:  Work on Changes & Add Changes on Local 
__Add changes:__
- Add changes on local (to commit):`PS C:\Users\name\folder\repository> git add .`
- `git add .` to add all changes at once.
- OR: `git add filename`to add changes to specific file/folder.

### Step 6: Make a Commit:
__Commit changes:__
- Make commit (snapshot of current state of code): `git commit -m "explain change"`
- `PS C:\Users\name\folder\repository> git commit -m "improve app title"`

__Switch between branches:__
- Swith branch: `git checkout master`
- Check changes made: `git branch`= Your branch is up to date with 'origin/master'
- Switch branch to child branch: `git checkout feature/basic-info`
- Switch branch back to parent branch: `git checkout master`

### Step 7: Push local changes to remote:
__Push local changes:__
- Push local changes to remote repository: `git push --set-upstream origin child/folder`
- `PS C:\Users\name\folder\repository> git push --set-upstream origin feature/basic-info`
__
- __NOTE__: To be able to push local changes to a remote repository, you need `collaborator access`to the repository. The owner of the repository can setup this collaborartion access to you, by inviting you by e-mail, to it´s respository. You need to accept it, before you can start to push the changes. 

- __EXAMPLE:__
- To https://github.com/author/repository.git
 * [new branch]      feature/branchname -> feature/branchname
- Branch 'feature/basic-info' set up to track remote branch 'feature/basic-info' from 'origin'.

## GITHUB 
### Step 8: Open a pull request
- Open pull request in Github
### Step 9: Assign pull request to author
- Await until Code Author (Code Reviewer) accepts/declines pull request.
NOT SURE-----------------------------
- `PS C:\Users\name\folder\repository> cd .. .`
- `PS C:\Users\name\folder\repository> cd .\repository\`
- Pull remote repository changes to local:  `git pull` 
`PS C:\Users\name\folder\repository> git pull`
- Switch to branch 'master': `git checkout master`
`PS C:\Users\name\folder\repository> git checkout master`
Your branch is up to date with 'origin/master'.
- Switch to branch 'feature': `git branch -d feature/repository`
`PS C:\Users\name\folder\repository> git branch -d feature/basic-info`
From https://github.com/author/repository
NOT SURE-----------------------------
### Step 10:
### Step 11:

### Step 12: Update changes in local editor with Remote repository 
(TO PUSH CHANGE FROM LOCAL TO REMOTE)
1) __Switch to a new branch:__ 
- Switch to a new branch:  `git checkout -b newbranch/name`
- `PS C:\Users\name\folder\repository> git checkout -b feature/how-to-run-instructions`
- Check branch status:  `git status`
`PS C:\Users\name\folder\repository> git status`

2) __Stage changes to commit:__
- to update what will be committed: `git add <file>...` 
- OR to discard changes in working directory) `git checkout -- <file>...`  

- To add changes before commit locally: `git add`
- to add one change: `git add <file>...` 
- to add all changes: `git add .` 

3) __Make a commit (snapshot):__
- Commit changes: `git commit -a`
``PS C:\Users\name\folder\repository>  git add .`
- To check status of branch (to see if changes are added):  `git status`
``PS C:\Users\name\folder\repository>  git status .`
- To unstage (unmake changes): `git reset HEAD <file>...`
- To add description of message for commit to be changed:  `git commit -m "description"`
`PS C:\Users\name\folder\repository>  git commit -m "add instructions to run app"`

4) __Push change to Remote repository:__
- To push current branch To remote URL and set remote as upstream:
-  `git push --set-upstream origin ÙRL`
- `PS C:\Users\name\folder\repository> git push --set-upstream origin feature/how-to-run-instructions`

### Step 13: Update changes from remote to local 
(TO PULL CHANGES FROM REMOTE TO LOCAL)
1) __Switch to a new branch:__
- Switch to a new branch: ` git checkout -b branchname`
- `PS C:\Users\name\folder\repository> git checkout -b feature/basic-info`

2) __Make a commit (snapshot):__
- Make commit with message (snapshot) on branch
- `PS C:\Users\name\folder\repository>  git commit -m "improve app title"`

3) __Stage changes to commit:__
- Stage changes to commit: `git add .`
- Warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
 1 file changed, 1 insertion(+), 1 deletion(-)

4) __Check branches:__
- Switch to branch 'master':  `git checkout master`
- `PS C:\Users\name\folder\repository> git checkout master`
- Check if branch is up-to-date- with 'origin/master': `git branch`
- `PS C:\Users\name\folder\repository> git branch`
  feature/basic-info
* master

5) __Switch between branches:__
- Switch to branch 'feature/basic-info': `git checkout branchname`
`PS C:\Users\name\folder\repository> git checkout feature/basic-info`
- Switch to branch 'master':  `git checkout master`
`PS C:\Users\name\folder\repository> git checkout master`
- Switch to branch 'feature/basic-info': `git checkout branchname`
`PS C:\Users\name\folder\repository> git checkout feature/basic-info`

6) __Push change to Remote repository:__
- Push the current branch and set the remote as upstream 
-  `git push --set-upstream origin feature/basic-info`
- `PS C:\Users\name\folder\repository> `git push --set-upstream origin feature/basic-info` 
To https://github.com/author/repository.git
 * [new branch]      feature/basic-info -> feature/basic-info
Branch 'feature/basic-info' set up to track remote branch 'feature/basic-info' from 'origin'.

## TERMINAL in CODE EDITOR
### Step 14: After pull request acceptance, update and clean-up branches in local 
- git checkout master (change to "master" branche)
- git pull (to add remote changes to local repository)
- Delete local branch
- `PS C:\Users\name\folder\repository> cd ..`
- `PS C:\Users\name\folder\repository> cd .\repository\`
- Switch to branch 'master': `git checkout master`
- `PS C:\Users\name\folder\repository> git checkout master`
- Delete a branch: `git branch -d feature/basic-info`
- `PS C:\Users\name\folder\repository> git branch -d feature/basic-info`

- Update changes with Git pull: `git pull`
- `PS C:\Users\name\folder\repository> git pull`
- = Updating: 1 file changed, 1 insertion(+), 1 deletion(-)

- Switched to a new branch: `git checkout -b`
- `PS C:\Users\name\folder\repository> git checkout -b feature/how-to-run-instructions`

-  Check branch status:  `git status`
- `PS C:\Users\name\folder\repository> git status`

__Staging: changes to add or discard__
- Add changes to add (to update what will be committed: `git add <file>...`
- Discard changes in working directory:  `git checkout -- <file>...`
  
- Save changes locally with `git add.` or `git commit -a`
- `PS C:\Users\name\folder\repository> git add .`

-  Check branch status:  `git status`
- `PS C:\Users\name\folder\repository> git status`
- To unstage: `git reset HEAD <file>...`

- Commit changes `git commit -m "add instructions to run app"`
-  1 file changed, 28 insertions(+), 3 deletions(-)

- Push changes `git push --set-upstream origin feature/how-to-run-instructions`
EXAMPLE:
- remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/cristinaverdi/silly-app.git
 * [new branch]      feature/how-to-run-instructions -> feature/how-to-run-instructions
 
- Switch to branch 'master': `git checkout master`
- `PS C:\Users\name\folder\repository> git checkout master`

- Pull changes from remote to local `git pull`
- `PS C:\Users\name\folder\repository> git status`
- __EXAMPLE:__
remote: Counting objects: 1, done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/author/repository
master     -> origin/master
Updating  1 file changed, 28 insertions(+), 3 deletions(-)

- Push from local to remote `git push`
`git push --set-upstream origin feature/how-to-run-instructions`
