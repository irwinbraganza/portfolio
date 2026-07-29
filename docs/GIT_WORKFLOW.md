# Git Workflow

Standard Git workflow for the portfolio project.

## Branching Strategy

### Main Branches

- **`main`** - Production-ready code
  - Fully tested and verified
  - Deployed to production
  - Protected: requires pull request review

### Feature Branches

- **`feature/<name>`** - New features
  - Example: `feature/add-case-study`
  - Based on `main`
  - Merged back to `main` via PR

- **`fix/<name>`** - Bug fixes
  - Example: `fix/api-cors-issue`
  - Merged to `main` via PR

- **`docs/<name>`** - Documentation updates
  - Example: `docs/update-deployment-guide`
  - No code changes

## Commit Messages

Use semantic commit messages:

```
type: description

Optional detailed explanation
```

### Types

- **feat:** New feature or capability
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style (formatting, semicolons, etc.)
- **refactor:** Code refactoring without feature changes
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **ci:** CI/CD configuration

### Examples

```bash
# New feature
git commit -m "feat: add new case study section"

# Bug fix
git commit -m "fix: api timeout issue on slow networks"

# Documentation
git commit -m "docs: update deployment guide for Cloud Run"

# Code refactor
git commit -m "refactor: simplify api error handling"

# Performance
git commit -m "perf: optimize image loading on hero section"
```

### Guidelines

- Use imperative mood ("add" not "added")
- Start with lowercase
- Be specific ("fix typo" not "fix stuff")
- Keep first line under 50 characters
- Add detailed explanation if needed (separate with blank line)

## Workflow: Adding a Feature

### 1. Create Feature Branch

```bash
# Update main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/my-feature
```

### 2. Make Changes

```bash
# Edit files
# Run tests
pnpm dev

# Stage changes
git add .

# Or be selective
git add apps/api/src/services/data.service.ts
git add docs/CONTENT_EDITING.md
```

### 3. Commit

```bash
git commit -m "feat: add new case study about event-driven systems"
```

### 4. Push

```bash
git push origin feature/my-feature
```

### 5. Create Pull Request

```bash
# Via GitHub web interface:
# 1. Go to repository
# 2. Click "New Pull Request"
# 3. Select main ← feature/my-feature
# 4. Add description
# 5. Request review
```

Or via CLI:

```bash
gh pr create --title "Add new case study" --body "Describes event-driven systems work"
```

### 6. Address Review Comments

```bash
# Make requested changes
git add .
git commit -m "refactor: clarify lesson points per review feedback"
git push origin feature/my-feature

# PR automatically updates
```

### 7. Merge

After approval:

```bash
# Via GitHub: Click "Squash and merge" or "Rebase and merge"
# Or via CLI:
gh pr merge --squash  # Recommended for clean history
```

### 8. Cleanup

```bash
git checkout main
git pull origin main
git branch -d feature/my-feature
```

## Workflow: Hotfix (Production Bug)

### 1. Create Hotfix Branch

```bash
git checkout main
git pull origin main
git checkout -b fix/production-issue
```

### 2. Fix and Test Locally

```bash
pnpm dev
# Verify fix works
```

### 3. Commit and Push

```bash
git add .
git commit -m "fix: api cors issue in production"
git push origin fix/production-issue
```

### 4. Create PR

```bash
gh pr create --title "Fix: Production CORS issue" --body "Critical fix for API"
```

### 5. Fast-track Merge

```bash
# Request expedited review
# Merge when approved
gh pr merge --squash
```

## Undoing Changes

### Undo Local Commits (Not Pushed)

```bash
# See recent commits
git log --oneline -5

# Undo last commit, keep changes
git reset --soft HEAD~1

# Undo last commit, discard changes
git reset --hard HEAD~1

# Undo multiple commits
git reset --soft HEAD~3  # Undo last 3 commits
```

### Undo Pushed Commits

```bash
# Revert (safer - creates new commit)
git revert <COMMIT_HASH>
git push origin feature/my-feature

# Force reset (use with caution!)
git reset --hard <COMMIT_HASH>
git push --force-with-lease  # Safer than --force
```

## Syncing with Main

### Pull Latest Changes

```bash
git checkout feature/my-feature
git pull origin main
# Resolve conflicts if any
```

### Rebase (Cleaner History)

```bash
git checkout feature/my-feature
git rebase main
# Resolve conflicts if any
git push origin feature/my-feature --force-with-lease
```

## Viewing Changes

### See What Changed

```bash
# Since last commit
git diff

# Since last push
git diff origin/feature/my-feature

# Between branches
git diff main..feature/my-feature

# Stat (summary only)
git diff --stat
```

### View Commit History

```bash
# Recent commits
git log --oneline -10

# With graph
git log --graph --oneline --all

# Search commits
git log --grep="api"
git log --author="jane"
```

## Collaboration

### Before Starting Work

```bash
# Update your local main
git fetch origin
git checkout main
git pull origin main

# See existing branches
git branch -a
```

### Reviewing Others' Work

```bash
# Get the PR branch
git fetch origin
git checkout origin/feature/their-feature

# Review code
code .

# Test locally
pnpm dev

# Provide feedback on GitHub

# Once merged
git checkout main
git pull origin main
```

## Branch Protection Rules

Main branch has protection:

- ✅ Require pull request review
- ✅ Require all checks to pass
- ✅ Require branches to be up to date
- ❌ Allow force push (disabled for safety)

This means:

- You can't push directly to main
- You must create a PR
- PR must be reviewed
- Tests must pass
- Branch must be current with main

## Tips & Tricks

### Useful Aliases

```bash
# Add to ~/.bashrc or ~/.zshrc
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git log --oneline"
```

### Stash Changes

```bash
# Save work in progress
git stash

# List stashes
git stash list

# Apply stash
git stash apply
```

### Interactive Rebase

```bash
# Edit last 3 commits
git rebase -i HEAD~3

# Then:
# pick - use commit
# reword - change message
# squash - combine with previous
```

## Common Issues

### Merge Conflicts

```bash
# When pulling/merging, conflicts may occur
git status  # See conflicts

# Edit conflicted files
# Remove <<<<<<, ======, >>>>>>
# Keep desired code

git add <file>
git commit -m "resolve: merge conflicts"
git push
```

### Forgot to Switch Branches

```bash
# Made changes on wrong branch
git stash  # Save changes

# Switch to correct branch
git checkout feature/correct-branch

# Apply changes
git stash pop
```

### Need to Update Message on Pushed Commit

```bash
# Last commit on current branch (not yet merged)
git commit --amend -m "new message"
git push origin branch-name --force-with-lease
```

## Deployment from Git

Deployment is automatic:

- Push to `main`
- GitHub Actions runs tests
- If all pass, auto-deploy to production:
  - Web: Vercel
  - API: Google Cloud Run

Monitor deployments:

```bash
# List recent pushes
gh run list

# View specific deployment
gh run view <RUN_ID>

# Stream logs
gh run view <RUN_ID> --log
```

## Good Habits

1. **Pull before working**
   ```bash
   git pull origin main
   ```

2. **Commit often**
   - Small, logical commits
   - Easier to review and revert

3. **Write good messages**
   - Others (including future you) will thank you

4. **Never commit sensitive data**
   - Use `.gitignore`
   - Check with `git status` before committing

5. **Test before pushing**
   ```bash
   pnpm dev  # Verify locally
   ```

6. **Keep PRs focused**
   - One feature per PR
   - Easier to review and merge

7. **Respond to reviews**
   - Fix issues promptly
   - Engage with feedback

## References

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Visualization Tools](https://git-school.github.io/visualizing-git/)
