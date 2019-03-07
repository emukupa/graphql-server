import server from './app';
const PORT = process.env.PORT || 8080;

server.listen(PORT, err => {
  if (err) return console.log(`\u274c  Encountered an error: ${err}.\n`);
  console.log(`\u2705  Server is running on port ${PORT}.\n`);
});
