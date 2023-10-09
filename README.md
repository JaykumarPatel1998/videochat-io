# videoconnect.io
## WebRTC-Firebase Video Chat

author: Jaykumar Patel

This project is a real-time video chat application built using WebRTC and Firebase.
Vue 3 was used a client side javascript framework to create a single page application

## Overview

The application uses WebRTC for peer-to-peer audio, video, and data communication, and Firebase for signaling - the process of coordinating communication and exchanging metadata between peers.

## Features

- Real-time video chat between multiple clients
- Signaling via Firebase Firestore
- Exchange of ICE candidates for NAT traversal

## How It Works

1. A client (Client A) creates a WebRTC offer which includes information about their media capabilities and network information.
2. Client A sends this offer to another client (Client B) by saving it in the Firestore database.
3. Client B listens for new documents in the Firestore collection. When it detects the new offer document, it creates a WebRTC answer and sends this back to Client A by updating the Firestore document with the answer data.
4. Both clients exchange ICE candidates (potential network paths for the peer-to-peer connection) by adding and listening for new documents in subcollections of the offer document in Firestore.
5. Once both clients have exchanged offers, answers, and ICE candidates, they establish a peer-to-peer connection and can start streaming audio, video, or data in real time.

## Prerequisites

- Node.js
- Firebase account

## Installation

1. Clone this repository: `git clone https://github.com/JaykumarPatel1998/videochat-io.git`
2. Install dependencies: `npm install`
3. Set up your Firebase project and enable firebase authentication using email and password, also create a firestore database. create a file named 'firebase.js' in your root folder
```sh
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    //...firebase config here
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//Get authentication info
export const auth = getAuth(app);
```
4. Start the server: `npm run dev`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
