import { useContext, useState } from "react"
import { NewUser } from "../types"
import { UserContext } from "../context"

export const AddUser = () => {
    const [user, setUser] = useState<NewUser>({name:'', age:0, salary:0})
    const [error, setError] = useState<string | null>(null)
    const context = useContext(UserContext)
    if(!context){
        throw new Error('Something wrong with your context brah!')
    }

    const {addUser} = context
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { name, age, salary } = user;

        if(!name.trim() || age <= 0 || salary <= 0){
            setError('Please fill all the fields')
            return
        }
        setError(null)
        addUser(user)
        setUser({name:'', age:0, salary:0})


    }
    
    return <>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input type="text"
                   placeholder="write a new name" 
                   value={user.name}
                   onChange={(e) => setUser({...user, name:e.target.value})}
            

            />


            <input type="number"
                   placeholder="write the new user's age" 
                   value={user.age}
                   onChange={(e) => setUser({...user, age: +e.target.value})}
            

            />

            <input type="number"
                   placeholder="write the new user's salary" 
                   value={user.salary}
                   onChange={(e) => setUser({...user, salary: +e.target.value})}
            

            />
            <button type="submit">save</button>
        </form>
        
    </>
}


/*
<form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <select name="" id=""></select>
            <button>save</button>
        </form>
*/