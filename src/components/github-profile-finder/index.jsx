import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css"

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Mufaro1410");
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  function handleSubmit() {
    fetchGithubUserData()
  }

  async function fetchGithubUserData() {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    if (data) {
        setUserData(data)
        setLoading(false)
        setUserName('')
    }
    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return <h1>Loading Data ! Please wait</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          value={userName}
          placeholder="Search Github Username..."
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData}/> : null}
    </div>
  );
}
