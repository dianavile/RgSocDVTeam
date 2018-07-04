# **Learn** Git

_"Git is hard: screwing up is easy, and figuring out how to fix your mistakes is fucking impossible.- from: OShitGit"_  

## Basic Git Commands (see [Git Cheatsheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf))
Common git commands in day-to-day workflow

#### CONFIGURE TOOLING: (Configure user information for all local repositories)
- `$ git config --global user.name "[name]"`(Sets the name you want atached to your commit transactions)
- `$ git config --global user.email "[email address]"`(Sets the email you want atached to your commit transactions)
- `$ git config --global color.ui auto` (Enables helpful colorization of command line output)

#### CREATE REPO: (Start new repository/Obtain one from an existing URL)
-  `$ git init`(Create an empty git repo/reinitialize an existing one)
-  `$ git init [project-name]` (Create new local repository with specified name)
-  `$ git clone [url]` (Downloads project and entire version history)
#### FORK A REPO
Click the `"Fork"` button at the top-right of any repository's GitHub page.
#### CLONE A REPO 
-  `$ git clone https://github.com/<username>/foo.git foo`(Clone a repo into a new directory called foo):


#### MAKE CHANGES: (Review edits and craf a commit transaction)
- `$ git status` (Lists all new/modified files to be commited)
- `$ git add [file]` (Snapshots file in preparation for versioning)
- `$ git reset [file]`(Unstages file, preserve its contents)
- `$ git diff`(Shows file differences, not yet staged)
- `$ git diff --staged`(Shows file differences, between staging - last file version)
- `$ git commit -m "[descriptive message]"`(Records file snapshots permanently in version history)


## TROUBLE SHOOTING
__list all git steps__ (`index HEAD@{index}`):
`git reflog`
##### find __last git step before it breaks__:
`git reset HEAD@{index}`
##### make change
`git add . #` or add individual files
##### change or keep commit 
`git commit --amend`
- Last commit contains change
##### create new branch from current state/master
`git branch some-new-branch-name`
### remove commit from master branch
- `git reset HEAD~ --hard`
### commit lives in branch :)
- `git checkout some-new-branch-name`
### grab last commit to master
- `git checkout name-of-the-correct-branch`
- `git cherry-pick master`
### delete from master
- `git checkout master`
- `git reset HEAD~ --hard`
### Git won't do a diff of files add to staging area without this flag. 
- `git diff --staged`

# Resources
- [Github](https://try.github.io/)
- [Atlassian-Git](https://www.atlassian.com/git/tutorials)
- [Tower](https://www.git-tower.com/learn/)
- [OshitGit](http://ohshitgit.com/)
- [Learn Enough](https://www.learnenough.com/git-tutorial)
- [FreeCodeCamp](https://medium.freecodecamp.org/how-you-can-learn-git-and-github-while-youre-learning-to-code-7a592ea287ba)
- [Hackernoon](https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333)
