// console.log('Step 1: Start boiling');
// console.log('Step 2: Add pasta to the pot');
// console.log('Step 3: Stir and wait for 10 minutes');

// const blockingTask = () => {
//   console.log('Step 1: Start a long-running task');
//   // simulate a blocking task
//   const startTime = Date.now();
//   while (Date.now() - startTime < 5000) {

//   }
//   console.log("Step 2: Long-running task finished");

// }
// console.log('Before calling blocking task');

// blockingTask()

// console.log('After calling blocking task');

// ! Async code

// console.log('Task 1');
// setTimeout(() => {
//    console.log('Task 2 (Delay)');

//  },2000)
// console.log('Task 3');

// ? Event loop

// * callback

// Weather app
// api(mimic)
// frontend app

// const fetchData = (callback) => {
//   // operation api
//   console.log("fetching weather data...");
//   // simulate api call

//   setTimeout(() => {
//     console.log("Weather data fetched succesfully!");
//     callback()
//   }, 2000);
// };

// const processData = () => {
//   console.log('processing weather data to display temperature and conditions');

// }

// // invoke
// fetchData(processData)

// ! Components of HTTP Request
// HTTP: Hypertext transfer protocol
// ? .Method(HTTP VERB)
// GET- Retrieve data
// POST- Sending data to server
// PUT- Update
// DELETE- Deleting
// ?URL-Uniform Resource Locator -https://example.com//api
// ?Headers
// ?Body

// HTTP Client
// fetch - default
// axios - third party

// Making http request

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//   return response
//     .json()
//     .then((posts) => {
//       console.log("Posts fetched sucessfuly", posts);
//     })
//     .catch((error) => {
//       console.log("Error fetching post", error);
//     });
// });

// fetch user details API https://https://jsonplaceholder.typicode.com/users/2
// users post https://jsonplaceholder.typicode.com/posts?userId=2
// ! call back
// const fetchUserData = (callback) => {
//   fetch("https://jsonplaceholder.typicode.com/users/10")
//     .then((response) => {
//       return response.json().then((userData) => {
//         console.log("User details fetched", userData);
//         //  callback function
//         callback(userData.id);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const fetchUserPost = (userId) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then((response) => {
//       return response.json().then((posts) => {
//         console.log('Users posts:', posts);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchUserData(fetchUserPost);

// ? Promises
// * Create promise
// const myPromise = new Promise((resolve, reject) => {
//   // Perform async task
//   let success = true;
//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });
// * Consume promise

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Operation call');

//   });

// ! Promise example
// ! Create promise

// !Consome Promsie

// const fetchData = fetch("https://jsonplaceholder.typicode.com/albums");

// fetchData
//   .then((response) => {
//     return response.json().then(
//       (data) => {
//         console.log(data);

//       }
//     )

//   })
//   .catch((error) => {
//     console.log(error);

//   })
//   .finally(() => {});
// * refactored
// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => {
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {});


// ! Async Await
const fetchAlbum = async () => {
  try {
    // success
    const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await albumsResponse.json()
    albums.forEach((album) => {
      console.log(album);
      
    })
    
    
    
  } catch(error){
    // failure
    console.log(error);
    
  }
} 

fetchAlbum()