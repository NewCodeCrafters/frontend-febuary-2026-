// let promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve(["Bello", "Jonathan", "Gideon", "Opeyemi"]), 1000);
//   //   reject("THis is an error");
//   resolve(["Bello", "Jonathan", "Gideon", "Opeyemi"]);
// });

// promise
//   .then((result) => {
//     console.log(result);
//     return result.filter((value) => value.includes("n"));
//   })
//   .then((result) => {
//     console.log(result);
//     return result.map((value) => value[0]);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("All done");
//   });

function getGreeting() {
  return new Promise((resolve, reject) => {
    resolve("Hello World");
  });
}

const greetingPromise = getGreeting();

// greetingPromise.then((greeting) => console.log(greeting));

function delayedMessage(msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(msg), ms);
  });
}

// const delayFor1s = delayedMessage("Hey this is a message", 10000);

// delayFor1s.then((result) => console.log(result));

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Is okay");
    } else {
      reject(new Error("Is not old enough"));
    }
  });
}

const adult = checkAge(20);

adult
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const users = [
  {
    id: 1,
    name: "Gideon",
  },
  {
    id: 2,
    name: "Jonathan",
  },
];

const posts = [
  {
    message: "THis is from Gideon",
    userId: 1,
  },
  {
    message: "THis is from Jonathan",
    userId: 2,
  },
  {
    message: "THis is another on from Jonathan",
    userId: 2,
  },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);

    if (user) {
      resolve(user);
    } else {
      reject(new Error("User not found"));
    }
  });
}

function getPostsForUser(user) {
  return posts.filter((post) => post.userId == user.id);
}

// getUser(2)
//   // .then((user) => getPostsForUser(user))
//   .then(getPostsForUser)
//   .then((post) => {
//     console.log(post);
//     return post.map((post) => post.message);
//   })
//   .then((postTitles) => {
//     console.log(postTitles);
//     console.log(postTitles.length);
//   })
//   .catch((error) => console.error(error));

// async function getPostsForUser2(userId) {
//   //  getUser(userId)
//   //   .then(getPostsForUser)
//   //   .then((post) => {
//   //     console.log(post);
//   //     return post.map((post) => post.message);
//   //   })
//   //   .then((postTitles) => {
//   //     console.log(postTitles);
//   //     console.log(postTitles.length);
//   //   })
//   //   .catch((error) => console.error(error));

//   try {
//     const user = await getUser(userId);

//     const usersPost = getPostsForUser(user);
//     const postTitles = usersPost.map((post) => post.message);
//     console.log(postTitles);
//   } catch (error) {
//     console.log("Error from post");
//     console.error(error);
//   }
// }

// getPostsForUser2(1);
