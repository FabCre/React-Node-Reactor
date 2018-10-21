# .gitconfig model

```
[user]
  name = mel0mani4
  email = luna.o.valente@gmail.com
[push]
  default = simple
[pull]
  rebase = true
[alias]
  st = status
  df = diff
  co = checkout
  ci = commit
  br = branch
  amend = commit --amend
  undo = git reset --soft HEAD^
  addu = add -u # stages modified & deleted ("git add ." stages new & modified)
  adda = add -A # stages ALL
```

The most important line is the pull set to rebase.
It secures the eventual history modifications and unmatches.

> NB: `.gitconfig` is a hidden file that is to be found where you have installed git.

# Commit messages, issues / PR and branches namespacing conventions

> Cf https://karma-runner.github.io/2.0/dev/git-commit-msg.html for `<TYPE>` and `<scope>` values list.

## Commit format

```
[<TYPE> - <scope>] <subject>
> empty line
<body>
```

The first line will be the title of your commit message.
> /!\ Be careful not to exceed **80 characters** (otherwise, your title will be cropped).
The `<TYPE>` can be empty, if it concerns the whole branch and is already indicated in the branch namespace (cf below, 'Branch naming' section).
The `<scope>` can be empty, if the change is global or difficult to assign to a single component.

The `<body>` is not compulsory, but strongly recommended.
It allows you to explain what's been done: your motivation for the change and the contrast with the previous behavior.
Use the imperative, present tense for simpler and quicker writing.

> NB: These recommandations are **mostly** interesting for naming issues and pull requests. 
> The `<subject>` would be equivalent to their title, the <body> would be equivalent to their description.


## Commit example

```
FIX[style] Alignment when no content
> empty line
Responsive-proof, IE9+ fiendly.
```


## Branch naming

Naming convention for branches is based on the `<TYPE>` element.
The git command is:
`git co -b your-branch-name`

## Branch naming examples 

```
feat/big-boss-IA
fix/responsive-alignment
```


# Process

## 0. Motto

BEFORE you attempt ANYTHING risky (like a git command you're not used to), PLEASE don't hesitate to create a `your-branch-name_COPY` branch of your current branch!!

Thereby, if something tricky happens, your work will never be lost.

## 1. Issue creation

Each ticket / cart is equivalent to a GitHub issue.
Please link the Trello cart associated on its description box.

## 2. Pull request creation

Each issue is "fixed" through a PR. PR == a branch.

**/!\ In order to create a branch, you must first go to the base branch (aka `staging`) and `git pull` in order to be up-to-date.**

Then, you need to create a new branch in your terminal:
`git co -b your-branch-name`
and then push a first commit on it:
`git push --set-upstream origin your-branch-name`
to be able to create your PR on the GitHub platform.

On the root page of the project, right after `push`, you'll see a yellow link that will allow you to do so.

During the PR creation, you have to be careful about 2 things:

- The base branch on which your PR will be merged with in the future (`staging` instead of `master` for instance).

- Indicating in its description box, the issue that it will fix:
`Fixing #issueID`

> NB: By doing so, once the PR is merged and therefore closed, it will also close the associated issue ;-)

## 3. Pull request evolution

- Assign the PR to the right contributor(s).

- Assign a reviewer (don't hesitate to ping collaborators).

- Set the right labels: `work in progress`, `waiting review`, etc.

- List all the things that will be done in the PR.

> NB: You can whether list these things on the Trello cart, or in the PR description... or both. It's kind of up to you.
> Trello carts are written in french, PRs in english; my personal preference is to list the tasks directly in the PR description, as all the coding stuff, history and tracking is GitHub related.

Once you're done, at least one pal must review your work, and weather confirm it's ready to be merged on the `staging` branch, or ask for changes.

If it needs changes, re-set the label to `work-in-progress` while you're working on them, and once you're done, re-ask for review with the label `waiting review`.
Don't hesitate to ping your collaborators to review your work (or asigning them as the reviewer of your PR). 

> NB: Everyone should spend something like an hour per day on reviewing teamworkers PRs :-)

Once everything is ready, ping the git master of your project, for him/her to merge your PR into the main branch (`staging`).

## 4. Project evolution

Once a week, after everything is OK and tested by all the team, `staging` will be rebased on the `master` branch by the admin: `git rebase staging master`.


# Markdown reminder

> Cf https://guides.github.com/features/mastering-markdown/ for more!

- `# Title`
- `## Subtitle`
- `### Sub-subtitle`
- `_your text_` or `*your text*`: *italic*
- `__your text__` or `**your text**`: **bold**
- `---`: separation
- `- [ ]`: unchecked box
- `- [x]`: checked box


# Git daily use reminder

If you have edited anything on your working directory and need to `git pull`, you must whether `git ci` (according to your aliases, equals `git commit`) or `git stash`.
This last command allows you to make a draft (with its own ID) of all your modifications.
Then, if you want all your modifications back on your working directory / out of draft, run `git stash pop`. Or else, if you want to get rid of your stash, run `git stash drop`.

> NB: Instead of the well known `git ci -m` I recomend you using only `git ci`. It'll encourage you to provide a body message to your commit.

If you have `git add` too quickly, too many files and want to cancel and redo it, you can run `git reset HEAD .`. Simple. Basic.

> NB : `git add -p` is your BFF (along with `git st`). 
> You can also run `git add file-in-particular.scss -p` ;-)

If you have `git ci` too quickly, you can edit your commit (for instance, if you want to change its title, body comment, or even add files changes to it) you can use `git amend` (according to your aliases, equals `git commit --amend`)
Just `git add` your eventual modifications and then run `git amend`.

> NB: Careful, if you `amend` a commit that you have already `git push`, it'll change the git history, so you'll need to `push -f` :scream: 

`git co` (according to your aliases, equals `git checkout`) is mainly useful for 3 different things:
- `git co some-branch`: will teleport you to the `some-branch` branch.
- `git co <SHA-1>`: will teleport you to the commit related to the SHA-1 you indicated.
- `git co file.scss`: will reset the file.scss back to the state it was last time you `git commit` (or `git ci`).
- `git co .`: will reset ALL your modifications back to your last `git commit` (or `git ci`); your working directory will be clean.

Last, but not least, if you want to delete a branch, you must `git checkout` (or `git co`) to another one, and then run:
`git branch branch-to-delete -d`.
If it does not work, double check you're sure of what you're doing, and then try with uppercase: `git branch branch-to-delete -D`.


### Dealing with conflicts

Be careful, if your PR has conflicts with the base branch (as you'll see on your GitHub PR page), you must resolve them.

First, go to your base branch (`staging`) and run:
```
git pull
```

Then, go back to your PR branch, and run:
```
git rebase staging your-branch-name
```

This will apply `staging` commits to your branch, and THEN your own commits, one by one. It'll allow you to resolve the conflicts.

If you run `git st` (alias for `git status`), you'll see in red the file(s) that have conflict(s).

A conflict looks like this:
```
Rebased branch code lines
```

Select the lines you want to keep (you can even make a mix of both sides) and, once the conflict is resolved in the file (be careful, sometimes there are several conflicts in one file), you can `git add your-resolved-file`. You'll then see this file in green in your terminal.

Once every file is green (that is, resolved and `git add`), run:
```
git rebase --continue
```

Do this until there's no more conflict left, which will mean that the rebase is done :+1:

> Please don't hesitate to ping your admin the first time you need to rebase, it can be a tricky thing to deal with the first times.

---

If you have any suggestion or edit you would like to see on these recommendations, please feel free to let me know!!
