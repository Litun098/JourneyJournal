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

| body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `userId`   | `string` | **Required**. unique userId |
| `password` | `string` | **Required**. password      |

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

#### Get all users

**_NOTE:_** user should be ADMIN.

```http
    POST localhost:3000/crm/api/users
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

#### Output

```
    [
        {
            "name": "Litun",
            "userId": "admin",
            "email": "nayaklitun9@gmail.com",
            "userTypes": "ENGINEER",
            "userStatus": "APPROVED"
        },
        {
            "name": "Litun Nayak",
            "userId": "litun123",
            "email": "litunnayak09@gmail.com",
            "userTypes": "ADMIN",
            "userStatus": "APPROVED"
        },
        {
            "name": "Litun Nayak",
            "userId": "litun1231",
            "email": "litunnayak9@gmail.com",
            "userTypes": "CUSTOMER",
            "userStatus": "APPROVED"
        }
    ]
```

#### Get user by userId

**_NOTE:_** user should be ADMIN.

```http
    POST localhost:3000/crm/api/users/:userId
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

#### Example

```
   GET localhost:3000/crm/api/users/admin
```

#### Output

```
    {
        "_id": "63a6e6cd4851254b90ea931c",
        "name": "Litun",
        "userId": "admin",
        "password": "$2b$10$oYimYk0DBzDw/vy0Y28Rdu1fy0M4Z0pjaiyCgzcES9IBTuqW1PhX.",
        "email": "nayaklitun9@gmail.com",
        "userTypes": "ENGINEER",
        "userStatus": "APPROVED",
        "createdAt": "2022-12-24T11:47:25.784Z",
        "updatedAt": "2022-12-24T11:47:25.784Z",
        "__v": 0
    }
```

#### Get user by userId and update userStatus

**_NOTE:_** user should be ADMIN.

```http
    PUT localhost:3000/crm/api/users/:userId
```

| header           | Type     | Description         |
| :--------------- | :------- | :------------------ |
| `x-access-token` | `string` | **Required**. token |

| path params | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `userId`    | `string` | **Required**. user id |

| body         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `userStatus` | `string` | **Required**. update userStatus |

#### Example

```
   PUT localhost:3000/crm/api/users/admin
```

```
    {
    "userStatus":"APPROVED"
    }
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
