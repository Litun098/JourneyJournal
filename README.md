# JourneyJournal Blog Application

Welcome to JourneyJournal, a powerful and versatile blog application designed to chronicle your journey through life's experiences, stories, and reflections. JourneyJournal provides a seamless platform for users to create, share, and discover captivating stories.

## Techs/Dependencies Used

- Node.js
- MongoDB
- Prisma ORM
- cookie-parser
- bcrypt
- and many more...

#### **Clone the repository:**

```
    git clone https://github.com/Litun098/JourneyJournal.git
```

#### **Install dependencies:**

cd journey-journal
cd backend
npm install

#### **Set up environment variables:**

- Create a `.env` file in the root directory.
- Add environment variables such as database connection URI, JWT secret, etc.

#### **Start the development server:**

```
    npm start
```

#### TODO:

## API Endpoints

#### Sign up User

```http
    POST localhost:4000/api/signup
```

| body       | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name`     | `string` | **Required**. Name     |
| `email`    | `string` | **Required**. email    |
| `password` | `string` | **Required**. password |

#### Example

```
    {
        "name":"{{$randomUserName}}",
        "email":"{{$randomEmail}}",
        "password":"password123"
    }
```

#### Signin User

```http
    POST localhost:4000/api/login
```

| body       | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `email`    | `string` | **Required**. email    |
| `password` | `string` | **Required**. password |

#### Example

```
    {
    "email": "Osvaldo14@yahoo.com",
    "password": "password123"
}
```

#### Output

```
    {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjI4YmE4MDljMTlmZmNkNDFlZjQ3N2UiLCJpYXQiOjE3MTM5NDY2NTksImV4cCI6MTcxNDAzMzA1OX0.jcChb21XHV-58L0SJcKjpGX9v1Qn0xgTOlQaSgzwrAE",
    "user": {
        "id": "6628ba809c19ffcd41ef477e",
        "name": "Reina_Dooley22",
        "email": "Eric71@gmail.com",
        "fromGoogle": false,
        "createdAt": "2024-04-24T07:53:36.048Z"
    }
}
```

#### Logout

```http
     localhost:4000/api/logout
```

#### Get all blogs

```http
    GET localhost:4000/api/post
```

#### Output

```
    [
    {
        "id": "66260080fdb7f14fc379856f",
        "slug": "test-slug",
        "title": "Computers Avon RAM",
        "body": "Vel accusamus quaerat voluptatem vero. Ut et quia alias qui ut accusantium tempore consequuntur rerum. Eos quis sequi tenetur nulla ut soluta.",
        "createdAt": "2024-04-22T06:15:27.463Z",
        "authorId": "6625ffcd9225337d86663e71"
    },
    {
        "id": "662600cffdb7f14fc3798570",
        "slug": "test-slug",
        "title": "asymmetric exuding Organic",
        "body": "Eligendi sequi qui velit quibusdam non tenetur molestiae beatae. Labore sed fugiat recusandae sed qui dolore consequatur beatae in. Qui quaerat esse eligendi aut. Ea aut labore voluptas aliquam dolor at quis recusandae quam. Dolorem et quidem ratione tempore non consequatur tenetur voluptas.",
        "createdAt": "2024-04-22T06:16:47.563Z",
        "authorId": "6625ffcd9225337d86663e71"
    },
    {
        "id": "662603f60228b7b8a460ca4a",
        "slug": "test-slug",
        "title": "enterprise Handmade Street",
        "body": "Porro totam nihil fugiat. Aut nemo dolore. Natus ut eius quibusdam quo velit commodi cum debitis non.",
        "createdAt": "2024-04-22T06:30:14.603Z",
        "authorId": "6625ffcd9225337d86663e71"
    },
    {
        "id": "6628c0fd267cefb4e869e085",
        "slug": "test-slug",
        "title": "Market optimize Auto Steel",
        "body": "Aliquam ipsa et rerum velit quas nam quae accusamus sint. Est et aut in tenetur provident aut fugit. Saepe animi animi.",
        "createdAt": "2024-04-24T08:21:17.560Z",
        "authorId": "6628ba809c19ffcd41ef477e"
    }
]
```

#### Get Posts by author Id


```http
    GET localhost:4000/api/post/author/:id
```

#### Output

```
    [
    {
        "id": "66260080fdb7f14fc379856f",
        "slug": "test-slug",
        "title": "Computers Avon RAM",
        "body": "Vel accusamus quaerat voluptatem vero. Ut et quia alias qui ut accusantium tempore consequuntur rerum. Eos quis sequi tenetur nulla ut soluta.",
        "createdAt": "2024-04-22T06:15:27.463Z",
        "authorId": "6625ffcd9225337d86663e71",
        "Comment": [
            {
                "id": "662691a32be2cf9d17c3b168",
                "comment": "Hat Trinidad Belize SCSI",
                "createdAt": "2024-04-22T16:34:42.338Z",
                "authorId": "6625ffcd9225337d86663e71",
                "postId": "66260080fdb7f14fc379856f",
                "author": {
                    "id": "6625ffcd9225337d86663e71",
                    "name": "Jefferey_Buckridge68",
                    "email": "Osvaldo14@yahoo.com",
                    "password": "$2b$08$bmrvWwsYUJI2Xtkgn.zCGuDTmtkn3lFxidEKtDx8jeg.fkwyt54Xq",
                    "createdAt": "2024-04-22T06:12:16.802Z"
                }
            }
        ]
    },
    {
        "id": "662600cffdb7f14fc3798570",
        "slug": "test-slug",
        "title": "asymmetric exuding Organic",
        "body": "Eligendi sequi qui velit quibusdam non tenetur molestiae beatae. Labore sed fugiat recusandae sed qui dolore consequatur beatae in. Qui quaerat esse eligendi aut. Ea aut labore voluptas aliquam dolor at quis recusandae quam. Dolorem et quidem ratione tempore non consequatur tenetur voluptas.",
        "createdAt": "2024-04-22T06:16:47.563Z",
        "authorId": "6625ffcd9225337d86663e71",
        "Comment": [
            {
                "id": "662691ba2be2cf9d17c3b169",
                "comment": "Table Legacy out-of-the-box Kansas",
                "createdAt": "2024-04-22T16:35:06.467Z",
                "authorId": "6625ffcd9225337d86663e71",
                "postId": "662600cffdb7f14fc3798570",
                "author": {
                    "id": "6625ffcd9225337d86663e71",
                    "name": "Jefferey_Buckridge68",
                    "email": "Osvaldo14@yahoo.com",
                    "password": "$2b$08$bmrvWwsYUJI2Xtkgn.zCGuDTmtkn3lFxidEKtDx8jeg.fkwyt54Xq",
                    "createdAt": "2024-04-22T06:12:16.802Z"
                }
            }
        ]
    },
    {
        "id": "662603f60228b7b8a460ca4a",
        "slug": "test-slug",
        "title": "enterprise Handmade Street",
        "body": "Porro totam nihil fugiat. Aut nemo dolore. Natus ut eius quibusdam quo velit commodi cum debitis non.",
        "createdAt": "2024-04-22T06:30:14.603Z",
        "authorId": "6625ffcd9225337d86663e71",
        "Comment": [
            {
                "id": "662676d84156a99aa7dbb680",
                "comment": "Bedfordshire Avon",
                "createdAt": "2024-04-22T14:40:23.997Z",
                "authorId": "6625ffcd9225337d86663e71",
                "postId": "662603f60228b7b8a460ca4a",
                "author": {
                    "id": "6625ffcd9225337d86663e71",
                    "name": "Jefferey_Buckridge68",
                    "email": "Osvaldo14@yahoo.com",
                    "password": "$2b$08$bmrvWwsYUJI2Xtkgn.zCGuDTmtkn3lFxidEKtDx8jeg.fkwyt54Xq",
                    "createdAt": "2024-04-22T06:12:16.802Z"
                }
            },
            {
                "id": "6626928aef62454545aebae3",
                "comment": "bypassing Factors RAM eyeballs interface",
                "createdAt": "2024-04-22T16:38:34.548Z",
                "authorId": "6625ffcd9225337d86663e71",
                "postId": "662603f60228b7b8a460ca4a",
                "author": {
                    "id": "6625ffcd9225337d86663e71",
                    "name": "Jefferey_Buckridge68",
                    "email": "Osvaldo14@yahoo.com",
                    "password": "$2b$08$bmrvWwsYUJI2Xtkgn.zCGuDTmtkn3lFxidEKtDx8jeg.fkwyt54Xq",
                    "createdAt": "2024-04-22T06:12:16.802Z"
                }
            },
            {
                "id": "6628c111267cefb4e869e086",
                "comment": "portals leading-edge reintermediate",
                "createdAt": "2024-04-24T08:21:37.536Z",
                "authorId": "6628ba809c19ffcd41ef477e",
                "postId": "662603f60228b7b8a460ca4a",
                "author": {
                    "id": "6628ba809c19ffcd41ef477e",
                    "name": "Reina_Dooley22",
                    "email": "Eric71@gmail.com",
                    "password": "$2b$08$GtfUjj0kDLvEUlXw/uoAY.eo4mzK8dI/qVWEib9qQhT9ShGbbE6y2",
                    "createdAt": "2024-04-24T07:53:36.048Z"
                }
            }
        ]
    }
]
```

#### Get Post By Post Id


```http
    PUT localhost:4000/api/post/:id
```

#### Output

```
    {
    "id": "662603f60228b7b8a460ca4a",
    "slug": "test-slug",
    "title": "enterprise Handmade Street",
    "body": "Porro totam nihil fugiat. Aut nemo dolore. Natus ut eius quibusdam quo velit commodi cum debitis non.",
    "createdAt": "2024-04-22T06:30:14.603Z",
    "authorId": "6625ffcd9225337d86663e71",
    "Comment": [
        {
            "id": "662676d84156a99aa7dbb680",
            "comment": "Bedfordshire Avon",
            "createdAt": "2024-04-22T14:40:23.997Z",
            "authorId": "6625ffcd9225337d86663e71",
            "postId": "662603f60228b7b8a460ca4a"
        },
        {
            "id": "6626928aef62454545aebae3",
            "comment": "bypassing Factors RAM eyeballs interface",
            "createdAt": "2024-04-22T16:38:34.548Z",
            "authorId": "6625ffcd9225337d86663e71",
            "postId": "662603f60228b7b8a460ca4a"
        },
        {
            "id": "6628c111267cefb4e869e086",
            "comment": "portals leading-edge reintermediate",
            "createdAt": "2024-04-24T08:21:37.536Z",
            "authorId": "6628ba809c19ffcd41ef477e",
            "postId": "662603f60228b7b8a460ca4a"
        }
    ]
}
```


#### Dummy Data

#### Example

```
   PUT localhost:3000/api/post/:id
```

```

#### Output

```
    {
        "message": "User record has been updated successfully."
    }
```

#### Create ticket

```http
    POST localhost:3000/crm/api/ticket/
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

| body             | Type     | Description                       |
| :--------------- | :------- | :-------------------------------- |
| `title`          | `string` | **Required**. title of the ticket |
| `ticketPriority` | `string` | Priority of the ticket            |
| `description`    | `string` | Description                       |
| `status`         | `string` | Status open or closed             |

#### Example

```
    {
        "title":"The first ticket",
        "ticketPriority":2,
        "description":"Random description for random ticket",
        "status": "OPEN"
    }
```

#### Output

```
    {
        "ticket": "The first ticket",
        "ticketPriority": "2",
        "description": "Random description for random ticket",
        "status": "OPEN",
        "reporter": "dibya123",
        "assignee": "litun12345",
        "id": "63b5babf0e3bf0ba61c233a7",
        "createdAt": "2023-01-04T17:43:27.495Z",
        "updatedAt": "2023-01-04T17:43:27.495Z"
    }
```

#### Update ticket

```http
    PUT localhost:3000/crm/api/ticket/:id
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

| params | Type     | Description                                 |
| :----- | :------- | :------------------------------------------ |
| `id`   | `string` | **Required**.Id of the ticket to be updated |

| body             | Type     | Description                          |
| :--------------- | :------- | :----------------------------------- |
| `title`          | `string` | title of the ticket to be updated    |
| `ticketPriority` | `string` | Priority of the ticket to be updated |
| `description`    | `string` | Description to be updated            |
| `status`         | `string` | Status open or closed to be updated  |

#### Example

```
    PUT localhost:3000/crm/api/ticket/63b5babf0e3bf0ba61c233a7
```

```
    {
        "status": "CLOSED"
    }
```

#### Output

```
    {
        "ticket": "The first ticket",
        "ticketPriority": "2",
        "description": "Random description for random ticket",
        "status": "CLOSED",
        "reporter": "dibya123",
        "assignee": "litun12345",
        "id": "63b5babf0e3bf0ba61c233a7",
        "createdAt": "2023-01-04T17:43:27.495Z",
        "updatedAt": "2023-01-04T17:43:27.495Z"
    }
```

#### Get ticket by Id

```http
    PUT localhost:3000/crm/api/ticket/:id
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

| Query params | Type     | Description                   |
| :----------- | :------- | :---------------------------- |
| `id`         | `string` | **Required**.Id of the ticket |

#### Output

```
    [
        {
            "ticket": "The first ticket updated",
            "ticketPriority": "2",
            "description": "Random description for random ticket",
            "status": "CLOSED",
            "reporter": "dibya123",
            "assignee": "litun12345",
            "id": "63b5babf0e3bf0ba61c233a7",
            "createdAt": "2023-01-04T17:43:27.495Z",
            "updatedAt": "2023-01-04T17:43:27.495Z"
        }
    ]
```

## Contributors

- [Dibyakanta Nayak](https://github.com/Litun098/)
