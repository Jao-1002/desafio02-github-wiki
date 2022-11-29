import gitLogo from '../assets/github.png'

import { Container } from './style'

import Input from '../components/imput'

import ItemRepo from '../components/itemRepo'

import Button from '../components/button'

import { api } from '../services/api'


import { useState } from 'react'




function App() {

  const [currentRepo, setCurrentRepo] = useState('')

  const [ repos, setRepos ] = useState ( [] )

  const handleSearchRepo = async () => {

    const { data } = await api.get( `repos/${ currentRepo }` )

    if( data.id ) {
      setRepos( prev => [ ...prev, data ] )
    }

  }
  
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value= { currentRepo } onChange={ (e) => setCurrentRepo(e.target.value) }/>
      <Button onClick={ handleSearchRepo }/>
      { repos.map( repo => <ItemRepo repo={ repo } /> ) }
    </Container>
  );
}

export default App;
