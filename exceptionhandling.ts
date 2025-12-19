try {
  throw new Error("Something went wrong");
} catch (e: any) {
  console.log(e.message);
} finally {
  console.log("Always runs");
}
