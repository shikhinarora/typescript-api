# RUN THIS BEFORE FIRST COMMIT. IT WILL CREATE YOUR FIRST COMMIT BY ITSELF
# PASS REPO NAME AS 1ST PARAMETER

# Remove git folder if exists
rm -rf .git

# Clear currently stored identities:
ssh-add -D

# Add new keys:
ssh-add ~/.ssh/id_rsa_personal

# Test to make sure new keys are stored:
ssh-add -l

# Test to make sure Github recognizes the keys:
ssh -T personalgit

# add origin
git init
git config --local user.name "Shikhin Arora"
git config --local user.email "shikhin.arora@gmail.com"
git add .
git commit -m "first commit"
git remote add origin git@personalgit:shikhinarora/${1}.git
git push -u origin master