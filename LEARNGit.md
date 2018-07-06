# **Learn** Git

_"Git is hard: screwing up is easy, and figuring out how to fix your mistakes is fucking impossible.- from: OShitGit"_  

## Basic Git Commands (see [Git Cheatsheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf))
Common git commands in day-to-day workflow
#### CREATE REPO: (Start new repository/Obtain one from an existing URL)
-  `$ git init`(Create an empty git repo/reinitialize an existing one)
-  `$ git init [project-name]` (Create new local repository with specified name)
-  `$ git clone [url]` (Downloads project and entire version history)
#### FORK A REPO
Click the `"Fork"` button at the top-right of any repository's GitHub page.
#### CLONE A REPO 
-  `$ git clone https://github.com/<username>/foo.git foo`(Clone a repo into a new directory called foo):
#### SETUP REMOTES:
-  `$ git remote -v` (see list of repositories (remotes) whose branches you track)
#### MAKE CHANGES: (Review edits and craf a commit transaction)
- `$ git status` (Lists all new/modified files to be commited)
- `$ git add [file]` (Snapshots file in preparation for versioning)
- `$ git reset [file]`(Unstages file, preserve its contents)
- `$ git diff`(Shows file differences, not yet staged)
- `$ git diff --staged`(Shows file differences, between staging - last file version)
- `$ git commit -m "[descriptive message]"`(Records file snapshots permanently in version history)

## TROUBLE SHOOTING
- `git reflog`(list all git steps (`index HEAD@{index}`)
- `git reset HEAD@{index}` (find last git step before it breaks)
- `git add . #` or add individual files (make change)
- `git commit --amend` (change or keep commit.The last commit contains change) 
- `git branch some-new-branch-name`(create new branch from current state/master)
- `git reset HEAD~ --hard` (remove commit from master branch)
- `git checkout some-new-branch-name` (commit lives in branch)
- `git checkout name-of-the-correct-branch`/- `git cherry-pick master` (grab last commit to master)
- `git checkout master` OR  `git reset HEAD~ --hard` (delete from master)
- `git diff --staged` (Git won't do a diff of files add to staging area without this flag.)

# Resources
- [Github](https://try.github.io/)
- [GitHub Branching](https://learngitbranching.js.org/)
- [Atlassian-Git](https://www.atlassian.com/git/tutorials)
- [Git Branching Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Tower](https://www.git-tower.com/learn/)
- [OshitGit](http://ohshitgit.com/)
- [Learn Enough](https://www.learnenough.com/git-tutorial)
- [FreeCodeCamp](https://medium.freecodecamp.org/how-you-can-learn-git-and-github-while-youre-learning-to-code-7a592ea287ba)
- [Hackernoon](https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333)
