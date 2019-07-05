# Beleaf Food Challange

`docker run --name beleafdb -d -t mysql -p 3306:3306`

**Users**

`POST /user`

Create User

`{ "name": "Nicolas", "email": "nicolas.tanski@gmail.com", "password": "123123" }`

**Auth**

`POST /auth`

Auth User

`{ "email": "nicolas.tanski@gmail.com", "password": "123123" }`

**Lunches**

`GET /lunches`

List all lunches

`GET /lunches?page=2`

Paginate lunches

`GET /lunches?order='desc'`

Order lunches

`GET /lunches?page=2&order='asc'`

Paginate and order lunches

`GET /lunches/:id`

Show lunch

`POST /lunches`

Create Lunch

```
{
    "name": "Marmita",
    "description": "Marmita",
    "price": "20",
    "ingredients": "Sopa",
    "amount": "10",
    "url": "http://teste.com",
    "percentage": "2"
}
```
