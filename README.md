```yaml
Google like calculator using RPN alorithm
```

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

#### To run the back

```bash
cd back && npm start
```

#### To run the front

```bash
cd front && npm start
```

#### To run via Docker

```bash
docker
```

#### The front

React app using Vite, TailwindCSS and React context
