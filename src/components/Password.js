import React from 'react'
import { Switch, Route, NavLink, useHistory} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const Notfound = () => <h1>Notfound 404</h1> 

const Pass = () => {

    const [Value, setValue] = React.useState('')
    const [index, setIndex] = React.useState(0)
    const [dotjun, setDotjun] = React.useState(['*','*','*','*','*','*'])
    const history = useHistory();

    const handleAdd = (n) => {
        
        let num = dotjun
        if( index < 6){
            num[index] = n
            setDotjun(num)
            setIndex(index+1)
        } 
    }

    const handleDelete = () => {
        if(index >= 0){
            let num = dotjun;
            let a = index-1;
            num[a] = '*'
            setDotjun(num)
            if(index != 0){
                setIndex(a)
            }
            
        }
    }

    const handleOkPass = () => {
        var password = ''
        for(let i=0; i < dotjun.length; i++){
            password += `${dotjun[i]}`
        }
        if(password == '777777'){
            history.push('/');
        }else{
            let s = ['*','*','*','*','*','*'];
            setDotjun(s)
            setIndex(0)
        }
      
    } 

    return (
        <div className='myApp'>
            <div className='box'>
                <div className='display'>
                    <h1 style={{ textAlign: 'center' }}>{ dotjun }</h1>
                </div>
                <div className='box_btn'>
                    <div className='btn'>
                        <button onClick={() => handleAdd(7) } >7</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(8) }>8</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(9) }>9</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(4) }>4</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(5) }>5</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(6) }>6</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(1) }>1</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(2) }>2</button>
                    </div>
                    <div className='btn'>
                        <button onClick={() => handleAdd(3) }>3</button>
                    </div>
                    <div className='btn'>

                    </div>
                    <div className='btn'>
                        <button>0</button>
                    </div>
                    <div className='btn'>
                        <button onClick={ handleDelete}>x</button>
                    </div>
                </div>
                <button onClick={handleOkPass}>ok </button>
            </div>
        </div>
    )
}

const Password = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/password' component={Pass} />
                <Route  component={Notfound} />
            </Switch>
        </div>
    )
}

export default Password