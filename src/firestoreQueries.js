import { collection, doc, addDoc, serverTimestamp, deleteDoc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase.js'

export async function addRoomsToUsers(uid, payload) {
    const userDoc = doc(collection(db, 'users'), uid);
    const roomsCollection = collection(userDoc, 'rooms');
    await addDoc(roomsCollection, {
        name: payload,
        createdAt: serverTimestamp()
    })
}

export async function deleteRoom(uid, payload) {
    const userDoc = doc(collection(db, 'users'), uid);
    const roomsCollection = collection(userDoc, 'rooms');
    const toBeDeletedRoomDoc = doc(roomsCollection, payload)
    await deleteDoc(toBeDeletedRoomDoc)
}

export async function checkInUser(uid, payload) {
    const userDoc = doc(collection(db, 'users'), payload.hostId);
    const roomsCollection = collection(userDoc, 'rooms');
    const toBeFetchedRoomDoc = doc(roomsCollection, payload.roomId)
    
    const snapshot = await getDoc(toBeFetchedRoomDoc)
    if(snapshot.exists()) {
        const attendeedoc = doc(collection(toBeFetchedRoomDoc, 'attendees'), uid) //uid os the person checking in
        await setDoc(attendeedoc, {
            displayName: payload.displayName,
            createdAt: serverTimestamp()
        })
    }
}

export async function deleteAttendee(uid, roomId, attendeeId) {
    const userDoc = doc(collection(db, 'users'), uid);
    const roomsCollection = collection(userDoc, 'rooms');
    const toBeFetchedRoomDoc = doc(roomsCollection, roomId)
    
    const snapshot = await getDoc(toBeFetchedRoomDoc)
    if(snapshot.exists()) {
        const attendeedoc = doc(collection(toBeFetchedRoomDoc, 'attendees'), attendeeId) //uid os the person checking in
        await deleteDoc(attendeedoc)
    }
}

export async function toggleApprove(uid, roomId, attendeeId) {
    const userDoc = doc(collection(db, 'users'), uid);
    const roomsCollection = collection(userDoc, 'rooms');
    const toBeFetchedRoomDoc = doc(roomsCollection, roomId)
    
    const snapshot = await getDoc(toBeFetchedRoomDoc)
    if(snapshot.exists()) {
        const attendeedoc = doc(collection(toBeFetchedRoomDoc, 'attendees'), attendeeId) //uid os the person checking in
        const attendeeSnapshot = await getDoc(attendeedoc)
        const approved = attendeeSnapshot.data().approved
        if (approved) {
            await updateDoc(attendeedoc, {
                approved: !approved
            })
        } else {
            await updateDoc(attendeedoc, {
                approved: !approved
            })
        }
    }
}

export function createCallDoc(hostId, roomId) {
    const usersCollection = collection(db,'users')
    const roomsCollection = collection(doc(usersCollection, hostId), 'rooms')
    const attendeesCollection = collection(doc(roomsCollection, roomId), 'attendees')
    const callDoc = doc(attendeesCollection, hostId)
    return callDoc
}

export function getCallDocById(hostId, roomId) {
    const usersCollection = collection(db,'users')
    const roomsCollection = collection(doc(usersCollection, hostId), 'rooms')
    const attendeesCollection = collection(doc(roomsCollection, roomId), 'attendees')
    const callDoc = doc(attendeesCollection, hostId)
    return callDoc
}

export function getOfferDoc(callDoc) {
    const offerCandidatesCollection = collection(callDoc, 'offerCandidates')
    return offerCandidatesCollection
}

export function getAnswerDoc(callDoc) {
    const answerCandidatesCollection = collection(callDoc, 'answerCandidates')
    return answerCandidatesCollection
}

export async function setOffer(callDoc, offer) {
    await setDoc(callDoc, {offer})
}

export function createOfferCandidate(callDoc) {
    const offerCandidatesCollection = collection(callDoc, 'offerCandidates')
    return offerCandidatesCollection
}

export async function addOfferCandidate(offerCandidates, data) {
    await addDoc(offerCandidates, data)
}

export function createAnswerCandidate(callDoc) {
    const answerCandidatesCollection = collection(callDoc, 'answerCandidates')
    return answerCandidatesCollection
}

export async function addAnswerCandidate(answerCandidates, data) {
    await addDoc(answerCandidates, data)
}