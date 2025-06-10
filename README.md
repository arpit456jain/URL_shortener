# URL_shortener
Its a url shortener  react app 
<img width="959" alt="image" src="https://github.com/user-attachments/assets/8ade1d63-c5e3-497f-a3fb-8500e833c946" />


## 📡 API Endpoints

### 🔐 Authentication APIs

#### ➕ `POST /api/register`
Registers a new user.

**Request Body:**
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "username": "john123",
  "password": "securePassword"
}
```

##### Response
```
{
  "message": "User created successfully!"
}
```

#### 🔑 `POST /api/login`
Logs in an existing user.

Request Body:
```
{
  "username": "john123",
  "password": "securePassword"
}
```

##### Success Response:

```
{
  "message": "Login successful",
  "user_id": 1,
  "username": "john123",
  "name": "John Doe"
}
```

### 🔗 URL Shortener APIs
#### ✂️ `POST /api/shorten`
Shortens a URL for a specific user.

Request Body:
```
{
  "userId": 1,
  "original_url": "https://example.com"
}
```
##### Response
```
{
  "id": 10,
  "user": 1,
  "original_url": "https://example.com",
  "short_code": "abc123"
}
```

