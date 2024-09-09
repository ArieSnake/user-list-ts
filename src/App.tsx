import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import type { IUser, NewUser } from './types'
import { UserContext } from './context'

function App() {
  const[users, setUsers] = useState<IUser[]>([
    {id:101, name:'Alita', age:19, salary: 360_000},
    {id:102, name:'Ilona', age:21, salary: 280_000},
    {id:103, name:'Stella', age:38, salary: 120_000},
    {id:104, name:'Eva', age:18, salary: 510_000},
    {id:105, name:'Jenny', age:42, salary: 580_000}
  ])

  const removeUser = (id:number):void => {
    setUsers(users.filter(user => user.id !== id))
  }

  const addUser = (newUser: NewUser): void => {
    const newUserWithId = { ...newUser, id: Date.now() }
    setUsers([...users, newUserWithId])
  }
  
  return  <>
    <UserContext.Provider value={{users, removeUser, addUser}}>
    <AddUser/>
    <UserList/>
    </UserContext.Provider>
    </>
  
}

export default App
