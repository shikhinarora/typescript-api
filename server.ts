import app from "./app";

const port = app.get('port');

const server = app.listen(port, () => {
  console.log(
    "App is running on http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;