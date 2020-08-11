import React from 'react'
import useAxios from 'axios-hooks'
import styled from 'styled-components'

const URL = 'http://localhost:3001'
const RETRY_COUNT_KEY = 'RETRY_COUNT'

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ddd;
`

const ContentWrapper = styled.div`
  background: #fff;
  width: 400px;
  height: 400px;
  border-radius: 16px;
  text-align: center;
  font-size: 18px;
`
const getRetryCount = () => {
  const count = localStorage.getItem(RETRY_COUNT_KEY)
  console.log('Getting Retry Count', count)
  return count
}

const setRetryCount = (count) => {
  console.log('Setting Retry Count', count)
  localStorage.setItem(RETRY_COUNT_KEY, count)
}


const Content = () => {

  const [ { data, loading, error } ] = useAxios({
    url: `${URL}/user`,
    method: 'POST',
    data: {
      name: 'Test User',
      username: 'test-user'
    }
  })
 
  if (loading) return <p>Loading...</p>
  if (error) {
    return <h2>Page Failed! Reloading...</h2>
  }

  return <div>
    <h1>Created a User!</h1>
    <div>
      {data.user.name} ({data.user.username})
    </div>
    <div>
      ID: {data.user.id}
    </div>
  </div>
}

const App = () => {
  return (
    <AppWrapper>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </AppWrapper>
  )
}

export default App
