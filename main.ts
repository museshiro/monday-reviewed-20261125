import { mkdirSync, writeFileSync } from "node:fs";

const review = "Monday: one star. Twelve people, zero updates at the 9 AM stand-up, "
  + "and one guy said 'same as Friday' like it was breaking news.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
