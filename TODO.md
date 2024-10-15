### Todo list brainstorming notes and thoughts

- [ ] Room creation & Joining
- [ ] WebRTC flow
- [ ] Handle exit with beforeunload Event
- [ ] Signaling server (written in Go?)


- WebRTC Connection Flow

    Room Creation:
        When a user creates a room, an entry is made in the rooms table.
        Optionally, create an entry in the users table for the creator.

    Joining a Room:
        When a user joins a room, an entry is made 
        in the users table associated with the room_id.
        Notify existing participants that a new user has 
        joined (this could be done via WebSocket).

    Signaling:
        Use a signaling server (WebSocket) to exchange offer/answer
        and ICE candidates between users.
        Store signaling messages in the signaling table if needed for 
        debugging or if users reconnect.

    ICE Candidate Exchange:
        As participants gather ICE candidates, send them through the 
        signaling server to the respective peer.

- Handle exits

    You can listen for the beforeunload event in the browser to detect 
    when a user is about to leave the page. When this event is 
    triggered, you can send a request to your server to remove the user 
    from the room.
