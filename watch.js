import { startPathWatcher } from "next-path-helper/dist/utils/watch.js";

if (process.env.NODE_ENV !== "production") {
  startPathWatcher();
} else {
  console.log("Watcher not started in production environment");
}
