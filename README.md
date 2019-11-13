# Simple App

# Feature Branch

### Start with the master branch
###### All feature branches are created off the latest code state of a project. This guide assumes this is maintained and updated in the master branch.

```
git checkout master
git fetch origin
git reset --hard origin/master
```
###### This switches the repo to the master branch, pulls the latest commits and resets the repo's local copy of master to match the latest version.

### Create a new-branch
###### Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.
```
git checkout -b new-feature
```

### Update, add, commit, and push changes
###### On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on Bitbucket.

``` 
git status
git add <some-file>
git commit
```

### Push feature branch to remote
###### It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.

```
git push -u origin new-feature
```



# Submitting a Pull Request
```
git checkout master
git fetch origin
git reset --hard origin/master

```