export default function ChatResponse({ response }) {
  if (!response) {
    return null;
  }
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();

  const {candidates, useCandidates} = response;
  return (
    <div className='container my-4'>
      {candidates.map((candidate,index) => (
        <div className="card" key={index}>
          <div className="card-header bg-primary text-white">
            Imran's Answer
          </div>
          <div className="card-body bg-primary-subtle">
            <blockquote className="blockquote mb-0">
              <p>{ candidate.content.parts[0].text}</p>
              <footer className="blockquote-footer">Response Time { formattedTime}</footer>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  )
}
