import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const client = io('http://localhost:3001')
export default function Home() {
  const [votes, setVotes] = useState({ });

  useEffect(() => {
    client.on('getVotes', (vote) => setVotes(vote));
  }, []);

  const handleClick = (e) => {
    setVotes(e);
    client.emit('updateVote', votes)
  };

  return (
    <div>
    {
      <iframe width="800" height="600" src="https://www.youtube.com/embed/kl4wkIPiTcY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    <div style={{display: 'flex'}}>
      <div onClick={() => handleClick(votes.love += 1)}>😍
        {votes.love}
      </div>
      <div onClick={() => handleClick(votes.wow += 1)}>😮
        {votes.wow}
      </div>
      <div onClick={() => handleClick(votes.like += 1)}>😀
        {votes.like}
      </div>
      <div onClick={() => handleClick(votes.meh += 1)}>😑
        {votes.meh}
      </div>
      </div>
    </div>
  )
}
