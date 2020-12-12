
import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Card } from 'react-bootstrap'
import '../Styles/SignInStyles/signIn.css'
import img3 from '../assets/img3.jpg'
import Nav from '../Components/Nav'

function SignIn() {

    const [signIn, setSignIn] = useState(true)

    return (


        <div className='signInComp'>

            <Nav />

            {

               signIn &&

               ( <div className='signIn'>

                
                {/* <img className='signInImg' src={img3} alt='signInImg' /> */}

                <div className='imgDiv'>
                    <div className='divTxt'>
                        <h3>Welcome Back, <span>Xplorer</span></h3>
                        <p><i>its been empty without you...</i></p>
                    </div>
                </div>

                <Card className='signInCard'>
                    
                    <Card.Body>
                        <Card.Header className='cardHeader'><h3>Sign In</h3></Card.Header>
                        <form>
                            <TextField className='textField' placeholder='Enter your email' type='email'/>
                            <TextField className='textField' placeholder='Enter your password' type='password' /> 
                            <Button className='signinButton' type='submit'>SignIn</Button>
                        </form>
                            <Button className='signupButton' onClick={() => setSignIn(false)} >Sign Up</Button>
                    </Card.Body>
                    
                </Card>               
                </div>)
            }

            {

            !signIn &&
            
            ( <div className='signUp'>

            
            {/* <img className='signInImg' src={img3} alt='signInImg' /> */}

            <div className='imgDiv'>
                <div className='divTxt'>
                    <h3>Welcome To The <span>Community</span></h3>
                    <p><i>you are just the xplorer we are looking for...</i></p>
                </div>
            </div>

            <Card className='signUpCard'>
                
                <Card.Body>
                    <Card.Header className='cardHeader'><h3>Sign Up</h3></Card.Header>
                    <form>
                        <TextField className='textField' placeholder='Enter your username' />
                        <TextField className='textField' placeholder='Enter your email' type='email'/>
                        <TextField className='textField' placeholder='Enter your password' type='password' /> 
                        <Button className='signupButton' type='submit' >SignUp</Button>
                    </form>  
                    <Button className='signinButton' onClick={() => setSignIn(true)} >Sign In</Button>  
                </Card.Body>
                
            </Card>               
            </div>)
            }
         
        </div>

    )
}

export default SignIn
