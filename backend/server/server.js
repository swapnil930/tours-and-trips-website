import jsonServer from "json-server";
import tours from "./tours.json" assert { type: "json" };
import destinations from "./destinations.json" assert { type: "json" };
import bookings from "./bookings.json" assert { type: "json" };

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Combine all JSON files into one API
const router = jsonServer.router({
  tours,
  destinations,
  bookings
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes example (optional)
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.use(router);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server running at http://localhost:${PORT}`);
});
