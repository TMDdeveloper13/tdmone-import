# tdmone-import


change database credentials in .env and sequelize.json file
 
run
npx sequelie-cli db:create
npx sequelie-cli db:migrate
npx sequelie-cli db:seed:all
 
after that
http://localhost:9001/api/v1/invoice/import
upload excel file in form-data (key:files)