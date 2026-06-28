## Summary

Describe the changes made and the problem being solved.

## Type of change
- Bug fix
- New feature
- Chore/maintenance

## Changes
- What changed
- Any important files added/modified

## How to test
Steps to reproduce or verify the change:
1. 
2. 

## Checklist
- [ ] My code follows the repository style
- [ ] I have added tests where necessary
- [ ] I updated the documentation where necessary

## Reviewer checklist
- Run `npm install` and `npm run dev` in `backend` and `npm install` + `npm run start` in `frontend`.
- Confirm `GET http://localhost:4000/health` returns `{"status":"ok"}`.
- Confirm `GET http://localhost:4000/api/projects` returns mock projects JSON.
- Open `http://localhost:3000/` and verify the frontend loads and sections render.
- Confirm no unrelated files were modified in the PR.

---
Thanks for your contribution! Please include screenshots or relevant logs if applicable.
