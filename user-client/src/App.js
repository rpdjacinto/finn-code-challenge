import React, { useState, useEffect } from 'react'
import useAxios from 'axios-hooks'
import axios from 'axios'
import styled from 'styled-components'
import { randomName }  from './random-name'

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
  const newName = randomName()
  const newUserName = newName.replace(' ', '-').toLowerCase()
  const [data, setData] = useState(null);
  useEffect(async () => {
    const result = await axios.post(
      `${URL}/user`,
      {
        name: newName,
        username: newUserName
      }
    );

    setData(result.data);
  }, [])

  if (!data) {
    return <h2>Page Failed! Reloading...</h2>
  }

  const component = <div>
    <h1>Created a User!</h1>
    <div>
      {data.user.name} ({data.user.username})
    </div>
    <div>
      ID: {data.user.id}
    </div>
  </div>
  return component
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
