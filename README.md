# Google like calculator using RPN algorithm

---

### The back

Express / Typescript API running on port 3001

###### One single route

```ts
const res = await fetch('http://localhost:3001/calculator', {
  method: 'POST',
  body: JSON.stringify({ infix: result }),
  headers: {
    'Content-Type': 'application/json',
  } as unknown as Headers,
});
```

Request Body:

```json
{
  "infix": "2 + 2"
}
```

Request Response:

```json
{
  "Result": "4",
  "Postfix": "2 2 +"
}
```

#### To run the back

```bash
cd back && npm i &&  npm run dev
```

#### To run the front

```bash
cd front && npm i && npm run dev
```

#### To run via Docker

```bash
docker-compose up --build
# Server started on http://localhost:3001
# Client started on http://localhost:3000/
```

### To run the tests

```bash
cd back && npm run test
```

### The front

React app using Vite, TailwindCSS and React context
