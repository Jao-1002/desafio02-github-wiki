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

    const { data } = await api.get( `repos/Jao-1002/${ currentRepo }` )

    if( data.id ) {
      
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }else{
        alert("Este repositorio ja existe")
      }
    }

  }
  
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value= { currentRepo } onChange={ (e) => setCurrentRepo(e.target.value) } placeholder="Escolha um dos repositorios de Jao-1002"/>
      <Button onClick={ handleSearchRepo }/>
      { repos.map( repo => <ItemRepo repo={ repo } /> ) }
    </Container>
  );
}

export default App;
