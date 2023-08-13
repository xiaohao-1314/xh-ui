rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:xiaohao-1314/xh-ui-website.git &&
git push -f -u origin master &&

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:xiaohao-1314/xh-ui-website.git &&
git push -f -u origin master &&

cd -
echo https://xiaohao-1314.github.io/xh-ui-website/